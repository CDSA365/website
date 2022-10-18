import { FC } from "react";
import { Container } from "@mui/system";
import Image from "next/image";
import {
    GridRowDouble,
    GridRowTriple,
    MainSection,
} from "../../components/styled";
import StandardLayout from "../../layouts/standard";
import { motion } from "framer-motion";
import { Reveal } from "../../helpers/animations";
import CallToAction from "../../components/cta";
import PageHeading from "../../components/pageHeader";
import { NextPage } from "next";
import { config } from "../../config/config";

type Props = {};

const courses = [
    {
        title: "Speaking Session",
        description: `Enjoy live English-speaking practice on grammar-themed topics and everyday situations.`,
    },
    {
        title: "Audio and Video Sessions",
        description: `Live interactive sessions - Attend Live Sessions. Learn and Interact with your trainers and co-learners in the virtual classroom`,
    },
    {
        title: "Vocabulary",
        description: `Enrich your vocabulary through our listening, writing, and reading practice. `,
    },
    {
        title: "Group discussion",
        description: `Get engaged with your trainers and co-learners to improve your socializing skills. Participate in group discussions, debates and roleplays. Share opinions, agree or disagree on your viewpoints. `,
    },
    {
        title: "Public speaking",
        description: `Prepared and Extempore Speaking. Practice to master the art of Public Speaking Skills.`,
    },
    {
        title: "Result oriented session",
        description: `Daily assignments-Practice makes one perfect the art of learning. Consistency and language immersion happens through these assignments.`,
    },
    {
        title: "Weekly Assessments",
        description: `Assessing your proficiency level at regular intervals helps both the student and the trainer in terms of improvement areas. Therefore, we mandate assessments and give regular feedback on the way forward. `,
    },
];

const coursesImages = [
    "../images/courses-image-1.jpg",
    "../images/pattern.png",
    "../images/pattern.png",
    "../images/courses-image-2.jpg",
    "../images/courses-image-3.jpg",
    "../images/pattern.png",
];

