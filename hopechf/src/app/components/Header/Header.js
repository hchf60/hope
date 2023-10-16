'use client'
import Link from "next/link";

export default function Header() {
 
  return (
    <header class="bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <Link href="/">
      <h1 class="md:text-3xl font-bold tracking-tight text-gray-900 ">Hope Children Foundation</h1>
      </Link>
    </div>
  </header>
  )
}

