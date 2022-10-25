import { Container } from "@mui/system";
import { NextPage } from "next";
import CallToAction from "../../components/cta";
import PageHeading from "../../components/pageHeader";
import {
    GridRowDouble,
    GridRowTriple,
    MainSection,
} from "../../components/styled";
import { config } from "../../config/config";
import { fetchSeoData } from "../../helpers/common-helpers";
import StandardLayout from "../../layouts/standard";

type Props = {};

const KidsPage: NextPage = (props: Props) => {
    return (
        <StandardLayout {...props}>
            <PageHeading title="Classes for Kids" />
            <MainSection>
                <Container>
                    <section className="prose max-w-none mb-24">
                        <h2>
                            Classes for{" "}
                            <span className="text-red-500">Childrens</span>
                        </h2>
                        <p>
                            Carpe Diem's Offline & Online platform is a place
                            where your child can have 1-to-1 English language
                            sessions with qualified English tutor which is a
                            structured online language program for children.
                            Carpe Diem offers online and offline sessions with
                            conversation practice, personalized feedback, and
                            human interaction in classes at an affordable price.
                            We also prepare lessons and provide teaching
                            materials based on your child’s level or needs which
                            includes Vocabulary, Phonics, Grammar,
                            Pronunciation, Public speaking, Presentations
                            skills, Group discussions, Stage fear eradication.,
                        </p>
                    </section>
                    <GridRowTriple>
                        <section className="prose max-w-none mb-24 ">
                            <h2>
                                Classes for{" "}
                                <span className="text-red-500">Beginners</span>
                            </h2>
                            <p>
                                Online Speaking Course for Beginner level
                                learners include basics of grammar, vocabulary
                                building, idioms and phrases and sentence
                                structure. We get them out of their inhibition
                                zone by getting them to speak consistently.
                            </p>
                        </section>
                        <section className="prose max-w-none mb-24">
                            <h2>
                                Classes for{" "}
                                <span className="text-red-500">
                                    Intermediate
                                </span>
                            </h2>
                            <p>
                                We focus on English Fluency and language flow.
                                We work on Soft Skills and communication skills
                                required for social life and workplace by
                                helping you master the art of group discussion
                                and public speaking skills.
                            </p>
                        </section>
                        <section className="prose max-w-none mb-24">
                            <h2>
                                <span className="text-red-500">
                                    Cambridge English
                                </span>{" "}
                                Classes
                            </h2>
                            <p>
                                Young Learners, also known as Young Learners
                                English Tests (YLE), is a suite of English
                                language tests specially designed for children
                                in primary and lower-secondary school. The tests
                                are provided by Cambridge English Language
                                Assessment.
                            </p>
                        </section>
                    </GridRowTriple>
                </Container>
                <CallToAction />
            </MainSection>
        </StandardLayout>
    );
};

KidsPage.getInitialProps = async () => {
    return await fetchSeoData(config.pageIndex.kids);
};

export default KidsPage;
