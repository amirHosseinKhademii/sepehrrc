import { FC } from 'react';
import {
  BlogImage,
  BlogLink,
  BlogTitle,
  BlogDate,
  BlogAbstract,
  BlogAuthor,
  BlogLayout,
} from './dependencies';
import { useClass, useDirection } from 'hooks';
const BlogSecond: FC<IBlogCard> = ({ layout, designState, item, data }) => {
  const { toggle } = useClass();
  const { dirRtl, flexDirection } = useDirection();
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
        layout={layout}
        toggle={toggle}
        cssClass={`blog--third flex ${flexDirection} bg-white `}
        className=" h-310px rounded-5px "
        modern={modern}
        imgSrc={data.imgSrc}
      >
        <div className="w-1/2 h-full  ">
          {!layout && (
            <BlogImage
              src={data.imgSrc}
              toggle={toggle}
              layout={layout}
              className="h-310px"
            />
          )}
        </div>
        <div className="w-1/2  p-30px  ">
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
            <div className={`flex ${flexDirection} justify-between`}>
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
      </BlogLayout>
    );
  } else {
    return (
      <BlogLayout
        cssClass={` blog--third flex ${flexDirection} bg-white `}
        layout={layout}
        toggle={toggle}
        className=" h-310px rounded-5px "
      >
        <div className="first-part w-1/2 h-full table-cell ">
          <BlogImage
            src={data.imgSrc}
            toggle={toggle}
            layout={layout}
            className="h-310px"
          />
        </div>

        <div className="w-1/2 ">
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
              <div
                className={`flex ${flexDirection} flex-wrap justify-between`}
              >
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
        </div>
        {/* <style jsx>
          {`
            .first-part {
              height: 200px;
              background-image: url(${data.imgSrc && layout
                ? data.imgSrc
                : ''});
              background-size: cover;
              background-position: center center;
            }
          `}
        </style> */}
      </BlogLayout>
    );
  }
};

export default BlogSecond;
