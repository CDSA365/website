import moment from "moment";
import { config } from "../config/config";

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

export const fetchSeoData = async (page: string) => {
    const url = config.api.getSeoData + `?page=${page}`;
    const defaultKey = "Carpe Diem Skills Academy | www.cdsa.365.com";
    try {
        const resp = await fetch(url);
        const json = await resp.json();
        const { title, description, keywords } = json;
        return {
            title: title ?? defaultKey,
            description: description ?? defaultKey,
            keyword: keywords ?? defaultKey,
        };
    } catch (error) {
        return {
            title: defaultKey,
            description: defaultKey,
            keyword: defaultKey,
        };
    }
};
