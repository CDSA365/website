import { Container } from "@mui/system";
import { NextPage } from "next";
import CallToAction from "../../components/cta";
import PageHeading from "../../components/pageHeader";
import { MainSection } from "../../components/styled";
import { config } from "../../config/config";
import { fetchSeoData } from "../../helpers/common-helpers";
import StandardLayout from "../../layouts/standard";

type Props = {};

const AdultsPage: NextPage = (props: Props) => {
    return (
        <StandardLayout {...props}>
            <PageHeading title="Classes for Adults" />
            <MainSection>
                <Container>
                    <section className="prose max-w-none mb-24">
                        <h2>
                            Classes for{" "}
                            <span className="text-red-500">
                                Proficient Speakers
                            </span>{" "}
                            &amp;{" "}
                            <span className="text-red-500">Professionals</span>
                        </h2>
                        <p>
                            We focus on Workplace Communication by enhancing
                            their Business Communication skills and help them
                            participate actively and confidently in meetings and
                            presentations.
                        </p>
                    </section>
                    <section className="prose max-w-none mb-24 ">
                        <h2>
                            <span className="text-red-500">
                                Corporate Training
                            </span>{" "}
                            Offline & Online
                        </h2>
                        <p>
                            Carpe Diem Skills Academy has unparalleled expertise
                            in delivering corporate English language training
                            solutions. We offer the highest calibre language
                            training specializing in practical business
                            vocabulary, role play, and also ESP (English for
                            Specific Purposes) for corporate. Offering Best
                            English training for corporate, we are committed to
                            partnering with clients to deliver value-added
                            training that brings tangible results. In order to
                            communicate effectively in a multi-cultural business
                            environment, it is important to be able to express
                            one's ideas with impact and in appropriate style.
                        </p>
                        <p>
                            Our corporate training includes training on
                            Communication skills, Soft skills, Life skills, Time
                            management, Inter-personal skills, Presentation
                            skills, Team work, Personality development, People
                            management etc.,
                        </p>
                    </section>
                </Container>
                <CallToAction />
            </MainSection>
        </StandardLayout>
    );
};

export async function getServerSideProps() {
    const seoData = await fetchSeoData(config.pageIndex.adults);
    const { title, description, keyword } = seoData;
    return {
        props: {
            title,
            description,
            keyword,
        },
    };
}

export default AdultsPage;
