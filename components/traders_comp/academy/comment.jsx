"use client";
import useAuth from "@/hooks/useAuth";
import usePublicAPI from "@/hooks/usePublicAPI";
import { useQuery } from "@tanstack/react-query";
import React, { useRef } from "react";
import { useEffect } from "react";
import Image from "next/image";
import Button from "@/components/library/Button";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const Comment = ({ articleId }) => {
  const { user } = useAuth();
  const axiosPublic = usePublicAPI();

  const isDarkMode = true;

  const { data: articles = [], refetch } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await axiosPublic.get("/articles");
      return res.data;
    },
  });

  const commentText = useRef();

  const handleComment = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    const commentTextValue = commentText.current.value;
    const date = new Date();
    const comment = {
      text: commentTextValue,
      email: user.email,
      name: user.displayName,
      photo: user.photoURL,
      date: date.toISOString() // Convert date to ISO string format
    };
  
    axiosPublic.post(`/articles/${articleId}/comments`, comment)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Comment Added Successfully", {
            duration: 3000,
          });
          refetch(); // Refetch articles to update UI with new comment
          commentText.current.value = "";
        }
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
        // Handle error
      });
  };
  

  const article = articles.find((article) => article._id === articleId);

  // articles view count
  const count = 1;
  const viewCount = { count };

  useEffect(() => {
    axiosPublic.patch(`/articles/viewCount/${articleId}`, viewCount);
  }, [axiosPublic, articleId]);

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
              className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:bg-[#1e222d]"
              placeholder="Leave a comment..."
            ></textarea>
          </form>
        </div>
        <Button
          onClick={handleComment}
          className="text-uppercase px-4 py-3 bg-blue-600 text-white my-5"
        >
          Post Comment
        </Button>
      </div>
      <div className="md:mt-20 mt-10">
        <div className="flex justify-between mb-3">
          <h1>59 comments</h1>
          <p>Sort by: Top</p>
        </div>
        {/* Conditionally render the <hr> element based on dark mode */}
        {isDarkMode ? <hr className="bg-white" /> : <hr className="bg-black" />}
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
              <div className="dark:bg-[#1e222d] bg-white rounded-lg p-3 ">
                <h1 className="font-bold">{user.displayName}</h1>
                <p className="text-sm">{article?.comment}</p>
              </div>
              <p className="flex gap-3 text-sm mt-1">
                <span>like</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-center"></Toaster>
    </div>
  );
};

export default Comment;
