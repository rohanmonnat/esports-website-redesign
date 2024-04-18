import Link from 'next/link';

import { MaxWidthContainer } from '@/components/ui/max-width-container';
import { FlexContainer } from '@/components/ui/flex-container';
import { Container } from '@/components/ui/container';
import { Typography } from '@/components/ui/typography';
import { Gradient } from '@/components/ui/gradient';
import { Socials } from '@/components/layout/socials';
import { FooterLinks } from '@/lib/constants';

export const Footer = () => {
  return (
    <MaxWidthContainer className="relative top-0 h-fit">
      <FlexContainer className="items-center justify-center p-4 md:py-8 border border-neutral-700/50">
        <Socials />
      </FlexContainer>
      <Container className="relative py-10 md:py-16 overflow-hidden">
        <Gradient className="bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-t rounded-full from-emerald-400/20 h-72 to-emerald-500/20 w-72 blur-3xl" />
        <Container className="z-10 flex flex-col">
          <Container className="flex flex-col mb-8 items-center justify-center gap-x-6 gap-y-2 sm:flex-row">
            {FooterLinks.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="uppercase font-semibold text-xs sm:text-sm text-neutral-300"
              >
                {page.title}
              </Link>
            ))}
          </Container>
          <Typography className="text-xs text-neutral-500 text-center">
            © 2024 XXXXXX, INC.
            <br /> XXXXX IS A REGISTERED TRADEMARK OR SERVICE MARK OF XXXXXX,
            INC
            <br />
            BUILT BY ROHAN
          </Typography>
        </Container>
      </Container>
    </MaxWidthContainer>
  );
};
