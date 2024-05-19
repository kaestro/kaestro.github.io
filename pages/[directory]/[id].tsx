import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPostIdsAndDirectories, getAllPosts } from '../../utils';

export const getStaticPaths: GetStaticPaths = async () => {
  const pathsData = await getAllPostIdsAndDirectories();
  const paths = pathsData.map(({ id, directory }) => ({
    params: {
      id: id.toString(),
      directory: directory.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Check if params, params.postId, or params.postDirectory is undefined
  if (!params || !params.postId || !params.postDirectory) {
    return {
      props: {
        postData: {
          title: 'Error: Invalid parameters',
          contentHtml: 'Error: Invalid parameters',
        },
      },
    };
  }

  // Use postId and postDirectory to get post data
  const postData = await getAllPosts(params.postDirectory as string);
  console.log("HELLO POST DATA")
  console.log(postData[0])
  console.log("END POST DATA")
  return {
    props: {
      postData
    }
  };
};

const Post: React.FC<{ postData: { title: string, contentHtml: string } }> = ({ postData }) => {
  return (
    <div>
      <h1>{postData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  );
};

export default Post;