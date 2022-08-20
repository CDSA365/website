import { NextPage } from "next";
import StudentDashboardLayout from "../../../../layouts/student-dashboard";

type Props = {};

const CompletedClasses: NextPage = (props: Props) => {
    return (
        <StudentDashboardLayout title="Completed Classes">
            <div>CompletedClasses</div>
        </StudentDashboardLayout>
    );
};

export default CompletedClasses;
