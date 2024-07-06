import { Link } from "react-router-dom";
import logo from './../assets/brand/logo-white.png';

export default function NavBar() {
    return (
        <nav className="bg-bg-grey text-white">
            <div className="mx-auto w-[90%] h-20 nav-container flex justify-between items-center">
            <Link to="/">ALL TOURS</Link>
            <img className="h-8" src={logo} alt="Brand Logo" />
            <ul className="nav-list flex gap-8 sm:gap-16">
                <Link to = '/login'>LOGIN</Link>
                <Link to = '/signup'>SIGNUP</Link>
            </ul>
            </div>
        </nav>
    );
}