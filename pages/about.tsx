import React from "react";
import Image from "next/image";

import AboutSEO from "@/components/seo/AboutSEO";

export default function About() {
    return (
        <>
            <AboutSEO />
            <div className=" py-36 max-w-4xl mx-auto grid sm:grid-cols-2 grid-cols-1 p-5">
                <div className="">
                    <h1 className="text-4xl animate-pop-1000">{`Teaching Factory adalah model pembelajaran berbasis produk melalui sinergi sekolah dengan industri.`}</h1>
                    <p className="mt-5 text-2xl text-gray-500  animate-pop-1500">
                        Pembelajaran Teaching Factory menghasilkan Produk berupa
                        jasa atau barang yang jadi sesuai dengan standar
                        industri.
                    </p>
                    <p className="text-gray-500 animate-pop-1500 mb-5 sm:mb-0">
                        - Tefa Wikrama -
                    </p>
                </div>
                <div className="">
                    <div className="relative h-96 w-full sm:w-72 mx-auto">
                        <Image
                            src="/profile.png"
                            alt="404"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            className="rounded-md "
                            priority
                            placeholder="blur"
                            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
