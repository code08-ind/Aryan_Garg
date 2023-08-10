import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
    return (
        <footer className="h-64 bg-blue pt-10">
            <div className="w-10/12 mx-auto">
                <SocialMediaIcons />
                <div className="md:flex justify-center md:justify-between text-center ">
                    <p className="font-playfair font-semibold text-3xl text-deep-blue">
                        ARYAN GARG
                    </p>
                    <p className="font-montserrat text-lg font-semibold text-deep-blue">
                        ©{new Date().getFullYear()} ARYAN GARG. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;