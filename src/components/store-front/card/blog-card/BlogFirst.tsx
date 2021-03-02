import { FC } from 'react';
import {
  BlogAuthor,
  BlogDate,
  BlogImage,
  BlogAbstract,
  BlogTitle,
  BlogLink,
  BlogLayout,
} from './dependencies';
import { useClass, useDirection } from 'hooks';
const BlogFirst: FC<IBlogCard> = ({ layout, item, designState, data }) => {
  const { pageSettings } = designState;
  const { toggle } = useClass();
  const { textAlignRtl } = useDirection();
  const { settings } = item;
  const modern =
    settings.display == undefined ? true : settings.display === 'modern';
  const showDate = settings.date == undefined ? true : settings.date;
  const showDescription =
    settings.description == undefined ? true : settings.description;
  const showAuthor = settings.author == undefined ? true : settings.author;

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
          <BlogTitle
            text={data.title}
            layout={layout}
            toggle={toggle}
            className="font-bold text-16px "
          />

          {showDescription && (
            <BlogAbstract
              toggle={toggle}
              layout={layout}
              text={data.abstract}
            />
          )}

          {(showAuthor || showDate) && (
            <div className="flex flex-row-reverse flex-wrap justify-between">
              {showAuthor && (
                <BlogLink layout={layout} type={'author'}>
                  <BlogAuthor
                    text={data.author}
                    designState={designState}
                    layout={layout}
                  />
                </BlogLink>
              )}
              {showDate && (
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
          <BlogTitle
            text={data.title}
            layout={layout}
            toggle={toggle}
            className="font-bold text-16px"
          />

          {showDescription && (
            <BlogAbstract
              toggle={toggle}
              layout={layout}
              text={data.abstract}
            />
          )}

          {(showAuthor || showDate) && (
            <div className="flex flex-row-reverse justify-between">
              {showAuthor && (
                <BlogLink layout={layout} type={'author'}>
                  <BlogAuthor
                    text={data.author}
                    designState={designState}
                    layout={layout}
                  />
                </BlogLink>
              )}
              {showDate && (
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
