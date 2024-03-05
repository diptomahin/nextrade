'use client'
import useArticleData from "@/hooks/useArticleData";
import Image from "next/image";
import Link from "next/link";

const AdminArticle = () => {
       // articles data
  const { articles, refetch: articleRefetch,isLoading,
     isPending } = useArticleData();

 
     return (
          <div>
               {
                    articles ? (<>
                   {articles.map(news => <div className="flex gap-5 my-5" key={news._id}>
              <Link href={`/dashboard/academy/${news._id}`}>
                <div className="w-[200px] overflow-hidden">
                  <Image
                    src={news.thumbnail}
                    alt={news.title}
                    width={200}
                    height={200}
                    className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
                  />
                </div>
              </Link>

              <div>
                <button class="relative px-2 py-1 text-sm text-white overflow-hidden bg-darkTwo before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-darkOne before:transition-all before:duration-500   hover:before:left-0 hover:before:w-full">
                  <span class="relative z-10">{news.category}</span>
                </button>
                <Link href={`/dashboard/academy/${news._id}`}>
                  <h3 className="lg:text-[16px] text-[14px] font-semibold 2xl:my-3 my-1 group text-white transition-all duration-300 ease-in-out">
                    <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      {news.title}
                    </span>
                  </h3>
                </Link>
                <p className="text-gray-500">
                  {/* {moment(news?.date).format("ll")} */}
                </p>
              </div>
            </div>)}
                    </>) : (<>
            <h2 className=" text-center font-semibold my-5">Data Loading . . . </h2>
          </>)
               }
          </div>
     );
};

export default AdminArticle;