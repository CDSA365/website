import { useRouter } from "next/router";
import { FC, ReactElement, useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth-context";
import FullPageLoader from "./full-page-loader";

type Props = {
    protectedRoutes: string[];
    children: ReactElement;
};

const PrivateRoutes: FC<Props> = ({ protectedRoutes, children }) => {
    const router = useRouter();
    const auth = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    const isProtected = protectedRoutes.indexOf(router.pathname) !== -1;

    useEffect(() => {
        console.log(auth?.authenticated);
        setLoading(true);
        if (isProtected) {
            if (!auth?.authenticated) {
                setTimeout(() => {
                    router.push("/login").then(() => setLoading(false));
                }, 1000);
            } else {
                setLoading(false);
            }
        } else {
            setLoading(false);
        }
    }, [router.pathname, auth?.authenticated]);

    if (loading) {
        return <FullPageLoader />;
    } else {
        return children;
    }
};

export default PrivateRoutes;
