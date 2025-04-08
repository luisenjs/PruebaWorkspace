import { CreditCard, House, LogOut, User } from "lucide-react";
import { NavLink, Outlet } from "react-router";

export function MainLayout() {
    return (
        <div className="flex flex-row h-screen w-screen">
            <div className="bg-gray-100 flex flex-col flex-none h-full w-60 justify-center items-center">
                <div className="flex m-10 text-center justify-center items-center gap-3">
                    <img src="/src/assets/company.svg" alt="company" />
                    <h1 className="text-xl font-semibold">Company</h1>
                </div>
                <div className="flex flex-col gap-3 grow p-4 w-full">
                    <NavLink className={({ isActive }) => `flex gap-3 rounded-lg px-3 py-2 ${isActive ? "bg-blue-600 text-white" : "hover:bg-gray-300"}`} to="/" ><House />General</NavLink>
                    <NavLink className={({ isActive }) => `flex gap-3 rounded-lg px-3 py-2 ${isActive ? "bg-blue-600 text-white" : "hover:bg-gray-300"}`} to="/users" ><User />Users</NavLink>
                    <NavLink className={({ isActive }) => `flex gap-3 rounded-lg px-3 py-2 ${isActive ? "bg-blue-600 text-white" : "hover:bg-gray-300"}`} to="/biling"><CreditCard />Biling</NavLink>
                </div>
                <div className="flex w-full items-center justify-center p-4">
                    <button className="flex gap-2"><LogOut />Sign out</button>
                </div>
            </div>
            <div className="flex flex-col w-full max-h-full">
                <div className="h-full w-full">
                    <Outlet />
                </div>
            </div>
        </div >
    )
}