const CoursesPage: NextPage = (props: Props) => {
    return (
        <StandardLayout {...props}>
            <PageHeading title="Courses" />
            <MainSection>
                <Container className="pb-24">
                    <GridRowDouble>
                        <div>
                            <div className="prose">
                                <span className="uppercase text-red-500 font-bold text-sm">
                                    Carpe Diem Skills Academy
                                </span>
                                <h2 className="text-blurGray-700 mt-0">
                                    Courses Offered
                                </h2>
                                <div className="space-y-8">
                                    {courses.map((course, key) => (
                                        <div className="flex items-center">
                                            <div className="w-2/12 flex justify-start text-3xl font-bold">
                                                <span className="p-4 bg-red-500 text-white rounded-lg">
                                                    {key + 1}
                                                </span>
                                            </div>
                                            <div
                                                key={key}
                                                className="w-10/12 flex items-center"
                                            >
                                                <div>
                                                    <h4 className="my-0">
                                                        {course.title}
                                                    </h4>
                                                    <p className="text-blueGray-500 m-0">
                                                        {course.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <GridRowDouble>
                            {coursesImages.map((image, key) => (
                                <div
                                    className="rounded-lg overflow-hidden relative hidden md:block"
                                    key={key}
                                >
                                    <motion.div
                                        initial={Reveal.offscreen}
                                        whileInView={Reveal.onscreen}
                                    >
                                        <Image
                                            src={image}
                                            width={280}
                                            height={320}
                                            layout="responsive"
                                        />
                                    </motion.div>
                                </div>
                            ))}
                        </GridRowDouble>
                    </GridRowDouble>
                </Container>
                <section className="bg-red-500">
                    <Container className="py-24">
                        <GridRowTriple inline={true}>
                            <section className="p-6 h-full">
                                <div className="bg-amber-50 rounded-lg prose text-center p-4 py-6 space-y-6">
                                    <h4 className="text-blueGray-700 uppercase">
                                        Beginner Sessions
                                    </h4>
                                    <p className="text-blueGray-500">
                                        Online Speaking Course for Beginner
                                        level learners include basics of
                                        grammar, vocabulary building, idioms and
                                        phrases and sentence structure. We get
                                        them out of their inhibition zone by
                                        getting them to speak consistently.
                                    </p>
                                </div>
                            </section>
                            <section className="p-6 h-full">
                                <div className="bg-amber-50 rounded-lg prose text-center p-4 py-6 space-y-6">
                                    <h4 className="text-blueGray-700 uppercase">
                                        Intermediate Sessions
                                    </h4>
                                    <p className="text-blueGray-500">
                                        We focus on English Fluency and language
                                        flow. We work on Soft Skills and
                                        communication skills required for social
                                        life and workplace by helping you master
                                        the art of group discussion and public
                                        speaking skills.
                                    </p>
                                </div>
                            </section>
                            <section className="p-6 h-full">
                                <div className="bg-amber-50 rounded-lg prose text-center p-4 py-6 space-y-6">
                                    <h4 className="text-blueGray-700 uppercase">
                                        Expert Sessions
                                    </h4>
                                    <p className="text-blueGray-500">
                                        To break the monotony of the regular
                                        sessions, we bring in Experts who share
                                        their experience and wisdom in their
                                        chosen domain. Such expert sessions are
                                        delivered by experts who are masters in
                                        their field.
                                    </p>
                                </div>
                            </section>
                        </GridRowTriple>
                    </Container>
                </section>
                <section>
                    <Container className="py-24">
                        <GridRowDouble>
                            <section className="px-4">
                                <div className="prose">
                                    <h2 className="text-red-500 ">
                                        Sessions for Childrens
                                    </h2>
                                    <div className="w-full p-3 relative border-2 border-dashed border-spacing-3 border-blueGray-700 rounded-xl">
                                        <motion.div
                                            initial={Reveal.offscreen}
                                            whileInView={Reveal.onscreen}
                                        >
                                            <Image
                                                src={"../images/kids.jpg"}
                                                width={300}
                                                height={200}
                                                layout="responsive"
                                                className="rounded-lg"
                                            />
                                        </motion.div>
                                    </div>
                                    <p className="text-justify">
                                        Carpe Diem's Offline &amp; Online
                                        platform is a place where your child can
                                        have 1-to-1 English language sessions
                                        with qualified English tutor which is a
                                        structured online language program for
                                        children. Carpe Diem offers online and
                                        offline sessions with conversation
                                        practice, personalized feedback, and
                                        human interaction in classes at an
                                        affordable price. We also prepare
                                        lessons and provide teaching materials
                                        based on your child's level or needs
                                        which includes Vocabulary, Phonics,
                                        Grammar, Pronunciation, Public speaking,
                                        Presentations skills, Group discussions,
                                        Stage fear eradication.,
                                    </p>
                                </div>
                            </section>
                            <section className="px-4">
                                <div className="prose">
                                    <h2 className="text-red-500 ">
                                        Corporate Training Offline &amp; Online
                                    </h2>
                                    <div className="w-full p-3 relative border-2 border-dashed border-spacing-3 border-blueGray-700 rounded-xl">
                                        <motion.div
                                            initial={Reveal.offscreen}
                                            whileInView={Reveal.onscreen}
                                        >
                                            <Image
                                                src={"../images/mission.jpg"}
                                                width={300}
                                                height={200}
                                                layout="responsive"
                                                className="rounded-lg"
                                            />
                                        </motion.div>
                                    </div>
                                    <p className="text-justify">
                                        Carpe Diem Skills Academy has
                                        unparalleled expertise in delivering
                                        corporate English language training
                                        solutions. We offer the highest calibre
                                        language training specializing in
                                        practical business vocabulary, role
                                        play, and also ESP (English for Specific
                                        Purposes) for corporate. Offering Best
                                        English training for corporate, we are
                                        committed to partnering with clients to
                                        deliver value-added training that brings
                                        tangible results. In order to
                                        communicate effectively in a
                                        multi-cultural business environment, it
                                        is important to be able to express one’s
                                        ideas with impact and in appropriate
                                        style.
                                    </p>
                                </div>
                            </section>
                        </GridRowDouble>
                    </Container>
                </section>
                <CallToAction />
            </MainSection>
        </StandardLayout>
    );
};

CoursesPage.getInitialProps = async () => {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}/pages/${config.pageIndex.courses}?populate=*`;
    const resp = await fetch(url);
    const json = await resp.json();
    const { data } = json;
    const { attributes } = data;
    const { SEO } = attributes;
    return {
        title: SEO ? SEO["metaTitle"] ?? "" : "",
        description: SEO ? SEO["metaDescription"] ?? "" : "",
        keyword: SEO ? SEO["keywords"] ?? "" : "",
    };
};

export default CoursesPage;
