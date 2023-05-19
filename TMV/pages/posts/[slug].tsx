import { GetStaticProps } from "next";
import { GetStaticPaths } from "next";

import { getPosts, getPostBySlug } from "@/lib/service";

export default function PostDetails({ post }: { post: any }) {
  return (
    <div className="blog">
      <div className="intro">
        <h1>{post.title}</h1>
      </div>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts(100); // retrieve first 100 posts

  return {
    paths: posts.map((post: any) => `/posts/${post.slug}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params?.slug as string);

  return {
    props: { post },
  };
};
