import React from 'react';
import Link from 'next/link';

interface NavLink {
    href: string;
    label: string;
}

interface NavbarProps {
    links: NavLink[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
    return (
        <nav className="bg-white shadow-md mb-3">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="text-xl font-bold">
                    <Link href="/">
                        CP content viewer
                    </Link>
                </div>
                <div className="flex space-x-4">
                    {links.map((link, index) => (
                        <React.Fragment key={link.href}>
                            {index > 0 && <span className="text-gray-300">|</span>}
                            <Link href={link.href} className="text-gray-700 hover:text-gray-900">
                                {link.label}
                            </Link>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
