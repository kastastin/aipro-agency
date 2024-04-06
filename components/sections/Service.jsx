import Image from "next/image";

import RevealChars from "@/components/animations/RevealChars";

export default function ServiceSection({ service }) {
  return (
    // <section className="overflow-hidden py-[85px] xl:py-[150px]">
    <section className="overflow-hidden pb-[50px] pt-[85px] xl:pb-[100px] xl:pt-[150px]">
      <div className="container mx-auto">
        <h1 className="h2 mb-[20px]">{service.name}</h1>

        {/* Grid */}
        <div className="grid gap-x-[100px] xl:grid-cols-2">
          {/* Left column */}
          <div>
            <p className="p">
              <RevealChars sentence={service.description} />
            </p>

            {/* Types */}
            <ul className="my-[50px] space-y-[20px] xl:mb-0 xl:mt-[100px]">
              {service.types.map((type, index) => (
                <li key={index}>
                  <span className="text-xl lg:text-2xl 2xl:text-4xl">
                    {type}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column */}
          <div>
            {/* Section image */}
            <div className="relative mx-auto mb-[40px] xl:mb-[50px]">
              <Image
                src={service.imageSrc}
                alt={service.name}
                width={345}
                height={195}
                layout="responsive"
                className="object-content"
              />

              {/* Stone top */}
              <div className="absolute -right-[1px] -top-[30px] z-10 h-[57px] w-[38px] rotate-[20deg] xl:-right-[35px] xl:-top-[90px] xl:h-[180px] xl:w-[120px] xl:-rotate-[30deg]">
                <Image src="/services/stone-top.png" alt="Stone" fill />
              </div>

              {/* Stone bottom */}
              <div className="absolute -bottom-[25px] left-[5px] z-10 h-[44px] w-[32px] xl:-bottom-[70px] xl:left-[-20px] xl:h-[157px] xl:w-[114px] xl:-rotate-[15deg]">
                <Image src="/services/stone-bottom.png" alt="Stone" fill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
