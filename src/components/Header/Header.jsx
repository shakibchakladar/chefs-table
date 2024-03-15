import { CiSearch } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
// import bgImage from "../../img/Rectangle 1 (1).png"

const Header = () => {
  return (
    <div className=" container mx-auto p-5">
      {/* navbar start */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost text-2xl font-bold">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex justify-center gap-4 items-center">
            <label className="input input-bordered flex items-center gap-2 rounded-2xl">
              <CiSearch />
              <input type="text" className="grow" placeholder="Search" />
            </label>
            <span className="text-[#0BE58A] text-4xl">
              <IoMdContact />
            </span>
          </div>
        </div>
      </div>
      {/* navbar end */}

      <div className="hero h-[500px] mt-4 rounded-xl" style={{backgroundImage:'url(https://i.ibb.co/j42d7Qq/Rectangle-1-1.png'}}>
  <div className=" rounded-xl hero-overlay bg-opacity-35"></div>
  <div className=" text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-5"> Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer</p>
      <div className="flex gap-6 justify-evenly mt-5 p-2">
      <button className="btn border-none rounded-2xl text-black bg-[#0BE58A]">Explore now</button>
      <button className="btn btn-outline text-white border-white rounded-2xl">Our feedback</button>
      </div>
    </div>
  </div>
</div>
    </div>
    

    
  );
};

export default Header;
