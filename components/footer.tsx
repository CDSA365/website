import Link from "next/link";
import { FC } from "react";
import { GridRowTriple, StyledFooter } from "./styled";

type Props = {};

const navItems = [
    {
        name: "Home",
        link: "",
    },
    {
        name: "About Us",
        link: "about-us",
    },
    {
        name: "Courses",
        link: "courses",
    },
    {
        name: "Testimonials",
        link: "testimonials",
    },
    {
        name: "Contact Us",
        link: "contact-us",
    },
    {
        name: "Terms & Conditions",
        link: "terms-and-conditions",
    },
    {
        name: "Privacy Policy",
        link: "privacy-policy",
    },
];

const Footer: FC = (props: Props) => {
    return (
        <StyledFooter className="md:divide-y-[1px] md divide-blueGray-700 flex-col gap-6">
            <GridRowTriple className="divide-y-[1px] md:divide-x-[1px] md:divide-y-0 divide-blueGray-700">
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
                        {navItems.map((item, key) => (
                            <li
                                className="mr-7 text-blueGray-500 hover:text-red-500"
                                key={key}
                            >
                                <Link href={`/${item.link}`}>{item.name}</Link>
                            </li>
                        ))}
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
