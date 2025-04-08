import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { EllipsisVertical, LayoutList, Search, UserPlus } from "lucide-react";

type User = {
    user: string;
    status: string;
    phone: string;
    position: string;
    department: string;
    activity: string;
}

const columnHelper = createColumnHelper<User>()

const columns = [
    columnHelper.accessor("user", {
        header: () => (<span className="flex gap-2 items-center w-full px-3">User</span>),
        cell: info => (<p className="flex gap-2 items-center w-full px-3">{info.getValue()}</p>)
    }),
    columnHelper.accessor("status", {
        header: () => (<span className="flex gap-2 items-center w-full justify-center px-3">Status</span>),
        cell: info => (<p className="flex gap-2 items-center w-full justify-center px-3">{info.getValue()}</p>)
    }),
    columnHelper.accessor("phone", {
        header: () => (<span className="flex gap-2 items-center w-full justify-center px-3">Phone</span>),
        cell: info => (<p className="flex gap-2 items-center w-full justify-center px-3">{info.getValue()}</p>)
    }),
    columnHelper.accessor("position", {
        header: () => (<span className="flex gap-2 items-center w-full justify-center px-3">Position</span>),
        cell: info => (<p className="flex gap-2 items-center w-full justify-center px-3">{info.getValue()}</p>)
    }),
    columnHelper.accessor("department", {
        header: () => (<span className="flex gap-2 items-center w-full justify-center px-3">Department</span>),
        cell: info => (<p className="flex gap-2 items-center w-full justify-center px-3">{info.getValue()}</p>)
    }),
    columnHelper.accessor("activity", {
        header: () => (<span className="flex gap-2 items-center w-full justify-center px-3">Activity</span>),
        cell: info => (<p className="flex gap-2 items-center w-full justify-center px-3">{info.getValue()}</p>)
    }),
]

const data = [
    {
        user: "Andrew Bojangles",
        status: "Active",
        phone: "+790000939399",
        position: "Designer",
        department: "Pride 1",
        activity: "2 days ago"
    },
    {
        user: "Andrew Bojangles",
        status: "Active",
        phone: "+790000939399",
        position: "Designer",
        department: "Pride 1",
        activity: "2 days ago"
    },
    {
        user: "Andrew Bojangles",
        status: "Active",
        phone: "+790000939399",
        position: "Designer",
        department: "Pride 1",
        activity: "2 days ago"
    },
    {
        user: "Andrew Bojangles",
        status: "Active",
        phone: "+790000939399",
        position: "Designer",
        department: "Pride 1",
        activity: "2 days ago"
    },
    {
        user: "Andrew Bojangles",
        status: "Active",
        phone: "+790000939399",
        position: "Designer",
        department: "Pride 1",
        activity: "2 days ago"
    }
]

export function Users() {

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    })

    return (
        <div className="w-full h-full flex flex-col gap-4">
            <div className="w-full flex justify-around p-9 text-gray-300">
                <div className="flex flex-col gap-3 items-center p-2">
                    <h2 className="text-5xl font-semibold text-black">12</h2>
                    <span className="text-xl">Peoples</span>
                </div>
                <div className="border" />
                <div className="flex flex-col gap-3 items-center p-2">
                    <h2 className="text-5xl font-semibold text-black">5</h2>
                    <span className="text-xl">Departments</span>
                </div>
                <div className="border" />
                <div className="flex flex-col gap-3 items-center p-2">
                    <h2 className="text-5xl font-semibold text-black">0</h2>
                    <span className="text-xl">Guests</span>
                </div>
            </div>
            <div className="w-full flex gap-3 px-4">
                <div className="relative w-full flex border border-gray-300 rounded-lg">
                    <Search className="absolute top-2 left-1 text-gray-400" />
                    <input className="pl-8 py-2 w-full" type="text" placeholder="Seach.." />
                </div>
                <button className="flex gap-2 bg-blue-700 rounded-lg py-2 px-12 text-white"><UserPlus />Invite</button>
                <button className="bg-gray-200 rounded-lg px-2"><EllipsisVertical className="text-blue-500" /></button>
            </div>
            <div>
                <div className="flex gap-3 justify-between px-5">
                    <div>
                        <select className="w-32" name="day" id="day">
                            <option value="all">All</option>
                        </select>
                        <select className="w-44" name="day" id="day">
                            <option value="alld">All Departments</option>
                        </select>
                    </div>
                    <button><LayoutList className="text-blue-500" /></button>
                </div>
                <div className="w-full rounded-xl p-5">
                    <table className="bg-white w-full text-gray-500">
                        <thead>
                            {
                                table.getHeaderGroups().map(headerGroup => (
                                    <tr key={headerGroup.id}>
                                        <th className="w-10">
                                            <input type="checkbox" name="all" id="all" />
                                        </th>
                                        {
                                            headerGroup.headers.map(header => (
                                                <th key={header.id} className="py-7">
                                                    {
                                                        flexRender(header.column.columnDef.header, header.getContext())
                                                    }
                                                </th>
                                            ))
                                        }
                                    </tr>
                                ))
                            }
                        </thead>
                        <tbody>
                            {
                                table.getRowModel().rows.map(row => (
                                    <tr key={row.id} className="hover:bg-gray-200">
                                        <td className="flex w-10 justify-center py-5">
                                            <input type="checkbox" name="user" id="user" />
                                        </td>
                                        {
                                            row.getVisibleCells().map(cell => (
                                                <td key={cell.id} className="py-3">
                                                    {
                                                        flexRender(cell.column.columnDef.cell, cell.getContext())
                                                    }
                                                </td>
                                            ))
                                        }
                                        <td>
                                            <button className="rounded-lg px-2"><EllipsisVertical /></button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}