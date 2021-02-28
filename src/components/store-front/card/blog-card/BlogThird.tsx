import { FC } from 'react';
import {
  BlogImage,
  BlogLink,
  BlogTitle,
  BlogDate,
  BlogAbstract,
  BlogAuthor,
  BlogLayout,
  BlogImageBackground,
} from './dependencies';
import { useClass, useDirection } from 'hooks';
const BlogThird: FC<IBlogCard> = ({ layout, designState, item, data }) => {
  const { toggle } = useClass();
  const { dirRtl } = useDirection();
  const { settings } = item;
  const modern = item.settings?.display === 'modern';
  if (modern) {
    return (
      <BlogLayout
        layout={layout}
        toggle={toggle}
        cssClass="blog--third flex flex-row-reverse  bg-white"
        className="   pt-238px"
        modern={modern}
        imgSrc={data.imgSrc}
      >
        <div className="w-1/2 h-full  ">
          {!layout && (
            <BlogImage src={data.imgSrc} toggle={toggle} layout={layout} />
          )}
        </div>
        <div className="w-1/2  p-30px ">
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
      </BlogLayout>
    );
  } else {
    return (
      <BlogLayout
        cssClass=" blog--third flex flex-row-reverse bg-white "
        layout={layout}
        toggle={toggle}
      >
        <div className="w-1/2 h-full table-cell ">
          <BlogImage src={data.imgSrc} toggle={toggle} layout={layout} />
        </div>

        <div className="w-1/2  ">
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
          </div>
        </div>
      </BlogLayout>
    );
  }
};

export default BlogThird;
