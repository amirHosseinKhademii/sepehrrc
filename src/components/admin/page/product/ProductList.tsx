import React from 'react';
import { Pagination, Product } from 'components';
import { useDesign } from 'hooks';
export const ProductList = ({ items }) => {
  const { designState } = useDesign();
  const { settings } = designState.current;
  const showPagination = settings && settings?.page !== 'disabled';
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
      {showPagination && (
        <div className="flex justify-center w-full my-20px">
          <Pagination />
        </div>
      )}
    </div>
  );
};