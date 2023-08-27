//templates
import PostDetailsPage from "@/components/templates/PostDetailsPage";

//types
import { Data } from "@/types/PostType";

const PostDetails = (props: any) => {
  return <PostDetailsPage {...props} />;
};

export default PostDetails;

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.org/posts");
  const data = await res.json();
  const foodData = await data.slice(0, 10);
  const paths = await foodData.map((item: Data) => ({
    params: {
      postId: item.id.toString(),
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context: any) {
  const {
    params: { postId },
  } = context;
  try {
    const res = await fetch(`https://jsonplaceholder.org/posts/${postId}`);
    const data = await res.json();
    const comments = await fetch("https://jsonplaceholder.org/comments").then(
      (res) => res.json()
    );
    const commentsData = comments.filter(
      (item: any) => item.postId === data.id
    );
    if (!data.title) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        data,
        commentsData,
      },
      revalidate: 10, //seconds
    };
  } catch (err) {
    return { notFound: true };
  }
}
