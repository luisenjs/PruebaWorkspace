import { LogOut } from "lucide-react";
import { NavLink, Outlet } from "react-router";

export function MainLayout() {
    return (
        <div className="flex flex-row h-screen w-screen">
            <div className="bg-gray-100 flex-none h-full w-60 justify-center items-center">
                <div className="flex m-10 text-center justify-center">Company</div>
                <div className="flex flex-col gap-3 grow p-4">
                    <NavLink to="/" >General</NavLink>
                    <NavLink to="/users" >Users</NavLink>
                    <NavLink to="/biling" >Biling</NavLink>
                </div>
                <div className="flex">
                    <button className="flex gap-2"><LogOut />Sign out</button>
                </div>
            </div>
            <div className="flex flex-col w-full max-h-full">
                <div className="h-full w-full">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}