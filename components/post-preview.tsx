import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import type Author from "../interfaces/author";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

const PostPreview = ({ title, date, excerpt, slug }: Props) => {
  return (
    <div className="flex flex-row items-start">
      <Link
        as={`/posts/${slug}`}
        href="/posts/[slug]"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <div className="flex-1 ml-2">
          <h3 className="text-xl">{title}</h3>
          <div className="my-5">
            <p>{excerpt}</p>
          </div>
          <div className="flex flex-row">
            <div className="font-bold text-xs my-auto">
              <DateFormatter dateString={date} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostPreview;
