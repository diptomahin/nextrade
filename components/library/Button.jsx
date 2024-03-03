const Button = ({ className, children, ...restProps }) => {
  return (
    <button
      {...restProps}
      className={`btn btn-sm h-10 bg-primary/90 hover:bg-primary border-none font-medium text-white text-nowrap text-sm md:text-base rounded-md 
      ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
