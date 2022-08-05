import { PageHeader } from "../../components/styled";
import StandardLayout from "../../layouts/standard";

type Props = {};

const TermsPage = (props: Props) => {
    return (
        <StandardLayout>
            <PageHeader>
                <div className="prose">
                    <h1 className="text-red-500">Terms &amp; Conditions</h1>
                </div>
            </PageHeader>
        </StandardLayout>
    );
};

export default TermsPage;
