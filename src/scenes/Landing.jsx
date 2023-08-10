import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import '../Landing.css';

const Landing = () => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
    return (
        <section
            id="home"
            className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
        >
            {/* IMAGE SECTION */}
            <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
                {isAboveLarge ? (
                    <div
                        className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
                    >
                        <img
                            alt="profile"
                            className="hover:filter hover:translate-x-5 hover:translate-y-5 hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
                            src="assets/profile.jpg"
                        />
                    </div>
                ) : (
                    <img
                        alt="profile"
                        className="z-10 w-full max-w-[400px] md:max-w-[600px]"
                        src="assets/profile.jpg"
                    />
                )}
            </div>

            {/* MAIN TEXT */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32">
                {/* HEADINGS */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="text-2xl ml-3 font-semibold mb-4 text-center md:text-start text-blue font-raleway">Hi, My Name Is</p>
                    <p className="text-7xl mt-3 font-playfair z-10 text-center md:text-start">
                        Aryan {""}{""}
                        <span
                            className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush1
                            before:absolute before:-left-[16px] before:-top-[45px] before:z-[-1]"
                        >
                            Garg
                        </span>
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <h5 className="mt-7 mb-2 text-center md:text-start">
                            <span className="font-quicksand font-semibold">
                                <span>Software Development Engineer</span><span>Full Stack Web Developer</span>
                                <span>Open Source Contributor</span><span>Freelancer</span>
                                <span>Technical Content Writer</span>
                            </span>
                        </h5>
                    </div>
                </motion.div>

                {/* CALL TO ACTIONS */}
                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <a
                        className="bg-blue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white font-raleway transition duration-500 mx-1"
                        href="https://drive.google.com/file/d/1-dFBVSdeAoseKd1grqOdULL6h_cYSwmr/view?usp=sharing"
                        target="_blank"
                    >
                       &nbsp;&nbsp;MY RESUME&nbsp;&nbsp;
                    </a>
                    <a
                        className="mx-1 rounded-r-sm border-2 hover:border-blue border-white py-0.5 pr-0.5"
                        target="blank"
                        href="https://topmate.io/aryan_garg8"
                    >
                        <div className="hover:text-blue transition duration-500 w-full h-full flex items-center font-semibold justify-center px-10 font-raleway">
                            LET'S TALK
                        </div>
                    </a>
                </motion.div>

                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <SocialMediaIcons />
                </motion.div>
            </div>
        </section>
    );
};

export default Landing;