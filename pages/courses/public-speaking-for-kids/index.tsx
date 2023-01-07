import { Container, Grid, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { GetStaticProps, NextPage } from "next";
import CallToAction from "../../../components/cta";
import PageHeading from "../../../components/pageHeader";
import { GridRowDouble, MainSection } from "../../../components/styled";
import { Reveal } from "../../../helpers/animations";
import StandardLayout from "../../../layouts/standard";
import { FaBookOpen } from "react-icons/fa";
import { fetchSeoData } from "../../../helpers/common-helpers";
import { config } from "../../../config/config";

type Props = {};

const PublicSpeakingForKidsPage: NextPage = (props: Props) => {
    return (
        <StandardLayout {...props}>
            <PageHeading title="Public Speaking for Kids" />
            <MainSection>
                <Container className="pb-24">
                    <GridRowDouble>
                        <Grid>
                            <p>
                                Public speaking has two main components: content (what you say) and delivery (how you
                                say it). The content of your talk determines how impactful your talk can be, and your
                                delivery determines how impactful your talk actually is. Without a strong, engaging
                                delivery, you will lose your audience’s attention and fail to communicate your content.
                                In order to become an engaging speaker, it is necessary to practice what you want to say
                                and how you are going to say it.
                            </p>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <FaBookOpen fill="#EF4444" />
                                    </ListItemIcon>
                                    <ListItemText
                                        sx={{ color: "#707070" }}
                                        primary=" Our online course will enable you to speak more powerfully in formal or informal
                                    situations."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <FaBookOpen fill="#EF4444" />
                                    </ListItemIcon>
                                    <ListItemText
                                        sx={{ color: "#707070" }}
                                        primary="These online public speaking classes will focus on your child's personality,
                                    confidence, and communication skills to transform your child into thoughtful leaders
                                    of tomorrow!"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <FaBookOpen fill="#EF4444" />
                                    </ListItemIcon>
                                    <ListItemText
                                        sx={{ color: "#707070" }}
                                        primary="The curriculum for this course is curated by experts and involves fun activities
                                    like storytelling, debates, and extempore to teach students the fundamentals of
                                    public speaking. This course will also enhance your child’s critical thinking and
                                    problem-solving abilities by engaging them in several situations based on response
                                    tests and case studies."
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid className="flex justify-center">
                            <div className="relative w-1/2 h-full rounded-lg">
                                <Image
                                    src={"../../images/public-speaking-for-kids.jpg"}
                                    width={280}
                                    height={500}
                                    layout="responsive"
                                    className="rounded-lg w-full shadow-lg"
                                />
                            </div>
                        </Grid>
                    </GridRowDouble>
                </Container>
                <CallToAction />
            </MainSection>
        </StandardLayout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const seoData = await fetchSeoData(config.pageIndex.publicSpeakingForKids);
    return { props: seoData, revalidate: 60 };
};

export default PublicSpeakingForKidsPage;
