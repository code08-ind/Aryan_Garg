import React from 'react';
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const Blogs = () => {
    return (
        <section id='blogs' class="pt-10 pb-2 lg:pt-[50px]">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div class="container mx-auto">
                    <div class="-mx-4 flex flex-wrap justify-center">
                        <div class="w-full px-4">
                            <div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                                <h2
                                    class="font-playfair text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]"
                                >
                                    MY <span className='text-blue'>TECHNICAL BLOGS</span>
                                </h2>
                                <div className="flex justify-center mt-5">
                                    <LineGradient width="w-11/12" />
                                </div>
                                <p class="text-body-color mt-4 text-xl font-medium font-montserrat capitalize">
                                    Here are some of my <span className='text-blue'>noted blogs</span> that i have written on various <span className='text-blue'>technologies.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="-mx-4 flex flex-wrap">
                        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div class="mx-auto mb-10 max-w-[370px] p-3 border-2 border-blue rounded-lg">
                                <div class="mb-4 overflow-hidden rounded">
                                    <img
                                        src="../assets/react.png"
                                        alt="image"
                                        class="w-full rounded-lg border-2 border-gray-400"
                                    />
                                </div>
                                <div>
                                    <span
                                        class="bg-primary mb-5 inline-block rounded py-1 text-center text-lg text-blue font-semibold leading-loose font-quicksand"
                                    >
                                        Mar 14, 2023
                                    </span>
                                    <h3>
                                        <a
                                            href="https://gargaryan82000.medium.com/git-a-life-changing-tool-a8846b5a360c"
                                            target='blank'
                                            class="text-dark hover:text-blue transition duration-100 hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl font-merriweather capitalize"
                                        >
                                            GIT, A life-changing tool…
                                        </a>
                                    </h3>
                                    <p class="text-body-color text-base capitalize font-montserrat text-md font-medium">
                                        A Magnificent article on what git as a version control system is and how it works.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div class="mx-auto mb-10 max-w-[370px] p-3 border-2 border-blue rounded-lg">
                                <div class="mb-4 overflow-hidden rounded">
                                    <img
                                        src="../assets/git.png"
                                        alt="image"
                                        class="w-full rounded-lg border-2 border-gray-400"
                                    />
                                </div>
                                <div>
                                    <span
                                        class="bg-primary mb-5 inline-block rounded py-1 text-center text-lg text-blue font-semibold leading-loose font-quicksand"
                                    >
                                        June 22, 2021
                                    </span>
                                    <h3>
                                        <a
                                            href="https://gargaryan82000.medium.com/what-is-template-engine-difference-between-handlebars-and-ejs-templating-in-node-js-cb9cdd7cacb7"
                                            target='blank'
                                            class="text-dark hover:text-primary mb-4 inline-block hover:text-blue transition duration-100 text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl font-merriweather capitalize"
                                        >
                                            What Is Template Engine?
                                        </a>
                                    </h3>
                                    <p class="text-body-color text-base capitalize font-montserrat text-md font-medium">
                                        A Magnificent article on what is a template engine in node.js and how it works.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div class="mx-auto mb-10 max-w-[370px] p-3 border-2 border-blue rounded-lg">
                                <div class="mb-4 overflow-hidden rounded">
                                    <img
                                        src="../assets/template.png"
                                        alt="image"
                                        class="w-full rounded-lg border-2 border-gray-400"
                                    />
                                </div>
                                <div>
                                    <span
                                        class="bg-primary mb-5 inline-block rounded py-1 text-center text-lg text-blue font-semibold leading-loose font-quicksand"
                                    >
                                        Mar 31, 2021
                                    </span>
                                    <h3>
                                        <a
                                            href="https://gargaryan82000.medium.com/what-is-react-js-understanding-react-from-basics-940df800ff68"
                                            target='blank'
                                            class="text-dark hover:text-blue transition duration-100 hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl font-merriweather capitalize"
                                        >
                                            What is React JS?
                                        </a>
                                    </h3>
                                    <p class="text-body-color text-base capitalize font-montserrat text-md font-medium">
                                        A Magnificent article on what react as a javascript frontend library is and how it works.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="-mx-4 flex flex-wrap justify-center">
                        <div class="w-full px-4">
                            <div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                                <p class="text-body-color mt-4 text-xl font-medium font-montserrat capitalize">
                                    Find My <span className='text-blue'>Other Blogs</span> On My <span className='text-blue'>Medium Profile.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default Blogs;