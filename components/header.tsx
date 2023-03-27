import Link from "next/link";

const Header = () => {
  return (
    // <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
    //   <Link href="/" className="hover:underline">
    //     hirakuuuu-blog
    //   </Link>
    // </h2>
    <div>
      <nav className="bg-[#AEAEAE] dark:bg-[#2B2B2B] mb-6">
        <div className="mx-auto max-w-7xl flex justify-between h-16 px-2">
          <div className="flex space-x-8 items-center">
            <Link
              className="text-[#2B2B2B] dark:text-[#AEAEAE]  hover:text-yellow-900 rounded-md text-sm font-medium"
              href="/"
            >
              Home
            </Link>
            <a
              className="text-[#2B2B2B] dark:text-[#AEAEAE] hover:text-yellow-900 rounded-md text-sm font-medium"
              href="/posts/about/"
            >
              About
            </a>
            <a
              className="text-[#2B2B2B] dark:text-[#AEAEAE] hover:text-yellow-900 rounded-md text-sm font-medium"
              href="/tags/"
            >
              Tag
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
