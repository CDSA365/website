import {
    Avatar,
    Divider,
    IconButton,
    Toolbar,
    Typography,
} from "@mui/material";
import { ReactElement, useState } from "react";
import { FaBars } from "react-icons/fa";
import StudentMenu from "../components/student-dashboard/menu";
import {
    DashboardContainer,
    DashboardMainSection,
    SideBar,
    StyledAppBar,
    StyledContentBox,
} from "../components/styled";

type Props = {
    children: ReactElement;
};

const StudentDashboardLayout = ({ children }: Props) => {
    const [showSidebar, setShowSidebar] = useState(true);
    return (
        <DashboardContainer>
            <SideBar show={showSidebar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        CDSA365
                    </Typography>
                </Toolbar>
                <Divider />
                <StudentMenu />
            </SideBar>
            <DashboardMainSection sidebarVisible={showSidebar}>
                <StyledAppBar
                    position="fixed"
                    color="default"
                    elevation={0}
                    sidebarVisible={showSidebar}
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
                        <Avatar />
                    </Toolbar>
                </StyledAppBar>
                <StyledContentBox className="p-4">{children}</StyledContentBox>
            </DashboardMainSection>
        </DashboardContainer>
    );
};

export default StudentDashboardLayout;
