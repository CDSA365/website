import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { config } from "../../../../config/config";
import { frameTableRows } from "../../../../helpers/common-helpers";
import StudentDashboardLayout from "../../../../layouts/student-dashboard";
import { useAppSelector } from "../../../../store/hooks";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import { FaPhone, FaVideo } from "react-icons/fa";
import { Paper } from "@mui/material";

type Props = {};

const CompletedClasses: NextPage = (props: Props) => {
    const [completedClasses, setCompletedClasses] = useState<any[]>([]);
    const [isLoadingData, setIsLoadingData] = useState(true);
    const { id } = useAppSelector((state) => state.user.data);

    const columns: GridColDef[] = [
        {
            field: "title",
            headerName: "Title",
            width: 250,
            renderCell: (params) => (
                <Link href={`/dashboard/classes/${params.row.slug}`}>
                    {params.row.title}
                </Link>
            ),
        },
        { field: "start_time", headerName: "Start time", width: 200 },
        { field: "end_time", headerName: "End time", width: 200 },
        { field: "trainer_name", headerName: "Trainer", width: 130 },
        {
            field: "type",
            headerName: "Class type",
            align: "center",
            renderCell: (params) =>
                params.row.type === "phone" ? (
                    <FaPhone className="text-sky-500" />
                ) : (
                    <FaVideo className="text-emerald-500" />
                ),
        },
        {
            field: "link",
            headerName: "Video link",
            renderCell: (param) =>
                param.row.link && (
                    <a href={param.row.link} target="__blank">
                        {param.row.link}
                    </a>
                ),
        },
    ];

    const rows = frameTableRows(completedClasses);

    useEffect(() => {
        (() => {
            const url = config.api.getStudentClasses + `/${id}`;
            axios.get(url).then(({ data }) => {
                setCompletedClasses(
                    data.filter((x: any) => x.progress_state === "COMPLETED")
                );
                setIsLoadingData(false);
            });
        })();
    }, []);

    return (
        <StudentDashboardLayout title="Completed Classes">
            <Paper elevation={0} style={{ height: 700, width: "100%" }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    loading={isLoadingData}
                    rowHeight={64}
                />
            </Paper>
        </StudentDashboardLayout>
    );
};

export default CompletedClasses;
