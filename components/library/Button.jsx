const Button = ({ className, children, ...restProps }) => {
  return (
    <button
      {...restProps}
      className={`btn btn-sm h-10 bg-primary hover:bg-primary/90 border-none font-medium text-white text-nowrap text-xs md:text-sm px-5 shadow-none rounded-md 
      ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
