import { NextPage } from "next";
import StudentDashboardLayout from "../../../../layouts/student-dashboard";

type Props = {};

const InprogressClasses: NextPage = (props: Props) => {
    return (
        <StudentDashboardLayout title="Classes in-progress">
            <div>InprogressClasses</div>
        </StudentDashboardLayout>
    );
};

export default InprogressClasses;
