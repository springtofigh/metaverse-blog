import Link from 'next/link';

const Sidebar = () => {
  return (
        <div
        class="sidebar fixed top-0 bottom-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 z-20 lg:right-0"
        >
            <div class="text-gray-100 text-xl">
            <div class="p-2.5 mt-1 flex items-center">
                <h1 class="font-extrabold text-gray-200 text-[24px] ml-3">
                متاورس فارسی
                </h1>
            </div>
            <div class="my-2 bg-gray-600 h-[1px]"></div>
            </div>
            <div
            class="flex items-center p-2.5 mt-3 rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
            >
            <Link href="/">
            <span class="text-[15px] ml-4 text-gray-200 font-bold">
                خانه
            </span>
            </Link>
            </div>
            <div
            class="flex items-center p-2.5 mt-3 rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
            >
            <span class="text-[15px] ml-4 text-gray-200 font-bold">
            <Link href="/about">
                درباره متاورس
            </Link>
            </span>
            </div>
            <div
            class="flex items-center p-2.5 mt-3 rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
            >
            <Link href="/worlds">
            <span class="text-[15px] ml-4 text-gray-200 font-bold">
                جهان ها
            </span>    
            </Link>
            </div>
            <div
            class="flex items-center p-2.5 mt-3 rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
            >
            <Link href="/know-metavers">
            <span class="text-[15px] ml-4 text-gray-200 font-bold">
                آشنایی با متاورس
            </span>
            </Link>
            </div>
            <div
            class="flex items-center p-2.5 mt-3 rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
            >
            <Link href="/newest">
            <span class="text-[15px] ml-4 text-gray-200 font-bold">
                تازه ترین ها
            </span>
            </Link>
            </div>
            <div
            class="flex items-center p-2.5 mt-3 rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
            >
            <Link href="/articles">
            <span class="text-[15px] ml-4 text-gray-200 font-bold">
                مقالات
            </span>
            </Link>
            </div>
        </div>
  )
}

export default Sidebar