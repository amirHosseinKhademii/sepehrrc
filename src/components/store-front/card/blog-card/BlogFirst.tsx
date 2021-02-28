import { FC } from 'react';
import {
  BlogAuthor,
  BlogDate,
  BlogImage,
  BlogAbstract,
  BlogTitle,
  BlogLink,
  BlogImageBackground,
  BlogLayout,
} from './dependencies';
import { useClass, useDirection } from 'hooks';
const BlogFirst: FC<IBlogCard> = ({ layout, item, designState, data }) => {
  const { pageSettings } = designState;
  const { toggle } = useClass();
  const { textAlignRtl } = useDirection();
  const { settings } = item;
  const modern = item.settings?.display === 'modern';

  if (modern) {
    return (
      <BlogLayout
        modern={modern}
        toggle={toggle}
        imgSrc={data.imgSrc}
        layout={layout}
        className={` rounded-5px  pt-238px `}
        cssClass={`blog--first  bg-white`}
      >
        {!layout && (
          <BlogImage layout={layout} toggle={toggle} src={data.imgSrc} />
        )}
        <div className={`p-30px`}>
          <BlogLink layout={layout} type={'post'}>
            <BlogTitle
              text={data.title}
              layout={layout}
              toggle={toggle}
              className="font-bold text-16px "
            />
          </BlogLink>

          {settings.description && (
            <BlogAbstract
              toggle={toggle}
              layout={layout}
              text={data.abstract}
            />
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
      </BlogLayout>
    );
  } else {
    return (
      <BlogLayout
        className={` rounded-5px `}
        cssClass={`blog--first bg-white`}
        layout={layout}
        toggle={toggle}
      >
        <BlogImage layout={layout} toggle={toggle} src={data.imgSrc} />
        <div className="p-30px">
          <BlogLink layout={layout} type={'post'}>
            <BlogTitle
              text={data.title}
              layout={layout}
              toggle={toggle}
              className="font-bold text-16px"
            />
          </BlogLink>

          {settings.description && (
            <BlogAbstract
              toggle={toggle}
              layout={layout}
              text={data.abstract}
            />
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
          <style jsx>
            {`
              div :global(.blog-author__icon-box) {
                color: ${layout ? pageSettings.primary : 'initial'};
              }
            `}
          </style>
        </div>
      </BlogLayout>
    );
  }
};

export default BlogFirst;
