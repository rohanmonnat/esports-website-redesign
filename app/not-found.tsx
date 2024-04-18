import { FlexContainer } from '@/components/ui/flex-container';
import { Typography } from '@/components/ui/typography';

const NotFoundPage = () => {
  return (
    <FlexContainer
      direction="col"
      className="min-h-[calc(100vh-140px)] lg:min-h-[calc(100vh-200px)] h-full items-center justify-center space-x-4"
    >
      <Typography className="text-xl font-semibold text-center">
        <span className="text-6xl md:text-8xl font-bold text-emerald-400 ">
          404
        </span>
        <br />
        Page not found
      </Typography>
    </FlexContainer>
  );
};

export default NotFoundPage;
