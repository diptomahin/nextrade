"use client";
import useArticleData from "@/hooks/useArticleData";
import Image from "next/image";


const AdminArticle = () => {
  // articles data
  const {
    articles,
    refetch: articleRefetch,
    isLoading,
    isPending,
  } = useArticleData();

  articleRefetch()

 

  if(isLoading || isPending) {
    return ;
  } 

  return (
    <div className="mb-5 bg-white dark:bg-quaternary rounded-xl shadow-md dark:shadow-xl p-5">
      <h2 className="text-xl font-semibold ">Latest Post News</h2>
      {articles ? (
        <>
          {articles.slice(0, 3).map((news) => (
            <div
              className="xl:flex gap-5 my-5 xl:justify-between justify-center text-black dark:text-white "
              key={news._id}
            >
              <div className=" overflow-hidden mb-5 xl:mb-0">
                <Image
                  src={news.thumbnail}
                  alt={news.title}
                  width={200}
                  height={200}
                  className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
                />
              </div>

              <div className=" flex-1">
                <button className="relative px-2 py-1 text-sm text-white rounded overflow-hidden bg-darkTwo before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-darkOne before:transition-all before:duration-500   hover:before:left-0 hover:before:w-full">
                  <span className="relative z-10">{news.category}</span>
                </button>
                
                  <h3 className="lg:text-[16px] text-[14px] font-semibold 2xl:my-3 my-1 group  transition-all duration-300 ease-in-out">
                    <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      {news.title}
                    </span>
                  </h3>
                  <p className=" dark:text-gray-400">{news.description.slice(0,150)}</p>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <h2 className=" text-center font-semibold my-5">
            Data Loading . . .{" "}
          </h2>
        </>
      )}
    </div>
  );
};

export default AdminArticle;
