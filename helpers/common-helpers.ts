import moment from "moment";

export const frameTableRows = (classes: any) => {
    return classes.map((item: any) => ({
        id: item.id,
        slug: item.slug,
        title: item.title,
        start_time: moment(item.start_time).format("LLL"),
        end_time: moment(item.end_time).format("LLL"),
        trainer_name: item.trainer_name,
        type: item.type,
        link: item.video_link,
    }));
};

export const framePaymentTableRows = (paymentData: any) => {
    return paymentData.map((payment: any) => {});
};
