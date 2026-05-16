import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioDetail } from "@/components/portfolio-detail";
import { portfolioProjects } from "@/data/site";

type PortfolioProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PortfolioProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Portfolio",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function PortfolioProjectPage({ params }: PortfolioProjectPageProps) {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = portfolioProjects.filter((item) => item.slug !== project.slug).slice(0, 3);

  return <PortfolioDetail project={project} relatedProjects={relatedProjects} />;
}
