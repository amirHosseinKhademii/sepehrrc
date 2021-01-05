import { ProductCard } from 'components';

export const CardContainer = ({ items, title }) => {
  return (
    <div className="container mx-auto flex flex-col w-full">
      <span className="text-center text-4xl font-medium mt-16 mb-12 ">
        {title}
      </span>
      <div
        style={{ height: '450px' }}
        className={`grid grid-flow-col auto-cols-max gap-8 justify-center`}
      >
        {items.map((item, index) => (
          <ProductCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};
