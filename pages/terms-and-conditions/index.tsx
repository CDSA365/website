import { NextPage } from "next";
import { FC } from "react";
import PageHeading from "../../components/pageHeader";
import { MainSection } from "../../components/styled";
import { config } from "../../config/config";
import { fetchSeoData } from "../../helpers/common-helpers";
import StandardLayout from "../../layouts/standard";
import { ISEOProps } from "../../types/types";

type Props = {};

const TermsPage: NextPage = (props: Props) => {
    return (
        <StandardLayout {...props}>
            <PageHeading title="Terms &amp; Conditions" />
            <MainSection>
                <div className="prose mx-auto max-w-3xl space-y-6 pb-12 md:pb-24">
                    <p>
                        The Terms and Conditions contained here in shall apply
                        to any person (“User”) using the services of this
                        ACADEMY for making payments (Academy related fees)
                        through an online payment gateway service (“Service”)
                        offered by RazorPay, through this website. Each User is
                        therefore deemed to have read and accepted these Terms
                        Of Services.
                    </p>
                    <ul className="list-none px-0 space-y-6">
                        <li>
                            Once a User has accepted these Terms and Conditions,
                            he/she may register and avail the Services and
                            products offered on the Academy’s website.
                        </li>
                        <li>
                            The Academy rights, obligations, undertakings shall
                            be subject to the laws in force in India, as well as
                            any directives/procedures of Government of India,
                            and nothing contained in these Terms and Conditions
                            shall be in derogation of Academy's right to comply
                            with any law enforcement agencies request or
                            requirements relating to any User’s use of the
                            website or information provided to or gathered by
                            Academy’s with respect to such use. Each User
                            accepts and agrees that the provision of details of
                            his/her use of the Website to regulators or police
                            or to any other third party in order to resolve
                            disputes or complaints which relate to the Website
                            shall be at the absolute discretion of Academy.
                        </li>
                        <li>
                            If any part of these Terms and Conditions are
                            determined to be invalid or unenforceable pursuant
                            to applicable law including, but not limited to, the
                            warranty disclaimers and liability limitations set
                            forth here in, then the invalid or unenforceable
                            provision will be deemed superseded by a valid,
                            enforceable provision that most closely matches the
                            intent of the original provision and the remainder
                            of these Terms and Conditions shall continue in
                            effect.
                        </li>
                        <li>
                            These Terms and Conditions constitute the entire
                            agreement between the User and the Academy. These
                            Terms and Conditions supersede all prior or
                            contemporaneous communications and proposals,
                            whether electronic, oral, or written, between the
                            User and the Academy. A printed version of these
                            Terms and Conditions and of any notice given in
                            electronic form shall be admissible in judicial or
                            administrative proceedings based upon or relating to
                            these Terms and Conditions to the same extent and
                            subject to the same conditions as other business
                            documents and records originally generated and
                            maintained in printed form.
                        </li>
                        <li>
                            The entries in the books of Academy and/or the
                            Payment Service Providers kept in the ordinary
                            course of business of the Academy and/or the Payment
                            Service Providers with regard to transactions
                            covered under these Terms and Conditions and matters
                            there in appearing shall be binding on the User and
                            shall be conclusive proof of the genuineness and
                            accuracy of the transaction.
                        </li>
                        <li>
                            <b>Cancellation &amp; Refund:</b> No cancellations
                            are allowed once the fees are paid. Academy will not
                            be refunding any amount in case of Fee cancellation.
                            In case of any queries like duplicate processing,
                            cancellation of the admission/postponement the user
                            shall immediately approach te Academy with his/ her
                            claim details. Such refund (if any) shall be
                            effected by the Academy via payment gateway or by
                            means of a demand draft or such other means as
                            Academy deems appropriate. As a rule the Academy
                            does not allow any refund against cancellation.
                        </li>
                    </ul>
                    <p>
                        <b>Note :</b> Transaction fees levied on transactions
                        will not be refunded/reversed
                    </p>
                    <ul className="list-none px-0 space-y-6">
                        <li>
                            In these Terms and Conditions, the term “Charge
                            Back” shall mean, approved and settled credit card
                            or net banking purchase transaction(s) which are at
                            any time refused, debited or charged back to
                            merchant account (and shall also include similar
                            debits to Payment Service Provider's accounts, if
                            any) by the acquiring bank or credit card company
                            for any reason whatsoever, together with the bank
                            fees, penalties and other charges incidental there
                            to.
                        </li>
                        <li>
                            Server Slow Down/Session Timeout: In case the
                            Website or Payment Service Provider’s webpage, that
                            is linked to the Website, is experiencing any server
                            related issues like ‘slow down’ or ‘failure’ or
                            ‘session timeout’, the User shall, before initiating
                            the second payment, check whether his/her Bank
                            Account has been debited or not and accordingly
                            resort to one of the following options:
                            <ul>
                                <li>
                                    In case the Bank Account appears to be
                                    debited, ensure that he/ she does not make
                                    the payment twice and immediately thereafter
                                    contact Academy via e-mail or any other mode
                                    of contact as provided by the Academy to
                                    confirm payment.
                                </li>
                                <li>
                                    In case the Bank Account is not debited, the
                                    User may initiate a fresh transaction to
                                    make payment.
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <p>
                        However, the User agrees that under no circumstances the
                        Payment Gateway Service Provider shall be held
                        responsible for such fraudulent/duplicate transactions
                        and hence no claims should be raised to Payment Gateway
                        Service Provider No communication received by the
                        Payment Service Provider(s) in this regards shall be
                        entertained by the Payment Service Provider(s).
                    </p>
                    <h3>C. Limitation of Liability</h3>
                    <ul className="list-none px-0 space-y-6">
                        <li>
                            Academy has made this Service available to the User
                            as a matter of convenience. Academy expressly
                            disclaims any claim or liability arising out of the
                            provision of this Service. The User agrees and
                            acknowledges that he/she shall be solely responsible
                            for his/her conduct and that Academy reserves the
                            right to terminate the rights to use of the Service
                            immediately without giving any prior notice there
                            of.
                        </li>
                        <li>
                            The Academy and/or the Payment Service Providers
                            shall not be liable for any inaccuracy, error or
                            delay in, or omission of (a) any data, information
                            or message, or (b) the transmission or delivery of
                            any such data, information or message or (c) any
                            loss or damage arising from or occasioned by any
                            such inaccuracy, error, delay or omission,
                            non-performance or interruption in any such data,
                            information or message. Under no circumstances shall
                            the Academy and/or the Payment Service Providers,
                            its employees, directors, and its third party agents
                            involved in processing, delivering or managing the
                            Services, be liable for any direct, indirect,
                            incidental, special or consequential damages, or any
                            damages what so ever, including punitive or
                            exemplary arising out of or in any way connected
                            with the provision of or any inadequacy or
                            deficiency in the provision of the Services or
                            resulting from unauthorized access or alteration of
                            transmissions of data or arising from suspension or
                            termination of the Services.
                        </li>
                        <li>
                            The Academy and the Payment Service Provider(s)
                            assume no liability whatsoever for any monetary or
                            other damage suffered by the User on account of:
                            <ul>
                                <li>
                                    the delay, failure, interruption, or
                                    corruption of any data or other information
                                    transmitted in connection with use of the
                                    Payment Gateway or Services in connection
                                    there to and/or
                                </li>
                                <li>
                                    Any interruption or errors in the operation
                                    of the Payment Gateway.
                                </li>
                            </ul>
                        </li>
                        <li>
                            The User shall indemnify and hold harmless the
                            Payment Service Provider(s) and Academy and their
                            respective officers, directors, agents, and
                            employees, from any claim or demand, or actions
                            arising out of or in connection with the utilization
                            of the Services.
                        </li>
                        <li>
                            The User agrees that Academy or any of its employees
                            will not be held liable by the User for any loss or
                            damages arising from your use of, or reliance upon
                            the information contained on the Website, or any
                            failure to comply with these Terms and Conditions
                            where such failure is due to circumstance beyond
                            Academys reasonable control.
                        </li>
                    </ul>
                    <h3>D. Miscellaneous Conditions:</h3>
                    <ul className="list-none px-0 space-y-6">
                        <li>
                            Any waiver of any rights available to Academy under
                            these Terms and Conditions shall not mean that those
                            rights are automatically waived.
                        </li>
                        <li>
                            The User agrees, understands and confirms that his/
                            her personal data including without limitation
                            details relating to debit card/ credit card
                            transmitted over the Internet may be susceptible to
                            misuse, hacking, theft and/ or fraud and that
                            Academy or the Payment Service Provider(s) have no
                            control over such matters.
                        </li>
                        <li>
                            Although all reasonable care has been taken towards
                            guarding against unauthorized use of any information
                            transmitted by the User, Academy does not represent
                            or guarantee that the use of the Services provided
                            by/through it will not result in theft and/or
                            unauthorized use of data over the Internet.
                        </li>
                        <li>
                            Academy, the Payment Service Provider(s) and its
                            affiliates and associates shall not be liable, at
                            any time, for any failure of performance, error,
                            omission, interruption, deletion, defect, delay in
                            operation or transmission, computer virus,
                            communications line failure, theft or destruction or
                            unauthorized access to, alteration of, or use of
                            information contained on the Website.
                        </li>
                        <li>
                            The User may be required to create his/her own User
                            ID and Password in order to register and/ or use the
                            Services provided by Academy on the Website. By
                            accepting these Terms and Conditions the User
                            aggress that his/her User ID and Password are very
                            important pieces of information and it shall be the
                            User’s own responsibility to keep them secure and
                            confidential. In furtherance here of, the User
                            agrees to
                            <ul>
                                <li>
                                    Choose a new password, whenever required for
                                    security reasons.
                                </li>
                                <li>
                                    Keep his/ her User ID &amp; Password
                                    strictly confidential.
                                </li>
                                <li>
                                    Be responsible for any transactions made by
                                    User under such User ID and Password.
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <p>
                        The User is here by informed that Academy will never ask
                        the User for the User’s password in an unsolicited phone
                        call or in an unsolicited email. The User is here by
                        required to sign out of his/her Academy account on the
                        Website and close the web browser window when the
                        transaction(s) have been completed. This is to ensure
                        that others cannot access the User’s personal
                        information and correspondence when the User happens to
                        share a computer with someone else or is using a
                        computer in a public place like a library or Internet
                        café.
                    </p>
                    <h3>E. Debit/Credit Card, Bank Account Details</h3>
                    <ul className="list-none px-0 space-y-6">
                        <li>
                            The User agrees that the debit/credit card details
                            provided by him/ her for use of the aforesaid
                            Service(s) must be correct and accurate and that the
                            User shall not use a debit/credit card, that is not
                            lawfully owned by him/her or the use of which is not
                            authorized by the lawful owner thereof. The User
                            further agrees and undertakes to provide correct and
                            valid debit/credit card details.
                        </li>
                        <li>
                            The User may pay his/her fees to Academy by using a
                            debit/credit card or through online banking account.
                            The User warrants, agrees and confirms that when
                            he/she initiates a payment transaction and/or issues
                            an online payment instruction and provides his/her
                            card/bank details:
                            <ul>
                                <li>
                                    The User is fully and lawfully entitled to
                                    use such credit/debit card, bank account for
                                    such transactions
                                </li>
                                <li>
                                    The User is responsible to ensure that the
                                    card/bank account details provided by
                                    him/her are accurate
                                </li>
                                <li>
                                    The User is authorizing debit of the
                                    nominated card/bank account for the payment
                                    of fees selected by such User along with the
                                    applicable Fees.
                                </li>
                                <li>
                                    The User is responsible to ensure sufficient
                                    credit is available on the nominated card/
                                    bank account at the time of making the
                                    payment to permit the payment of the dues
                                    payable or the bill(s) selected by the User
                                    inclusive of the applicable Fee.
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <h3>F. Personal Information</h3>
                    <ul className="list-none px-0 space-y-6">
                        <li>
                            The User agrees that, to the extent required or
                            permitted by law, Academy and/ or the Payment
                            Service Provider(s) may also collect, use and
                            disclose personal information in connection with
                            security related or law enforcement investigations
                            or in the course of cooperating with authorities or
                            complying with legal requirements.
                        </li>
                        <li>
                            The User agrees that any communication sent by the
                            User vide e-mail, shall imply release of information
                            there in/there with to Academy. The User agrees to
                            be contacted via e-mail on such mails initiated by
                            him/her.
                        </li>
                        <li>
                            In addition to the information already in the
                            possession of Academy and/or the Payment Service
                            Provider(s), Academy may have collected similar
                            information from the User in the past. By entering
                            the Website the User consents to the terms of
                            Academy, information privacy policy and to Academy
                            continued use of previously collected information.
                            By submitting the User’s personal information to
                            Academy, the User will be treated as having given
                            his/her permission for the processing of the User’s
                            personal data as set out here in.
                        </li>
                        <li>
                            The User acknowledges and agrees that his/her
                            information will be managed in accordance with the
                            laws for the time in force.
                        </li>
                    </ul>
                    <h3>G. Payment Gateway Disclaimer</h3>
                    <p>
                        The Service is provided in order to facilitate access to
                        view and pay Student Fees online. Academy or the Payment
                        Service Provider(s) do not make any representation of
                        any kind, express or implied, as to the operation of the
                        Payment Gateway other than what is specified in the
                        Website for this purpose. By accepting/agreeing to these
                        Terms and Conditions, the User expressly agrees that
                        his/her use of the aforesaid online payment Service is
                        entirely at own risk and responsibility of the User.
                    </p>
                    <h3>Complaints</h3>
                    <p>
                        If you have any complaints about the Website, we want to
                        hear from you so we can improve our Service. Please
                        email
                        <a href="mailto:info@cdsa365.com">
                            info@cdsa365.com
                        </a>{" "}
                        and we will consider your comments carefully.
                    </p>
                    <h3>General Information</h3>
                    <p>
                        These Terms and Conditions constitute the entire
                        agreement between you and Academy and govern your use of
                        the Service, superseding any prior agreements between
                        you and Academy. You also may be subject to additional
                        terms and conditions that may apply when you use
                        affiliate services, third-party content or third-party
                        software. Our relationship with you is subject to Indian
                        law and the exclusive jurisdiction of the Indian courts.
                        Any failure by Academy to exercise or enforce any right
                        or provision of these Terms and Conditions shall not
                        constitute a waiver of such right or provision. If any
                        provision of these Terms and Conditions is found by a
                        court of competent jurisdiction to be invalid, the
                        parties nevertheless agree that the court should
                        endeavour to give effect to the parties' intentions as
                        reflected in the provision, and the other provisions of
                        these Terms and Conditions remain in full force and
                        effect.
                    </p>
                </div>
            </MainSection>
        </StandardLayout>
    );
};

export async function getServerSideProps() {
    const seoData = await fetchSeoData(config.pageIndex.termsAndConditions);
    const { title, description, keyword } = seoData;
    return {
        props: {
            title,
            description,
            keyword,
        },
    };
}

export default TermsPage;
