import { FC } from "react";
import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

import { Bounded } from "@/app/components/Bounded";
import { Heading } from "@/app/components/Heading";

export type ProductGridProps = SliceComponentProps<Content.ProductGridSlice>;

const ProductGrid: FC<ProductGridProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-texture bg-brand-gray "
    >
      <Heading className="text-center ~mb-4/6" as="h2">
        <PrismicText field={slice.primary.heading} />
      </Heading>
      <div className="text-center ~mb-6/10">
        <PrismicText field={slice.primary.body} />
      </div>

      {slice.primary.products.map((item, idx) => (
        <PrismicNextLink key={idx} field={item.skateboard}>
          Link
        </PrismicNextLink>
      ))}
    </Bounded>
  );
};

export default ProductGrid;
