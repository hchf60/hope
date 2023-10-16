'use client'
import Link from "next/link";

export default function Navigation() {
 
  return (
    <div>
    <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <div class="flex-shrink-0">
          <Link href="/">
          <p class="rounded-md text-white font-bold font-serif text-2xl text-blue-400 tracking-wide ">HCF</p>
          </Link>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <Link href="/team" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
              Team
              </Link>
              <Link href="/project" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
              Projects
              </Link>
              <Link href="/reports" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
              Reports
              </Link>
            </div>
          </div>
          <div class="md:hidden">
            <div class="ml-10 flex items-baseline space-x-2">
              <Link href="/team" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
              Team
              </Link>
              <Link href="/project" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
              Projects
              </Link>
              <Link href="/reports" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
              Reports
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </nav>
    </div>
  )
}