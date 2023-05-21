import Link from "next/link";
import Image from "next/image";

import defaultImage from "@/assets/images/default.jpg";

export const PostBlock = ({ post }: { post: any }) => {
  return (
    <div className="post-block py-2 rounded-md">
      <div className="summary">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="md:col-span-3">
            <Link href={`/posts/${post.slug}`} className="post-content my-4">
              <h3 className="summary-title">{post.title}</h3>
            </Link>
            <div
              className="summary-description"
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            ></div>
          </div>
          <div className="max-w-xs">
            <Link href={`/posts/${post.slug}`}>
              <div className="relative aspect-square transition-all duration-200 ease-linear hover:-translate-y-[3px]">
                <Image
                  src={post?.featuredImage?.node.sourceUrl ?? defaultImage}
                  fill
                  alt={post.title}
                  className="absolute h-full w-full object-cover"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
