import { FC, Fragment, JSX } from "react";
import { Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";

import { Bounded } from "@/app/components/Bounded";
import { Heading } from "@/app/components/Heading";
import { createClient } from "@/prismicio";
import Skater from "./Skater";
import SlideIn from "@/app/components/SlideIn";

export type TeamGridProps = SliceComponentProps<Content.TeamGridSlice>;

const TeamGrid: FC<TeamGridProps> = async ({ slice }): Promise<JSX.Element> => {
  const client = createClient();
  const skaters = await client.getAllByType("skater");
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-texture bg-brand-navy"
    >
      <SlideIn>
        <Heading as="h2" size="lg" className="mb-8 text-center text-white">
          <PrismicText field={slice.primary.heading} />
        </Heading>
      </SlideIn>
      <div className="grid grid-cols-1 ~gap-8/24 md:grid-cols-2 lg:grid-cols-4">
        {skaters.map((skater, idx) => (
          <Fragment key={idx}>
            <SlideIn>
              {skater.data.first_name && <Skater skater={skater} index={idx} />}
            </SlideIn>
          </Fragment>
        ))}
      </div>
    </Bounded>
  );
};

export default TeamGrid;
