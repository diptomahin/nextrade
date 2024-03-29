import React from "react";
import getArticles from "@/lib/getArticles";
import Image from "next/image";
import moment from "moment";
import { SiKhanacademy } from "react-icons/si";
import Comment from "@/components/traders_comp/academy/comment";

const articlePage = async ({ params }) => {
  const { _id } = params;
  const article = await getArticles(_id);
  const tags = article.tags
    .split(",")
    .map((tag) => `#${tag.trim()}`)
    .join(" ");
  const tagsArray = article.tags.split(",").map((tag) => tag.trim());

  const formattedDescription = article.description.replace(/\n/g, "<br>");

  return (
    <div className="mt-10">
      <div className="text-white items-center lg:flex gap-2 ml-1">
        <div className="flex gap-1">
          <div className="dark:text-white text-black">
            <SiKhanacademy className="text-xl" />
          </div>
          <div className="dark:text-white text-black">
            Academy / {article.category} /
            <span className="text-blue-400 ml-1">{article.title}</span>
          </div>
        </div>
      </div>
      <div className="dark:bg-[#1e222d] bg-white flex justify-stretch items-center mt-5">
        <div className="lg:flex justify-between items-center gap-10">
          <div className="lg:w-1/2 lg:pl-10 px-5 mt-5">
            <button className="bg-blue-500 px-2 py-1 text-sm text-white">
              {article.category}
            </button>
            <h1 className="xl:text-4xl lg:text-3xl  my-4 font-semibold">
              {article.title}
            </h1>
            <div className="">
              <p className="text-[#9d9d9d] lowercase">{tags} |</p>
              <div className="flex">
                <p className="text-[#9d9d9d]">
                  {moment(article.date).format("ll")} |
                </p>
                <p className="text-[#9d9d9d] ml-1">
                  {article.viewCount ? `${article.viewCount} Views` : "0 Views"}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 mt-5 lg:mt-0 flex justify-end">
            <Image
              src={article.thumbnail}
              alt={article.title}
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

      {/* lowest part */}
      <div className="mt-5 dark:text-gray-300 text-black">
        <div
          className="mt-5 dark:text-gray-300 text-black"
          dangerouslySetInnerHTML={{ __html: formattedDescription }}
        ></div>

        <h1 className="mt-10 text-xl mb-4 dark:text-white text-black">
          <span className="font-semibold lg:text-3xl text-2xl">
            Related Topic |{" "}
          </span>{" "}
          {tagsArray.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-white dark:bg-[#1e222d] rounded-md px-2 py-1 mr-2 mt-2 hover:text-blue-500 cursor-pointer lg:text-xl text-[16px] text-black dark:text-white"
            >
              {tag}
            </span>
          ))}
        </h1>
      </div>
      <Comment articleId={_id}></Comment>
    </div>
  );
};

export default articlePage;