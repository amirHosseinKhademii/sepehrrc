import { useClass } from 'hooks';

export const Banner = ({ item }) => {
  const { join } = useClass();

  const BannerLayout = ({ children, className }) => (
    <div className={join('grid w-5/6 h-2/5 mx-auto gap-x-20px', className)}>
      {children}
    </div>
  );

  const GrayBox = ({ className, number }) => (
    <div
      className={join(
        ' flex items-center justify-center bg-gray-300 rounded ',
        className
      )}
    >
      <span className="text-white text-14px">{number}</span>
    </div>
  );

  const FirstVariation = () => (
    <BannerLayout className="grid-cols-3">
      <div className="grid grid-cols-1 col-span-1 gap-y-20px h-full">
        <GrayBox className="h-full" number="2" />
        <GrayBox className="h-full" number="3" />
      </div>
      <div className="col-span-2">
        <GrayBox className="h-full" number="1" />
      </div>
    </BannerLayout>
  );

  const SecondVariation = () => (
    <BannerLayout className="grid-cols-4">
      <div className="grid grid-cols-1 col-span-1 gap-y-20px h-full">
        <GrayBox className="h-full" number="2" />
        <GrayBox className="h-full" number="3" />
      </div>
      <div className="col-span-2">
        <GrayBox className="h-full" number="1" />
      </div>
      <div className="grid grid-cols-1 col-span-1 gap-y-20px h-full">
        <GrayBox className="h-full" number="2" />
        <GrayBox className="h-full" number="3" />
      </div>
    </BannerLayout>
  );

  const ThirdVariation = () => (
    <BannerLayout className="grid-cols-3">
      <div className="grid grid-cols-1 col-span-1 gap-y-20px h-full">
        <GrayBox className="h-full" number="2" />
        <GrayBox className="h-full" number="3" />
      </div>
      <div className="grid grid-cols-1 col-span-1 gap-y-20px h-full">
        <GrayBox className="h-full" number="2" />
        <GrayBox className="h-full" number="3" />
      </div>
      <div className="grid grid-cols-1 col-span-1 gap-y-20px h-full">
        <GrayBox className="h-full" number="2" />
        <GrayBox className="h-full" number="3" />
      </div>
    </BannerLayout>
  );

  const ForthVariation = () => (
    <BannerLayout className="grid-cols-2">
      <div className="grid grid-cols-1 col-span-1 gap-y-20px h-full">
        <GrayBox className="h-full" number="2" />
        <GrayBox className="h-full" number="3" />
      </div>
      <div className="grid grid-cols-1 col-span-1 gap-y-20px h-full">
        <GrayBox className="h-full" number="2" />
        <GrayBox className="h-full" number="3" />
      </div>
    </BannerLayout>
  );

  const FifthVariation = () => (
    <BannerLayout className="grid-cols-2">
      <div className="grid grid-cols-1 col-span-1 gap-y-20px h-full">
        <GrayBox className="h-1/2" number="2" />
      </div>
      <div className="grid grid-cols-1 col-span-1 gap-y-20px h-full">
        <GrayBox className="h-1/2" number="2" />
      </div>
    </BannerLayout>
  );

  const SixthVariation = () => (
    <BannerLayout className="grid-cols-3">
      <div className="grid grid-cols-1 col-span-1 gap-y-20px h-full">
        <GrayBox className="h-1/2" number="2" />
      </div>
      <div className="grid grid-cols-1 col-span-1 gap-y-20px h-full">
        <GrayBox className="h-1/2" number="2" />
      </div>
      <div className="grid grid-cols-1 col-span-1 gap-y-20px h-full">
        <GrayBox className="h-1/2" number="2" />
      </div>
    </BannerLayout>
  );

  if (
    !item.settings ||
    !item.settings.variation ||
    item.settings.variation === 'first'
  )
    return <FirstVariation />;
  else if (item.settings.variation === 'second') return <SecondVariation />;
  else if (item.settings.variation === 'third') return <ThirdVariation />;
  else if (item.settings.variation === 'forth') return <ForthVariation />;
  else if (item.settings.variation === 'fifth') return <FifthVariation />;
  else if (item.settings.variation === 'sixth') return <SixthVariation />;
};
