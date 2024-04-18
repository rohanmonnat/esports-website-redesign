import Link from 'next/link';
import Image from 'next/image';
import {
  Award,
  Download,
  Gamepad2,
  Globe,
  Handshake,
  Info,
  PlusIcon,
  UserPlus,
} from 'lucide-react';

import { MaxWidthContainer } from '@/components/ui/max-width-container';
import { Container } from '@/components/ui/container';
import { FlexContainer } from '@/components/ui/flex-container';
import { Button } from '@/components/ui/button';
import { Gradient } from '@/components/ui/gradient';
import { MediaContainer } from '@/components/media/media-container';
import { NewsContainer } from '@/components/news/news-container';
import { Typography } from '@/components/ui/typography';
import { TournamentSlideshowContainer } from '@/components/tournament/tournament-slideshow-container';
import { APIRoutes } from '@/lib/constants';
import type { Media } from '@/lib/types/media';
import type { News } from '@/lib/types/news';
import type { Tournament } from '@/lib/types/tournament';

const Home = async () => {
  const mediaResponse = await fetch(APIRoutes.media, {
    cache: 'no-store',
  });
  const newsResponse = await fetch(APIRoutes.news, {
    cache: 'no-store',
  });
  const tournamentsResponse = await fetch(APIRoutes.tournaments, {
    cache: 'no-store',
  });

  const media = (await mediaResponse.json()) satisfies Media[];
  const news = (await newsResponse.json()) satisfies News[];
  const tournaments = (await tournamentsResponse.json()) satisfies Tournament[];

  return (
    <MaxWidthContainer className="h-full">
      {/**Tournament slideshow */}
      <Container className="h-full">
        <Container className="bg-emerald-500 text-black p-8">
          <TournamentSlideshowContainer tournaments={tournaments} />
        </Container>
      </Container>

      {/**Download App section */}
      <Container className="h-full bg-neutral-950 py-12 lg:px-10 px-8 space-y-8">
        <Typography className="mx-auto text-4xl md:text-6xl uppercase font-bold text-white text-center">
          play games and
          <br />
          <span className="text-emerald-400">win rewards</span>
        </Typography>

        <Container className="relative mx-auto max-w-[1100px] w-full h-full bg-neutral-950 grid grid-cols-1 grid-rows-2 md:grid-cols-[repeat(2,minmax(120px,1fr))] md:grid-rows-1 gap-8">
          {/**Floating joystick Image */}
          <FlexContainer className="relative h-full md:h-80 w-full">
            <Image
              src="/floating-joystick-2.jpeg"
              alt="floating joystick"
              fill={true}
              className="z-20 object-contain mix-blend-color-dodge"
            />
            <Gradient className="top-0 z-10 left-1/2 -translate-x-1/2 h-full aspect-square bg-emerald-400/25 rounded-full blur-3xl" />
          </FlexContainer>

          {/**Description */}
          <FlexContainer
            direction="col"
            className="h-full w-full bg-neutral-950 space-y-8"
          >
            <Typography className="text-2xl font-semibold uppercase">
              get the app now
            </Typography>

            {/**Features */}
            <ul className="space-y-4">
              <li className="flex space-x-4 items-center justify-start text-neutral-400">
                <Container className="rounded-full h-8 w-8 shrink-0 text-black bg-emerald-500 inline-flex items-center justify-center">
                  <Gamepad2 size={20} />
                </Container>
                <Typography className="text-sm sm:text-md">
                  Play with over 6 million users
                </Typography>
              </li>
              <li className="flex space-x-4 items-center justify-start text-neutral-400">
                <Container className="rounded-full h-8 w-8 shrink-0 text-black bg-emerald-500 inline-flex items-center justify-center">
                  <UserPlus size={20} />
                </Container>
                <Typography className="text-sm sm:text-md">
                  Invite your friends & collect big rewards
                </Typography>
              </li>
              <li className="flex space-x-4 items-center justify-start text-neutral-400">
                <Container className="rounded-full h-8 w-8 shrink-0 text-black bg-emerald-500 inline-flex items-center justify-center">
                  <Award size={20} />
                </Container>
                <Typography className="text-sm sm:text-md">
                  Play more, earn coins & get exciting rewards
                </Typography>
              </li>
            </ul>

            {/* Download Buttons */}
            <FlexContainer className="w-full gap-x-4 items-center">
              <Link href="#">
                <Button className="text-md px-4 py-2 md:px-8 md:py-3 md:text-lg space-x-2 md:space-x-4 smooth-color-animate bg-emerald-500 text-black border border-neutral-800/50 capitalize hover:bg-emerald-50 font-semibold">
                  <Download size={20} />
                  <Typography>android</Typography>
                </Button>
              </Link>
              <Link href="/login">
                <Button className="hover:bg-emerald-950 hover:text-emerald-400 smooth-color-animate text-md px-4 py-2 md:px-8 md:py-3 md:text-lg space-x-2 md:space-x-4 border border-neutral-800/50 capitalize  font-semibold">
                  <Globe size={20} />
                  <Typography>web login</Typography>
                </Button>
              </Link>
            </FlexContainer>
          </FlexContainer>
        </Container>
      </Container>

      {/**Refer Section */}
      <Container className="h-full bg-neutral-950 py-12 lg:px-10 px-8">
        <Typography className="mx-auto text-4xl md:text-6xl uppercase font-bold text-white text-center mb-8">
          refer to
          <br />
          <span className="text-emerald-400">friends</span>
        </Typography>

        {/**Description */}
        <Container className="mx-auto max-w-[1100px] w-full relative h-full bg-neutral-950 grid grid-cols-1 grid-rows-2 md:grid-cols-[repeat(2,minmax(120px,1fr))] md:grid-rows-1 gap-8">
          <FlexContainer
            direction="col"
            className="space-y-8 row-start-2 md:row-start-1 md:col-start-1 col-span-1 row-span-1"
          >
            <Typography className="uppercase font-semibold text-white text-2xl">
              refer & earn rewards
            </Typography>
            <Typography className="text-neutral-400">
              When your friend signs up you get free 150 coins & your friend
              gets 100 coins
            </Typography>

            {/**Refer Button*/}
            <FlexContainer className="w-full gap-x-4 items-center">
              <Link href="/refer">
                <Button className="text-md px-4 py-2 md:px-8 md:py-3 md:text-lg space-x-2 md:space-x-4 smooth-color-animate bg-emerald-500 text-black border border-neutral-800/50 capitalize hover:bg-emerald-50 font-semibold">
                  <Handshake size={20} />
                  <Typography>refer now</Typography>
                </Button>
              </Link>
              <Link href="/learn_more">
                <Button className="hover:bg-emerald-950 hover:text-emerald-400 smooth-color-animate text-md px-4 py-2 md:px-8 md:py-3 md:text-lg space-x-2 md:space-x-4 border border-neutral-800/50 capitalize font-semibold">
                  <Info size={20} />
                  <Typography>learn more</Typography>
                </Button>
              </Link>
            </FlexContainer>
          </FlexContainer>

          {/**Floating Phone Image */}
          <FlexContainer className="relative h-full md:h-80 w-full row-start-1 md:row-start-1 md:col-start-2 col-span-1 row-span-1">
            <Image
              src="/floating-joystick.jpeg"
              alt="floating joystick"
              fill={true}
              className="z-20 object-contain mix-blend-color-dodge"
            />
            <Gradient className="top-0 z-10 left-1/2 -translate-x-1/2 h-full aspect-square bg-emerald-400/25 rounded-full blur-3xl" />
          </FlexContainer>
        </Container>
      </Container>

      {/**News Section */}
      <Container className="h-full">
        <Container className="h-full  bg-neutral-950 py-12 lg:px-10 px-8 max-w-screen-lg">
          <Container className="flex justify-between">
            <Typography className="uppercase font-semibold text-white text-2xl mb-8">
              news
            </Typography>
            <Link href="/">
              <Button className="border border-neutral-800 h-10 w-10 hover:text-black hover:bg-emerald-400 smooth-color-animate">
                <PlusIcon size={16} />
              </Button>
            </Link>
          </Container>
          <NewsContainer news={news} />
        </Container>
      </Container>

      {/**Media Section */}
      <Container className="h-full bg-neutral-950 py-12 lg:px-10 px-8 ">
        <Typography className="uppercase font-semibold text-white text-2xl mb-8">
          media
        </Typography>
        <MediaContainer mediaList={media} />
      </Container>
    </MaxWidthContainer>
  );
};

export default Home;
