import React from 'react';
import { SiBento } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";
import { PiReadCvLogoBold } from "react-icons/pi";
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin, BsMedium } from "react-icons/bs";

const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/aryan-garg-661552198/"
                target="blank"
                rel="noreferrer"
            >
                <BsLinkedin className="text-4xl" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://twitter.com/AryanGa66087243"
                target="blank"
                rel="noreferrer"
            >
                <BsTwitter className="text-4xl" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.instagram.com/aryan_garg_08/"
                target="blank"
                rel="noreferrer"
            >
                <BsInstagram className="text-4xl" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://github.com/code08-ind/"
                target="blank"
                rel="noreferrer"
            >
                <BsGithub className="text-4xl" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://bento.me/aryangarg"
                target="blank"
                rel="noreferrer"
            >
                <SiBento className="text-4xl" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://gargaryan82000.medium.com/"
                target="blank"
                rel="noreferrer"
            >
                <BsMedium className="text-4xl" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="mailto:gargaryan82000@gmail.com"
                target="blank"
                rel="noreferrer"
            >
                <BiLogoGmail className="text-4xl" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://read.cv/aryangarg"
                target="blank"
                rel="noreferrer"
            >
                <PiReadCvLogoBold className="text-4xl" />
            </a>
        </div>
    );
};

export default SocialMediaIcons;