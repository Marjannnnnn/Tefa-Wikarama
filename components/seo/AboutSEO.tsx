import Head from "next/head";
import React from "react";

export default function AboutSEO() {
    const description =
        "Teaching Factory Wikrama";

    return (
        <Head>
            <title>Tefa Wikrama</title>
            <meta name="description" content="" />
            <meta
                name="keywords"
                content="Teaching Factory"
            />
            <meta name="author" content="Wikrama" />
            <meta property="og:title" content="Wikrama" />
            <meta property="og:description" content={description} />

            <meta property="og:image" content="/profile.png" />
            {/* for twitter */}
            <meta name="twitter:title" content="Wikrama" />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content="/profile.png" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
