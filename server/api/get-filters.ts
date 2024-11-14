import fs from 'fs';
import path from 'path';
import { Filter } from '~~/types';

export default defineEventHandler(() => {
  const basePath = path.resolve('public/projects');
  const filtersMap = new Map<string, Filter>(); // Mapa para almacenar filtros únicos por `key`

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

  return Array.from(filtersMap.values()); // Retorna los filtros únicos como array
});
