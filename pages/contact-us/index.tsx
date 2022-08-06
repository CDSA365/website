import { FilledInput, FormControl, InputLabel, TextField } from "@mui/material";
import { Container } from "@mui/system";
import {
    FaClock,
    FaEnvelope,
    FaMapMarkerAlt,
    FaPhoneAlt,
} from "react-icons/fa";
import {
    GridRowDouble,
    InputStyled,
    PageHeader,
    StyledButton,
    StyledTextArea,
} from "../../components/styled";
import StandardLayout from "../../layouts/standard";

type Props = {};

const ContactUsPage = (props: Props) => {
    return (
        <StandardLayout>
            <PageHeader className="bg-[url('/images/pattern-header.png')]">
                <div className="prose">
                    <h1 className="mb-0 text-red-500">Contact us</h1>
                </div>
            </PageHeader>
            <section className="bg-white py-12 md:py-24">
                <Container>
                    <GridRowDouble>
                        <div>
                            <div className="prose-sm md:prose">
                                <span className="text-red-500 uppercase text-xs font-semibold">
                                    Contact us
                                </span>
                                <h2 className="my-0 md:my-0 text-blueGray-700">
                                    Get in touch with us
                                </h2>
                            </div>
                            <ul className="flex flex-col space-y-6 my-8">
                                <li className="flex items-center space-x-6 group transition-colors hover:bg-amber-50 p-4 rounded-lg">
                                    <div className="bg-stone-100 rounded-lg transition-colors p-4 md:p-8 group-hover:bg-red-500">
                                        <FaMapMarkerAlt className="text-red-500 text-2xl md:text-3xl transition-colors group-hover:text-white" />
                                    </div>
                                    <div className="prose-sm md:prose ">
                                        <h3 className="my-0 text-blueGray-700 uppercase">
                                            Our Address
                                        </h3>
                                        <p>
                                            96, K.K.Pudhur, Maniam Kaliappa
                                            Gounder Street, Coimbatore, Tamil
                                            Nadu - 641038
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-center space-x-6 group transition-colors hover:bg-amber-50 p-4 rounded-lg">
                                    <div className="bg-stone-100 rounded-lg transition-colors p-4 md:p-8 group-hover:bg-red-500">
                                        <FaEnvelope className="text-red-500 text-2xl md:text-3xl transition-colors group-hover:text-white" />
                                    </div>
                                    <div className="prose-sm md:prose ">
                                        <h3 className="my-0 text-blueGray-700 uppercase">
                                            Our Email
                                        </h3>
                                        <p>
                                            <a href="mailto:info@cdsa365.com">
                                                info@cdsa365.com
                                            </a>
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-center space-x-6 group transition-colors hover:bg-amber-50 p-4 rounded-lg">
                                    <div className="bg-stone-100 rounded-lg transition-colors p-4 md:p-8 group-hover:bg-red-500">
                                        <FaPhoneAlt className="text-red-500 text-2xl md:text-3xl transition-colors group-hover:text-white" />
                                    </div>
                                    <div className="prose-sm md:prose ">
                                        <h3 className="my-0 text-blueGray-700 uppercase">
                                            Our Phone
                                        </h3>
                                        <p>
                                            <a href="tel:+919486051647">
                                                (+91)9486051647
                                            </a>
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-center space-x-6 group transition-colors hover:bg-amber-50 p-4 rounded-lg">
                                    <div className="bg-stone-100 rounded-lg transition-colors p-4 md:p-8 group-hover:bg-red-500">
                                        <FaClock className="text-red-500 text-2xl md:text-3xl transition-colors group-hover:text-white" />
                                    </div>
                                    <div className="prose-sm md:prose">
                                        <h3 className="my-0 text-blueGray-700 uppercase">
                                            Our working hours
                                        </h3>
                                        <p>
                                            Monday - Friday : 9:00AM to 6:00PM
                                            <br />
                                            Saturday &amp; Sunday : 10:00AM to
                                            5:00PM
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="rounded-lg bg-red-500 p-6 py-8 space-y-6">
                                <div className="prose mb-6">
                                    <h2 className="my-0 text-white">
                                        Write to us
                                    </h2>
                                </div>
                                <div className="form space-y-4">
                                    <InputStyled placeholder="First Name" />
                                    <InputStyled placeholder="Last Name" />
                                    <InputStyled placeholder="Email" />
                                    <InputStyled placeholder="Subject" />
                                    <StyledTextArea
                                        placeholder="Message"
                                        rows={7}
                                    />
                                </div>
                                <StyledButton
                                    variant="contained"
                                    size="large"
                                    shade="light"
                                >
                                    Submit
                                </StyledButton>
                            </div>
                        </div>
                    </GridRowDouble>
                </Container>
            </section>
        </StandardLayout>
    );
};

export default ContactUsPage;
