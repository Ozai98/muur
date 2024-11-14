import fs from 'fs';
import path from 'path';
import { Project } from '~/types';
export default defineEventHandler(() => {
  const basePath = path.resolve('static/projects');
  const projects: Project[] = [];

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

  return projects; // Retornar el array de proyectos
});
