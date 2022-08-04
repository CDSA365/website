import { StyledButton, StyledHeader, StyledNavItem } from "./styled";
import { FaSignInAlt } from "react-icons/fa";
import { useState } from "react";

type Props = {};

type NavItems = {
    name: string;
};

const navItems: NavItems[] = [
    {
        name: "Home",
    },
    {
        name: "About Us",
    },
    {
        name: "Contact Us",
    },
];

const Header = (props: Props) => {
    const [activeNav, setActiveNav] = useState<number | null>(null);

    return (
        <StyledHeader>
            <div className="flex w-1/6 justify-start">
                <h1>Logo</h1>
            </div>
            <nav className="flex flex-row flex-1 h-full justify-center">
                <ul className="flex flex-row gap-2 items-center">
                    {navItems.map((item, key) => (
                        <StyledNavItem
                            key={key}
                            onClick={() => setActiveNav(key)}
                            active={key === activeNav}
                        >
                            {item.name}
                        </StyledNavItem>
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
