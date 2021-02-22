import { FC } from 'react';
import {
  BlogAuthor,
  BlogDate,
  BlogImage,
  BlogAbstract,
  BlogTitle,
  BlogLink,
} from './dependencies';
import { useClass } from 'hooks';
const BlogFirst: FC<IBlogCard> = ({ layout, item, designState }) => {
  const { pageSettings } = designState;
  const { toggle } = useClass();
  return (
    <div className="blog flex flex-col bg-white">
      <BlogLink layout={layout} type={'post'}>
        <BlogImage toggle={toggle} layout={layout} src={item.imgSrc} />
      </BlogLink>
      <div className="p-30px text-right">
        <BlogLink layout={layout} type={'post'}>
          <BlogTitle
            text={item.title}
            layout={layout}
            toggle={toggle}
            className="font-bold text-16px"
          />
        </BlogLink>

        <BlogAbstract toggle={toggle} layout={layout} text={item.abstract} />

        <div className="flex flex-row-reverse justify-between">
          <BlogLink layout={layout} type={'author'}>
            <BlogAuthor
              text={item.author}
              designState={designState}
              layout={layout}
            />
          </BlogLink>
          <BlogDate text={item.date} toggle={toggle} layout={layout} />
        </div>
      </div>
      <style jsx>
        {`
          div :global(.blog-author__icon-box) {
            color: ${layout ? pageSettings.primary : 'initial'};
          }
        `}
      </style>
    </div>
  );
};

export default BlogFirst;
