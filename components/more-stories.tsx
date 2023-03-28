import PostPreview from "./post-preview";
import type Post from "../interfaces/post";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <div className="js-show-on-scroll">
        <h2 className="mb-8 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
          記事一覧 ({posts.length})
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-x-8 gap-y-16  mb-32">
        {posts.map((post) => (
          <div key={post.slug} className="js-show-on-scroll">
            <PostPreview
              title={post.title}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
