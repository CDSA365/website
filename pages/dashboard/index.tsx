import { FC } from "react";
import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import { FaArrowRight, FaCheck, FaClock, FaSpinner } from "react-icons/fa";
import {
    StatsContainer,
    StatsContent,
    StatsIcon,
    StatsItem,
    StatsToolbar,
    StyledButton,
} from "../../components/styled";
import DashboardLayout from "../../layouts/student-dashboard";

type Props = {};

const DashboardHome: FC<Props> = (props: Props) => {
    return (
        <DashboardLayout>
            <div className="">
                <StatsContainer>
                    <StatsItem>
                        <StatsToolbar>
                            <StatsIcon>
                                <FaClock />
                            </StatsIcon>
                            <div className="prose">
                                <h6 className="font-semibold text-slate-600">
                                    Scheduled Classes
                                </h6>
                            </div>
                        </StatsToolbar>
                        <StatsContent>
                            <List>
                                {[...Array(6)].map((_, key) => (
                                    <ListItem
                                        alignItems="flex-start"
                                        key={key}
                                        divider
                                        secondaryAction={
                                            <IconButton
                                                edge="end"
                                                aria-label="view"
                                                size="small"
                                                color="default"
                                            >
                                                <FaArrowRight />
                                            </IconButton>
                                        }
                                        className="last:border-0"
                                    >
                                        <ListItemText
                                            primary="List item one"
                                            secondary="I'll be in your neighborhood doing errands this"
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </StatsContent>
                        <StyledButton fullWidth variant="outlined" color="info">
                            View all
                        </StyledButton>
                    </StatsItem>
                    <StatsItem>
                        <StatsToolbar>
                            <StatsIcon>
                                <FaSpinner />
                            </StatsIcon>
                            <div className="prose">
                                <h6 className="font-semibold text-slate-600">
                                    In-progress Classes
                                </h6>
                            </div>
                        </StatsToolbar>
                        <StatsContent>
                            <List>
                                {[...Array(6)].map((_, key) => (
                                    <ListItem
                                        alignItems="flex-start"
                                        key={key}
                                        divider
                                        secondaryAction={
                                            <IconButton
                                                edge="end"
                                                aria-label="view"
                                                size="small"
                                                color="default"
                                            >
                                                <FaArrowRight />
                                            </IconButton>
                                        }
                                        className="last:border-0"
                                    >
                                        <ListItemText
                                            primary="List item one"
                                            secondary="I'll be in your neighborhood doing errands this"
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </StatsContent>
                        <StyledButton fullWidth variant="outlined" color="info">
                            View all
                        </StyledButton>
                    </StatsItem>
                    <StatsItem>
                        <StatsToolbar>
                            <StatsIcon>
                                <FaCheck />
                            </StatsIcon>
                            <div className="prose">
                                <h6 className="font-semibold text-slate-600">
                                    Completed Classes
                                </h6>
                            </div>
                        </StatsToolbar>
                        <StatsContent>
                            <List>
                                {[...Array(6)].map((_, key) => (
                                    <ListItem
                                        alignItems="flex-start"
                                        key={key}
                                        divider
                                        secondaryAction={
                                            <IconButton
                                                edge="end"
                                                aria-label="view"
                                                size="small"
                                                color="default"
                                            >
                                                <FaArrowRight />
                                            </IconButton>
                                        }
                                        className="last:border-0"
                                    >
                                        <ListItemText
                                            primary="List item one"
                                            secondary="I'll be in your neighborhood doing errands this"
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </StatsContent>
                        <StyledButton fullWidth variant="outlined" color="info">
                            View all
                        </StyledButton>
                    </StatsItem>
                </StatsContainer>
            </div>
        </DashboardLayout>
    );
};

export default DashboardHome;
