import { NextPage } from "next";
import StandardLayout from "../../layouts/standard";

type Props = {};

const LoginPage: NextPage = (props: Props) => {
    return <StandardLayout>LoginPage</StandardLayout>;
};

LoginPage.defaultProps = {
    title: "Login - Carpe Diem Skills Academy",
};

export default LoginPage;
