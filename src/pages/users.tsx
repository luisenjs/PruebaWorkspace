import { EllipsisVertical, Search, UserPlus } from "lucide-react";

export function Users() {
    return (
        <div className="w-full h-full flex flex-col gap-4">
            <div className="w-full flex justify-around p-9 text-gray-300">
                <div className="flex flex-col gap-3 items-center p-2">
                    <h2 className="text-5xl font-semibold text-black">12</h2>
                    <span>Peoples</span>
                </div>
                <div className="border" />
                <div className="flex flex-col gap-3 items-center p-2">
                    <h2 className="text-5xl font-semibold text-black">5</h2>
                    <span>Departments</span>
                </div>
                <div className="border" />
                <div className="flex flex-col gap-3 items-center p-2">
                    <h2 className="text-5xl font-semibold text-black">0</h2>
                    <span>Guests</span>
                </div>
            </div>
            <div className="w-full flex gap-3 px-2">
                <div className="relative w-full flex border border-gray-300 rounded-lg">
                    <Search className="absolute top-2 left-1 text-gray-400" />
                    <input className="pl-8 py-2 w-full" type="text" placeholder="Seach.." />
                </div>
                <button className="flex gap-2 bg-blue-700 rounded-lg py-2 px-12 text-white"><UserPlus />Invite</button>
                <button className="bg-gray-200 rounded-lg px-2"><EllipsisVertical /></button>
            </div>
            <div>
                <div className="flex gap-3">
                    <select className="w-32" name="day" id="day">
                        <option value="all">All</option>
                    </select>
                    <select className="w-44" name="day" id="day">
                        <option value="alld">All Departments</option>
                    </select>
                </div>
            </div>
        </div>
    )
}