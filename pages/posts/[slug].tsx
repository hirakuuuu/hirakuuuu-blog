import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "zenn-markdown-html";
import type PostType from "../../interfaces/post";
import type TableOfContentType from "../../interfaces/table-of-content";
import TableOfContents from "../../components/table-of-contents";
import { JSDOM } from "jsdom";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter();
  const title = `${post.title}`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32 znc">
              <Head>
                <title>{title}</title>
              </Head>
              <div className="js-show-on-scroll max-w-9xl">
                <PostHeader
                  title={post.title}
                  date={post.date}
                  tags={post.tags}
                />
                <div className="flex flex-row justify-center">
                  <PostBody content={post.content} />
                  <TableOfContents contents={post.tableOfContents} />
                </div>
              </div>
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
    "tags",
  ]);

  // markdownからHTML(string)を生成
  const content = await markdownToHtml(post.content || "");
  // HTML(string)をHTML(DOM)に変換する
  const domHTML = new JSDOM(content).window.document;
  // DOMから目次を検索し、{}を取得
  const elements = domHTML.querySelectorAll<HTMLElement>("h1, h2");
  const tableOfContents: TableOfContentType[] = [];

  elements.forEach((element) => {
    const level = element.tagName;
    const title = element.innerHTML.split("</a>")[1];
    const href = "#" + element.id;
    const record = { level: level, title: title, href: href };
    tableOfContents.push(record);
    // console.log(record);
  });

  return {
    props: {
      post: {
        ...post,
        content,
        tableOfContents,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
