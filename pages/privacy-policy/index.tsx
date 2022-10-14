import { NextPage } from "next";
import { FC } from "react";
import PageHeading from "../../components/pageHeader";
import { MainSection } from "../../components/styled";
import StandardLayout from "../../layouts/standard";
import { ISEOProps } from "../../types/types";

type Props = {};

const PrivacyPolicyPage: FC = (props: Props) => {
    return (
        <StandardLayout {...props}>
            <PageHeading title="Privacy Policy" />
            <MainSection>
                <div className="prose mx-auto max-w-3xl space-y-6 pb-12 md:pb-24">
                    <h3>A. Privacy Policy</h3>
                    <p>
                        The Academy respects and protects the privacy of the
                        individuals that access the information and use the
                        services provided through them. Individually
                        identifiable information about the User is not wilfully
                        disclosed to any third party without first receiving the
                        User’s permission, as covered in this Privacy Policy.
                    </p>
                    <p>
                        This Privacy Policy describes Academy’s treatment of
                        personally identifiable information that Academy
                        collects when User is on this website does not collect
                        any unique information about the User (such as User’s
                        name, email address, age, gender etc.) except when the
                        User specifically and knowingly provide such information
                        on the Website. Like any business interested in offering
                        the highest quality of service to clients, Academy may,
                        from time to time, send email and other communication to
                        the User tell them about the various services, features,
                        functionality and content offered by Academy website or
                        seek voluntary information from you.
                    </p>
                    <p className="font-semibold">
                        Please be aware, however, that Academy will release
                        specific personal information about the User if required
                        to do so in the following circumstances:
                    </p>
                    <ul>
                        <li>
                            In order to comply with any valid legal process such
                            as a search warrant, statute, or court order, or
                        </li>
                        <li>
                            If any of User’s actions on Academy 's website
                            violate the Terms of Service or any of Academy’s
                            guidelines for specific services, or
                        </li>
                        <li>
                            To protect or defend Academy's legal rights or
                            property, the Academy’s site, or Academy’s Users or
                        </li>
                        <li>
                            To investigate, prevent, or take action regarding
                            illegal activities, suspected fraud, situations
                            involving potential threats to the security,
                            integrity of Academy’s website/offerings.
                        </li>
                    </ul>
                </div>
            </MainSection>
        </StandardLayout>
    );
};

const SEO: ISEOProps = {
    title: "Privacy Policy - Carpe Diem Skills Academy",
    description: "",
    keywords: "",
};

PrivacyPolicyPage.defaultProps = {
    ...SEO,
};

export default PrivacyPolicyPage;
