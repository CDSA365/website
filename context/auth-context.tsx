import { createContext, FC, ReactElement, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { removeUser } from "../store/slice/user-slice";
import _ from "lodash";
import { useRouter } from "next/router";

type Props = {
    children: ReactElement;
};

interface IAuthContext {
    authenticated: boolean;
    logout: Function;
    user: {
        [x: string]: any;
    };
}

const AuthContext = createContext<IAuthContext | null>(null);
const { Provider } = AuthContext;

const AuthProvider: FC<Props> = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState({});
    const { data: userData } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const router = useRouter();

    const logout = () => dispatch(removeUser());

    useEffect(() => {
        if (_.isEmpty(userData)) {
            router.push("/login");
        } else {
            setAuthenticated(userData.isLoggedIn === true);
            setUser({ ...userData });
        }
    }, [userData]);

    return (
        <Provider value={{ authenticated, user, logout }}>{children}</Provider>
    );
};

export { AuthProvider, AuthContext };
