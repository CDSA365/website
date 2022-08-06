import { FC } from "react";
import { PageHeader } from "./styled";

type Props = {
    title: string;
};

const PageHeading: FC<Props> = ({ title }) => {
    return (
        <PageHeader className="bg-[url('/images/pattern-header.png')]">
            <div className="prose">
                <div className="px-6 py-2 bg-red-500 rounded-lg ring-4 ring-red-500 ring-inset">
                    <h1 className="text-white my-0">{title}</h1>
                </div>
            </div>
        </PageHeader>
    );
};

export default PageHeading;
