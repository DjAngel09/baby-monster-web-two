'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface Props {
    path: string;
    icon: JSX.Element;
    title: string;
}

export const SidebarMenuItem = ({ path, icon, title }: Props) => {

    const pathName = usePathname();

    return (
        <li>
            <Link href={path} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <div>{icon}</div>
                <span className="ms-3">{title}</span>
            </Link>
        </li>
    )
}