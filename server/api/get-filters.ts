import { Filter, Project } from '~~/types';

export default defineEventHandler(async () => {
  // Obtiene parámetros de consulta (query) de la URL
  const basePath = 'assets:server:projects'; // Define `basePath` predeterminado para `useStorage`

  const filtersMap = new Map<string, Filter>(); // Mapa para almacenar filtros únicos por `key`
  const storage = useStorage(basePath); // Inicializa el almacenamiento
  try {
    // Obtiene la lista de carpetas (proyectos) en el almacenamiento
    const projectDescriptionFilePaths = (await storage.getKeys('')).filter(
      (filepath) => filepath.includes('project_description.json')
    );
    for (const project of projectDescriptionFilePaths) {
      const projectDescription: Project | null = await storage.getItem(project);
      if (projectDescription) {
        // Si el archivo existe, procesa los filtros
        projectDescription.filters.forEach((filter: Filter) => {
          filtersMap.set(filter.key, filter); // Añade o reemplaza el filtro con la misma `key`
        });
      }
    }
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      message: `Error al acceder al almacenamiento en ${basePath}: ${error.message}`,
    });
  }

  return Array.from(filtersMap.values()); // Retorna los filtros únicos como array
});
