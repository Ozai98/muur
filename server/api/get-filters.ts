import fs from 'fs';
import path from 'path';
import { Filter } from '~~/types';

export default defineEventHandler((event) => {
  // Obtiene parámetros de consulta (query) de la URL
  const query = getQuery(event);
  const basePath =
    (query.basePath as string) || path.resolve('public/projects'); // Usa `basePath` desde la URL o una ruta predeterminada

  const filtersMap = new Map<string, Filter>(); // Mapa para almacenar filtros únicos por `key`

  try {
    const projectFolders = fs.readdirSync(basePath);

    projectFolders.forEach((folder) => {
      const projectPath = path.join(basePath, folder);
      const descriptionFilePath = path.join(
        projectPath,
        'project_description.json'
      );

      if (fs.existsSync(descriptionFilePath)) {
        const projectDescription = JSON.parse(
          fs.readFileSync(descriptionFilePath, 'utf-8')
        );
        projectDescription.filters.forEach((filter: Filter) => {
          filtersMap.set(filter.key, filter); // Añade o reemplaza el filtro con la misma `key`
        });
      }
    });
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      message: `Error leyendo la carpeta en ${basePath}: ${error.message}`,
    });
  }

  return Array.from(filtersMap.values()); // Retorna los filtros únicos como array
});
