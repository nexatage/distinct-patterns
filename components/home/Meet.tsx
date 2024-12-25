import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import I1 from '@/public/images/Rectangle 13.svg'
import I2 from '@/public/images/Rectangle 14.svg'
import I3 from '@/public/images/Rectangle 15.svg'
import I4 from '@/public/images/Rectangle 16.svg'
import I5 from '@/public/images/Rectangle 17.svg'
export default function InstagramSection() {
  return (
    <section className="container px-4 py-12 mx-auto">
      <div className="flex flex-col [@media(min-width:490px)]:flex-row justify-between items-start mt-5 md:mt-28 mb-5 md:mb-12">
            <div className="mb-6 lg:mb-0 ">
              <h1 className="text-5xl sm:text-7xl md:text-[80px] font-bold leading-none">
                MEET US
                <br/>
                <span>ON INSTAGRAM</span>
              </h1>
            </div>
            <div className="max-w-xs mt-9">
              <p className=" hidden md:block text-sm leading-tight mb-4">
              A simple clean, super fast highly flexible, light modern theme that can enhance the look and functionality. Perfect blend of fashion and comfortable Cloths.
              </p>
              <Button
            asChild
            className="rounded-full px-6"
            variant="default"
          >
            <Link href="https://instagram.com">
              FOLLOW US
              <span className="ml-2">→</span>
            </Link>
          </Button>
            </div>

          

      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-2">
        <div className="md:col-span-2 lg:col-span-2">
          <Image
            src={I1}
            alt="Featured fashion image"
            width={600}
            height={800}
            className="w-full h-full object-cover aspect-[3/4]"
          />
        </div>
        <div className="md:col-span-1 lg:col-span-3 grid grid-cols-2 gap-4">
          {[I2,I3,I4,I5].map((image, i) => (
            <Image
              key={i}
              src={image}
              alt={`Fashion image ${i + 1}`}
              width={300}
              height={300}
              className="w-full aspect-square object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

