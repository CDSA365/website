import { StyledButton, StyledHeader, StyledNavItem } from "./styled";
import {
    FaBars,
    FaCaretRight,
    FaEnvelope,
    FaPhoneAlt,
    FaSignInAlt,
} from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

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
        name: "Kids Classes",
        link: "kids",
    },
    {
        name: "Adults Classes",
        link: "adults",
    },
    {
        name: "Contact Us",
        link: "contact-us",
    },
];

const Header = (props: Props) => {
    const [activeNav, setActiveNav] = useState<number | null>(null);
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    return (
        <>
            <section className="bg-red-700 w-full">
                <ul className="flex justify-end md:px-4 divide-x-[1px] divide-white/40">
                    <a href="mailto:info@cdsa365.com">
                        <li className="p-4 text-red-200 hover:text-white font-semibold text-sm flex gap-3 items-center border-white/40 first:border-l-[1px] ">
                            <FaEnvelope />{" "}
                            <span className="hidden md:block">
                                info@cdsa365.com
                            </span>
                        </li>
                    </a>
                    <a href="tel:+919486051647">
                        <li className="p-4 text-red-200 hover:text-white font-semibold text-sm flex gap-3 items-center border-white/40 last:border-r-[1px]">
                            <FaPhoneAlt />{" "}
                            <span className="hidden md:block">
                                +91-9486051647
                            </span>
                        </li>
                    </a>
                </ul>
            </section>
            <StyledHeader>
                <div className="flex w-1/6 justify-start">
                    <Link href={"/"}>
                        <div className="w-full h-full">
                            <Image
                                src={"../images/cdsa-logo.png"}
                                alt="logo"
                                width={100}
                                height={100}
                                layout="intrinsic"
                            />
                        </div>
                    </Link>
                </div>
                <nav className="hidden md:flex md:flex-row md:flex-1 h-full justify-center">
                    <ul className="flex flex-row gap-2 items-center">
                        {navItems.map((item, key) => (
                            <Link href={`/${item.link}`} key={key}>
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
                <div className="hidden md:flex w-1/6 justify-end">
                    <Link href={"/"}>
                        <StyledButton color="error">
                            <FaSignInAlt /> Login
                        </StyledButton>
                    </Link>
                </div>
                <div className="md:hidden flex w-1/6 justify-end">
                    <IconButton onClick={() => setShowSidebar(!showSidebar)}>
                        <FaBars />
                    </IconButton>
                </div>
            </StyledHeader>
            <Drawer
                anchor="left"
                open={showSidebar}
                onClose={() => setShowSidebar(false)}
            >
                <Box
                    sx={{ width: 250, paddingTop: "1em", paddingBottom: "1em" }}
                    role="presentation"
                >
                    <div className="p-3 prose">
                        <h4>Menu</h4>
                    </div>
                    <List>
                        {navItems.map((item, key) => (
                            <Link href={`/${item.link}`} key={key}>
                                <ListItem key={key} sx={{ padding: 0 }}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <FaCaretRight />
                                        </ListItemIcon>
                                        <ListItemText primary={item.name} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        ))}
                        <Link href="https://student.cdsa365.com">
                            <ListItem sx={{ padding: 0 }}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FaSignInAlt />
                                    </ListItemIcon>
                                    <ListItemText primary={"Login"} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default Header;
