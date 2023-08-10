import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { BiDownArrow } from "react-icons/bi";

const About = () => {

    return (
        <section id="about" className="contact md:py-48">
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
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-blue">ABOUT </span>ME &  <span className="text-blue">SERVICES</span>
                    </p>
                    <div className="flex md:justify-end my-5">
                        <LineGradient width="w-2/3" />
                    </div>
                </div>
            </motion.div>

            {/* DESC & IMAGE */}
            <div className="md:flex md:justify-between gap-16 mt-5">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className="basis-1/2 flex justify-center"
                >
                    <div className="flex h-full justify-center items-center flex-col w-full">
                        <div className="mt-1 flex justify-center items-center p-10 h-10 w-11/12 bg-blue rounded-xl border-4 border-white">
                            <p className="text-3xl text-white text-center font-semibold mt-2 uppercase font-playfair">SERVICES I OFFER</p>
                        </div>
                        <BiDownArrow className="text-3xl text-white my-2" />
                        <div className="mt-1 flex justify-center items-center p-10 h-10 w-11/12 border-4 rounded-xl border-blue2">
                            <p className="text-2xl uppercase text-center font-semibold mt-2 font-quicksand">Full Stack Web Development</p>
                        </div>
                        <BiDownArrow className="text-3xl text-white my-2" />
                        <div className="mt-1 flex justify-center items-center p-10 h-10 w-11/12 border-4 rounded-xl border-blue1">
                            <p className="text-2xl text-center font-semibold mt-2 uppercase font-quicksand">Tehnical Content Writing</p>
                        </div>
                        <BiDownArrow className="text-3xl text-white my-2" />
                        <div className="mt-1 flex justify-center items-center p-10 h-10 w-11/12 border-4 rounded-xl border-blue">
                            <p className="text-2xl text-center font-semibold mt-2 uppercase font-quicksand">Public Speaking At Events</p>
                        </div>
                    </div>
                    {/* <img src="../assets/about.png" className="hover:filter hover:translate-x-5 hover:translate-y-5 hover:saturate-200 transition duration-500" alt="About Me" /> */}
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}
                    className="basis-1/2 mt-10 md:mt-0"
                >
                    <p className="text-xl font-medium mt-2 capitalize font-montserrat">
                        Hello! My name is Aryan and I enjoy creating things that live on the internet. My interest in web development started back in 2019 when I decided to try the web development course — turns out that i started working in various of the technologies and learned to build websites and web applications.
                    </p>
                    <p className="text-xl font-medium mt-3 capitalize font-montserrat">
                        Fast-forward to today, and I’ve had the privilege of working with One of the most famous communities such as <span className="text-blue">Microsoft Learn Student Ambassadors, Postman Community</span> and <span className="text-blue">Google Developer Students Club</span>. My main focus these days is building accessible, inclusive products and implement these things in the corporate sector.
                    </p >
                    <p className="text-xl font-medium mt-3 capitalize font-montserrat">
                        With a diverse skill set encompassing <span className="text-blue">problem-solving, communication, teamwork, leadership, public speaking,</span> and <span className="text-blue">content creation</span>, I possess strong expertise in <span className="text-blue">Java, Python, C++, SQL, JavaScript, HTML/CSS,</span> and <span className="text-blue">TypeScript.</span> My experience includes working with frameworks like <span className="text-blue">React.js, Express.js, Node.js, Bootstrap, Semantic UI, TailwindCSS, Material-UI,</span> and <span className="text-blue">FastAPI.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;