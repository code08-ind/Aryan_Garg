import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
    const selectedStyles = `relative bg-blue before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-blue before:left-[-50%] before:top-[-50%]`;

    return (
        <div className="flex flex-col gap-6 fixed top-[40%] right-7">
            <AnchorLink
                href="#home"
                className={`${selectedPage === "home" ? selectedStyles : "bg-dark-grey"
                    } w-3 h-3 rounded-full`}
                onClick={() => setSelectedPage("home")}
            />

            <AnchorLink
                href="#about"
                className={`${selectedPage === "about" ? selectedStyles : "bg-dark-grey"
                    } w-3 h-3 rounded-full`}
                onClick={() => setSelectedPage("about")}
            />

            <AnchorLink
                href="#skills"
                className={`${selectedPage === "skills" ? selectedStyles : "bg-dark-grey"
                    } w-3 h-3 rounded-full`}
                onClick={() => setSelectedPage("skills")}
            />

            <AnchorLink
                href="#timeline"
                className={`${selectedPage === "timeline" ? selectedStyles : "bg-dark-grey"
                    } w-3 h-3 rounded-full`}
                onClick={() => setSelectedPage("timeline")}
            />

            <AnchorLink
                href="#projects"
                className={`${selectedPage === "projects" ? selectedStyles : "bg-dark-grey"
                    } w-3 h-3 rounded-full`}
                onClick={() => setSelectedPage("projects")}
            />

            <AnchorLink
                href="#blogs"
                className={`${selectedPage === "blogs" ? selectedStyles : "bg-dark-grey"
                    } w-3 h-3 rounded-full`}
                onClick={() => setSelectedPage("blogs")}
            />

            <AnchorLink
                href="#testimonials"
                className={`${selectedPage === "testimonials" ? selectedStyles : "bg-dark-grey"
                    } w-3 h-3 rounded-full`}
                onClick={() => setSelectedPage("testimonials")}
            />

            <AnchorLink
                href="#contact"
                className={`${selectedPage === "contact" ? selectedStyles : "bg-dark-grey"
                    } w-3 h-3 rounded-full`}
                onClick={() => setSelectedPage("contact")}
            />
        </div>
    );
};

export default DotGroup;