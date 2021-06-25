import React from 'react'

const Table = ({restdata}) => {
    return (
<div class=" w-full p-2 ">
        <table class="w-full border">
            <thead>
                <tr class="bg-white border-b">
                    <th class="p-2  cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            First Name

                        </div>
                    </th>
                    <th class="p-2  cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            Last name

                        </div>
                    </th>
                    <th class="p-2  cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            Gender

                        </div>
                    </th>
                    <th class="p-2  cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            Prof Designation

                        </div>
                    </th>
                    <th class="p-2  cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            

                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
            { restdata.length>0 && restdata?.map((i,j)=>(
                <tr class="bg-white text-center border-b text-sm text-gray-600">

                    <td class="p-2 ">{i['first name']}</td>
                    <td class="p-2 ">{i['last name']}</td>
                    <td class="p-2 ">{i['gender']}</td>
                    <td class="p-2 ">{i['professional designation']}</td>
                    <td>
                        <a href="#" class="bg-blue-500 p-2 px-8 text-white hover:shadow-lg text-xs font-thin rounded ">View </a>
                    </td>
                </tr>

            ))}
            </tbody>
        </table>
    </div>
    )
}

export default Table
