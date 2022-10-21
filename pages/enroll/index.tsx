import { Input } from "@material-tailwind/react";
import { Alert, Box, Chip, Container, Divider } from "@mui/material";
import axios from "axios";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaPen, FaSignInAlt } from "react-icons/fa";
import { MainSection, StyledButton } from "../../components/styled";
import { config } from "../../config/config";
import StandardLayout from "../../layouts/standard";

const DynamicPageHeader = dynamic(() => import("../../components/pageHeader"));

type Props = {};

interface FormData {
    first_name: string;
    last_name: string;
    email: string;
    dob: string;
    phone: string;
    whatsapp: string;
    address_one: string;
    address_two: string;
    city: string;
    district: string;
    state: string;
    pincode: number | string;
    password: string;
}

const initialState: FormData = {
    first_name: "",
    last_name: "",
    email: "",
    dob: "",
    phone: "",
    whatsapp: "",
    address_one: "",
    address_two: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
    password: "",
};

const RegisterPage: NextPage = (props: Props) => {
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [formData, setFormData] = useState<FormData>(initialState);

    const handleFormChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((state) => ({ ...state, [name]: value }));
    };

    const validateFormData = (formData: FormData): boolean => {
        let errorCount = 0;
        Object.values(formData).forEach((value) => {
            if (value === "" || value.length === 0) {
                errorCount += 1;
            }
        });
        return errorCount === 0;
    };

    const handleSubmit = () => {
        if (validateFormData(formData)) {
            axios
                .post(config.api.registerStudent, formData)
                .then(() => setFormData(initialState))
                .then(() => {
                    if (errorMessage) setErrorMessage("");
                    const message = `Registeration Successfull! Your profile will be activated soon`;
                    setSuccessMessage(message);
                })
                .catch((err) => setErrorMessage(err.message));
        } else {
            if (successMessage) setSuccessMessage("");
            setErrorMessage("Please fill all the fields");
        }
    };

    return (
        <StandardLayout {...props}>
            <DynamicPageHeader title="Register" />
            <MainSection className="pb-12 md:pb-24">
                <Container>
                    <Box className="bg-stone-50 border-[1px] rounded-lg p-6 md:p-12 w-full md:w-6/12 mx-auto space-y-6">
                        <div className="flex space-x-6">
                            <Input
                                label="First Name"
                                variant="outlined"
                                type="text"
                                size="lg"
                                className="focus:ring-0 bg-stone-100"
                                name="first_name"
                                value={formData.first_name || ""}
                                onChange={(e) => handleFormChange(e)}
                            />
                            <Input
                                label="Last Name"
                                variant="outlined"
                                type="text"
                                size="lg"
                                className="focus:ring-0 bg-stone-100"
                                name="last_name"
                                value={formData.last_name || ""}
                                onChange={(e) => handleFormChange(e)}
                            />
                        </div>
                        <div className="flex space-x-6">
                            <Input
                                label="Email"
                                variant="outlined"
                                type="text"
                                size="lg"
                                className="focus:ring-0 bg-stone-100"
                                name="email"
                                value={formData.email || ""}
                                onChange={(e) => handleFormChange(e)}
                            />
                            <Input
                                label="Date of Birth"
                                variant="outlined"
                                type="date"
                                size="lg"
                                className="focus:ring-0 bg-stone-100"
                                name="dob"
                                value={formData.dob || ""}
                                onChange={(e) => handleFormChange(e)}
                            />
                        </div>
                        <div className="flex space-x-6">
                            <Input
                                label="Phone"
                                variant="outlined"
                                type="text"
                                size="lg"
                                className="focus:ring-0 bg-stone-100"
                                name="phone"
                                value={formData.phone || ""}
                                onChange={(e) => handleFormChange(e)}
                            />
                            <Input
                                label="WhatsApp Number"
                                variant="outlined"
                                type="text"
                                size="lg"
                                className="focus:ring-0 bg-stone-100"
                                name="whatsapp"
                                value={formData.whatsapp || ""}
                                onChange={(e) => handleFormChange(e)}
                            />
                        </div>

                        <Input
                            label="Address 1"
                            variant="outlined"
                            type="text"
                            size="lg"
                            className="focus:ring-0 bg-stone-100"
                            name="address_one"
                            value={formData.address_one || ""}
                            onChange={(e) => handleFormChange(e)}
                        />
                        <Input
                            label="Address 2"
                            variant="outlined"
                            type="text"
                            size="lg"
                            className="focus:ring-0 bg-stone-100"
                            name="address_two"
                            value={formData.address_two || ""}
                            onChange={(e) => handleFormChange(e)}
                        />
                        <div className="flex space-x-6">
                            <Input
                                label="City"
                                variant="outlined"
                                type="text"
                                size="lg"
                                className="focus:ring-0 bg-stone-100"
                                name="city"
                                value={formData.city || ""}
                                onChange={(e) => handleFormChange(e)}
                            />
                            <Input
                                label="District"
                                variant="outlined"
                                type="text"
                                size="lg"
                                className="focus:ring-0 bg-stone-100"
                                name="district"
                                value={formData.district || ""}
                                onChange={(e) => handleFormChange(e)}
                            />
                        </div>
                        <div className="flex space-x-6">
                            <Input
                                label="State"
                                variant="outlined"
                                type="text"
                                size="lg"
                                className="focus:ring-0 bg-stone-100"
                                name="state"
                                value={formData.state || ""}
                                onChange={(e) => handleFormChange(e)}
                            />
                            <Input
                                label="Pincode"
                                variant="outlined"
                                type="text"
                                size="lg"
                                className="focus:ring-0 bg-stone-100"
                                name="pincode"
                                value={formData.pincode || ""}
                                onChange={(e) => handleFormChange(e)}
                            />
                        </div>
                        <Input
                            label="Create Password"
                            variant="outlined"
                            type={showPassword ? "text" : "password"}
                            size="lg"
                            icon={
                                <FaEye
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                />
                            }
                            className="focus:ring-0 bg-stone-100"
                            name="password"
                            value={formData.password || ""}
                            onChange={(e) => handleFormChange(e)}
                        />
                        {errorMessage && (
                            <Alert color="error">{errorMessage}</Alert>
                        )}
                        {successMessage && (
                            <Alert color="success">{successMessage}</Alert>
                        )}
                        <StyledButton
                            fullWidth
                            variant="contained"
                            color="primary"
                            startIcon={<FaPen />}
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Register
                        </StyledButton>
                        <Divider>
                            <Chip
                                label="Have an account?"
                                color="info"
                                variant="outlined"
                            />
                        </Divider>
                        <Link href="https://student.cdsa365.com">
                            <StyledButton
                                fullWidth
                                variant="outlined"
                                color="error"
                                startIcon={<FaSignInAlt />}
                            >
                                Login
                            </StyledButton>
                        </Link>
                    </Box>
                </Container>
            </MainSection>
        </StandardLayout>
    );
};

RegisterPage.getInitialProps = async () => {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}/pages/${config.pageIndex.enroll}?populate=*`;
    try {
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
    } catch (error) {
        return {};
    }
};

export default RegisterPage;
