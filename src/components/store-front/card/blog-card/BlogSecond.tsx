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

const BlogSecond: FC<IBlogCard> = ({ layout, item, designState, data }) => {
  const { toggle } = useClass();
  const { settings } = item;

  return (
    <BlogImageBackground
      toggle={toggle}
      imgSrc={data.imgSrc}
      layout={layout}
      className={`text-white`}
    >
      <BlogLink layout={layout} type="post">
        <BlogTitle
          toggle={toggle}
          layout={layout}
          text={data.title}
          className="mt-224px text-16px "
        />{' '}
      </BlogLink>
      {settings.description && (
        <BlogAbstract toggle={toggle} layout={layout} text={data.abstract} />
      )}
      {(settings.author || settings.date) && (
        <div className="flex flex-row-reverse justify-between">
          {settings.author && (
            <BlogLink layout={layout} type="author">
              <BlogAuthor
                designState={designState}
                layout={layout}
                text={data.author}
              />
            </BlogLink>
          )}

          {settings.date && (
            <BlogDate layout={layout} toggle={toggle} text={data.date} />
          )}
        </div>
      )}
    </BlogImageBackground>
  );
};

export default BlogSecond;
