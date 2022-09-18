import Link from "next/link";
import { FaBullhorn } from "react-icons/fa";
import { StyledButton } from "./styled";

type Props = {
    color?: "primary" | "error" | "info" | "secondary";
};

const RequestDemoButton = ({ color }: Props) => {
    return (
        <Link href={"/request-a-demo"}>
            <StyledButton
                color={color || "error"}
                size="large"
                variant="contained"
            >
                <FaBullhorn /> Request a demo
            </StyledButton>
        </Link>
    );
};

export default RequestDemoButton;
