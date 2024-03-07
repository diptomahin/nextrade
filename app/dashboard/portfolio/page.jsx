import Portfolio from "./Portfolio";

// add title in metadata
export const metadata = {
  title: "Portfolio - Dashboard",
  description: "Portfolio from Dashboard",
};
const page = () => {
  return (
    <div>
      <Portfolio/>
    </div>
  );
};

export default page;