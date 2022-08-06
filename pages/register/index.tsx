import { Input } from "@material-tailwind/react";
import { Box, Chip, Container, Divider } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import { FaEye, FaPen, FaSignInAlt } from "react-icons/fa";
import PageHeading from "../../components/pageHeader";
import { MainSection, StyledButton } from "../../components/styled";
import StandardLayout from "../../layouts/standard";

type Props = {};

const RegisterPage: NextPage = (props: Props) => {
    return (
        <StandardLayout {...props}>
            <PageHeading title="Register" />
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
                            />
                            <Input
                                label="Last Name"
                                variant="outlined"
                                type="text"
                                size="lg"
                                className="focus:ring-0 bg-stone-100"
                            />
                        </div>
                        <div className="flex space-x-6">
                            <Input
                                label="Email"
                                variant="outlined"
                                type="text"
                                size="lg"
                                className="focus:ring-0 bg-stone-100"
                            />
                            <Input
                                label="Date of Birth"
                                variant="outlined"
                                type="datetime-local"
                                size="lg"
                                className="focus:ring-0 bg-stone-100"
                            />
                        </div>
                        <div className="flex space-x-6">
                            <Input
                                label="Phone"
                                variant="outlined"
                                type="text"
                                size="lg"
                                className="focus:ring-0 bg-stone-100"
                            />
                            <Input
                                label="WhatsApp Number"
                                variant="outlined"
                                type="text"
                                size="lg"
                                className="focus:ring-0 bg-stone-100"
                            />
                        </div>

                        <Input
                            label="Address 1"
                            variant="outlined"
                            type="text"
                            size="lg"
                            className="focus:ring-0 bg-stone-100"
                        />
                        <Input
                            label="Address 2"
                            variant="outlined"
                            type="text"
                            size="lg"
                            className="focus:ring-0 bg-stone-100"
                        />
                        <div className="flex space-x-6">
                            <Input
                                label="City"
                                variant="outlined"
                                type="text"
                                size="lg"
                                className="focus:ring-0 bg-stone-100"
                            />
                            <Input
                                label="District"
                                variant="outlined"
                                type="text"
                                size="lg"
                                className="focus:ring-0 bg-stone-100"
                            />
                        </div>
                        <div className="flex space-x-6">
                            <Input
                                label="State"
                                variant="outlined"
                                type="text"
                                size="lg"
                                className="focus:ring-0 bg-stone-100"
                            />
                            <Input
                                label="Pincode"
                                variant="outlined"
                                type="text"
                                size="lg"
                                className="focus:ring-0 bg-stone-100"
                            />
                        </div>
                        <Input
                            label="Create Password"
                            variant="outlined"
                            type="password"
                            size="lg"
                            icon={<FaEye />}
                            className="focus:ring-0 bg-stone-100"
                        />
                        <StyledButton
                            fullWidth
                            variant="contained"
                            color="primary"
                            startIcon={<FaPen />}
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
                        <Link href={"/login"}>
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

RegisterPage.defaultProps = {
    title: "Register - Carpe Diem Skills Academy",
};

export default RegisterPage;
