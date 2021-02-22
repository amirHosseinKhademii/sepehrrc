import { FC } from 'react';
import {
  BlogImageBackground,
  BlogLink,
  BlogTitle,
  BlogAbstract,
  BlogAuthor,
  BlogDate,
} from './dependencies';
import { useClass } from 'hooks';

const BlogSecond: FC<IBlogCard> = ({ layout, item, designState }) => {
  const { toggle } = useClass();

  return (
    <BlogImageBackground
      toggle={toggle}
      imgSrc={item.imgSrc}
      layout={layout}
      className={`text-white`}
    >
      <BlogLink layout={layout} type="post">
        <BlogTitle
          toggle={toggle}
          layout={layout}
          text={item.title}
          className="mt-224px text-16px "
        />{' '}
      </BlogLink>
      <BlogAbstract toggle={toggle} layout={layout} text={item.abstract} />
      <div className="flex flex-row-reverse justify-between">
        <BlogLink layout={layout} type="author">
          {' '}
          <BlogAuthor
            designState={designState}
            layout={layout}
            text={item.author}
          />{' '}
        </BlogLink>
        <BlogDate layout={layout} toggle={toggle} text={item.date} />
      </div>
    </BlogImageBackground>
  );
};

export default BlogSecond;
