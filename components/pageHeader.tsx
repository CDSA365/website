import { FC } from "react";
import { PageHeader } from "./styled";

type Props = {
    title: string;
};

const PageHeading: FC<Props> = ({ title }) => {
    return (
        <PageHeader className="bg-[url('/images/pattern-header.png')]">
            <div className="prose">
                <h1 className="text-red-500">{title}</h1>
            </div>
        </PageHeader>
    );
};

export default PageHeading;
