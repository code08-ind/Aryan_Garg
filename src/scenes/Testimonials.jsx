import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
    return (
        <section id="testimonials" className="pt-3 pb-3">
            {/* HEADING */}
            <motion.div
                className="md:w-1/3 text-center md:text-left"
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
                    MY <span className="text-blue">TESTIMONIALS</span>
                </p>
                <LineGradient width="mx-auto w-2/5" />
                <p className="mt-10 text-xl capitalize font-montserrat font-medium" style={{ width: "100%" }}>
                    Discover what people are saying about the <span className="text-blue">impact</span> and <span className="text-blue">excellence of my work</span> in the field of <span className="text-blue">full stack development</span> which depict my <span className="text-blue">exceptional skills</span> and <span className="text-blue">dedication</span> towards my work.
                </p>
            </motion.div>

            {/* TESTIMONIALS */}
            <div className="md:flex md:justify-between gap-8">
                <motion.div
                    className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-gagan"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                >
                    <p className="font-playfair text-6xl">“</p>
                    <p className="text-center capitalize text-xl font-raleway">
                        Aryan's exceptional work and technical knowledge elevate every project.
                    </p>
                    <p className="text-center text-back mt-4 font-semibold text-xl font-merriweather">Gagan, SWE 1(Microsoft)</p>
                </motion.div>

                <motion.div
                    className="mx-auto relative bg-blue1 max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-keshav"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                >
                    <p className="font-playfair text-6xl">“</p>
                    <p className="text-center capitalize text-xl font-raleway">
                        Aryan's problem-solving skills and innovative thinking is great.
                    </p>
                    <p className="text-center text-back mt-4 font-semibold text-xl font-merriweather">Keshav, SWE 1(Microsoft)</p>
                </motion.div>

                <motion.div
                    className="mx-auto relative bg-blue2 max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-rohit"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                >
                    <p className="font-playfair text-6xl">“</p>
                    <p className="text-center capitalize text-xl font-raleway">
                        Aryan's technical expertise and leadership make him stand out.
                    </p>
                    <p className="text-center text-back mt-4 font-semibold text-xl font-merriweather">Rohit, SDE 1(Amazon)</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;