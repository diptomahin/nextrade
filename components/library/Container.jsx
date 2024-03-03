const Container = ({ children, className }) => {
  return (
    <div className={`max-w-7xl mx-5 md:mx-10 4xl:mx-auto  ${className}`}>
      {children}
    </div>
  );
};
export default Container;
