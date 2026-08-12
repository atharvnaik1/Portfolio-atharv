import {
  clientProjects,
  ProjectDataType,
  ProjectsObjectType
} from '@/assests/data/projectsData';

export type AppProjectEntry = {
  key: string;
  slug: string;
  project: ProjectDataType;
};

/** Convert object keys like `JapaRuchi` into URL slugs like `japa-ruchi`. */
export function projectKeyToSlug(key: string): string {
  return key
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/_/g, '-')
    .toLowerCase();
}

/** Stable delivery window between 25 and 42 days (inclusive) per app slug. */
export function getDeliveryDays(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash * 31 + slug.charCodeAt(i)) | 0;
  }
  return 25 + (Math.abs(hash) % 18);
}

function entriesFrom(
  projects: ProjectsObjectType
): AppProjectEntry[] {
  return Object.entries(projects).map(([key, project]) => ({
    key,
    slug: projectKeyToSlug(key),
    project
  }));
}

export const appProjectEntries = entriesFrom(clientProjects);

export function getAppProjectBySlug(
  slug: string
): AppProjectEntry | undefined {
  return appProjectEntries.find((entry) => entry.slug === slug);
}

export function getAppScreens(project: ProjectDataType): string[] {
  const screens = project.images?.filter(Boolean) ?? [];
  if (screens.length) return screens;
  return project.image ? [project.image] : [];
}
