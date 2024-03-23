"use client";

import { notFound } from "next/navigation";

import { services } from "@/app/service/data";
import ServiceSection from "@/components/sections/Service";
import DiscussionSection from "@/components/sections/Discussion";

export default function ServicePage({ params }) {
  const service = services.find(
    (service) => service.path === `/service/${params.slug}`,
  );

  if (!service) return notFound();

  return (
    <>
      <ServiceSection service={service} />
      <DiscussionSection />
    </>
  );
}
