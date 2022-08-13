import {
    Avatar,
    Divider,
    IconButton,
    Toolbar,
    Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import StudentMenu from "../components/student-dashboard/menu";
import {
    DashboardContainer,
    DashboardMainSection,
    SideBar,
    StyledAppBar,
    StyledButton,
    StyledContentBox,
} from "../components/styled";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { removeUser } from "../store/slice/user-slice";

type Props = {
    children: ReactElement;
};

const StudentDashboardLayout = ({ children }: Props) => {
    const [showSidebar, setShowSidebar] = useState(true);
    const { data: user } = useAppSelector((state) => state.user);
    const router = useRouter();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!user.isLoggedIn) {
            router.push("/login");
        }
    }, [user]);

    return (
        <DashboardContainer>
            <SideBar show={showSidebar}>
                <Link href={"/"}>
                    <Toolbar className="cursor-pointer">
                        <Typography variant="h6" noWrap>
                            CDSA365
                        </Typography>
                    </Toolbar>
                </Link>
                <Divider />
                <StudentMenu />
            </SideBar>
            <DashboardMainSection sidebarvisible={showSidebar}>
                <StyledAppBar
                    position="fixed"
                    color="default"
                    elevation={0}
                    sidebarvisible={showSidebar}
                >
                    <Toolbar>
                        <IconButton
                            size="medium"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => setShowSidebar(!showSidebar)}
                        >
                            <FaBars />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            News
                        </Typography>
                        {user.isLoggedIn && (
                            <StyledButton
                                startIcon={<FaSignOutAlt />}
                                color="error"
                                onClick={() => dispatch(removeUser())}
                            >
                                Logout
                            </StyledButton>
                        )}
                    </Toolbar>
                </StyledAppBar>
                <StyledContentBox className="p-4">{children}</StyledContentBox>
            </DashboardMainSection>
        </DashboardContainer>
    );
};

export default StudentDashboardLayout;
