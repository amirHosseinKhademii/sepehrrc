import { useClass, useDesign, useUi } from 'hooks';
import dynamic from 'next/dynamic';
import { ContainerTitle, GeneralLayout } from 'components';
import { data } from './data';

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

  const Blogs = ({ data, designState, layout }) => {
    switch (item.settings.style) {
      case 'first':
        return (
          <BlogFirst item={data} layout={layout} designState={designState} />
        );
      case 'second':
        return (
          <BlogSecond item={data} layout={layout} designState={designState} />
        );
      case 'third':
        return (
          <BlogThird item={data} layout={layout} designState={designState} />
        );
      case 'forth':
        return (
          <BlogFourth item={data} layout={layout} designState={designState} />
        );
      case 'fifth':
        return (
          <BlogFifth item={data} layout={layout} designState={designState} />
        );
      case 'sixth':
        return (
          <BlogSixth item={data} layout={layout} designState={designState} />
        );
      default:
        return (
          <BlogFirst item={data} layout={layout} designState={designState} />
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
        {data.map((item) => {
          return (
            <Blogs layout={layout} data={item} designState={designState} />
          );
        })}
      </div>
    </GeneralLayout>
  );
};
export default BlogContainer;
