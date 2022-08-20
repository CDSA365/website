import { NextPage } from "next";
import StudentDashboardLayout from "../../../../layouts/student-dashboard";

type Props = {};

const ScheduledClasses: NextPage = (props: Props) => {
    return (
        <StudentDashboardLayout title="Scheduled Classes">
            <div>Scheduled Classes</div>
        </StudentDashboardLayout>
    );
};

export default ScheduledClasses;
