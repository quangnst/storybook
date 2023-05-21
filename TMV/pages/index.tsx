import { GetStaticProps } from "next";

import { Hero } from "@/components/Hero";
import { PostBlock } from "@/components/PostBlock";
import { getPosts } from "@/lib/service";

export default function HomePage({ posts }: { posts: any }) {
  return (
    <>
      {/* <Hero /> */}
      <div className="container mx-auto py-8">
        <div className="my-6 grid grid-flow-row grid-cols-1">
          {posts.map((post: any) => {
            return <PostBlock key={post.slug} post={post} />;
          })}
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts(100); // retrieve first 100 posts

  return {
    props: {
      posts,
    },
    revalidate: 3600,
  };
};