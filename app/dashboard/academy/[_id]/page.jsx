import React from "react";
import getArticles from "@/lib/getArticles";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import moment from "moment";

const articlePage = async ({ params }) => {
  const { _id } = params;
  const article = await getArticles(_id);
  const tags = article.tags
    .split(",")
    .map((tag) => `#${tag.trim()}`)
    .join(" ");
  const tagsArray = article.tags.split(",").map((tag) => tag.trim());

  return (
    <div className="mt-10 container mx-auto">
      <h1 className="text-white">
        Academy / {article.category} /{" "}
        <span className="text-blue-400">{article.title}</span>
      </h1>
      <div className="bg-[#1e222d] flex justify-stretch items-center mt-5">
        <div className="flex justify-between items-center gap-10">
          <div className="w-1/2 pl-10">
            <button className="bg-blue-500 px-2 py-1 text-sm text-white">
              {article.category}
            </button>
            <h1 className="text-4xl my-4 font-semibold">{article.title}</h1>
            <div className="flex gap-1">
              <p className="text-[#9d9d9d] lowercase">{tags} |</p>
              <p className="text-[#9d9d9d]">
                {moment(article.date).format("ll")} .
              </p>
              <p className="text-[#9d9d9d]">1k Views</p>
            </div>
          </div>

          <div className="w-1/2 flex justify-end">
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
          <span className="font-semibold text-3xl">Related Topic | </span>{" "}
          {tagsArray.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-[#1e273d] rounded-md px-2 py-1 mr-2 hover:text-blue-500 cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </h1>
        <div className="mt-10">
          <h1 className="text-3xl font-semibold">Leave A Replay</h1>
          <h3 className="my-3">Your email address will not be published.</h3>
          <TextField
            className="w-[520px] border-white	"
            id="fullWidth"
            label="Comment"
            variant="outlined"
            InputLabelProps={{
              style: { color: "white", borderColor: "white" }, // Text color of the label
            }}
            InputProps={{
              style: { color: "white", borderColor: "white" }, // Text color and border color of the input field
            }}
          />

          <div className="mt-5 grid grid-cols-3 gap-4 w-[520px]">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              InputLabelProps={{
                style: { color: "white", borderColor: "white" }, // Text color of the label
              }}
              InputProps={{
                style: { color: "white", borderColor: "white" }, // Text color and border color of the input field
              }}
            />
            <TextField
              className="mx-4"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              InputLabelProps={{
                style: { color: "white", borderColor: "white" }, // Text color of the label
              }}
              InputProps={{
                style: { color: "white", borderColor: "white" }, // Text color and border color of the input field
              }}
            />
            <TextField
              id="outlined-basic"
              label="Website"
              variant="outlined"
              InputLabelProps={{
                style: { color: "white", borderColor: "white" }, // Text color of the label
              }}
              InputProps={{
                style: { color: "white", borderColor: "white" }, // Text color and border color of the input field
              }}
            />
          </div>

          <button className="text-uppercase px-4 py-3 bg-blue-600 text-white my-5">
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default articlePage;