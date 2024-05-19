import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPostIds, getPostData } from '../utils/posts';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds();
  console.log("HELLO getStaticPaths")
  console.log(paths)
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log("HELLO getStaticProps for param")
  console.log(params)
  // Check if params, params.directory, or params.id is undefined
  if (!params || !params.directory || !params.id) {
    return {
      props: {
        postData: {
          title: 'Error: Invalid parameters',
          contentHtml: 'Error: Invalid parameters',
        },
      },
    };
  }

  // Use directory and id to get post data
  const postData = await getPostData(params.directory as string, params.id as string);
  console.log("HELLO POST DATA")
  console.log(postData)
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