import React from "react";
import Head from "next/head";

interface Props {
    description: string;
    title: string;
    image?: string;
}

export default function BlogDetailSEO({ description, title, image }: Props) {
    return (
        <Head>
            <title>Tefa Wikrama</title>
            <meta name="description" content={description} />
            <meta name="author" content="Wikrama" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
