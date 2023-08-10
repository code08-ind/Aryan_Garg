import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { FiGithub, FiFolder } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";

const Projects = () => {
    return (
        <section id="projects" className="md:pt-48 mt-4">
            {/* HEADINGS */}
            <motion.div
                className="md:w-2/5 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        MY <span className="text-blue">PROJECTS</span>
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-2/3" />
                    </div>
                </div>
                <p className="mt-10 mb-10 capitalize font-montserrat text-xl text-center font-medium">
                    Here you will find some of the <span className="text-blue">brilliant projects</span> that I created with <span className="text-blue">each project</span> containing its own <span className="text-blue">case study.</span>
                </p>
            </motion.div>
            <br />
            {/* PROJECTS */}
            <div className="md:flex md:justify-between my-5">
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
                    <img src="../assets/ss.png" className="rounded-lg hover:filter hover:translate-x-5 hover:translate-y-5 hover:saturate-200 transition duration-500 mx-1 border-2 border-blue" alt="About Me" />
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
                    style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}
                    className="basis-1/2 mt-10 md:mt-0"
                >
                    <h4 className="text-blue text-2xl font-medium text-right mb-1 font-raleway">Featured Project</h4>
                    <h1 className="text-white hover:cursor-pointer font-semibold text-right text-5xl transition duration-500 hover:text-blue mb-5 uppercase font-playfair">NITJ's Jobify</h1>
                    <p className="text-2xl text-gray-400 font-medium my-6 capitalize text-right font-quicksand">
                        NITJ's Jobify is a Portal allows to add of company details, allow to add tests, and presentations where students can access all the information with TPO as the admin.
                    </p>
                    <div className="flex mt-2">
                        <div className="w-1/5 font-medium text-blue text-xl h-12 flex justify-end items-center font-montserrat">React</div>
                        <div className="w-1/5 font-medium text-blue text-xl h-12 flex justify-end items-center font-montserrat">Node</div>
                        <div className="w-1/5 font-medium text-blue text-xl h-12 flex justify-end items-center font-montserrat">Express</div>
                        <div className="w-1/5 font-medium text-blue text-xl h-12 flex justify-end items-center font-montserrat">Mongo</div>
                        <div className="w-1/5 font-medium text-blue text-xl h-12 flex justify-end items-center font-montserrat">RestAPIs</div>
                    </div>
                    <div className="flex mt-3">
                        <div className="w-1/6 font-medium text-blue text-xl h-12 flex justify-end items-center">{""}</div>
                        <div className="w-1/6 font-medium text-blue text-xl h-12 flex justify-end items-center">{""}</div>
                        <div className="w-1/6 font-medium text-blue text-xl h-12 flex justify-end items-center">{""}</div>
                        <div className="w-1/6 font-medium text-blue text-xl h-12 flex justify-end items-center">{""}</div>
                        <div className="w-1/6 font-medium transition duration-500 text-gray-400 hover:text-blue text-4xl h-12 flex justify-end items-center">
                            <a href="https://github.com/code08-ind/NITJ_Jobify" target="blank">
                                <FiGithub />
                            </a>
                        </div>
                        <div className="w-1/6 font-medium transition duration-500 text-gray-400 hover:text-blue text-4xl h-12 flex justify-end items-center">
                            <a href="https://nitj-jobify.netlify.app/" target="blank">
                                <BiLinkExternal />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
            <br />
            <div className="md:flex md:justify-between my-5 flex-row-reverse">
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
                    <img src="../assets/ss2.png" className="rounded-lg hover:filter hover:translate-x-5 hover:translate-y-5 hover:saturate-200 transition duration-500 mx-1 border-2 border-blue" alt="About Me" />
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
                    style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}
                    className="basis-1/2 mt-10 md:mt-0"
                >
                    <h4 className="text-blue text-2xl font-medium text-left mb-1 font-raleway">Featured Project</h4>
                    <h1 className="text-white hover:cursor-pointer font-semibold text-left text-5xl transition duration-500 hover:text-blue mb-5 uppercase font-playfair">AryanG AI</h1>
                    <p className="text-2xl text-gray-400 font-medium my-6 capitalize text-left font-quicksand">
                        AryanG AI is a AI Based application with various features such as Image Generation, Image Variations, ChatBot and a facility to create SQL Queries from a given question.
                    </p>
                    <div className="flex mt-2">
                        <div className="w-1/5 font-medium text-blue text-xl h-12 flex justify-start items-center font-montserrat">React</div>
                        <div className="w-1/5 font-medium text-blue text-xl h-12 flex justify-start items-center font-montserrat">Node</div>
                        <div className="w-1/5 font-medium text-blue text-xl h-12 flex justify-start items-center font-montserrat">Express</div>
                        <div className="w-1/5 font-medium text-blue text-xl h-12 flex justify-start items-center font-montserrat">OpenAI API</div>
                        <div className="w-1/5 font-medium text-blue text-xl h-12 flex justify-start items-center font-montserrat">{""}</div>
                    </div>
                    <div className="flex mt-3">
                        <div className="w-1/6 font-medium transition duration-500 text-gray-400 hover:text-blue text-4xl h-12 flex justify-start items-center">
                            <a href="https://github.com/code08-ind/AryanG-AI-Toolset-of-amazing-AI-Tools" target="blank">
                                <FiGithub />
                            </a>
                        </div>
                        <div className="w-1/6 font-medium transition duration-500 text-gray-400 hover:text-blue text-4xl h-12 flex justify-start items-center">
                            <a href="https://aryang-ai.netlify.app/" target="blank">
                                <BiLinkExternal />
                            </a>
                        </div>
                        <div className="w-1/6 font-medium text-blue text-xl h-12 flex justify-start items-center">{""}</div>
                        <div className="w-1/6 font-medium text-blue text-xl h-12 flex justify-start items-center">{""}</div>
                        <div className="w-1/6 font-medium text-blue text-xl h-12 flex justify-start items-center">{""}</div>
                        <div className="w-1/6 font-medium text-blue text-xl h-12 flex justify-start items-center">{""}</div>
                    </div>
                </motion.div>
            </div>
            <br />
            <div className="md:flex md:justify-between my-5">
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
                    <img src="../assets/ss3.png" className="rounded-lg hover:filter hover:translate-x-5 hover:translate-y-5 hover:saturate-200 transition duration-500 mx-1 border-2 border-blue" alt="About Me" />
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
                    style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}
                    className="basis-1/2 mt-10 md:mt-0"
                >
                    <h4 className="text-blue text-2xl font-medium text-right mb-1 font-raleway">Featured Project</h4>
                    <h1 className="text-white hover:cursor-pointer font-semibold text-right text-5xl transition duration-500 hover:text-blue mb-5 uppercase font-playfair">BlogMesh</h1>
                    <p className="text-2xl text-gray-400 font-medium my-6 capitalize text-right font-quicksand">
                        BlogMesh is a blogging website where you can read blogs on various topics and also write your own blogs. It is a full-stack application that runs on GraphCMS.
                    </p>
                    <div className="flex mt-2">
                        <div className="w-1/5 font-medium text-blue text-xl h-12 flex justify-end items-center font-montserrat">{""}</div>
                        <div className="w-1/5 font-medium text-blue text-xl h-12 flex justify-end items-center font-montserrat">React</div>
                        <div className="w-1/5 font-medium text-blue text-xl h-12 flex justify-end items-center font-montserrat">Next</div>
                        <div className="w-1/5 font-medium text-blue text-xl h-12 flex justify-end items-center font-montserrat">GraphQL</div>
                        <div className="w-1/5 font-medium text-blue text-xl h-12 flex justify-end items-center font-montserrat">SASS</div>
                    </div>
                    <div className="flex mt-3">
                        <div className="w-1/6 font-medium text-blue text-xl h-12 flex justify-end items-center">{""}</div>
                        <div className="w-1/6 font-medium text-blue text-xl h-12 flex justify-end items-center">{""}</div>
                        <div className="w-1/6 font-medium text-blue text-xl h-12 flex justify-end items-center">{""}</div>
                        <div className="w-1/6 font-medium text-blue text-xl h-12 flex justify-end items-center">{""}</div>
                        <div className="w-1/6 font-medium transition duration-500 text-gray-400 hover:text-blue text-4xl h-12 flex justify-end items-center">
                            <a href="https://github.com/code08-ind/BlogMesh" target="blank">
                                <FiGithub />
                            </a>
                        </div>
                        <div className="w-1/6 font-medium transition duration-500 text-gray-400 hover:text-blue text-4xl h-12 flex justify-end items-center">
                            <a href="https://blog-mesh.vercel.app/" target="blank">
                                <BiLinkExternal />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
            <br />
            <div className="md:flex md:justify-between my-5 flex-row-reverse">
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
                    <img src="../assets/ss4.png" className="rounded-lg hover:filter hover:translate-x-5 hover:translate-y-5 hover:saturate-200 transition duration-500 mx-1 border-2 border-blue" alt="About Me" />
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
                    style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}
                    className="basis-1/2 mt-10 md:mt-0"
                >
                    <h4 className="text-blue text-2xl font-medium text-left mb-1 font-raleway">Featured Project</h4>
                    <h1 className="text-white hover:cursor-pointer font-semibold text-left text-5xl transition duration-500 hover:text-blue mb-5 uppercase font-playfair">Mediafy</h1>
                    <p className="text-2xl text-gray-400 font-medium my-6 capitalize text-left font-quicksand">
                        Mediafy is a web application that allows users to search for videos on YouTube and play them in a video player. It is built using React and Material UI.
                    </p>
                    <div className="flex mt-2">
                        <div className="w-1/5 font-medium text-blue text-xl h-12 flex justify-start items-center font-montserrat">React</div>
                        <div className="w-1/5 font-medium text-blue text-xl h-12 flex justify-start items-center font-montserrat">CSS</div>
                        <div className="w-1/5 font-medium text-blue text-xl h-12 flex justify-start items-center font-montserrat">Material UI</div>
                        <div className="w-1/5 font-medium text-blue 
                        text-xl h-12 flex justify-start items-center font-montserrat">Youtube API</div>
                        <div className="w-1/5 font-medium text-blue text-xl h-12 flex justify-start items-center font-montserrat">{""}</div>
                    </div>
                    <div className="flex mt-3">
                        <div className="w-1/6 font-medium transition duration-500 text-gray-400 hover:text-blue text-4xl h-12 flex justify-start items-center">
                            <a href="https://github.com/code08-ind/Mediafy" target="blank">
                                <FiGithub />
                            </a>
                        </div>
                        <div className="w-1/6 font-medium transition duration-500 text-gray-400 hover:text-blue text-4xl h-12 flex justify-start items-center">
                            <a href="https://mediafy-app.netlify.app/" target="blank">
                                <BiLinkExternal />
                            </a>
                        </div>
                        <div className="w-1/6 font-medium text-blue text-xl h-12 flex justify-start items-center">{""}</div>
                        <div className="w-1/6 font-medium text-blue text-xl h-12 flex justify-start items-center">{""}</div>
                        <div className="w-1/6 font-medium text-blue text-xl h-12 flex justify-start items-center">{""}</div>
                        <div className="w-1/6 font-medium text-blue text-xl h-12 flex justify-start items-center">{""}</div>
                    </div>
                </motion.div>
            </div>
            <br />
            <div className="md:flex md:justify-between my-5">
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
                    <img src="../assets/ss5.png" className="rounded-lg hover:filter hover:translate-x-5 hover:translate-y-5 hover:saturate-200 transition duration-500 mx-1 border-2 border-blue" alt="About Me" />
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
                    style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}
                    className="basis-1/2 mt-10 md:mt-0"
                >
                    <h4 className="text-blue text-2xl font-medium text-right mb-1 font-raleway">Featured Project</h4>
                    <h1 className="text-white hover:cursor-pointer font-semibold text-right text-5xl transition duration-500 hover:text-blue mb-5 uppercase font-playfair">Aryan Garg</h1>
                    <p className="text-2xl text-gray-400 font-medium my-6 capitalize text-right font-quicksand">
                        Aryan Garg is a personal portfolio website that is built with modern web technologies like React, Tailwind CSS and Framer Motion. It is responsive in design.
                    </p>
                    <div className="flex mt-2">
                        <div className="w-1/5 font-medium text-blue text-xl h-12 flex justify-end items-center font-montserrat">React</div>
                        <div className="w-1/5 font-medium text-blue text-xl h-12 flex justify-end items-center font-montserrat">Tailwind</div>
                        <div className="w-1/5 font-medium text-blue text-xl h-12 flex justify-end items-center font-montserrat">JavaScript</div>
                    </div>
                    <div className="flex mt-3">
                        <div className="w-1/6 font-medium text-blue text-xl h-12 flex justify-end items-center">{""}</div>
                        <div className="w-1/6 font-medium text-blue text-xl h-12 flex justify-end items-center">{""}</div>
                        <div className="w-1/6 font-medium text-blue text-xl h-12 flex justify-end items-center">{""}</div>
                        <div className="w-1/6 font-medium text-blue text-xl h-12 flex justify-end items-center">{""}</div>
                        <div className="w-1/6 font-medium transition duration-500 text-gray-400 hover:text-blue text-4xl h-12 flex justify-end items-center">
                            <a href="https://github.com/code08-ind/Aryan_Garg" target="blank">
                                <FiGithub />
                            </a>
                        </div>
                        <div className="w-1/6 font-medium transition duration-500 text-gray-400 hover:text-blue text-4xl h-12 flex justify-end items-center">
                            <a href="https://aryangarg8.netlify.app/" target="blank">
                                <BiLinkExternal />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
            <br />
            <motion.div
                className="md:w-4/5 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-3xl">
                        OTHER <span className="text-blue">NOTEWORTHY PROJECTS</span>
                    </p>
                    <div className="flex justify-center mt-5 mb-5">
                        <LineGradient width="w-1/2" />
                    </div>
                </div>
                <div className="md:grid md:grid-cols-3 xs:flex xs:flex-col xs:justify-center xs:items-center xs:grif-cols-1 gap-4 mt-5 mx-auto">
                    <div className="mt-5">
                        <div className="max-w-sm transition duration-500 hover:-translate-y-2 hover:cursor-pointer p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-back dark:border-gray-700">
                            <div className="flex flex:row justify-between mb-5">
                                <div className="font-medium transition duration-50 text-blue text-5xl flex justify-end items-center">
                                    <FiFolder />
                                </div>
                                <div className="font-medium transition duration-500 text-gray-400 text-3xl flex justify-end items-center">
                                    <a href="https://github.com/code08-ind/CarHub_By_Aryan" target="blank">
                                        <FiGithub className="hover:text-blue" />
                                    </a>
                                    <a href="https://carhub-by-aryangarg.vercel.app/" target="blank">
                                        <BiLinkExternal className="hover:text-blue ml-2 text-4xl" />
                                    </a>
                                </div>
                            </div>
                            <h5 className="mb-2 text-2xl text-left font-bold tracking-tight text-gray-900 capitalize dark:text-white font-raleway">CarHub</h5>
                            <p className="mb-3 font-normal text-left text-gray-700 dark:text-gray-400 text-xl font-quicksand capitalize">This is a well designed and elegant web application that showcases all types of cars.</p>
                            <div className="flex mt-2">
                                <div className="w-1/4 font-medium text-blue text-md h-12 flex justify-start items-center font-montserrat">React</div>
                                <div className="w-1/4 font-medium text-blue text-md h-12 flex justify-start items-center font-montserrat">Next</div>
                                <div className="w-1/4 ml-2 font-medium text-blue text-md h-12 flex justify-start items-center font-montserrat">Tailwind</div>
                                <div className="w-1/4 ml-2 font-medium text-blue text-md h-12 flex justify-start items-center font-montserrat">TypeScript</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="max-w-sm transition duration-500 hover:-translate-y-2 hover:cursor-pointer p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-back dark:border-gray-700">
                            <div className="flex flex:row justify-between mb-5">
                                <div className="font-medium transition duration-50 text-blue text-5xl flex justify-end items-center">
                                    <FiFolder />
                                </div>
                                <div className="font-medium transition duration-500 text-gray-400 text-3xl flex justify-end items-center">
                                    <a href="https://github.com/code08-ind/EvoGym" target="blank">
                                        <FiGithub className="hover:text-blue" />
                                    </a>
                                    <a href="https://evo-gym-nu.vercel.app/" target="blank">
                                        <BiLinkExternal className="hover:text-blue ml-2 text-4xl" />
                                    </a>
                                </div>
                            </div>
                            <h5 className="mb-2 text-2xl text-left font-bold tracking-tight text-gray-900 capitalize dark:text-white font-raleway">EvoGym</h5>
                            <p className="mb-3 font-normal text-left text-gray-700 dark:text-gray-400 text-xl font-quicksand capitalize">A Gym Website Template With Responsive Design and Magnificent Design </p>
                            <div className="flex mt-2">
                                <div className="w-1/4 font-medium text-blue text-md h-12 flex justify-start items-center font-montserrat">React</div>
                                <div className="w-1/4 font-medium text-blue text-md h-12 flex justify-start items-center font-montserrat">Next</div>
                                <div className="w-1/4 ml-2 font-medium text-blue text-md h-12 flex justify-start items-center font-montserrat">Tailwind</div>
                                <div className="w-1/4 ml-2 font-medium text-blue text-md h-12 flex justify-start items-center font-montserrat">TypeScript</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="max-w-sm transition duration-500 hover:-translate-y-2 hover:cursor-pointer p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-back dark:border-gray-700">
                            <div className="flex flex:row justify-between mb-5">
                                <div className="font-medium transition duration-50 text-blue text-5xl flex justify-end items-center">
                                    <FiFolder />
                                </div>
                                <div className="font-medium transition duration-500 text-gray-400 text-3xl flex justify-end items-center">
                                    <a href="https://github.com/code08-ind/MomentBook" target="blank">
                                        <FiGithub className="hover:text-blue" />
                                    </a>
                                    <a href="https://momentbook.netlify.app/" target="blank">
                                        <BiLinkExternal className="hover:text-blue ml-2 text-4xl" />
                                    </a>
                                </div>
                            </div>
                            <h5 className="mb-2 text-2xl text-left font-bold tracking-tight text-gray-900 capitalize dark:text-white font-raleway">MomentBook</h5>
                            <p className="mb-3 font-normal text-left text-gray-700 dark:text-gray-400 text-xl font-quicksand capitalize">MomentBook, a social media app for sharing moments with friends and family.</p>
                            <div className="flex mt-2">
                                <div className="w-1/4 font-medium text-blue text-md h-12 flex justify-start items-center font-montserrat">React</div>
                                <div className="w-1/4 font-medium text-blue text-md h-12 flex justify-start items-center font-montserrat">Express</div>
                                <div className="w-1/4 ml-2 font-medium text-blue text-md h-12 flex justify-start items-center font-montserrat">Mongo</div>
                                <div className="w-1/4 ml-2 font-medium text-blue text-md h-12 flex justify-start items-center font-montserrat">Node</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="max-w-sm transition duration-500 hover:-translate-y-2 hover:cursor-pointer p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-back dark:border-gray-700">
                            <div className="flex flex:row justify-between mb-5">
                                <div className="font-medium transition duration-50 text-blue text-5xl flex justify-end items-center">
                                    <FiFolder />
                                </div>
                                <div className="font-medium transition duration-500 text-gray-400 text-3xl flex justify-end items-center">
                                    <a href="https://github.com/code08-ind/AG-AI-Summarizer" target="blank">
                                        <FiGithub className="hover:text-blue" />
                                    </a>
                                    <a href="https://ag-ai-summarizer.netlify.app/" target="blank">
                                        <BiLinkExternal className="hover:text-blue ml-2 text-4xl" />
                                    </a>
                                </div>
                            </div>
                            <h5 className="mb-2 text-2xl text-left font-bold tracking-tight text-gray-900 capitalize dark:text-white font-raleway">AI Article Summarizer
                            </h5>
                            <p className="mb-3 font-normal text-left text-gray-700 dark:text-gray-400 text-xl font-quicksand capitalize">
                                It is an AI Article Summarizer That Basically Summarizes The Article when a user enters article link.
                            </p>
                            <div className="flex mt-2">
                                <div className="w-1/4 font-medium text-blue text-md h-12 flex justify-start items-center font-montserrat">React</div>
                                <div className="w-1/4 font-medium text-blue text-md h-12 flex justify-start items-center font-montserrat">Tailwind</div>
                                <div className="w-1/4 ml-2 font-medium text-blue text-md h-12 flex justify-start items-center font-montserrat">API</div>
                                <div className="w-1/4 ml-2 font-medium text-blue text-md h-12 flex justify-start items-center font-montserrat">CSS</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="max-w-sm transition duration-500 hover:-translate-y-2 hover:cursor-pointer p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-back dark:border-gray-700">
                            <div className="flex flex:row justify-between mb-5">
                                <div className="font-medium transition duration-50 text-blue text-5xl flex justify-end items-center">
                                    <FiFolder />
                                </div>
                                <div className="font-medium transition duration-500 text-gray-400 text-3xl flex justify-end items-center">
                                    <a href="https://github.com/code08-ind/Box-Shadow-Generator" target="blank">
                                        <FiGithub className="hover:text-blue" />
                                    </a>
                                    <a href="https://box-shadow-generator-app.netlify.app/" target="blank">
                                        <BiLinkExternal className="hover:text-blue ml-2 text-4xl" />
                                    </a>
                                </div>
                            </div>
                            <h5 className="mb-2 text-2xl text-left font-bold tracking-tight text-gray-900 capitalize dark:text-white font-raleway">Box Shadow Generator</h5>
                            <p className="mb-3 font-normal text-left text-gray-700 dark:text-gray-400 text-xl font-quicksand capitalize">A Box Shadow Generator Web Application Which Creates The Back Shadow On The Object.</p>
                            <div className="flex mt-2">
                                <div className="w-1/4 font-medium text-blue text-md h-12 flex justify-start items-center font-montserrat">React</div>
                                <div className="w-1/4 ml-2 font-medium text-blue text-md h-12 flex justify-start items-center font-montserrat">CSS</div>
                                <div className="w-1/4 font-medium text-blue text-md h-12 flex justify-start items-center font-montserrat">MUI</div>
                                <div className="w-1/4 ml-2 font-medium text-blue text-md h-12 flex justify-start items-center font-montserrat">{""}</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="max-w-sm transition duration-500 hover:-translate-y-2 hover:cursor-pointer p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-back dark:border-gray-700">
                            <div className="flex flex:row justify-between mb-5">
                                <div className="font-medium transition duration-50 text-blue text-5xl flex justify-end items-center">
                                    <FiFolder />
                                </div>
                                <div className="font-medium transition duration-500 text-gray-400 text-3xl flex justify-end items-center">
                                    <a href="https://github.com/code08-ind/Reality" target="blank">
                                        <FiGithub className="hover:text-blue" />
                                    </a>
                                    <a href="https://reality-ag.vercel.app/" target="blank">
                                        <BiLinkExternal className="hover:text-blue ml-2 text-4xl" />
                                    </a>
                                </div>
                            </div>
                            <h5 className="mb-2 text-2xl text-left font-bold tracking-tight text-gray-900 capitalize dark:text-white font-raleway">Reality</h5>
                            <p className="mb-3 font-normal text-left text-gray-700 dark:text-gray-400 text-xl font-quicksand capitalize">Reality is A Real Estate Project Created that allows to search for Houses.</p>
                            <div className="flex mt-2">
                                <div className="w-1/4 font-medium text-blue text-md h-12 flex justify-start items-center font-montserrat">React</div>
                                <div className="w-1/4 font-medium text-blue text-md h-12 flex justify-start items-center font-montserrat">Next</div>
                                <div className="w-1/4 ml-2 font-medium text-blue text-md h-12 flex justify-start items-center font-montserrat">API</div>
                                <div className="w-1/4 ml-2 font-medium text-blue text-md h-12 flex justify-start items-center font-montserrat">CSS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;