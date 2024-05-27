import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPosts, PostData } from '../../utils';

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

  const postData: PostData[] = await getAllPosts();
  const postDataJson = postData.map(post => post.toJSON());
  return {
    props: {
      postDataJson,
      title: params?.title as string,
    }
  };
};


const Post: React.FC<{ postDataJson: PostData[]; title: string }> = ({ postDataJson, title }) => {
  const postData = postDataJson.find(post => post.title === title);

  if (!postData) {
    return <div>Post not found</div>;
  }

  const { data, content } = matter(postData.data);

  return (
    <div>
      <h1>{data.title}</h1>
      <div>{content}</div>
    </div>
  );
};
export default Post;