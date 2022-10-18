import { Container } from "@mui/system";
import axios from "axios";
import { NextPage } from "next";
import { FC, useState } from "react";
import {
    FaClock,
    FaEnvelope,
    FaMapMarkerAlt,
    FaPhoneAlt,
} from "react-icons/fa";
import PageHeading from "../../components/pageHeader";
import Spinner from "../../components/spinner";
import {
    GridRowDouble,
    InputStyled,
    StyledButton,
    StyledTextArea,
} from "../../components/styled";
import { config } from "../../config/config";
import StandardLayout from "../../layouts/standard";

type Props = {};

interface FormData {
    first_name: string;
    last_name: string;
    email: string;
    subject: string;
    message: string;
}

const initialState: FormData = {
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
};

const ContactUsPage: NextPage = (props: Props) => {
    const [formData, setFormData] = useState<FormData>(initialState);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [loading, setLoading] = useState(false);

    const handleFormChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((state) => ({ ...state, [name]: value }));
    };

    const validateForm = (formData: FormData) => {
        let errorCount = 0;
        Object.values(formData).forEach((value) => {
            if (value === "" || value.length === 0) errorCount += 1;
        });
        return errorCount === 0;
    };

    const handleSubmit = () => {
        setLoading(true);
        if (validateForm(formData)) {
            axios
                .post(config.api.sendContactForm, formData)
                .then(() => setFormData(initialState))
                .then(() => {
                    const message = `Thanks for contacting us. We received your request.`;
                    if (errorMessage) setErrorMessage("");
                    setSuccessMessage(message);
                })
                .catch((err) => {
                    if (successMessage) setSuccessMessage("");
                    setErrorMessage(err.message);
                })
                .finally(() => setLoading(false));
        } else {
            if (successMessage) setSuccessMessage("");
            setErrorMessage("Please fill all the fields");
            setLoading(false);
        }
    };

    return (
        <StandardLayout {...props}>
            <PageHeading title="Contact Us" />
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
                                    <InputStyled
                                        name="first_name"
                                        value={formData.first_name || ""}
                                        placeholder="First Name"
                                        onChange={handleFormChange}
                                    />
                                    <InputStyled
                                        name="last_name"
                                        value={formData.last_name || ""}
                                        placeholder="Last Name"
                                        onChange={handleFormChange}
                                    />
                                    <InputStyled
                                        name="email"
                                        value={formData.email || ""}
                                        placeholder="Email"
                                        onChange={handleFormChange}
                                    />
                                    <InputStyled
                                        name="subject"
                                        value={formData.subject || ""}
                                        placeholder="Subject"
                                        onChange={handleFormChange}
                                    />
                                    <StyledTextArea
                                        name="message"
                                        value={formData.message || ""}
                                        placeholder="Message"
                                        onChange={handleFormChange}
                                        rows={7}
                                    />
                                </div>
                                <div className="flex justify-start gap-3 items-center">
                                    <StyledButton
                                        variant="contained"
                                        size="large"
                                        shade="light"
                                        onClick={handleSubmit}
                                        startIcon={loading && <Spinner />}
                                    >
                                        Submit
                                    </StyledButton>
                                    {errorMessage && (
                                        <p className="text-white">
                                            {errorMessage}
                                        </p>
                                    )}
                                    {successMessage && (
                                        <p className="text-white">
                                            {successMessage}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </GridRowDouble>
                </Container>
            </section>
        </StandardLayout>
    );
};

ContactUsPage.getInitialProps = async () => {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}/pages/${config.pageIndex.contactUs}?populate=*`;
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

export default ContactUsPage;
