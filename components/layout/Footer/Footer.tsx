import { Icon, Text } from "@/components/ui";
import Image from "next/image";
import { socialMedia } from "@/data/social-media";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-secondary text-neutral-300">
      <div className="mx-auto max-w-480 px-6 py-12 md:px-14">
        <div className="flex flex-col gap-6 md:grid md:gap-10 md:grid-cols-2 lg:grid-cols-[3fr_1fr]">
          {/* Coluna Esquerda - Legal, Social, Links */}
          <div className="contents md:block">
            {/* Texto Legal */}
            <Text
              variant="small"
              className="order-1 leading-relaxed text-neutral-400 md:order-0"
            >
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

            {/* Ícones Sociais */}
            <div className="order-4 mt-0 flex h-10 items-center justify-center gap-8 text-neutral-400 md:order-0 md:mt-6 md:justify-start">
              {socialMedia.map((social) =>
                social.url ? (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="transition-colors hover:text-primary"
                  >
                    <Icon name={social.icon} size={social.size} />
                  </a>
                ) : (
                  <div key={social.id} className="opacity-50">
                    <Icon name={social.icon} size={social.size} />
                  </div>
                ),
              )}
            </div>

            {/* Links do Rodapé */}
            <div className="order-6 mt-0 flex flex-wrap justify-center gap-6 text-sm md:order-0 md:mt-8 md:justify-start">
              <a className="cursor-pointer">About Labs Festival</a>
              <a className="cursor-pointer">Terms of use and privacy</a>
              <a className="cursor-pointer">Send feedback</a>
            </div>
          </div>

          {/* Coluna Direita - Logo, Copyright, Lojas */}
          <div className="contents md:flex md:flex-col md:items-start md:gap-6 lg:items-end">
            {/* Logo */}
            <div className="order-2 flex justify-center md:order-0 md:justify-start lg:justify-end">
              <Image src="/logo.svg" width={160} height={10} alt="img" />
            </div>

            {/* Copyright */}
            <Text
              variant="paragraph"
              className="order-3 text-center text-xs text-neutral-500 md:order-0 md:text-left lg:text-right"
            >
              © 2024 Watch Brasil. All rights reserved{" "}
            </Text>

            {/* Lojas de Aplicativos */}
            <div className="order-5 flex justify-center gap-4 md:order-0 md:justify-start lg:justify-end">
              <Image src="/gplay.png" width={135} height={10} alt="img" />
              <Image src="/applestore.png" width={135} height={10} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
