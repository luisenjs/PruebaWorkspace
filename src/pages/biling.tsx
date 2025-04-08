import { CreditCard, User } from "lucide-react";

export function Biling() {
    return (
        <div className="w-full h-full p-5 pt-10">
            <div>
                <h2 className="text-4xl">Details</h2>
                <div className="flex gap-4 p-10 w-[70%]">
                    <div className="flex flex-col gap-3 w-[50%]">
                        <div className="flex gap-3 justify-between">
                            <span className="text-gray-400">Next payment</span>
                            <CreditCard />
                        </div>
                        <h3 className="text-5xl font-bold">$50</h3>
                        <span>Dec 21, 2022</span>
                        <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lobortis velit mollis erat pellentesque,</p>
                    </div>
                    <div className="flex flex-col gap-3 w-[50%]">
                        <div className="flex gap-3 justify-between">
                            <span>User</span>
                            <User />
                        </div>
                        <h3 className="text-5xl font-bold">15/15 <span className="text-xl">used</span></h3>
                        <p>To add more users to the workspace you need to buy more seats</p>
                        <button className="bg-blue-700 rounded-lg py-2 px-12 text-center text-white">Buy</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-10">
                <h3 className="text-4xl">Cloud storage</h3>
                <div className="flex gap-20">
                    <div className="flex flex-col">
                        <h3 className="font-bold text-3xl">150 GB</h3>
                        <p>storage</p>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-bold text-3xl">80 GB</h3>
                        <p>used</p>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-bold text-3xl">70 GB</h3>
                        <p>free</p>
                    </div>
                </div>
            </div>
        </div>
    )
}