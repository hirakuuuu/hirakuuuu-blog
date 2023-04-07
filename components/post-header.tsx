import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import type Author from "../interfaces/author";
import Link from "next/link";

type Props = {
  title: string;
  date: string;
  tags: string[];
};

const PostHeader = ({ title, date, tags }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-[76.75rem] mx-auto">
        <ul
          className="flex flex-wrap items-center gap-2 md:gap-4"
          style={{ paddingLeft: "0px" }}
        >
          {tags.map((tag, index) => (
            <li key={index} className="font-bold block">
              <Link
                href={`/tags/${tag}`}
                className="block"
                style={{ textDecoration: "none" }}
              >
                <div className="px-6 rounded-full text-[#2B2B2B] hover:text-yellow-900 border-2 font-extrabold">
                  {tag}
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
