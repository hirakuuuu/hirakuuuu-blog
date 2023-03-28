import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import type Author from "../interfaces/author";

type Props = {
  title: string;
  date: string;
  tags: string[];
};

const PostHeader = ({ title, date, tags }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <ul className="flex gap-x-2">
        {
          tags.map((tag) => <li className="font-bold mb-12">{tag}</li>)
        }

      </ul>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
