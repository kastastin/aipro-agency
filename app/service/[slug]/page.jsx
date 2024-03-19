import { notFound } from "next/navigation";

import { services } from "@/app/service/data";

export default function ServicePage({ params }) {
  const service = services.find(
    (service) => service.path === `/service/${params.slug}`,
  );

  if (!service) return notFound();

  return (
    <div>
      <h1>ServicePage</h1>

      <p>{service.name}</p>
    </div>
  );
}
