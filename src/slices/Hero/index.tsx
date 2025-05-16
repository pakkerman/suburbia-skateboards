import { FC } from "react";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { Content } from "@prismicio/client";

import { Bounded } from "@/app/components/Bounded";
import { Heading } from "@/app/components/Heading";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-texture relative h-dvh bg-brand-pink text-zinc-800"
    >
      <div className="absolute inset-0 mx-auto mt-24 grid max-w-6xl grid-rows-[1fr,auto] place-items-end px-6 ~py-10/16 ">
        <Heading size="lg" className="relative max-w-2xl place-self-start">
          <PrismicText field={slice.primary.heading} />
        </Heading>

        <div className="flex justify-between flex-col items-center w-full lg:flex-row ~gap-2/4">
          <div className="max-w-[45ch] font-semibold ~text-lg/xl">
            <PrismicRichText field={slice.primary.body} />
          </div>
          <PrismicNextLink field={slice.primary.button} />
        </div>
      </div>

      {/* skateboard absolutely positioned */}
    </Bounded>
  );
};

export default Hero;
