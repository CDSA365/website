import Head from "next/head";
import { FC, ReactNode, useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";

type Props = {
    children?: ReactNode;
    title?: string;
    description?: string;
    keyword?: string;
    [x: string]: any;
};

const StandardLayout: FC<Props> = ({
    title,
    description,
    keyword,
    children,
    ...props
}) => {
    const defaultTitle = `Online Spoken English Classes, Communication Skills Training,  Spoken English Courses Coimbatore, Best English Speaking Courses, Public Speaking Skills Coimbatore`;
    const defaultDesc = `Carpe Diem Skills Academy offers the best online spoken English classes and communication training in Coimbatore, India. We have a team of trainers who are experienced in improving interpersonal communication skills.`;
    const defaultKeyword = `Online Spoken English Classes,Spoken English Classes Online,Spoken English Courses Online,Online Spoken English Courses,Spoken English Courses,Spoken English Classes,Best English Speaking Courses,Best English Speaking Courses Online,Best Spoken English Classes Online,Best Spoken English Classes,Communication Skills Training in Coimbatore,Public Speaking Skills Coimbatore`;
    const seoTitle = title?.length ? title : defaultTitle;
    const seoDesc = description?.length ? description : defaultDesc;
    const seoKeyword = keyword?.length ? keyword : defaultKeyword;
    return (
        <>
            <Head>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDesc} />
                <meta name="keywords" content={seoKeyword} />
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default StandardLayout;
