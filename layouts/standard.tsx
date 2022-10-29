import Head from "next/head";
import { FC, ReactNode } from "react";
import Footer from "../components/footer";
import Header from "../components/header";

type Props = {
    children?: ReactNode;
    title?: string;
    description?: string;
    keyword?: string;
    [x: string]: any;
};

const StandardLayout: FC<Props> = ({ children, ...props }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default StandardLayout;
