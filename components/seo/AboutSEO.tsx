import Head from "next/head";
import React from "react";

export default function AboutSEO() {
    const description =
        "Teaching Factory Wikrama";

    return (
        <Head>
            <title>Tefa Wikrama</title>
            <meta name="author" content="Wikrama" />
            <meta property="title" content="Wikrama" />
            <meta property="description" content={description} />
            <meta property="image" content="/profile.png" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
