import React from "react";
import dynamic from "next/dynamic";

import { SiGithub, SiInstagram } from "react-icons/si";

const SiteMap = dynamic(() => import("./SiteMap"), { ssr: false });

export default function Footer() {
    const contact = [
        {
            link: "mailto:kevinyf.ts@gmail.com",
            text: "Email me",
        },
    ];
    const socials = [
        {
            ICon: SiGithub,
            link: "https://github.com/Marjan02",
        },
        {
            ICon: SiInstagram,
            link: "https://www.instagram.com/__kevnnn_/",
        },
    ];

    return (
        <div className="w-full bg-primary border-t border-gray-500 p-5 xl:p-0 ">
            <div className="max-w-7xl mx-auto flex-row lg:flex lg:gap-x-32">
                <div className="py-10 lg:py-28">
                    <h1 className="text-3xl font-bold text-gray-200">{`Tefa Wikrama`}</h1>
                    <p className="mt-5 text-gray-400 text-xl lg:w-100">
                        model pembelajaran berbasis produk (barang/jasa) melalui
                        sinergi sekolah dengan industri. Pembelajaran Teaching
                        Factory menghasilkan Produk berupa jasa atau barang yang
                        jadi sesuai dengan standar industri.
                    </p>
                    <div className="mt-10 flex gap-5 text-gray-200">
                        {socials.map(({ link, ICon }, index) => {
                            return (
                                <a
                                    href={link}
                                    key={index}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <ICon className="text-4xl" />
                                </a>
                            );
                        })}
                    </div>
                </div>

                <SiteMap />
            </div>
            <h1 className="text-gray-400 text-xl max-w-7xl mx-auto pb-10 mt-10 sm:mt-0">
                All rights reserved © Kevin Yardan Fauzan
            </h1>
        </div>
    );
}
