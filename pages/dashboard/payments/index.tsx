import { Alert, Paper } from "@mui/material";
import axios from "axios";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { config } from "../../../config/config";
import { framePaymentTableRows } from "../../../helpers/common-helpers";
import StudentDashboardLayout from "../../../layouts/student-dashboard";
import { useAppSelector } from "../../../store/hooks";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

type Props = {};

const PaymentsPage: NextPage = (props: Props) => {
    const [paymentHistory, setPaymentHistory] = useState<any[]>([]);
    const { id } = useAppSelector((state) => state.user.data);

    const columns: GridColDef[] = [{ field: "" }];
    const rows = framePaymentTableRows(paymentHistory);

    useEffect(() => {
        (() => {
            const url = config.api.getPaymentHistory + `/${id}`;
            axios
                .get(url)
                .then(({ data }) => setPaymentHistory(data))
                .catch((err) => console.log(err.response.data));
        })();
    }, []);

    useEffect(() => {
        console.log(paymentHistory);
    }, [paymentHistory]);

    return (
        <StudentDashboardLayout title="Payments">
            <div className="flex">
                <Paper elevation={1} className="w-1/4 p-3">
                    <div className="prose">
                        <div className="bg-white p-2 border-dashed border-gray-500 border-2 rounded">
                            <Image
                                src={"../../images/UPIQR.png"}
                                alt="Carpe Diem Skills Academy - UPI QR CODE"
                                layout="responsive"
                                width={258}
                                height={258}
                            />
                        </div>
                        <div className="py-3">
                            <Alert color="info">
                                Please scan the QR code above to make payment
                            </Alert>
                        </div>
                    </div>
                </Paper>
                <div className="w-3/4"></div>
            </div>
        </StudentDashboardLayout>
    );
};

export default PaymentsPage;
