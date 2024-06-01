import { ScrollBottomButton, ScrollTopButton } from '@/components/scrollButtons';
import { marked } from 'marked';
import { GetStaticPaths, GetStaticProps } from 'next';
import HomeButton from '../../components/homeButton';
import layouts from '../../layouts/layouts';
import { getAllPosts, getPostByTitleAndCategory, PostData } from '../../utils';

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

  return {
    props: {
      postDataJson,
      title: params.title as string,
      category: params.category as string,
    }
  };
};

const Post: React.FC<{ postDataJson: PostData; title: string, category: string }> =
  ({ postDataJson, title, category }) => {
  if (!postDataJson) {
    return <div>Post not found</div>;
  }

  const htmlContent = marked(postDataJson.content);

  const layoutJson = postDataJson.layout;

  if (!layoutJson) {
    return <div>Layout not found</div>;
  }

  let Layout;

  if (!(layoutJson in layouts)) {
    Layout = layouts['defaultLayout'];
  } else {
    Layout = layouts[layoutJson as keyof typeof layouts];
  }

  return (
    <Layout title={postDataJson.title} subtitle={postDataJson.data.subtitle}>
      <div>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        <div><HomeButton /></div>
        <div><ScrollBottomButton /></div>
        <div><ScrollTopButton /></div>
      </div>
    </Layout>
  );
};

export default Post;