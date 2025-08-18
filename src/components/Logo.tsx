const Logo = () => {
  return (
    <div className="shadow-md self-center bg-First w-12 h-12 2xl:w-28 2xl:h-28 xl:w-20 xl:h-20 max-sm:w-10 max-sm:h-10 flex justify-evenly p-2 rounded-full place-items-center max-sm:col-span-1 max-sm:row-span-1 max-sm:row-start-2">
      <div className="bg-Third h-3 w-1.5  2xl:w-4 2xl:h-8 xl:w-2.5 xl:h-5 rounded-full "></div>
      <div className="bg-Fourth h-3 w-1.5  2xl:w-4 2xl:h-8 xl:w-2.5 xl:h-5 rounded-full "></div>
      <div className="bg-Second h-3 w-1.5  2xl:w-4 2xl:h-8 xl:w-2.5 xl:h-5 rounded-full "></div>
    </div>
  );
};

export default Logo;
