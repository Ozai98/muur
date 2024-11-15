import { Project } from '~/types';

export default defineEventHandler(async () => {
  const basePath = 'assets:server:projects';
  const storage = useStorage(basePath);
  let projects: Project[] = [];
  const projectsMap = new Map<string, Project>();
  const placeholderProject = () => {
    return {
      key: 'placeholder',
      name: 'Placeholder Project',
      filters: [],
      year: 2001,
      client: 'Tu mami',
      description: 'This is a placeholder project.',
      imageReel: [],
    };
  };

  try {
    const filePaths = await storage.getKeys('');
    for (const file of filePaths) {
      const potentialKey = file.split(':')[0];
      if (!projectsMap.has(potentialKey)) {
        projectsMap.set(potentialKey, placeholderProject());
      }
      const tempProject = projectsMap.get(potentialKey);
      if (tempProject) {
        if (file.includes('project_description.json')) {
          const description = (await storage.getItem(file)) as Project;
          description.imageReel = tempProject.imageReel;
          projectsMap.set(potentialKey, description);
        } else {
          const imageURL = `projects/${file.replace(':', '/')}`;
          tempProject?.imageReel?.push(imageURL);
          projectsMap.set(potentialKey, tempProject);
        }
      }
    }

    projects = Array.from(projectsMap.values());
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      message: `Error leyendo la carpeta en ${basePath}: ${error.message}`,
    });
  }

  return projects; // Retornar el array de proyectos
});
