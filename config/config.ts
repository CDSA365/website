const { NEXT_PUBLIC_API_BASE_URL: BASE_URL } = process.env;

export const config = {
    api: {
        registerStudent: BASE_URL + "/student/register",
        login: BASE_URL + "/student/login",
        getStudentClasses: BASE_URL + "/student/classes",
        makePayment: BASE_URL + "/payment/create",
        verifyPayment: BASE_URL + "/payment/verify",
        capturePaymentFailure: BASE_URL + "/payment/capture-failure",
        getPaymentHistory: BASE_URL + "/payments",
        addLeads: BASE_URL + "/leads/add",
        getAnnouncement: BASE_URL + "/announcement",
        sendContactForm: BASE_URL + "/contact-form",
        getFeeData: BASE_URL + "/student/fee-data",
        getSeoData: BASE_URL + "/seo/get",
    },
    pageIndex: {
        home: "home",
        aboutUs: "about-us",
        courses: "courses",
        kids: "kids",
        adults: "adults",
        contactUs: "contact-us",
        privacyPolicy: "privacy-policy",
        termsAndConditions: "terms-and-conditions",
        enroll: "enroll",
        requestDemo: "request-a-demo",
        publicSpeakingForKids: "public-speaking-for-kids",
        publicSpeakingForAdults: "public-speaking-for-adults",
    },
};
