import Link from "next/link";

const SectionTitle = ({title, btnText, btnUrl}) => {
    return ( 
        <div className="flex justify-between items-center">
            <h2 className="text-[30px] font-semibold">{title}</h2>
            <Link href={btnUrl ?? "#"}>
                <button className="font-semibold uppercase border-b-2 border-black">{btnText}</button>
            </Link>
        </div>
     );
}
 
export default SectionTitle;