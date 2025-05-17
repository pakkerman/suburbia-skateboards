import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { createClient } from "@/prismicio";

type Props = { id: string };

export default async function SkateboardProduct({ id }: Props) {
  const client = createClient();
  const product = await client.getByID<Content.SkateboardDocument>(id);

  return (
    <div className="">
      <PrismicNextImage alt="" field={product.data.image} width={150} />
    </div>
  );
}
