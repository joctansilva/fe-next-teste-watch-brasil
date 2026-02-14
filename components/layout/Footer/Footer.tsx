import { Icon, Text } from "@/components/ui";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-secondary text-neutral-300">
      <div className="mx-auto max-w-480 px-14 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[3fr_1fr]">
          {/* Left Column - Legal, Social, Links */}
          <div>
            {/* Legal Text */}
            <Text variant="small" className="leading-relaxed text-neutral-400">
              heck the Parental Guidance Rating © 2024 WarnerMedia Direct Latin
              America, LLC. All rights reserved. Max is used under license.
              <br />© 2024 Globo Comunicação e Participações S.A. All rights
              reserved. Big Brother Brasil is used under license. The trademarks
              GLOBO®, TV GLOBO®, GLOBO NEWS®, CANAL BRASIL®, SPORTV®,
              MULTISHOW®, OFF®, GNT®, BIS®, GLOOBINHO®, GLOOB®, VIVA®, MODO
              VIAGEM®, PREMIERE®, and COMBATE® are properties of Globo
              Comunicação e Participações S.A.
              <br />© 2024 NBCUniversal. All rights reserved. The Universal,
              Studio Universal, and USA Network trademarks are properties of
              NBCUniversal.
              <br />© 2024 Telecine Programação De Filmes Ltda. All rights
              reserved. The registered trademarks TELECINE® and MEGAPIX® are
              properties of Telecine Programação De Filmes Ltda.Paramount+ ©
              2024 Paramount. All rights reserved.{" "}
            </Text>

            {/* Social Icons */}
            <div className="mt-6 flex items-center h-10 gap-8 text-neutral-400">
              <Icon name="youtube" size={24} />
              <Icon name="linkedin" size={24} />
              <Icon name="instagram" size={24} />
              <Icon name="facebook" size={12} />
              <Icon name="tiktok" size={20} />
              <Icon name="twitter" size={24} />
            </div>

            {/* Footer Links */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <a className="cursor-pointer">About Labs Festival</a>
              <a className="cursor-pointer">Terms of use and privacy</a>
              <a className="cursor-pointer">Send feedback</a>
            </div>
          </div>

          {/* Right Column - Logo, Copyright, Stores */}
          <div className="flex flex-col items-start gap-6 lg:items-end">
            <Image src="/logo.svg" width={160} height={10} alt="img" />

            <Text variant="paragraph" className="text-xs text-neutral-500">
              © 2024 Watch Brasil. All rights reserved{" "}
            </Text>

            {/* App Stores */}
            <div className="flex gap-4">
              <Image src="/gplay.png" width={135} height={10} alt="img" />
              <Image src="/applestore.png" width={135} height={10} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
