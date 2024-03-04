import cn from "../utils/cn";

const Container = ({ children, className }) => {
  return (
    <div className={cn("max-w-7xl mx-5 md:mx-10 4xl:mx-auto", className)}>
      {children}
    </div>
  );
};
export default Container;
