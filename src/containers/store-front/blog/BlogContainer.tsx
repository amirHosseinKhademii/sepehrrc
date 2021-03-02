import { useClass, useDesign, useUi, useDirection } from 'hooks';
import dynamic from 'next/dynamic';
import { GeneralLayout, ContainerTitle, ContainedButton } from 'components';
import { data } from './data';

const BlogFirst = dynamic(
  () => import('components/store-front/card/blog-card/BlogFirst')
);
const BlogSecond = dynamic(
  () => import('components/store-front/card/blog-card/BlogSecond')
);

const BlogContainer = ({ item }) => {
  const { join } = useClass();
  const { uiState } = useUi();
  const { designState, setSetting } = useDesign();
  const { theme } = designState.pageSettings;
  const { settings } = item;
  const layout = theme === 'default' ? true : false;
  const showMore = settings.more == undefined ? true : settings.more;
  let blogData;
  let cols; // cols for different blog style
  console.log(settings.style, 'style');
  switch (settings?.style) {
    case 'first':
      cols = `md:grid-cols-2 lg:grid-cols-4`;
      blogData = data.slice(0, 4);
      break;
    case 'second':
      cols = `md:grid-cols-2 lg:grid-cols-3`;
      blogData = data.slice(0, 3);

      break;
    case 'third':
      cols = ` lg:grid-cols-2`;
      blogData = data.slice(0, 2);

      break;
    default:
      cols = `md:grid-cols-2 lg:grid-cols-4`;
      blogData = data;
      break;
  }

  const { language } = useDirection();
  const Blogs = ({ data, designState, layout, item }) => {
    const { settings } = item;
    switch (settings.style) {
      case 'first':
        return (
          <BlogFirst
            data={data}
            layout={layout}
            designState={designState}
            item={item}
          />
        );
      case 'second':
        return (
          <BlogFirst
            data={data}
            layout={layout}
            designState={designState}
            item={item}
          />
        );
      case 'third':
        return (
          <BlogSecond
            data={data}
            layout={layout}
            designState={designState}
            item={item}
          />
        );
      default:
        return (
          <BlogFirst
            data={data}
            layout={layout}
            designState={designState}
            item={item}
          />
        );
    }
  };
  return (
    <GeneralLayout
      active={
        uiState.drawer.type === 'style' &&
        designState.current.type == 'header' &&
        'HEADER' == designState.current.uuid
          ? true
          : false
      }
      item={item}
      layout={layout}
    >
      <ContainerTitle
        designState={designState}
        item={item}
        join={join}
        layout={layout}
      />
      <div
        className={`grid xs:grid-cols-1 ${cols} gap-30px container mx-auto p-20px`}
      >
        {blogData.map((data) => {
          return (
            <Blogs
              layout={layout}
              data={data}
              item={item}
              designState={designState}
            />
          );
        })}
      </div>
      {showMore && (
        <div className="flex flex-row-reverse items-center justify-center">
          <ContainedButton
            layout={layout}
            text={language.BShowMore}
            designState={designState}
            className="rounded-25px"
          />
        </div>
      )}
    </GeneralLayout>
  );
};
export default BlogContainer;
