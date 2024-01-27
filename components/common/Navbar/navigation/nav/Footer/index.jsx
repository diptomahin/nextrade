import Link from "next/link";
import { PiArrowRightThin } from "react-icons/pi";

export default function index() {
  return (
    <div className="flex items-center justify-between gap-5 text-sm">
      <Link
        href="https://github.com/diptomahin/nextrade"
        className="flex items-center gap-1 group"
      >
        Github{" "}
        <span className="style text-sm transition-transform group-hover:text-[#455ce9] group-hover:-rotate-45 group-hover:translate-x-[3px] duration-300 ease-in-out">
          <PiArrowRightThin />
        </span>
      </Link>
      <Link
        href="https://discord.com/channels/1194919130650910721/1194919131401703588"
        className="flex items-center gap-1 group"
      >
        Discord{" "}
        <span className="style text-sm transition-transform group-hover:text-[#455ce9] group-hover:-rotate-45 group-hover:translate-x-[3px] duration-300 ease-in-out">
          <PiArrowRightThin />
        </span>
      </Link>
      <Link
        href="https://www.youtube.com/"
        className="flex items-center gap-1 group"
      >
        Youtube{" "}
        <span className="style text-sm transition-transform group-hover:text-[#455ce9] group-hover:-rotate-45 group-hover:translate-x-[3px] duration-300 ease-in-out">
          <PiArrowRightThin />
        </span>
      </Link>
    </div>
  );
}
