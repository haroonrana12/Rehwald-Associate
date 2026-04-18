import * as React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import manuelImage from "@/assets/Manuel.jpg";
import oliverImage from "@/assets/Oliver.jpg";
import johannesImage from "@/assets/johannes.jpg";
import markusImage from "@/assets/markus.jpg";
import evaImage from "@/assets/eva.jpg";
import annikaImage from "@/assets/annika.jpg";
import reneImage from "@/assets/rene.jpg";

const team = [
  {
    name: "Manuel Rehwald",
    role: "Founder & Managing Director",
    email: "mr@rehwald-associates.com",
    phone: "+49 172 6240404",
    image: manuelImage,
  },
  {
    name: "Oliver Morath",
    role: "Senior Executive Partner / Member of the Board",
    email: "om@rehwald-associates.com",
    phone: "+49 173 6738 300",
    image: oliverImage,
  },
  {
    name: "Johannes Schickentanz",
    role: "Managing Partner",
    office: "Office Zurich",
    email: "js@rehwald-associates.ch",
    phone: "+41 79 843 2434",
    image: johannesImage,
  },
  {
    name: "Markus Leggwie",
    role: "Managing Director",
    office: "Office Luxemburg",
    email: "markus@rehwald-associates.lu",
    phone: "+352 661 163 333",
    image: markusImage,
  },
  {
    name: "Eva Rehwald",
    role: "Director",
    office: "Office Frankfurt",
    email: "eva@rehwald-associates.com",
    phone: "+49 160 1484082",
    image: evaImage,
  },
  {
    name: "Annika Kenel",
    role: "Director",
    office: "Office Frankfurt",
    email: "ak@rehwald-associates.com",
    phone: "+49 176 55751767",
    image: annikaImage,
  },
  {
    name: "Rene Gerdes",
    role: "Director",
    office: "Office Frankfurt",
    email: "rg@rehwald-associates.com",
    phone: "+49 175 2233660",
    image: reneImage,
  },
  {
    name: "Annika Kenel",
    role: "Director",
    office: "Office Frankfurt",
    email: "ak@rehwald-associates.com",
    phone: "+49 176 55751767",
    image: annikaImage,
  },
];

export default function Team() {
  const { ref, isVisible } = useScrollAnimation();
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const interval = window.setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 3800);

    return () => window.clearInterval(interval);
  }, [api]);

  return (
    <section id="team" className="py-24 sm:py-32" ref={ref}>
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-accent">Our Team</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">The people behind every placement</h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">
            Our leadership team brings deep financial services expertise across Europe.
          </p>
        </div>

        <div className={isVisible ? "animate-fade-up" : "opacity-0"}>
          <Carousel
            opts={{
              align: "start",
              dragFree: true,
              containScroll: "trimSnaps",
            }}
            setApi={setApi}
            className="mx-auto max-w-7xl px-10 sm:px-14"
          >
            <CarouselContent className="py-2">
              {team.map((member, index) => (
                <CarouselItem
                  key={`${member.name}-${index}`}
                  className="basis-[78%] sm:basis-[48%] lg:basis-[32%] xl:basis-[24%]"
                >
                  <div className="group text-center">
                    <div className="relative overflow-hidden rounded-lg mb-6 aspect-[3/4] border border-border/40 bg-secondary shadow-sm">
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                    </div>

                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-sm text-accent">{member.role}</p>
                    {member.office ? <p className="text-xs text-muted-foreground mt-2">{member.office}</p> : null}
                    <a
                      href={`mailto:${member.email}`}
                      className="block text-xs text-muted-foreground mt-2 hover:text-foreground transition-colors"
                    >
                      {member.email}
                    </a>
                    <a
                      href={`tel:${member.phone.replace(/\s+/g, "")}`}
                      className="block text-xs text-muted-foreground mt-1 hover:text-foreground transition-colors"
                    >
                      {member.phone}
                    </a>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-0 hidden h-10 w-10 border-border/60 bg-background/90 backdrop-blur sm:flex" />
            <CarouselNext className="right-0 hidden h-10 w-10 border-border/60 bg-background/90 backdrop-blur sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
