import React from "react";
import TableOfContentType from "../interfaces/table-of-content";

type Props = {
  contents: TableOfContentType[];
};

const TableOfContents = ({ contents }: Props) => {
  return (
    <div className="hidden md:block w-1/3 ml-3">
      <div className="flex flex-col sticky top-6">
        <div className="p-4 shadow-md rounded-xl mb-6 bg-white">
          <p className="text-sl text-bold mb-4">目次</p>
          <ul className="">
            {contents.map((anchor: TableOfContentType) => {
              if (anchor.level === "H1") {
                return (
                  <li className="" key={anchor.href}>
                    <b>
                      <a href={anchor.href}>{anchor.title}</a>
                    </b>
                  </li>
                );
              } else {
                return (
                  <ul key={anchor.href}>
                    <li className="">
                      <a href={anchor.href}>{anchor.title}</a>
                    </li>
                  </ul>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;
