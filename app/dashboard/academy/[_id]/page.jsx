import React from "react";
import getArticles from "@/lib/getArticles";
import Image from "next/image";
import TextField from "@mui/material/TextField";
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
          <h3 className="my-3">Your email address will not be published.</h3>
          <TextField
            className="lg:w-[520px] w-full border-white	"
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

          <div className="mt-5 grid lg:grid-cols-3 gap-4 w-full lg:w-[520px]">
            <TextField
              className="w-full"
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
              className="mx-4 w-full mt-10"
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
              className="w-full"
              id="outlined-basic"
              label="Website"
              variant="outlined"
              InputLabelProps={{
                style: { color: "white" }, // Text color of the label
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

      <div className="md:mt-20 mt-10">
        <div className="flex justify-between mb-3">
          <h1>59 comments</h1>
          <p>Sort by: Top</p>
        </div>
        <hr />

        <div>
          <div className="flex gap-2 mt-3">
            <div className=" ">
              <img className="w-14 h-13 rounded" src="photo-01.jpeg" alt="" />
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

          <div className="flex gap-2 mt-3">
            <div className=" ">
              <img
                className="w-14 h-13 rounded"
                src="https://www.maastrichtuniversity.nl/sites/default/files/ppp/70061313/30516371_1641676775900851_872905631365857280_o.jpg"
                alt=""
              />
            </div>

            <div className="w-full ">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">Benjamin Johnson</h1>
                <p className="text-sm">This is a miracle 🙏</p>
              </div>
              <p className="flex gap-3 text-sm mt-1">
                <span>like</span>
                <span>40k </span>
                <span>15hrs</span>
              </p>
            </div>
          </div>

          <div className="flex gap-2 mt-3">
            <div className=" ">
              <img
                className="w-14 h-13 rounded"
                src="https://avatars.githubusercontent.com/u/9420872?v=4"
                alt=""
              />
            </div>

            <div className="w-full ">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">Ethan Mitchell</h1>
                <p className="text-xs text-blue-500">@BH Brouce</p>
                <p className="text-sm">Try this now</p>
              </div>
              <p className="flex gap-3 text-sm mt-1">
                <span>like</span>
                <span>38k </span>
                <span>14hrs</span>
              </p>
            </div>
          </div>

          <div className="flex gap-2 mt-3 ml-14">
            <div className=" ">
              <img
                className="w-14 h-13 rounded"
                src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
                alt=""
              />
            </div>

            <div className="w-full ">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">BH Brouce</h1>
                <p className="text-sm">Thanks a bunch my friend 😃</p>
              </div>
              <p className="flex gap-3 text-sm mt-1">
                <span>like</span>
                <span>32k </span>
                <span>5hrs</span>
              </p>
            </div>
          </div>

          <div className="flex gap-2 mt-3">
            <div className=" ">
              <img
                className="w-14 h-13 rounded"
                src="https://cdn.openart.ai/uploads/image_random_kl21BrQ9_1667612486229_1024.webp"
                alt=""
              />
            </div>

            <div className="w-full ">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">Mason Davis</h1>
                <p className="text-sm">Let's gooooo💰</p>
              </div>
              <p className="flex gap-3 text-sm mt-1">
                <span>like</span>
                <span> 30k </span>
                <span>12hrs</span>
              </p>
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            <div className=" ">
              <img
                className="w-14 h-13 rounded"
                src="https://cdn.midjourney.com/98afccce-5a42-4387-a61b-1c35dfa86b9f/grid_0_640_N.webp"
                alt=""
              />
            </div>

            <div className="w-full ">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">Oliver Turner</h1>
                <p className="text-sm">🥇 TOP</p>
              </div>
              <p className="flex gap-3 text-sm mt-1">
                <span>like</span>
                <span> 26k </span>
                <span>10hrs</span>
              </p>
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            <div className=" ">
              <img
                className="w-14 h-13 rounded"
                src="https://xsgames.co/randomusers/assets/avatars/male/63.jpg"
                alt=""
              />
            </div>

            <div className="w-full ">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">Liam Parker</h1>
                <p className="text-sm">I can't believe 😱</p>
              </div>
              <p className="flex gap-3 text-sm mt-1">
                <span>like</span>
                <span> 22k </span>
                <span>9hrs</span>
              </p>
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            <div className=" ">
              <img
                className="w-14 h-13 rounded"
                src="https://xsgames.co/randomusers/assets/avatars/male/46.jpg"
                alt=""
              />
            </div>

            <div className="w-full ">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">Noah Campbell</h1>
                <p className="text-sm">My Score is 96😱</p>
              </div>
              <p className="flex gap-3 text-sm mt-1">
                <span>like</span>
                <span> 16k </span>
                <span>7hrs</span>
              </p>
            </div>
          </div>

          <div className="flex gap-2 mt-3 ml-14">
            <div>
              <img
                className="w-14 h-13 rounded"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4bxv_2whDpQagGtPptWTamKmYAbeWkfjgh37VfZg89LV1WVLkhOgni5anwUzvdQj8JLo&usqp=CAU"
                alt=""
              />
            </div>

            <div className="w-full ">
              <div className="bg-[#474747] rounded-lg p-3">
                <h1 className="font-bold">Jameson Bennett</h1>
                <p className="text-sm">I just missed 100 for 3 point.</p>
              </div>
              <p className="flex gap-3 text-sm mt-1">
                <span>like</span>
                <span> 12k </span>
                <span>5hrs</span>
              </p>
            </div>
          </div>

          <div className="flex gap-2 mt-3 ml-24">
            <div className=" ">
              <img
                className="w-14 h-13 rounded"
                src="https://avatars.githubusercontent.com/u/31961792?v=4"
                alt=""
              />
            </div>

            <div className="w-full ">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">Alexander Rogers</h1>
                <p className="text-sm">My score is 100 and I get offer 😁</p>
              </div>
              <p className="flex gap-3 text-sm mt-1">
                <span>like</span>
                <span> 3k </span>
                <span>3hrs</span>
              </p>
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            <div className=" ">
              <img
                className="w-14 h-13 rounded"
                src="https://msgilliamswebpage.weebly.com/uploads/1/1/8/9/118947166/dusk-profile-3_2.jpg"
                alt=""
              />
            </div>

            <div className="w-full">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">Alexander Rogers</h1>
                <p className="text-sm">Is this real?</p>
              </div>
              <p className="flex gap-3 text-sm mt-1">
                <span>like</span>
                <span>3k </span>
                <span>30 minute</span>
              </p>
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            <div className=" ">
              <img
                className="w-14 h-13 rounded"
                src="https://bpconf.com/wp-content/uploads/profile/1011.jpg"
                alt=""
              />
            </div>

            <div className="w-full ">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">Alexander Rogers</h1>
                <p className="text-sm">Thanks for this test 😊</p>
              </div>
              <p className="flex gap-3 text-sm mt-1">
                <span>like</span>
                <span> 1k </span>
                <span>6 minute</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default articlePage;
