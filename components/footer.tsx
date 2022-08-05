import { FC } from "react";
import { GridRowTriple, StyledFooter } from "./styled";

type Props = {};

const Footer: FC = (props: Props) => {
    return (
        <StyledFooter className="divide-y-[1px] divide-blueGray-700 flex-col gap-6">
            <GridRowTriple className="divide-x-[1px] divide-blueGray-700">
                <div className="flex flex-row items-start px-6">
                    <div className="prose-sm">
                        <h2 className="text-blueGray-300">
                            Carpe Diem Skills Academy
                        </h2>
                        <p className="text-blueGray-500">
                            We are a bunch of sincere and dedicated folks
                            passionate about helping those who come to us reach
                            their full potential and communicate with
                            confidence.
                        </p>
                    </div>
                </div>
                <div className="px-6">
                    <div className="prose-sm">
                        <h2 className="text-blueGray-300">Explore</h2>
                    </div>
                    <ul className="list-disc flex flex-wrap">
                        <li className="mr-7 text-blueGray-500 hover:text-red-500">
                            Home
                        </li>
                        <li className="mr-7 text-blueGray-500 hover:text-red-500">
                            About Us
                        </li>
                        <li className="mr-7 text-blueGray-500 hover:text-red-500">
                            Classes
                        </li>
                        <li className="mr-7 text-blueGray-500 hover:text-red-500">
                            Testimonials
                        </li>
                        <li className="mr-7 text-blueGray-500 hover:text-red-500">
                            Contact us
                        </li>
                        <li className="mr-7 text-blueGray-500 hover:text-red-500">
                            Privacy Policy
                        </li>
                        <li className="mr-7 text-blueGray-500 hover:text-red-500">
                            Terms &amp; Conditions
                        </li>
                    </ul>
                </div>
                <div className="px-6">
                    <div className="prose-sm">
                        <h2 className="text-blueGray-300">Address</h2>
                        <p className="text-gray-500 text-sm my-0">
                            96, K.K.Pudhur, <br />
                            Maniam Kaliappa Gounder Street,
                            <br />
                            Coimbatore, Tamil Nadu - 641038
                        </p>
                    </div>
                </div>
            </GridRowTriple>
            <div className="flex justify-center items-center h-24">
                <p className="text-xs text-blueGray-500">
                    Copyright &copy; CDSA 2022
                </p>
            </div>
        </StyledFooter>
    );
};

export default Footer;
