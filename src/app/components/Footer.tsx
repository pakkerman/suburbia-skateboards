import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { asImageSrc } from "@prismicio/client";

import { Logo } from "@/app/components/Logo";
import { Bounded } from "./Bounded";
import { PrismicLink } from "@prismicio/react";
import { FooterPhysics } from "./FooterPhysics";

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  const boardTextureURLs = settings.data.footer_skateboards
    .map((item) => asImageSrc(item.skateboard, { h: 600 }))
    .filter((url): url is string => Boolean(url));

  return (
    <footer className="bg-texture bg-zinc-900 text-white">
      <div className="relative h-[75vh] ~p-10/16 md:aspect-auto">
        {/* Images */}
        <PrismicNextImage
          field={settings.data.footer_image}
          alt=""
          fill
          className="object-cover "
          width={1200}
        />
        {/* Physics sandbox for Board */}
        <FooterPhysics
          boardTextureURLs={boardTextureURLs}
          className="absolute inset-0 overflow-hidden"
        />
        {/* Logo */}
        <Logo className="pointer-events-none relative h-20 mix-blend-exclusion md:h-28" />
      </div>
      <Bounded className="">
        <nav>
          <ul className="flex flex-wrap justify-center gap-8 ~text-lg/xl">
            {settings.data.navigation.map((item) => (
              <li key={item.link.text} className="hover:underline">
                <PrismicLink field={item.link} />
              </li>
            ))}
          </ul>
        </nav>
        {/* Footer nav */}
      </Bounded>
    </footer>
  );
}
