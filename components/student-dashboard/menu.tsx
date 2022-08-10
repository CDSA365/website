import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
} from "@mui/material";
import Link from "next/link";
import React, { FC } from "react";
import {
    FaBullhorn,
    FaCheck,
    FaClock,
    FaEnvelope,
    FaMoneyBill,
    FaSpinner,
    FaUser,
} from "react-icons/fa";

type Props = {};

const MenuItem = [
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
        section: "Dashboard",
        items: [
            {
                name: "Announcements",
                icon: <FaBullhorn className="text-stone-300" />,
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
                            <Link href={menu.link}>
                                <ListItemButton key={key}>
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
