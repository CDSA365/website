import { FC, useEffect, useState } from "react";
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
import axios from "axios";
import { config } from "../../config/config";
import { useAppSelector } from "../../store/hooks";
import Link from "next/link";
import ClassListDetails from "../../components/class-list-details";

type Props = {};

const DashboardHome: FC<Props> = (props: Props) => {
    const [classes, setClasses] = useState<any[]>([]);
    const [scheduledClasses, setScheduledClasses] = useState<any[]>([]);
    const [inprogressClasses, setInprogressClasses] = useState<any[]>([]);
    const [completedClasses, setCompletedClasses] = useState<any[]>([]);

    const {
        data: { id },
    } = useAppSelector((state) => state.user);

    useEffect(() => {
        function getClasses() {
            axios
                .get(config.api.getStudentClasses + `/${id}`)
                .then(({ data }) => {
                    setClasses(data);
                });
        }
        getClasses();
    }, []);

    useEffect(() => {
        const scheduled = classes.filter(
            (x) => x.progress_state === "SCHEDULED"
        );
        const inprogress = classes.filter(
            (x) => x.progress_state === "INPROGRESS"
        );
        const completed = classes.filter(
            (x) => x.progress_state === "COMPLETED"
        );
        console.log("scheduled classes", scheduled);
        setScheduledClasses(scheduled.slice(0, 7));
        setInprogressClasses(inprogress.slice(0, 7));
        setCompletedClasses(completed.slice(0, 7));
    }, [classes]);

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
                                {scheduledClasses.map((item, key) => (
                                    <ListItem
                                        alignItems="flex-start"
                                        key={key}
                                        divider
                                        secondaryAction={
                                            <Link
                                                href={`/dashboard/classes/${item.slug}`}
                                            >
                                                <IconButton
                                                    edge="end"
                                                    aria-label="view"
                                                    size="small"
                                                    color="default"
                                                >
                                                    <FaArrowRight />
                                                </IconButton>
                                            </Link>
                                        }
                                        className="last:border-0"
                                    >
                                        <ListItemText
                                            primary={item.title}
                                            secondary={
                                                <ClassListDetails
                                                    trainer={item.trainer_name}
                                                    start={item.start_time}
                                                />
                                            }
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
                                {inprogressClasses.map((_, key) => (
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
                                {completedClasses.map((_, key) => (
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

// export async function getServerSideProps() {}

export default DashboardHome;
