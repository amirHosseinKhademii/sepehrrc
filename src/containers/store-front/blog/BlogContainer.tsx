import { useClass, useDesign, useUi, useDirection } from 'hooks';
import dynamic from 'next/dynamic';
import { GeneralLayout, ContainerTitle, ContainedButton } from 'components';
import { data } from './data';
import { settings } from 'cluster';

const BlogFirst = dynamic(
  () => import('components/store-front/card/blog-card/BlogFirst')
);
const BlogSecond = dynamic(
  () => import('components/store-front/card/blog-card/BlogSecond')
);
const BlogThird = dynamic(
  () => import('components/store-front/card/blog-card/BlogThird')
);
const BlogFourth = dynamic(
  () => import('components/store-front/card/blog-card/BlogFourth')
);
const BlogFifth = dynamic(
  () => import('components/store-front/card/blog-card/BlogFifth')
);
const BlogSixth = dynamic(
  () => import('components/store-front/card/blog-card/BlogSixth')
);

const BlogContainer = ({ item }) => {
  const { join } = useClass();
  const { uiState } = useUi();
  const { designState } = useDesign();
  const { theme } = designState.pageSettings;
  const layout = theme === 'default' ? true : false;
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
          <BlogSecond
            data={data}
            layout={layout}
            designState={designState}
            item={item}
          />
        );
      case 'third':
        return (
          <BlogThird
            data={data}
            layout={layout}
            designState={designState}
            item={item}
          />
        );
      case 'forth':
        return (
          <BlogFourth
            data={data}
            layout={layout}
            designState={designState}
            item={item}
          />
        );
      case 'fifth':
        return (
          <BlogFifth
            data={data}
            layout={layout}
            designState={designState}
            item={item}
          />
        );
      case 'sixth':
        return (
          <BlogSixth
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
      <div className="grid grid-cols-4 gap-30px container mx-auto p-20px">
        {data.map((data) => {
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
      {item.settings.more && (
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
