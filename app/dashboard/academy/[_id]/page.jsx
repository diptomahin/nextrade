import React from "react";
import getArticles from "@/lib/getArticles";
import Image from "next/image";
import moment from "moment";
import { SiKhanacademy } from "react-icons/si";

const articlePage = async ({ params }) => {
  const { _id } = params;
  const article = await getArticles(_id);
  const tags = article.tags
    .split(",")
    .map((tag) => `#${tag.trim()}`)
    .join(" ");
  const tagsArray = article.tags.split(",").map((tag) => tag.trim());

  return (
    <div className="mt-10">
      <div className="text-white items-center lg:flex gap-2 ml-1">
        <div className="flex gap-1">
          <div>
            <SiKhanacademy className="text-xl" />
          </div>
          <div>
            Academy / {article.category} /
            <span className="text-blue-400 ml-1">{article.title}</span>
          </div>
        </div>
      </div>
      <div className="bg-[#1e222d] flex justify-stretch items-center mt-5">
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
                <p className="text-[#9d9d9d] ml-1"> 1k Views</p>
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
      <div className="mt-5 text-gray-300">
        <h3>{article.description}</h3>

        <h1 className="mt-10 text-xl mb-4 text-white">
          <span className="font-semibold lg:text-3xl text-2xl">
            Related Topic |{" "}
          </span>{" "}
          {tagsArray.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-[#1e273d] rounded-md px-2 py-1 mr-2 mt-2 hover:text-blue-500 cursor-pointer lg:text-xl text-[16px]"
            >
              {tag}
            </span>
          ))}
        </h1>
        <div className="mt-10">
          <h1 className="lg:text-3xl text-2xl font-semibold">Leave A Replay</h1>
         
         
          
          <div className="mt-1">
          <form className="w-1/2">
  <label for="message" className="block mb-2 font-medium text-gray-900 dark:text-white">Your info will not be published*</label>
  <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
</form>
          </div>

          <button className="text-uppercase px-4 py-3 bg-blue-600 text-white my-5">
            Post Comment
          </button>
        </div>
      </div>

      <div className="md:mt-20 mt-10">
        <div className="flex justify-between mb-3">
          <h1>59 comments</h1>
          <p>Sort by: Top</p>
        </div>
        <hr />

        <div>
          <div className="flex gap-2 mt-3">
            <div className=" ">
              {/* <img className="w-14 h-13 rounded" src="photo-01.jpeg" alt="" /> */}
            </div>

            <div className="w-full ">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">Jackson Hayes</h1>
                <p className="text-sm">Wow, Thanks Man😱</p>
              </div>
              <p className="flex gap-3 text-sm mt-1">
                <span>like</span>
                <span>56k </span>
                <span>17hrs</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default articlePage;
