'use client'
import Link from "next/link"

export default function Footer() {
    return(
    <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
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
        </div>
    </footer>
    )
}

