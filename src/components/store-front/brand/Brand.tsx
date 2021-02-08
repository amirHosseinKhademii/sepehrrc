import AliceCarousel from 'react-alice-carousel';

export const Brand = ({ child }) => {
  return (
    <AliceCarousel
      items={child}
      autoPlayInterval={2000}
      autoPlayStrategy="default"
      controlsStrategy="responsive"
      animationDuration={2000}
      disableButtonsControls
      responsive={{
        0: { items: 1 },
        768: { items: 2 },
        1024: {
          items: 4,
        },
      }}
      autoPlay
      infinite
      paddingRight={30}
    >
      {child}
    </AliceCarousel>
  );
};
