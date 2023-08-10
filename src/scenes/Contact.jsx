import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
    const {
        register,
        trigger,
        formState: { errors },
    } = useForm();

    const onSubmit = async (e) => {
        console.log("~ e", e);
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    };

    return (
        <section id="contact" className="contact py-48">
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
                        <span className="text-blue">CONTACT ME</span> TO GET STARTED
                    </p>
                    <div className="flex md:justify-end my-5">
                        <LineGradient width="w-1/2" />
                    </div>
                </div>
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
                <div className="flex justify-end w-full">
                    <p className="text-xl font-medium font-montserrat capitalize" style={{ width: "40%" }}>
                    Although I’m not currently looking for any <span className="text-blue">new opportunities</span>, my inbox is always open. Whether you have a question or just want to say hi, <span className="text-blue">I’ll try my best to get back to you!</span>
                    </p>
                </div>
            </motion.div>

            {/* FORM & IMAGE */}
            <div className="md:flex md:justify-between gap-16">
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
                    <img src="../assets/contact.png" className="hover:filter hover:translate-x-5 hover:translate-y-5 hover:saturate-200 transition duration-500" alt="contact" />
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
                    className="basis-1/2 mt-10 md:mt-0"
                >
                    <form
                        target="_blank"
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/05d8d84bc8281135ccd71e553e6efc0f"
                        method="POST"
                    >
                        <input
                            className="w-full font-quicksand outline-none border-blue border-2 bg-deep-blue font-semibold placeholder-blue p-3 mt-5"
                            type="text"
                            placeholder="ENTER YOUR NAME"
                            {...register("name", {
                                required: true,
                                maxLength: 100,
                            })}
                        />
                        {errors.name && (
                            <p className="text-red mt-1">
                                {errors.name.type === "required" && "This field is required."}
                                {errors.name.type === "maxLength" && "Max length is 100 char."}
                            </p>
                        )}

                        <input
                            className="w-full font-quicksand outline-none border-blue border-2 bg-deep-blue font-semibold placeholder-blue p-3 mt-5"
                            type="text"
                            placeholder="ENTER YOUR EMAIL"
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        {errors.email && (
                            <p className="text-red mt-1">
                                {errors.email.type === "required" && "This field is required."}
                                {errors.email.type === "pattern" && "Invalid email address."}
                            </p>
                        )}

                        <textarea
                            className="w-full font-quicksand outline-none border-blue border-2 bg-deep-blue font-semibold placeholder-blue p-3 mt-5"
                            name="message"
                            placeholder="ENTER YOUR MESSAGE"
                            rows="4"
                            cols="50"
                            {...register("message", {
                                required: true,
                                maxLength: 2000,
                            })}
                        />
                        {errors.message && (
                            <p className="text-red mt-1">
                                {errors.message.type === "required" &&
                                    "This field is required."}
                                {errors.message.type === "maxLength" &&
                                    "Max length is 2000 char."}
                            </p>
                        )}

                        <button
                            className="p-5 font-raleway bg-blue font-semibold text-deep-blue mt-5 hover:bg-blue2 hover:text-white transition duration-500"
                            type="submit"
                        >
                            SEND ME A MESSAGE
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;