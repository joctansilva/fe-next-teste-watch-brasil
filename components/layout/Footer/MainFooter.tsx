import { Text } from "@/components/ui";
import { Footer } from "./Footer";
import { FooterAside } from "./FooterAside";
import { FooterContainer } from "./FooterContainer";
import { FooterGrid } from "./FooterGrid";
import { FooterLegal } from "./FooterLegal";
import { FooterLinks } from "./FooterLinks";
import { FooterSocial } from "./FooterSocial";
import { FooterStores } from "./FooterStores";
import Image from "next/image";

export function MainFooter() {
  return (
    <Footer>
      <FooterContainer>
        <FooterGrid>
          <div>
            <FooterLegal>
              heck the Parental Guidance Rating © 2024 WarnerMedia Direct Latin
              America, LLC. All rights reserved. Max is used under license.©
              2024 Globo Comunicação e Participações S.A. All rights reserved.
              Big Brother Brasil is used under license. The trademarks GLOBO®,
              TV GLOBO®, GLOBO NEWS®, CANAL BRASIL®, SPORTV®, MULTISHOW®, OFF®,
              GNT®, BIS®, GLOOBINHO®, GLOOB®, VIVA®, MODO VIAGEM®, PREMIERE®,
              and COMBATE® are properties of Globo Comunicação e Participações
              S.A.© 2024 NBCUniversal. All rights reserved. The Universal,
              Studio Universal, and USA Network trademarks are properties of
              NBCUniversal.© 2024 Telecine Programação De Filmes Ltda. All
              rights reserved. The registered trademarks TELECINE® and MEGAPIX®
              are properties of Telecine Programação De Filmes Ltda.Paramount+ ©
              2024 Paramount. All rights reserved.{" "}
            </FooterLegal>

            <FooterSocial>oi</FooterSocial>

            <FooterLinks>
              <a>About Labs Festival</a>
              <a>Terms of use and privacy</a>
              <a>Send feedback</a>
            </FooterLinks>
          </div>

          <FooterAside>
            <Image src="/logo.svg" width={160} height={10} alt="img" />

            <Text variant="paragraph" className="text-xs text-neutral-500">
              © 2024 Watch Brasil. All rights reserved{" "}
            </Text>
            <FooterStores>
              <Image src="/gplay.png" width={135} height={10} alt="img" />
              <Image src="/applestore.png" width={135} height={10} alt="img" />
            </FooterStores>
          </FooterAside>
        </FooterGrid>
      </FooterContainer>
    </Footer>
  );
}
