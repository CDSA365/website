import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
} from "@mui/material";
import Link from "next/link";
import React, { FC, useState } from "react";
import {
    FaBullhorn,
    FaCheck,
    FaClock,
    FaEnvelope,
    FaHome,
    FaMoneyBill,
    FaPenNib,
    FaSpinner,
    FaUser,
} from "react-icons/fa";

type Props = {};

const MenuItem = [
    {
        section: "Dashboard",
        items: [
            {
                name: "Home",
                icon: <FaHome className="text-stone-300" />,
                link: "/dashboard",
            },
            {
                name: "Announcements",
                icon: <FaBullhorn className="text-stone-300" />,
                link: "/dashboard/announcements",
            },
            {
                name: "Assignments",
                icon: <FaPenNib className="text-stone-300" />,
                link: "/dashboard/announcements",
            },
            {
                name: "Payments",
                icon: <FaMoneyBill className="text-stone-300" />,
                link: "/dashboard/payments",
            },
        ],
    },
    {
        section: "Classes",
        items: [
            {
                name: "Scheduled",
                icon: <FaClock className="text-stone-300" />,
                link: "/dashboard/classes/scheduled",
            },
            {
                name: "In-progress",
                icon: <FaSpinner className="text-stone-300" />,
                link: "/dashboard/classes/in-progress",
            },
            {
                name: "Completed",
                icon: <FaCheck className="text-stone-300" />,
                link: "/dashboard/classes/completed",
            },
        ],
    },

    {
        section: "Settings",
        items: [
            {
                name: "Profile",
                icon: <FaUser className="text-stone-300" />,
                link: "/dashboard/profile",
            },
        ],
    },
];

const StudentMenu: FC<Props> = (props) => {
    const [selectedIndex, setSelectedIndex] = useState<number>();
    const [selectedSection, setSelectedSection] = useState<string>();

    const handleClick = (index: number, section: string) => {
        setSelectedIndex(index);
        setSelectedSection(section);
    };

    return (
        <div>
            {MenuItem.map((item, key) => {
                return (
                    <List
                        key={key}
                        sx={{
                            width: "100%",
                            maxWidth: 240,
                        }}
                        component="nav"
                        subheader={
                            <ListSubheader
                                component="div"
                                id={item.section}
                                sx={{
                                    backgroundColor: "rgb(5, 30, 52)",
                                    color: "#fff",
                                }}
                            >
                                {item.section}
                            </ListSubheader>
                        }
                    >
                        {item.items.map((menu, key) => (
                            <Link href={menu.link} key={key}>
                                <ListItemButton
                                    key={key}
                                    selected={
                                        selectedIndex === key &&
                                        selectedSection === item.section
                                    }
                                    onClick={() =>
                                        handleClick(key, item.section)
                                    }
                                >
                                    <ListItemIcon>{menu.icon}</ListItemIcon>
                                    <ListItemText
                                        primary={menu.name}
                                        primaryTypographyProps={{
                                            color: "white",
                                            fontWeight: "medium",
                                            variant: "body2",
                                        }}
                                    />
                                </ListItemButton>
                            </Link>
                        ))}
                    </List>
                );
            })}
        </div>
    );
};

export default StudentMenu;
