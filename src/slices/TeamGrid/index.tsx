import { FC, Fragment, JSX } from "react";
import { Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";

import { Bounded } from "@/app/components/Bounded";
import { Heading } from "@/app/components/Heading";
import { createClient } from "@/prismicio";
import Skater from "./Skater";

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
      <Heading as="h2" size="lg" className="mb-8 text-center text-white">
        <PrismicText field={slice.primary.heading} />
      </Heading>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {skaters.map((skater, idx) => (
          <Fragment key={idx}>
            {skater.data.first_name && <Skater skater={skater} index={idx} />}
          </Fragment>
        ))}
      </div>
    </Bounded>
  );
};

export default TeamGrid;
