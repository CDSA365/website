import { Input, Textarea, Select, Option } from "@material-tailwind/react";
import { Box, Container } from "@mui/material";
import axios from "axios";
import { ChangeEvent, FC, useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import PageHeading from "../../components/pageHeader";
import { MainSection, StyledButton } from "../../components/styled";
import { config } from "../../config/config";
import StandardLayout from "../../layouts/standard";

type Props = {};

type FormData = {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    program: string;
    message: string;
};

const RequestDemo: FC = (props: Props) => {
    const [errorFields, setErrorFields] = useState<string[]>([]);
    const [actionMessage, setActionMessage] = useState<string | null>(null);
    const [formData, setFormData] = useState<FormData>({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        program: "",
        message: "",
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((state) => ({ ...state, [name]: value }));
    };

    const handleSelectChange = (e: string) => {
        setFormData((state) => ({ ...state, program: e }));
    };

    const validate = (data: FormData): boolean => {
        const arr: string[] = [];
        Object.entries(data).map(([key, value]) => {
            if (!value.length) arr.push(key);
        });
        setErrorFields(arr);
        return arr.length === 0;
    };

    const handleSubmit = () => {
        setActionMessage(null);
        if (validate(formData)) {
            axios
                .post(config.api.addLeads, formData)
                .then(() => {
                    setActionMessage("Request submitted successfully");
                    setFormData({
                        first_name: "",
                        last_name: "",
                        email: "",
                        phone: "",
                        program: "",
                        message: "",
                    });
                })
                .catch((err) => {
                    console.log(err);
                    setActionMessage(
                        "Unable to submit your request! Please try again."
                    );
                });
        }
    };

    return (
        <StandardLayout {...props}>
            <PageHeading title="Request a Demo" />
            <MainSection className="pb-12 md:pb-24">
                <Container>
                    <Box className="w-full md:w-6/12 mx-auto p-5 md:p-10 bg-stone-50 border-[1px] rounded-lg space-y-6">
                        <div className="flex flex-col space-y-6 space-x-0 md:flex-row md:space-y-0 md:space-x-6">
                            <Input
                                required
                                size="lg"
                                variant="outlined"
                                name="first_name"
                                label="First Name"
                                className="bg-stone-100"
                                value={formData.first_name || ""}
                                onChange={handleChange}
                                error={errorFields.includes("first_name")}
                            />
                            <Input
                                required
                                size="lg"
                                variant="outlined"
                                name="last_name"
                                label="Last Name"
                                className="bg-stone-100"
                                value={formData.last_name || ""}
                                onChange={handleChange}
                                error={errorFields.includes("last_name")}
                            />
                        </div>
                        <div className="flex flex-col space-y-6 space-x-0 md:flex-row md:space-y-0 md:space-x-6">
                            <Input
                                required
                                size="lg"
                                variant="outlined"
                                name="email"
                                label="Email"
                                className="bg-stone-100"
                                value={formData.email || ""}
                                onChange={handleChange}
                                error={errorFields.includes("email")}
                            />
                            <Input
                                required
                                size="lg"
                                variant="outlined"
                                name="phone"
                                label="Phone"
                                className="bg-stone-100"
                                value={formData.phone || ""}
                                onChange={handleChange}
                                error={errorFields.includes("phone")}
                            />
                        </div>
                        <Select
                            size="lg"
                            variant="outlined"
                            label="Program"
                            className="bg-stone-100"
                            value={formData.program || ""}
                            onChange={(e: any) => handleSelectChange(e)}
                            error={errorFields.includes("program")}
                        >
                            <Option value="Kids">
                                Spoken english training for Kids
                            </Option>
                            <Option value="Adults">
                                Spoken english training for Adults
                            </Option>
                        </Select>
                        <Textarea
                            required
                            size="lg"
                            variant="outlined"
                            name="message"
                            label="Message"
                            className="bg-stone-100 focus:ring-0"
                            value={formData.message || ""}
                            onChange={handleChange}
                            error={errorFields.includes("message")}
                        />
                        <div className="flex gap-8 items-center">
                            <StyledButton
                                variant="contained"
                                size="medium"
                                color="error"
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Submit Request
                            </StyledButton>
                            {errorFields.length !== 0 && (
                                <p className="flex items-center gap-3">
                                    <FaExclamationCircle className="text-red-500" />
                                    Please fill all the fields
                                </p>
                            )}
                            {actionMessage && (
                                <p className="flex items-center gap-3">
                                    {actionMessage}
                                </p>
                            )}
                        </div>
                    </Box>
                </Container>
            </MainSection>
        </StandardLayout>
    );
};

export async function getStaticProps() {
    return {
        props: {
            title: "Request a demo - Carpe Diem Skills Academy",
        },
    };
}

export default RequestDemo;
