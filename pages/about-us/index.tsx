import { Container } from "@mui/material";
import Image from "next/image";
import { FC, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import CallToAction from "../../components/cta";
import {
    Backdrop,
    FeedBackPreviewSection,
    GridRowDouble,
    MainSection,
    StyledButton,
} from "../../components/styled";
import StandardLayout from "../../layouts/standard";
import { motion } from "framer-motion";
import { Reveal } from "../../helpers/animations";
import PageHeading from "../../components/pageHeader";
import { ISEOProps } from "../../types/types";
import { NextPage } from "next";
import { config } from "../../config/config";
import { fetchSeoData } from "../../helpers/common-helpers";

interface Props extends ISEOProps {}

const AboutPage: NextPage = (props: Props) => {
    return (
        <StandardLayout {...props}>
            <PageHeading title="About Us" />
            <MainSection>
                {/* INTRO */}
                <section className="mb-24">
                    <Container>
                        <GridRowDouble>
                            <section className="flex flex-col items-left justify-center space-y-6">
                                <div className="prose mx-auto">
                                    <h2 className="text-blueGray-700 text-left">
                                        Carpe Diem Skills Academy
                                    </h2>
                                    <p className="text-left">
                                        Carpe Diem Skills Academy offers the
                                        best Online/Offline Spoken English
                                        classes to improve your ability to
                                        communicate in English and scale to
                                        higher standards professionally and
                                        personally. Our Online speaking English
                                        Courses focus on a variety of daily
                                        activity-based sessions, which helps you
                                        not only to speak fluently but also
                                        enhance your self-confidence and equip
                                        you to face the society.
                                    </p>
                                </div>
                                <div>
                                    <StyledButton
                                        variant="contained"
                                        color="error"
                                        size="large"
                                    >
                                        Request a demo
                                    </StyledButton>
                                </div>
                            </section>
                            <section className="relative flex items-center justify-center">
                                <motion.div
                                    initial={Reveal.offscreen}
                                    whileInView={Reveal.onscreen}
                                >
                                    <Image
                                        src={"../images/pattern-2.png"}
                                        width={400}
                                        height={400}
                                        alt="About-us"
                                    />
                                </motion.div>
                            </section>
                        </GridRowDouble>
                    </Container>
                </section>
                {/* OUR MISSION VISION */}
                <FeedBackPreviewSection className="bg-[url('/images/mission.jpg')] bg-center">
                    <Backdrop />
                    <Container className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="bg-red-500 p-8 md:p-20 ">
                                <div className="prose">
                                    <h2 className="text-white font-mono italic">
                                        Our Mission
                                    </h2>
                                    <p className="text-white font-mono italic">
                                        Is to transform you to be an effective
                                        and confident communicator who speaks in
                                        front of a large group of audience
                                        without inhibition or fear
                                    </p>
                                </div>
                            </div>
                            <div className="bg-red-500 p-8 md:p-20 ">
                                <div className="prose">
                                    <h2 className="text-white font-mono italic">
                                        Our Vision
                                    </h2>
                                    <p className="text-white font-mono italic">
                                        Is to transform you to be an effective
                                        and confident communicator who speaks in
                                        front of a large group of audience
                                        without inhibition or fear
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </FeedBackPreviewSection>

                {/* FILLER */}
                <section className="py-24 bg-sky-50">
                    <Container>
                        <section className="mb-24">
                            <div className="prose text-center mx-auto max-w-3xl">
                                <span className="text-red-500 uppercase font-bold">
                                    Carpe Diem Skills Academy
                                </span>
                                <h2 className="mt-0 text-blueGray-700">
                                    How we help you improve you English Language
                                    proficiency?
                                </h2>
                                <p>
                                    We work on your communication, grammar,
                                    pronunciation, modulation, intonation,
                                    sentence structure, vocabulary, presentation
                                    skills, body language and soft skills. We
                                    strive to provide you holistic learning that
                                    will transform you to be a confident
                                    speaker.
                                </p>
                            </div>
                        </section>
                        <GridRowDouble>
                            <div className="px-12 space-y-8">
                                <div className="flex items-center justify-center">
                                    <div className="inline-block rounded-full p-4 text-3xl bg-red-500 text-white">
                                        <FaStar />
                                    </div>
                                </div>
                                <div className="prose">
                                    <h2 className="text-blueGray-700 text-center">
                                        Training Methodology
                                    </h2>
                                    <p className="text-center">
                                        We provide you the most effective
                                        platform for learning by giving you
                                        daily live online and offline
                                        interactive, activity-based sessions,
                                        that help you learn English language
                                        with ease.
                                    </p>
                                </div>
                            </div>
                            <div className="px-12 space-y-8">
                                <div className="flex items-center justify-center">
                                    <div className="inline-block rounded-full p-4 text-3xl bg-red-500 text-white">
                                        <FaStar />
                                    </div>
                                </div>
                                <div className="prose">
                                    <h2 className="text-blueGray-700 text-center">
                                        Our Trainers
                                    </h2>
                                    <p className="text-center">
                                        Our expert trainers hail from different
                                        walks of life with excellent academic
                                        credentials and corporate experience.
                                        One thing that binds us all is our
                                        shared passion for English Language and
                                        enthusiasm for teaching.
                                    </p>
                                </div>
                            </div>
                        </GridRowDouble>
                    </Container>
                </section>
                <CallToAction />
            </MainSection>
        </StandardLayout>
    );
};

export async function getStaticProps() {
    const seoData = await fetchSeoData(config.pageIndex.aboutUs);
    const { title, description, keyword } = seoData;
    return {
        revalidate: 300,
        props: {
            title,
            description,
            keyword,
        },
    };
}

export default AboutPage;
