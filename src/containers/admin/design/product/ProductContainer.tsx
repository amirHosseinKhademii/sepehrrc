import { Product } from 'components';

export const ProductContainer = ({ items }) => {
  return (
    <div className="container mx-auto p-20px flex flex-col w-full">
      <span className="text-center text-4xl font-medium mt-16 mb-12 ">
        {items.title}
      </span>
      <div
        className={`grid  
        ${
          !!items.settings.cols
            ? `grid-cols-${items.settings.cols} `
            : 'grid-cols-4'
        } 
        ${
          !!items.settings.rows
            ? `grid-rows-${items.settings.rows} `
            : 'grid-rows-1'
        }  gap-30px
        
        `}
      >
        {items.groups[0].groupItems.map((item, index) => (
          <Product item={item} key={index} />
        ))}
      </div>
    </div>
  );
};
