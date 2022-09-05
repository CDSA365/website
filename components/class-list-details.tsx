import moment from "moment";
import { FC } from "react";

type Props = {
    trainer: string;
    start: string;
};

const ClassListDetails: FC<Props> = ({ trainer, start }) => {
    return (
        <>
            <p>
                <b>Trainer:</b> {trainer}
            </p>
            <p>
                <b>Start:</b> {moment(start).format("LLL")}
            </p>
        </>
    );
};

export default ClassListDetails;
