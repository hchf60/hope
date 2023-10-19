'use client'
import Link from "next/link"

export default function Footer() {
    return(
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <footer>
        <div class="flex flex-col">
            <h1 class="text-2xl sm:text-center font-bold tracking-tight text-gray-500">
                Hope Children Foundation
            </h1>
            <div class="flex flex-row">

            </div>
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" class="hover:underline">HCF</a>. All Rights Reserved.</span>
        </div>
            {/* <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                <Link href="/">
                <h1 class="text-3xl font-bold tracking-tight text-gray-900">HCF</h1>
                </Link>
                </div>
                <div class="sm:flex sm:items-center sm:justify-between">
                <h2 class="text-1xl font-bold tracking-tight text-gray-900">
                    Social Welfare Council Registration Number 52049</h2>
                </div>
                <div class="sm:flex sm:items-center sm:justify-between">
                <h2 class="text-1xl font-bold tracking-tight text-gray-900">
                    PAN Number 609772971</h2>
                </div>
                <div class="sm:flex sm:items-center sm:justify-between">
                <h2 class="text-1xl font-bold tracking-tight text-gray-900">
                    Company Registration Number 239548/077/078</h2>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Bansbari</a>. All Rights Reserved.</span>
            </div> */}
        </footer>
    </div>
    )
}

