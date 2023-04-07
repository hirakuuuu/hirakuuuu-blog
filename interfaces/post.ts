import TableOfContent from "./table-of-content";

type PostType = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tableOfContents: TableOfContent[];
  tags: string[];
};

export default PostType;
