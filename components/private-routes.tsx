import { useRouter } from "next/router";
import { FC, ReactElement, useContext, useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import FullPageLoader from "./full-page-loader";

type Props = {
    protectedRoutes: string[];
    children: ReactElement;
};

const PrivateRoutes: FC<Props> = ({ protectedRoutes, children }) => {
    const router = useRouter();
    const { data: user } = useAppSelector((state) => state.user);
    const [loading, setLoading] = useState(true);

    const isProtected = protectedRoutes.indexOf(router.pathname) !== -1;

    useEffect(() => {
        if (!user.isLoggedIn && isProtected) {
            router.push("/login");
        }
        setLoading(false);
    }, []);

    useEffect(() => {}, [router.pathname]);

    if (loading) {
        return <FullPageLoader />;
    }

    return children;
};

export default PrivateRoutes;
