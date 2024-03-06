import useDarkMode from "@/hooks/useDarkMode";
import Link from "next/link";

const SectionTitle = ({ title, btnText, btnUrl }) => {
  const isDarkMode = useDarkMode()
  return (
    <div className="flex justify-between items-center">
      <h2 className="lg:text-[30px] text-xl font-semibold">{title}</h2>
      <Link href={btnUrl ?? "#"}>
        <button
          className="relative font-semibold uppercase lg:text-normal text-[14px]"
          style={{
            display: "inline-block",
            paddingBottom: "2px",
            backgroundImage: "linear-gradient(white, white)",
            backgroundPosition: "0 100%",
            backgroundSize: "0% 2px",
            backgroundRepeat: "no-repeat",
            transition: "background-size 0.3s, background-position 0s 0.3s",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundPosition = "100% 100%";
            e.target.style.backgroundSize = "100% 2px";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundPosition = "0 100%";
            e.target.style.backgroundSize = "0% 2px";
          }}
        >
          <span className="absolute bottom-0 left-0 bg-white" />
          {btnText}
        </button>
      </Link>
    </div>
  );
};

export default SectionTitle;