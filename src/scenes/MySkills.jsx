import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { FaJava, FaPython, FaReact, FaNodeJs, FaSass } from "react-icons/fa";
import { BiLogoJavascript, BiLogoMongodb, BiLogoTypescript, BiLogoVisualStudio, BiLogoGit, BiLogoGithub, BiLogoNetlify } from "react-icons/bi";
import { TbBrandCpp, TbBrandNextjs } from "react-icons/tb";
import { SiMysql, SiExpress, SiNestjs, SiRedux, SiFastapi, SiTailwindcss, SiMui, SiMicrosoftazure, SiStrapi, SiPostman, SiVercel, SiBootstrap, SiGraphql } from "react-icons/si";

const MySkills = () => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
    return (
        <section id="skills" className="pt-10 pb-40">
            {/* HEADER AND IMAGE SECTION */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        MY <span className="text-blue">SKILLS</span>
                    </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-7 text-xl font-medium font-montserrat capitalize" style={{ width: "100%" }}>
                        As a passionate <span className="text-blue">Full Stack Web Developer</span> and upcoming <span className="text-blue">Software Engineer</span>, I thrive on the exhilarating journey of exploring diverse technologies and frameworks. From crafting captivating <span className="text-blue">front-end</span> interfaces to architecting robust <span className="text-blue">back-end systems</span>, my love for innovation fuels my relentless pursuit of excellence in every project I undertake.
                    </p>
                </motion.div>

                <div className="mt-16 md:mt-0">
                    {isAboveLarge ? (
                        <div
                            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                        >
                            <img
                                alt="skills"
                                className="z-10 hover:filter hover:translate-x-5 hover:translate-y-5 hover:saturate-200 transition duration-500"
                                src="assets/skills-image.png"
                            />
                        </div>
                    ) : (
                        <img alt="skills" className="z-10" src="assets/skills-image.png" />
                    )}
                </div>
            </div>

            {/* SKILLS */}
            <div className="md:flex md:justify-between mt-16 gap-32">
                {/* EXPERIENCE */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">01</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">
                                Programming Languages
                            </p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
                    </div>
                    <div className="md:flex md:justify-between gap-32" style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                        <motion.div
                            className="md:w-1/3 mt-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <FaJava className="text-6xl text-blue" />
                        </motion.div>
                        <motion.div
                            className="md:w-1/3 mt-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <BiLogoJavascript className="text-6xl text-blue" />
                        </motion.div>
                        <motion.div
                            className="md:w-1/3 mt-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <FaPython className="text-6xl text-blue" />
                        </motion.div>
                    </div>
                    <div className="md:flex md:justify-between gap-32" style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                        <motion.div
                            className="md:w-1/3 mt-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <TbBrandCpp className="text-6xl text-blue" />
                        </motion.div>
                        <motion.div
                            className="md:w-1/3 mt-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <SiMysql className="text-6xl text-blue" />
                        </motion.div>
                        <motion.div
                            className="md:w-1/3 mt-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <BiLogoTypescript className="text-6xl text-blue" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* INNOVATIVE */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">02</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">
                                Libraries & Frameworks
                            </p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-blue1 absolute right-0 top-0 z-[-1]" />
                    </div>
                    <div className="md:flex md:justify-between gap-32" style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                        <motion.div
                            className="md:w-1/3 mt-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <FaReact className="text-6xl text-blue1" />
                        </motion.div>
                        <motion.div
                            className="md:w-1/3 mt-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <FaNodeJs className="text-6xl text-blue1" />
                        </motion.div>
                        <motion.div
                            className="md:w-1/3 mt-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <SiExpress className="text-6xl text-blue1" />
                        </motion.div>
                    </div>
                    <div className="md:flex md:justify-between gap-32" style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                        <motion.div
                            className="md:w-1/3 mt-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <SiFastapi className="text-6xl text-blue1" />
                        </motion.div>
                        <motion.div
                            className="md:w-1/3 mt-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <SiNestjs className="text-6xl text-blue1" />
                        </motion.div>
                        <motion.div
                            className="md:w-1/3 mt-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <TbBrandNextjs className="text-6xl text-blue1" />
                        </motion.div>
                    </div>
                </motion.div>
                {/* IMAGINATIVE */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">03</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">
                                Tools & Technologies
                            </p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-blue2 absolute right-0 top-0 z-[-1]" />
                    </div>
                    <div className="md:flex md:justify-between gap-32" style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                        <motion.div
                            className="md:w-1/3 mt-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <BiLogoMongodb className="text-6xl text-blue2" />
                        </motion.div>
                        <motion.div
                            className="md:w-1/3 mt-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <SiStrapi className="text-6xl text-blue2" />
                        </motion.div>
                        <motion.div
                            className="md:w-1/3 mt-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <SiMicrosoftazure className="text-6xl text-blue2" />
                        </motion.div>
                    </div>
                    <div className="md:flex md:justify-between gap-32" style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                        <motion.div
                            className="md:w-1/3 mt-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <SiTailwindcss className="text-6xl text-blue2" />
                        </motion.div>
                        <motion.div
                            className="md:w-1/3 mt-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <SiRedux className="text-6xl text-blue2" />
                        </motion.div>
                        <motion.div
                            className="md:w-1/3 mt-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <SiMui className="text-6xl text-blue2" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <div className="md:flex md:justify-center flex-col md:items-center mt-10">
                <h2 className="text-4xl mb-3 font-playfair uppercase font-semibold">Other <span className="text-blue">Tools</span> and My <span className="text-blue">Timeline</span></h2>
                <LineGradient className="mt-5" width="w-1/3" />
                <div className="md:grid md:grid-cols-9 xs:grid xs:grid-cols-3 gap-4 mt-5 mx-auto justify-center items-center">
                    <SiGraphql className="text-6xl text-blue" />
                    <BiLogoVisualStudio className="text-6xl text-blue" />
                    <SiPostman className="text-6xl text-blue" />
                    <BiLogoGit className="text-6xl text-blue" />
                    <SiVercel className="text-6xl text-blue" />
                    <BiLogoNetlify className="text-6xl text-blue" />
                    <BiLogoGithub className="text-6xl text-blue" />
                    <SiBootstrap className="text-6xl text-blue" />
                    <FaSass className="text-6xl text-blue" />
                </div>
            </div>
        </section>
    );
};

export default MySkills;