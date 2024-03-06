"use client";
import useAuth from "@/hooks/useAuth";
import usePublicAPI from "@/hooks/usePublicAPI";
import { useQuery } from "@tanstack/react-query";
import React, { useRef } from "react";
import { useMemo } from "react";
import Image from "next/image";

const Comment = ({ articleId }) => {
  const { user } = useAuth();
  const axiosPublic = usePublicAPI();

  const { data: articles = [], refetch } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await axiosPublic.get("/articles");
      return res.data;
    },
  });

  const commentText = useRef();

  const handleComment = () => {
    const commentTextValue = commentText.current.value;
    const comment = { commentTextValue };
    axiosPublic
      .patch(`/articles/comments/${articleId}`, comment)
      .then((res) => {
        console.log(res.data);
        refetch();
      });

    console.log(comment);
  };

  // Find the specific article by its _id
  const article = articles.find((article) => article._id === articleId);

  // articles view count
  const viewCount = useMemo(() => ({ count: 1 }), []);

  return (
    <div>
      <div className="mt-10">
        <h1 className="lg:text-3xl text-2xl font-semibold">Leave A Replay</h1>
        <div className="mt-1">
          <form className="lg:w-1/2">
            <label className="block mb-2 font-medium text-gray-900 dark:text-white">
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
        <button
          onClick={handleComment}
          className="text-uppercase px-4 py-3 bg-blue-600 text-white my-5"
        >
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
            <div className="w-10 h-10 overflow-hidden rounded-full">
              <Image
                alt="profile-image"
                width={40}
                height={40}
                src={user?.photoURL}
                className="w-full h-full rounded-full object-top object-cover"
              />
            </div>
            <div className="w-full ">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">Jackson Hayes</h1>
                <p className="text-sm">{article?.comment}</p>
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
