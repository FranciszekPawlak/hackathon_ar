'use client'
import './layout.css';
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <Link href="/">
            <div className="header">
                <Image
                    src="/OB_logo1.png"
                    alt="Logo"
                    width={200}
                    height={200}
                />
            </div>
        </Link>
    )
}