import { Card } from "@/components/card";
import { Pen } from "lucide-react";

const admins = [
    {
        img: "/src/assets/user2.svg",
        name: "John Johnson",
        charge: "CEO"
    },
    {
        img: "/src/assets/user1.svg",
        name: "Jane Cooper",
        charge: "Desing lead"
    }
]

export function General() {
    return (
        <div className="h-full w-full">
            <div className="flex items-center px-3 py-6 gap-5">
                <img src="/src/assets/workspace-avatar.svg" alt="" />
                <h2 className="text-4xl font-bold">Workspace name</h2>
                <Pen />
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-2xl">Workspace admins</h3>
                <div className="flex gap-3">
                    {
                        admins.map((admin) => (
                            <Card img={admin.img} title={admin.name} charge={admin.charge} />
                        ))
                    }
                    <Card className="border border-blue-500" img="/src/assets/icon-plus.svg" title="Add admin" />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-2xl">Settings</h3>
                <div className="flex flex-col gap-3">
                    <div className="max-w-[500px] flex justify-between">
                        <span>Week start</span>
                        <select name="day" id="day">
                            <option value="monday">Monday</option>
                            <option value="tuesday">Tuesday</option>
                            <option value="wednesday">Wednesday</option>
                            <option value="thursday">Thursday</option>
                            <option value="friday">Friday</option>
                            <option value="saturday">Saturday</option>
                            <option value="sunday">Sunday</option>
                        </select>
                    </div>
                    <div className="max-w-[500px] flex justify-between">
                        <span>Notification</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="group peer ring-0 bg-gray-400  rounded-full outline-none duration-300 after:duration-300 w-20 h-7  shadow-md peer-checked:bg-blue-500  peer-focus:outline-none  after:content-['✖️']  after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-5 after:w-5 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-12 peer-checked:after:content-['✔️'] peer-hover:after:scale-95 peer-checked:after:rotate-0">
                            </div>
                        </label>
                    </div>
                    <div className="max-w-[500px] flex justify-between">
                        <span>Week start</span>
                        <select name="day" id="day">
                            <option value="monday">Monday</option>
                            <option value="tuesday">Tuesday</option>
                            <option value="wednesday">Wednesday</option>
                            <option value="thursday">Thursday</option>
                            <option value="friday">Friday</option>
                            <option value="saturday">Saturday</option>
                            <option value="sunday">Sunday</option>
                        </select>
                    </div>
                    <div className="max-w-[500px] flex justify-between">
                        <span>Notification</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="group peer ring-0 bg-gray-400  rounded-full outline-none duration-300 after:duration-300 w-20 h-7  shadow-md peer-checked:bg-blue-500  peer-focus:outline-none  after:content-['✖️']  after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-5 after:w-5 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-12 peer-checked:after:content-['✔️'] peer-hover:after:scale-95 peer-checked:after:rotate-0">
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}