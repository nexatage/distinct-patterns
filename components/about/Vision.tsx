import Image from "next/image";

interface VisionSectionProps {
  title: string;
  leftImage: string;
  rightImage: string;
  leftImageAlt?: string;
  rightImageAlt?: string;
  text1?: string;
  text2?: string;
}

export default function VisionSection({
  title,
  leftImage,
  rightImage,
  leftImageAlt = "Vision left image",
  rightImageAlt = "Vision right image",
  text1 = "Perfection Is Achieved, Not When There Is Nothing More To Add,",
  text2 = "But When There Is Nothing Left To Take Away.",
}: VisionSectionProps) {
  const [firstWord, ...restWords] = title.split(" ");

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-4xl m-10 md:text-[90px] font-bold text-center mb-8">
        <span className="text-foreground">{firstWord}</span>{" "}
        <span className="text-muted-foreground">{restWords.join(" ")}</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="relative aspect-[3/4] w-full h-[600px]">
          <img
            src={leftImage}
            alt={leftImageAlt}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative aspect-[3/4] w-full h-[600px]">
          <img
            src={rightImage}
            alt={rightImageAlt}
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      <p className="text-xl md:text-[40px] text-center font-semibold leading-normal mx-auto">
        <span className="font-medium">{text1}</span>{" "}
        <span className="text-muted-foreground">{text2}</span>
      </p>
    </section>
  );
}
