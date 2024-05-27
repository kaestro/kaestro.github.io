import { marked } from 'marked';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPosts, getPostByTitleAndCategory, PostData } from '../../utils';

export const getStaticPaths: GetStaticPaths = async () => {

  const posts: PostData[] = await getAllPosts();
  const paths= posts.map(post => ({
    params: {
      title: post.getTitle(),
      category: post.getCategory(),
      fullPath: post.getFullPath(),
    }
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.title || !params.category) {
    return {
      props: {
        postData: {
          title: 'Error: Invalid parameters',
          contentHtml: 'Error: Invalid parameters',
        },
      },
    };
  }

  const post: PostData | null = await getPostByTitleAndCategory(params.title as string, params.category as string);

  if (!post) {
    return {
      notFound: true,
    };
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

  return (
    <div>
      <h1>{postDataJson.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default Post;