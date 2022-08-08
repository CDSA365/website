import { Input } from "@material-tailwind/react";
import { Box, Chip, Divider } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import { NextPage } from "next";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { FaPen, FaSignInAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import PageHeading from "../../components/pageHeader";
import { MainSection, StyledButton } from "../../components/styled";
import { config } from "../../config/config";
import StandardLayout from "../../layouts/standard";
import { increment } from "../../store/slice/counter-slice";
import { addUser } from "../../store/slice/user-slice";
import { RootState } from "../../store/store";

type Props = {};

type FormData = {
    email: string;
    password: string;
};

const LoginPage: NextPage = (props: Props) => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    const [errorFields, setErrorFields] = useState<string[]>([]);
    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((state) => ({ ...state, [name]: value }));
    };

    const validate = (formData: FormData): boolean => {
        const arr: string[] = [];
        Object.entries(formData).map(([key, value]) => {
            if (!value.length) arr.push(key);
        });
        setErrorFields(arr);
        return arr.length === 0;
    };

    const handleSubmit = () => {
        if (validate(formData)) {
            axios
                .post(config.api.login, formData)
                .then(({ data }) =>
                    dispatch(addUser({ ...data, isLoggedIn: true }))
                )
                .catch((err) => console.log(err));
        }
    };

    return (
        <StandardLayout {...props}>
            <PageHeading title="Login" />
            <MainSection className="pb-12 md:pb-24">
                <Container>
                    <Box className="w-full md:w-5/12 mx-auto p-6 md:p-12 rounded-lg bg-stone-50 border-[1px] space-y-6">
                        <Input
                            label="Email"
                            name="email"
                            type="text"
                            size="lg"
                            variant="outlined"
                            value={formData.email || ""}
                            className="bg-stone-100 focus:ring-0"
                            onChange={handleChange}
                            error={errorFields.includes("email")}
                        />
                        <Input
                            label="Password"
                            name="password"
                            type="password"
                            size="lg"
                            variant="outlined"
                            value={formData.password || ""}
                            className="bg-stone-100 focus:ring-0"
                            onChange={handleChange}
                            error={errorFields.includes("password")}
                        />
                        {errorFields.length !== 0 && (
                            <p className="text-sm">
                                Please fill all the fields
                            </p>
                        )}
                        <StyledButton
                            fullWidth
                            variant="contained"
                            color="primary"
                            startIcon={<FaSignInAlt />}
                            onClick={handleSubmit}
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
                        <StyledButton
                            fullWidth
                            variant="contained"
                            color="success"
                            onClick={() => dispatch(increment())}
                        >
                            {count}
                        </StyledButton>
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
