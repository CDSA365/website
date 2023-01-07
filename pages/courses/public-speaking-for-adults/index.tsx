import { Container, Grid, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Image from "next/image";
import { GetStaticProps, NextPage } from "next";
import CallToAction from "../../../components/cta";
import PageHeading from "../../../components/pageHeader";
import { GridRowDouble, MainSection } from "../../../components/styled";
import StandardLayout from "../../../layouts/standard";
import { FaBookOpen } from "react-icons/fa";
import RequestDemoButton from "../../../components/requestDemoButton";
import { fetchSeoData } from "../../../helpers/common-helpers";
import { config } from "../../../config/config";

type Props = {};

const PublicSpeakingForAdultsPage: NextPage = (props: Props) => {
    return (
        <StandardLayout {...props}>
            <PageHeading title="Public Speaking for Adults" />
            <MainSection>
                <Container className="pb-24">
                    <GridRowDouble className="mb-5">
                        <Grid>
                            <p>
                                Being able to communicate effectively is perhaps the most important of all life skills.
                                It is what enables us to pass information to other people, and to understand what is
                                said to us. It allows us to form connections, influence decisions, and motivate change.
                                Without communication and public speaking skills, the ability to progress in the working
                                world and in life, itself, would be nearly impossible.
                            </p>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <FaBookOpen fill="#EF4444" />
                                    </ListItemIcon>
                                    <ListItemText
                                        sx={{ color: "#707070" }}
                                        primary="Over the years, public speaking has played a major role in education, government, and business. As an adult, having public speaking skills can make or break you whatever field of career you choose."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <FaBookOpen fill="#EF4444" />
                                    </ListItemIcon>
                                    <ListItemText
                                        sx={{ color: "#707070" }}
                                        primary="In the working world, public speaking is a vital skill to have and to hone. It effects simple, everyday interactions between co-workers, bosses and employees, marketing professionals and clients, etc., and it can have an enormous impact on your career path and your level of success in your industry."
                                    />
                                </ListItem>
                            </List>
                            <div className="prose space-y-5">
                                <h4>So, what are you waiting for? It's never too late to start learning now!</h4>
                                <RequestDemoButton />
                            </div>
                        </Grid>
                        <Grid className="flex justify-center">
                            <div className="relative w-1/2 h-full rounded-lg">
                                <Image
                                    src={"../../images/public-speaking-for-adults.jpg"}
                                    width={300}
                                    height={500}
                                    layout="responsive"
                                    className="rounded-lg w-full shadow-lg"
                                />
                            </div>
                        </Grid>
                    </GridRowDouble>
                    <Grid className="py-5">
                        <div className="prose">
                            <h2 className="text-lightBlue-900">What do we do?</h2>
                        </div>
                        <List>
                            {[
                                "Work on your Communication Skills and help you learn the methods to Communicate Confidently in all Business and Personal situations",
                                "Train you to Communicate in a Clear & Concise manner, to improve your public speaking and communication skills.",
                                "Help you Communicate in a way People will Remember You through your public speaking skills and create an impact",
                                "Help you Communicate and Influence People.",
                                "Train you to present yourself Professionally with good communication and public speaking skills",
                                "Train, you Speak Confidently and Comfortably. Stand out and be Visible in Group Communications with good communication skills",
                                "Work with you on daily basis to present yourself in an Understandable and Memorable way",
                                "Train you to understand and Influence People with Positive and better communication, Presentation and public speaking skills",
                            ].map((item, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <FaBookOpen fill="#EF4444" />
                                    </ListItemIcon>
                                    <ListItemText sx={{ color: "#707070" }} primary={item} />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Container>
                <CallToAction />
            </MainSection>
        </StandardLayout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const seoData = await fetchSeoData(config.pageIndex.publicSpeakingForAdults);
    return { props: seoData, revalidate: 60 };
};

export default PublicSpeakingForAdultsPage;
