import { FC } from "react";
import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import { Bounded } from "@/app/components/Bounded";
import clsx from "clsx";
import { Heading } from "@/app/components/Heading";
import { ButtonLink } from "@/app/components/ButtonLink";

export type TextAndImageProps = SliceComponentProps<Content.TextAndImageSlice>;

const TextAndImage: FC<TextAndImageProps> = ({ slice }) => {
  const theme = slice.primary.theme;

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(
        theme === "Blue" && "bg-texture bg-brand-blue text-white",
        theme === "Orange" && "bg-texture bg-brand-ornage text-white",
        theme === "Navy" && "bg-texture bg-brand-navy text-white",
        theme === "Lime" && "bg-texture bg-brand-lime",
      )}
    >
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24">
        <div
          className={clsx(
            "flex flex-col items-center gap-8 text-center md:items-start md:text-left",
            slice.variation === "imageOnLeft" && "md:order-2",
          )}
        >
          <Heading size="lg" as="h2">
            <PrismicText field={slice.primary.heading} />
          </Heading>
          <div className="max-w-md text-lg leading-relaxed">
            <PrismicRichText field={slice.primary.body} />
          </div>
          <ButtonLink
            field={slice.primary.button}
            color={theme === "Lime" ? "orange" : "lime"}
          >
            {slice.primary.button.text}
          </ButtonLink>
        </div>
        {/* <PrismicNextImage field={slice.primary.background_image} /> */}

        <PrismicNextImage field={slice.primary.foreground_image} />
      </div>
    </Bounded>
  );
};

export default TextAndImage;
