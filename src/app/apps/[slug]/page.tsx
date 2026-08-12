import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import AppProjectPage from '@/components/AppDetail/AppProjectPage';
import {
  appProjectEntries,
  getAppProjectBySlug,
  getDeliveryDays
} from '@/lib/projectRoutes';

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return appProjectEntries.map((entry) => ({ slug: entry.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const entry = getAppProjectBySlug(params.slug);
  if (!entry) {
    return { title: 'App Not Found' };
  }

  const { project } = entry;
  const deliveryDays = getDeliveryDays(entry.slug);

  return {
    title: `${project.name.trim()} — Live Client App | ipaship`,
    description: `${project.des} Industry: ${project.industry ?? 'Mobile'}. Delivered in ${deliveryDays} days.`,
    openGraph: {
      title: project.name.trim(),
      description: project.des,
      type: 'website',
      images: project.image ? [{ url: project.image }] : undefined
    }
  };
}

export default function AppDetailRoute({ params }: PageProps) {
  const entry = getAppProjectBySlug(params.slug);
  if (!entry) notFound();

  return <AppProjectPage entry={entry} />;
}
