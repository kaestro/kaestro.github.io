import CategoryList from '@/components/CategoryList';
import { ScrollBottomButton, ScrollTopButton } from '@/components/scrollButtons';
import { marked } from 'marked';
import { GetStaticPaths, GetStaticProps } from 'next';
import HomeButton from '../../components/homeButton';
import layouts from '../../layouts/layouts';
import { fetchAllCategories, getAllPosts, getPostByTitleAndCategory, PostData } from '../../utils';

export const getStaticPaths: GetStaticPaths = async () => {

  const posts: PostData[] = await getAllPosts();
  const paths= posts.map(post => ({
    params: {
      title: post.getTitle(),
      category: post.getCategory(),
      fullPath: post.getFullPath(),
      layout: post.getLayout(),
    }
  }));

  return {
    paths,
    fallback: false,
  };
};

const handleInvalidParams = () => {
  return {
    props: {
      postData: {
        title: 'Error: Invalid parameters',
        contentHtml: 'Error: Invalid parameters',
      },
    },
  };
};

const handlePostNotFound = (): { notFound: true } => {
  return {
    notFound: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.title || !params.category) {
    return handleInvalidParams();
  }

  const post: PostData | null = await getPostByTitleAndCategory(params.title as string, params.category as string);

  if (!post) {
    return handlePostNotFound();
  }

  const postDataJson = post.toJSON();
  const categories = await fetchAllCategories();

  return {
    props: {
      postDataJson,
      title: params.title as string,
      category: params.category as string,
      categories,
    }
  };
};

const Post: React.FC<{ postDataJson: PostData; title: string, category: string, categories: string[] }> =
  ({ postDataJson, title, category, categories }) => {
  if (!postDataJson) {
    return <div>Post not found</div>;
  }

  const layoutJson = postDataJson.layout;

  let Layout;
  try {
    Layout = initializeLayout(layoutJson);
  } catch (error) {
    return <div>post에 오류가 있습니다</div>;
  }

  let htmlContent;
  try {
    htmlContent = initializeHtmlContent(postDataJson.content);
  } catch (error) {
    return <div>post에 오류가 있습니다</div>;
  }

  return (
    <Layout title={postDataJson.title} subtitle={postDataJson.data.subtitle}>
      <div>
        <CategoryList categories={categories} />
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        <div><HomeButton /></div>
        <div><ScrollBottomButton /></div>
        <div><ScrollTopButton /></div>
      </div>
    </Layout>
  );
};

const initializeLayout = (layoutJson: string) => {
  if (!layoutJson) {
    throw new Error('Layout not found');
  }

  let Layout;

  if (!(layoutJson in layouts)) {
    Layout = layouts['defaultLayout'];
  } else {
    Layout = layouts[layoutJson as keyof typeof layouts];
  }

  return Layout;
}

const initializeHtmlContent = (content: string) => {
  if (!content) {
    throw new Error('Content not found');
  }

  const renderer = new marked.Renderer();
  renderer.link = (href, title, text) => {
    return `<a target="_blank" href="${href}" title="${title}">${text}</a>`;
  };

  marked.setOptions({
    renderer,
  })

  return marked(content);
}

export default Post;