import Link from "next/link";
import { FaBullhorn } from "react-icons/fa";
import { StyledButton } from "./styled";

type Props = {};

const RequestDemoButton = (props: Props) => {
    return (
        <Link href={"/request-a-demo"}>
            <StyledButton color="error" size="large" variant="contained">
                <FaBullhorn /> Request a demo
            </StyledButton>
        </Link>
    );
};

export default RequestDemoButton;
