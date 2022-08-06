import { Container } from "@mui/material";
import { FC } from "react";
import { FaBullhorn, FaPenNib } from "react-icons/fa";
import RequestDemoButton from "./requestDemoButton";
import { StyledButton, CTASection } from "./styled";

type Props = {};

const CallToAction: FC = (props: Props) => {
    return (
        <CTASection className="">
            <Container className="flex flex-col items-center py-12">
                <div className="prose text-center text-gray-700 max-w-lg mx-auto">
                    <h1 className="text-blueGray-600 mb-0">
                        Join our learning community
                    </h1>
                    <p>
                        Carpe Diem Skills Academy offers the best Online/Offline
                        Spoken English classes to improve your ability to
                        communicate in English and scale to higher standards
                        professionally and personally
                    </p>
                </div>
                <div className="flex items-center justify-center my-6 gap-6">
                    <RequestDemoButton />
                    <StyledButton color="error" size="large" variant="outlined">
                        <FaPenNib /> Enroll now
                    </StyledButton>
                </div>
            </Container>
        </CTASection>
    );
};

export default CallToAction;
