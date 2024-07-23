import { Link } from "react-router-dom";
import logo from './../assets/brand/logo-white.png';

export default function NavBar() {
    return (
        <nav className="bg-bg-grey text-white">
            <div className="mx-auto w-[90%] text-sm font-bold sm:font-bold sm:text-inherit h-20 nav-container flex justify-between items-center">
            <Link to="/">ALL TOURS</Link>
            <img className="h-6 sm:h-8" src={logo} alt="Brand Logo" />
            <ul className="nav-list flex gap-4 sm:gap-16">
                <Link className="border border-white rounded-full px-4 py-2 hover:bg-gray-400 ease-in-out" to = '/login'>LOGIN</Link>
                <Link className="border border-white rounded-full px-4 py-2 hover:bg-gray-400 ease-in-out" to = '/signup'>SIGNUP</Link>
            </ul>
            </div>
        </nav>
    );
}