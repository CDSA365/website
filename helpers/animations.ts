import { Variants } from "framer-motion";

export const EaseIn = {
    offscreen: {
        y: 200,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

export const Reveal = {
    offscreen: {
        scale: 0.5,
        opacity: 0,
    },
    onscreen: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "tween",
        },
    },
};
