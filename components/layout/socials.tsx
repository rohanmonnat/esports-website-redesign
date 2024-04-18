import Link from 'next/link';
import { Instagram, Youtube, Twitter, Twitch } from 'lucide-react';
import { FlexContainer } from '@/components/ui/flex-container';

export const Socials = () => {
  return (
    <FlexContainer className="h-fit w-fit gap-x-8">
      <Link href="/">
        <Instagram size={20} />
      </Link>
      <Link href="/">
        <Youtube size={20} />
      </Link>
      <Link href="/">
        <Twitter size={20} />
      </Link>
      <Link href="/">
        <Twitch size={20} />
      </Link>
    </FlexContainer>
  );
};
