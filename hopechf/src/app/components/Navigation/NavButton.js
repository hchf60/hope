'use client'
import Link from "next/link";

export default function NavButton({ name,link }) {
    return (
        <Link href={link} class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md md:px-3 py-2 px-2 text-sm font-medium">
              {name}
        </Link>
    )
}