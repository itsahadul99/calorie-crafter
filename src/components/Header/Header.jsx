import { FaRegUserCircle } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
const Header = () => {
    return (
        <div className="container mx-auto px-2 lg:px-5 py-5 lg:py-10 flex flex-col lg:flex-row justify-around items-center space-y-3 lg:space-y-5">
            <div>
                <h1 className=" text-2xl lg:text-3xl font-bold ">Calorie Crafter</h1>
            </div>
            <div className="flex gap-2 lg:gap-8 *:px-3 *:py-2 *:rounded-lg *:text-sm">
                <a href="#" className="hover:bg-gray-200 ">Home</a>
                <a href="#" className="hover:bg-gray-200 ">Recipes</a>
                <a href="#" className="hover:bg-gray-200 ">About</a>
                <a href="#" className="hover:bg-gray-200 ">Search</a>
            </div>
            <div className="flex gap-3 lg:gap-5 items-center">
                <div className="relative flex">
                    <input className=" bg-slate-100 px-5 py-2 rounded-full border-none text-center" type="text" placeholder="Search" />
                    <IoMdSearch className="absolute left-3 top-2 text-gray-400 text-2xl" />
                </div>
                <FaRegUserCircle className="text-4xl text-[#0BE58A]" />
            </div>
        </div>
    );
};

export default Header;