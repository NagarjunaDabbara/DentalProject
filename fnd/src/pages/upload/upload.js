import React from 'react'
import {useState} from 'react';
import axios from 'axios'

const Upload = () => {
    const [selectedFile, setselectedFile] = useState('');

    const submit=async()=>{
        console.log(selectedFile);
        const data = new FormData()
        data.append('file', selectedFile)
        console.warn(selectedFile);
        let url = "http://localhost:5000/upload";
        await axios.post(url, data, {
        })
        .then(res => {
            if(res.data.error_code==0){

            }else{
              alert('error')
            }
        })
    }
    return (
           <div class="w-full h-screen bg-white px-2">
               <div class="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                  <div class="md:flex">
                    <div class="w-full p-3">
                      <div class="relative border-dotted h-48 rounded-lg border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
                        <div class="absolute">
                          <div class="flex flex-col items-center">
                            {" "}
                            <i class="fa fa-folder-open fa-4x text-blue-700"></i>{" "}
                            <span class="block text-gray-400 font-normal">
                              {selectedFile.name?selectedFile.name:'Attach you files here'}
                            </span>{" "}
                          </div>
                        </div>{" "}
                        <input
                          type="file"
                          class="h-full w-full opacity-0"
                          name=""
                          onChange={(event)=>setselectedFile(event.target.files[0])}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button onClick={submit} className="p-4 bg-red-500">Click Me to submit</button>
            </div>
    )
}

export default Upload
