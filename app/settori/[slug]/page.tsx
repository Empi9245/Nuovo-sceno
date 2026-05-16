import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectorDetail } from "@/components/sector-detail";
import { sectors } from "@/data/site";

type SectorPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return sectors.map((sector) => ({
    slug: sector.slug,
  }));
}

export async function generateMetadata({ params }: SectorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const sector = sectors.find((item) => item.slug === slug);

  if (!sector) {
    return {
      title: "Settore",
    };
  }

  return {
    title: sector.title,
    description: sector.summary,
  };
}

export default async function SectorPage({ params }: SectorPageProps) {
  const { slug } = await params;
  const sector = sectors.find((item) => item.slug === slug);

  if (!sector) {
    notFound();
  }

  return <SectorDetail sector={sector} />;
}
