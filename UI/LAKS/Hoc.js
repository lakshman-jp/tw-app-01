//
export const Container = ({ children, className = "" }) => {
  return (
    <div className={`${className} py-36`}>
      <div className="w-8/12 mx-auto">{children}</div>
    </div>
  );
};
