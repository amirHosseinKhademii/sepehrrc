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
const BlogFirst: FC<IBlogCard> = ({ layout, item, designState, data }) => {
  const { pageSettings } = designState;
  const { toggle } = useClass();
  const { settings } = item;
  return (
    <div
      className={toggle(`blog flex flex-col bg-white`, 'rounded-5px', layout)}
    >
      <BlogLink layout={layout} type={'post'}>
        <BlogImage toggle={toggle} layout={layout} src={data.imgSrc} />
      </BlogLink>
      <div className="p-30px text-right">
        <BlogLink layout={layout} type={'post'}>
          <BlogTitle
            text={data.title}
            layout={layout}
            toggle={toggle}
            className="font-bold text-16px"
          />
        </BlogLink>

        {settings.description && (
          <BlogAbstract toggle={toggle} layout={layout} text={data.abstract} />
        )}

        {(settings.author || settings.date) && (
          <div className="flex flex-row-reverse justify-between">
            {settings.author && (
              <BlogLink layout={layout} type={'author'}>
                <BlogAuthor
                  text={data.author}
                  designState={designState}
                  layout={layout}
                />
              </BlogLink>
            )}
            {settings.date && (
              <BlogDate text={data.date} toggle={toggle} layout={layout} />
            )}
          </div>
        )}
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
