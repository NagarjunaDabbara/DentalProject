import React,{useState} from 'react'
import './nav.css'

const Nav = () => {
    return (
        <>
<link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />

  <div class="flex flex-col w-36 bg-blue-400 3xl overflow-hidden">

    <ul class="flex flex-col py-4 divide-y-2 divide-blue-500 divide-opacity-75 md:divide-opacity-50 mx-5">
      <li>
        <a href="/" class="flex flex-col items-center h-24 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-white"><i class="bx bx-home"></i></span>
          <span class="text-sm font-medium">Dashboard</span>
        </a>
      </li>
      <li>
        <a href="/upload" class="flex flex-col items-center h-24 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-white"><i class="bx bx-music"></i></span>
          <span class="text-sm font-medium">Upload</span>
        </a>
      </li>
      <li>
        <a href="/location" class="flex flex-col items-center h-24 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-white"><i class="bx bx-drink"></i></span>
          <span class="text-sm font-medium">Location</span>
        </a>
      </li>
      <li>
        <a href="#" class="flex flex-col items-center h-24 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-white"><i class="bx bx-shopping-bag"></i></span>
          <span class="text-sm font-medium">Quality Control Queue</span>
        </a>
      </li>
      <li>
        <a href="#" class="flex flex-col items-center h-24 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-white"><i class=""></i></span>
          <span class="text-sm font-medium"></span>
        </a>
      </li>
    </ul>
  </div>
</>
)
}

export default Nav
