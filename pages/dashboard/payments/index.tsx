import { NextPage } from "next";
import StudentDashboardLayout from "../../../layouts/student-dashboard";

type Props = {};

const PaymentsPage: NextPage = (props: Props) => {
    return (
        <StudentDashboardLayout title="Payments">
            <div className="flex justify-center items-center">
                <div className="prose">
                    <p>Please scan the QR code above to make payment</p>
                </div>
            </div>
        </StudentDashboardLayout>
    );
};

export default PaymentsPage;
