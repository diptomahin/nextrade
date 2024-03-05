"use client";
import useAuth from "@/hooks/useAuth";
import usePublicAPI from "@/hooks/usePublicAPI";
import React, { useEffect, useRef } from "react";

const Comment = ({ articleId }) => {
  const { user } = useAuth();
  const axiosPublic = usePublicAPI();

  const { data: article = [], refetch } = useQuery({
    queryKey: ["article"],
    queryFn: async () => {
      const res = await axiosPublic.get("/articles");
      return res.data;
    },
  });

  console.log(article);

  const commentText = useRef();

const handelComment = () => {
  const commentTextValue = commentText.current.value
  const comment = {commentTextValue}
  console.log(comment);
}







  // articles view count
  const count = 1;
  const viewCount = { count };

  useEffect(() => {
    axiosPublic.patch(`/articles/viewCount/${articleId}`, viewCount);
  }, [articleId, axiosPublic, viewCount]);

  return (
    <div>
      <div className="mt-10">
        <h1 className="lg:text-3xl text-2xl font-semibold">Leave A Replay</h1>

        <div className="mt-1">
          <form className="lg:w-1/2">
            <label
              for="message"
              className="block mb-2 font-medium text-gray-900 dark:text-white"
            >
              Your info will not be published*
            </label>
            <textarea
              id="message"
              ref={commentText}
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-[#1e222d] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."
            ></textarea>
          </form>
        </div>

        <button className="text-uppercase px-4 py-3 bg-blue-600 text-white my-5">
          Post Comment
        </button>
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

export default Comment;
