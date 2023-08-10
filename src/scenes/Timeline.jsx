import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi";
import { FaSuitcase } from "react-icons/fa";

const Timeline = () => {

    return (
        <section id="timeline" className="pt-60 mt-30 xs:mt-0 mb-4">
            {/* HEADINGS */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                }}
                className="flex justify-end w-full"
            >
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                }}
                className="flex justify-end w-full"
            >
            </motion.div>
            <div className="container mx-auto mt-10 w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                    <div className="border-2-2 absolute border-opacity-50 border-white h-full border" style={{ left: "50%" }}></div>
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-blue2 shadow-xl w-16 h-16 rounded-full">
                            <h1 className="mx-auto font-semibold text-5xl text-white">
                                <HiAcademicCap />
                            </h1>
                        </div>
                        <div className="order-1 bg-blue2 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-gray-800 text-xl font-merriweather">CBSE Board (Class 12TH), Budha Dal Public School, Patiala (2017-19)</h3>
                            <p className="text-MD leading-snug tracking-wide text-gray-900 text-opacity-100 font-semibold font-quicksand">Completed The High School With 85%</p>
                        </div>
                    </div>
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-blue2 shadow-xl w-16 h-16 rounded-full">
                            <h1 className="mx-auto font-semibold text-5xl text-white">
                                <HiAcademicCap />
                            </h1>
                        </div>
                        <div className="order-1 bg-blue2 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-gray-800 text-xl font-merriweather">B.Tech (IT), Dr. B. R. Ambedkar National Institute Of Technology Jalandhar (2019-23)</h3>
                            <p className="text-md leading-snug tracking-wide text-gray-900 text-opacity-100 font-semibold font-quicksand">Completed Graduation With CGPA 8.43/10.0</p>
                        </div>
                    </div>
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-blue shadow-xl w-16 h-16 rounded-full">
                            <h1 className="mx-auto font-semibold text-4xl text-white">
                                <FaSuitcase />
                            </h1>
                        </div>
                        <div className="order-1 bg-blue rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-white text-xl font-merriweather">Software Engineering Intern, AllSoft Solutions Pvt Ltd., Mohali (2022-2022)</h3>
                            <p className="text-md leading-snug tracking-wide text-white text-opacity-100 font-semibold font-quicksand">Completed Several Projects Under This Internship</p>
                        </div>
                    </div>
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-blue shadow-xl w-16 h-16 rounded-full">
                            <h1 className="mx-auto font-semibold text-4xl text-white">
                                <FaSuitcase />
                            </h1>
                        </div>
                        <div className="order-1 bg-blue rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-white text-xl font-merriweather">Software Development Engineer, Hexaware Technologies, Chennai (2023-Present)</h3>
                            <p className="text-md leading-snug tracking-wide text-white text-opacity-100 font-semibold font-quicksand">Working As A Full Stack Developer In Various Projects.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;