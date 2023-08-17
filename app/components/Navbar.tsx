const Navbar = () => {
  return (
    <div className="flex py-5 px-3 bg-secondary/60 w-full">
      <div className="w-full flex justify-between">
        <h1 className="font-bold text-3xl text-white">
          HRWells <span className="text-teal-300">Blog</span>
        </h1>
        <div className="flex gap-4 mx-4 text-white text-xl font-semibold">
          <h2 className="hover:text-teal-300 cursor-pointer">Projects</h2>
          <h2 className="hover:text-teal-300 cursor-pointer">Contact</h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
