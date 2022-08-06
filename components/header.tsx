import { StyledButton, StyledHeader, StyledNavItem } from "./styled";
import { FaSignInAlt } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

type Props = {};

type NavItems = {
    name: string;
    link: string;
};

const navItems: NavItems[] = [
    {
        name: "Home",
        link: "",
    },
    {
        name: "About Us",
        link: "about-us",
    },
    {
        name: "Courses",
        link: "courses",
    },
    {
        name: "Contact Us",
        link: "contact-us",
    },
];

const Header = (props: Props) => {
    const [activeNav, setActiveNav] = useState<number | null>(null);

    return (
        <StyledHeader>
            <div className="flex w-1/6 justify-start">
                <h1>Logo</h1>
            </div>
            <nav className="hidden md:flex md:flex-row md:flex-1 h-full justify-center">
                <ul className="flex flex-row gap-2 items-center">
                    {navItems.map((item, key) => (
                        <Link href={`/${item.link}`}>
                            <StyledNavItem
                                key={key}
                                onClick={() => setActiveNav(key)}
                                active={key === activeNav}
                            >
                                {item.name}
                            </StyledNavItem>
                        </Link>
                    ))}
                </ul>
            </nav>
            <div className="flex w-1/6 justify-end">
                <StyledButton color="error">
                    <FaSignInAlt /> Login
                </StyledButton>
            </div>
        </StyledHeader>
    );
};

export default Header;
