"use client";

import * as React from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import brand from "@/public/assets/brand.jpg"
import icon4 from "@/public/Arrow 1.svg";

export default function Component() {
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [autoplay, setAutoplay] = React.useState(true);

  const slides = [brand, brand, brand, brand, brand, brand];
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (api && autoplay) {
      const autoplayInterval = setInterval(() => {
        api.scrollNext();
      }, 2000);

      return () => clearInterval(autoplayInterval);
    }
  }, [api, autoplay]);

  const handleMouseEnter = () => {
    setAutoplay(false);
  };

  const handleMouseLeave = () => {
    setAutoplay(true);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center mb-2 md:mb-10">
      <div className="w-full px-4 py-12 space-y-8">
        <section className="mt-20">
          <div className="flex flex-row justify-between items-start mt-5 md:mt-28 mb-5 md:mb-12">
            <div className="mb-6 lg:mb-0 ">
              <h1 className="text-5xl sm:text-7xl md:text-[80px] font-bold leading-none">
                PICTURED
                <br />
                <span>COLLECTION</span>
              </h1>
            </div>
            <div className="hidden md:block max-w-xs mt-9">
              <p className="text-xs leading-tight mb-4">
                A curated selection of signature pieces, tailored for elegance
                and sophistication. Discover designs that define individuality.
                Step into a world where fashion meets culture, where every piece
                is a nod to timeless beauty and personal expression.
              </p>
              <Image src={icon4} alt="arrow" />
            </div>
          </div>
        </section>
      </div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="h-full w-[90%]"
      >
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {slides.map((slide, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4  basis-full md:basis-2/3 lg:basis-1/2 rounded-2xl"
              >
                <div
                  className={cn(
                    "relative aspect-[3/4] border rounded-2xl overflow-hidden transition-all duration-300",
                    current === index ? "scale-110 z-10 rounded-2xl" : "scale-90 opacity-70 rounded-2xl"
                  )}
                >
                  <Image
                    src={slide}
                    alt={`Collection image ${index + 1}`}
                    fill
                    className="object-cover rounded-2xl"
                    priority={index === 0}
                  />
                  {current === index && (
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full h-12 w-12 hover:bg-black hover:text-white transition-colors duration-300"
                      >
                        <ShoppingCart className="h-6 w-6" />
                      </Button>
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 h-12 w-12" />
          <CarouselNext className="hidden md:flex -right-12 h-12 w-12" />
        </Carousel>
      </div>
      <div className="mt-9 flex justify-center items-center gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              current === i ? "w-6 bg-primary" : "w-2 bg-slate-200"
            )}
          />
        ))}
      </div>
    </div>
  );
}
