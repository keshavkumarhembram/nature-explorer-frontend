import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar";

import { getTours } from "../Home";


export default function Root() {
    return(
        <>
        <header>
            <NavBar/>
        </header>

        {/* pages/routes */}
        <div id="details">
        <Outlet />
        </div>

        <footer className="h-[3000px]">

        </footer>
        </>
    );
}