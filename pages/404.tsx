import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";
import globby from "globby";
import Fuse from "fuse.js";
import Link from "next/link";
import { Chip } from "@mui/material";
import { capitalize } from "lodash";

type Props = {
    pages: string[];
};

const NotFoundPage: NextPage = (props: Partial<Props>) => {
    const { pages } = props;
    const [results, setResults] = useState<string[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fuse = new Fuse(pages || []);
        const searchResults = fuse.search(router.asPath);
        console.log("searchResults", searchResults);
        setResults(searchResults.map((result) => result.item));
    }, [pages, router.asPath]);

    return (
        <div className="h-[100vh] flex items-center">
            <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
                <img src="/images/page-not-found.png" alt="404" width="400px" />
                <div className="text-center prose max-w-none">
                    <h1>
                        Page your are trying to access
                        <br />
                        could not be found
                    </h1>
                    {results?.length != 0 && (
                        <div className="font-semibold text-red-500">
                            Visit these pages instead?
                        </div>
                    )}
                </div>
                <div className="flex gap-3">
                    {results?.map((result) => (
                        <Link key={result} href={result}>
                            <Chip
                                color="primary"
                                variant="outlined"
                                label={result
                                    .replace("/", "")
                                    .split("-")
                                    .map((x) => capitalize(x))
                                    .join(" ")}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export async function getStaticProps() {
    const paths = await globby([
        "pages/**/*{.js,.tsx,.mdx}",
        "!pages/_*.js",
        "!pages/_*.tsx",
        "!pages/api",
    ]);
    const pages = paths.map((path) =>
        path
            .replace("pages", "")
            .replace(".js", "")
            .replace(".tsx", "")
            .replace(".mdx", "")
            .replace("/index", "")
    );
    return {
        props: {
            pages,
        },
    };
}

export default NotFoundPage;
