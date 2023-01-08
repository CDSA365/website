import { MenuDropDown, StyledButton, StyledHeader, StyledNavItem } from "./styled";
import { FaBars, FaCaretDown, FaCaretRight, FaEnvelope, FaPhoneAlt, FaSignInAlt } from "react-icons/fa";
import { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

type Props = {};

type NavItems = {
    name: string;
    link: string;
    submenus: Partial<NavItems>[];
};

const navItems: NavItems[] = [
    {
        name: "Home",
        link: "",
        submenus: [],
    },
    {
        name: "About Us",
        link: "about-us",
        submenus: [],
    },
    {
        name: "Courses",
        link: "courses",
        submenus: [
            {
                name: "Public Speaking for Kids",
                link: "public-speaking-for-kids",
            },
            {
                name: "Public Speaking for Adults",
                link: "public-speaking-for-adults",
            },
        ],
    },
    {
        name: "Kids Classes",
        link: "kids",
        submenus: [],
    },
    {
        name: "Adults Classes",
        link: "adults",
        submenus: [],
    },
    {
        name: "Contact Us",
        link: "contact-us",
        submenus: [],
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
                            <FaEnvelope /> <span className="hidden md:block">info@cdsa365.com</span>
                        </li>
                    </a>
                    <a href="tel:+919486051647">
                        <li className="p-4 text-red-200 hover:text-white font-semibold text-sm flex gap-3 items-center border-white/40 last:border-r-[1px]">
                            <FaPhoneAlt /> <span className="hidden md:block">+91-9486051647</span>
                        </li>
                    </a>
                </ul>
            </section>
            <StyledHeader>
                <div className="flex w-1/6 justify-start">
                    <Link href={"/"}>
                        <div className="w-full h-full">
                            <Image
                                src={"https://www.cdsa365.com/images/cdsa-logo.png"}
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
                                    className="group"
                                >
                                    {item.name} &nbsp; {item?.submenus && item.submenus.length > 0 && <FaCaretDown />}
                                    {item?.submenus && item.submenus.length > 0 && (
                                        <MenuDropDown>
                                            {item.submenus?.map((submenu, key) => (
                                                <Link href={`/${item.link}/${submenu.link}`} key={key}>
                                                    <StyledNavItem
                                                        active={key === activeNav}
                                                        className="hover:bg-red-700 hover:text-white p-4"
                                                    >
                                                        {submenu.name}
                                                    </StyledNavItem>
                                                </Link>
                                            ))}
                                        </MenuDropDown>
                                    )}
                                </StyledNavItem>
                            </Link>
                        ))}
                    </ul>
                </nav>
                <div className="hidden md:flex w-1/6 justify-end">
                    <Link href={"https://student.cdsa365.com"}>
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
            <Drawer anchor="left" open={showSidebar} onClose={() => setShowSidebar(false)}>
                <Box sx={{ width: 300, paddingTop: "1em", paddingBottom: "1em" }} role="presentation">
                    <div className="p-3 prose">
                        <h4>Menu</h4>
                    </div>
                    <List component="ul">
                        {navItems.map((item, key) => {
                            return (
                                <Fragment key={key}>
                                    <Link href={`/${item.link}`}>
                                        <ListItem key={key} sx={{ padding: 0 }}>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <FaCaretRight />
                                                </ListItemIcon>
                                                <ListItemText primary={item.name} />
                                            </ListItemButton>
                                        </ListItem>
                                    </Link>

                                    {item.submenus && item.submenus.length > 0 && (
                                        <List component="ul" disablePadding>
                                            {item.submenus?.map((submenu, key) => (
                                                <Link href={`/${item.link}/${submenu.link}`} key={key}>
                                                    <ListItem key={key} sx={{ padding: 0 }}>
                                                        <ListItemButton>
                                                            <ListItemIcon>
                                                                <FaCaretRight />
                                                            </ListItemIcon>
                                                            <ListItemText primary={submenu.name} />
                                                        </ListItemButton>
                                                    </ListItem>
                                                </Link>
                                            ))}
                                        </List>
                                    )}
                                </Fragment>
                            );
                        })}

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
