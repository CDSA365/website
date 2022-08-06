import { Input } from "@material-tailwind/react";
import { Box, Chip, Divider } from "@mui/material";
import { Container } from "@mui/system";
import { NextPage } from "next";
import Link from "next/link";
import { FaPen, FaPenAlt, FaSignInAlt } from "react-icons/fa";
import PageHeading from "../../components/pageHeader";
import { MainSection, StyledButton } from "../../components/styled";
import StandardLayout from "../../layouts/standard";

type Props = {};

const LoginPage: NextPage = (props: Props) => {
    return (
        <StandardLayout {...props}>
            <PageHeading title="Login" />
            <MainSection className="pb-12 md:pb-24">
                <Container>
                    <Box className="w-full md:w-5/12 mx-auto p-6 md:p-12 rounded-lg bg-stone-50 border-[1px] space-y-6">
                        <Input
                            label="Username"
                            type="text"
                            size="lg"
                            variant="outlined"
                            className="bg-stone-100 focus:ring-0"
                        />
                        <Input
                            label="Password"
                            type="password"
                            size="lg"
                            variant="outlined"
                            className="bg-stone-100 focus:ring-0"
                        />
                        <StyledButton
                            fullWidth
                            variant="contained"
                            color="primary"
                            startIcon={<FaSignInAlt />}
                        >
                            Login
                        </StyledButton>
                        <Divider>
                            <Chip label="Or" variant="outlined" color="info" />
                        </Divider>
                        <Link href={"/register"}>
                            <StyledButton
                                fullWidth
                                variant="outlined"
                                color="error"
                                startIcon={<FaPen />}
                            >
                                Create an account
                            </StyledButton>
                        </Link>
                    </Box>
                </Container>
            </MainSection>
        </StandardLayout>
    );
};

LoginPage.defaultProps = {
    title: "Login - Carpe Diem Skills Academy",
};

export default LoginPage;
