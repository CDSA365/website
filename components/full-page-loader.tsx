import React from "react";
import { FaSpinner } from "react-icons/fa";
import { StyledFullPageLoader } from "./styled";

type Props = {};

const FullPageLoader = (props: Props) => {
    return (
        <StyledFullPageLoader>
            <div>
                <FaSpinner className="text-5xl text-red-500 animate-spin" />
            </div>
        </StyledFullPageLoader>
    );
};

export default FullPageLoader;
