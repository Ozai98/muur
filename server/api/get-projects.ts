import fs from 'fs';
import path from 'path';
import { Project } from '~/types';

export default defineEventHandler((event) => {
  // Obtiene los parámetros de consulta (query) de la URL
  const query = getQuery(event);
  const basePath =
    (query.basePath as string) || path.resolve('public/projects'); // Usa `basePath` desde la URL o la ruta predeterminada

  const projects: Project[] = [];

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
        ) as Omit<Project, 'imageReel'>;

        // Obtener todas las imágenes en la carpeta del proyecto
        const imageReel = fs
          .readdirSync(projectPath)
          .filter((file) => /\.(jpg|jpeg|png|gif|webp)$/.test(file))
          .map((file) => `/projects/${folder}/${file}`); // Sirviendo desde la carpeta static

        // Crear el proyecto con la propiedad imageReel
        const project: Project = {
          ...projectDescription,
          imageReel,
        };

        projects.push(project); // Añadir el proyecto al array
      }
    });
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: `Error leyendo la carpeta en ${basePath}: ${error.message}`,
    });
  }

  return projects; // Retornar el array de proyectos
});
