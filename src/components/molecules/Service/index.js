import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BiPalette } from "react-icons/bi";
import { FiServer } from "react-icons/fi";

import { DiDatabase } from "react-icons/di";
import { FiCode } from "react-icons/fi";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../hooks/useAnimation";
import { BottomLine } from "../../../components";

const Service = () => {
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const services = [
    {
      id: 2,
      title: "Back End Development",
      icon: <DiDatabase />,
      description:
        "As a Back-end developer, I specialize in building robust server-side applications using frameworks like Node.js, Express, and NestJS.",
    },    
    {
      id: 3,
      title: "Full Stack MERN Development",
      icon: <FiCode />,
      description:
        "As a Full Stack MERN Developer, I am skilled in building complete applications from scratch using MongoDB, Express, React, and Node.js. I create dynamic, responsive frontends and powerful backends, delivering seamless, scalable, and maintainable web applications across the entire stack.",
    },    
    
    // {
    //   id: 4,
    //   title: "Web Management",
    //   icon: <FiServer />,
    //   description:
    //     "I will manage any kinds of website. Data Management, Component management, Service management and so on.",
    // },
    // {
    //   id: 5,
    //   title: "Backend Development",
    //   icon: <FiServer />,
    //   description:
    //   "MVC Architectural Backend Development with Mongoose (Schema, Model etc) to manage the server easily.",
    // },
    {
      id: 6,
      title: "Database Management",
      icon: <FiServer />,
      description:
        "Connecting Web Database to the server. Fixing All kinds of issue with related to database with database advanced operators.",
    },
  ];
  return (
    <div className="py-20 parent"
    // style={{ backgroundColor: "#313131" }}
    >
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-center text-neutral">What I Provide</h3>
        <h1 className="text-4xl font-semibold text-center">
          My <span className="text-primary">Services</span>
        </h1>
        <BottomLine />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        {services?.map((service) => (
          <div
            key={service.id}
            className={`${service.id % 2 === 0
              ? "bg-accent shadow-lg"
              : "bg-[#313131] shadow-md"
              } rounded-lg p-6 hover:shadow-primary cursor-pointer duration-300`}
          >
            <div className="mb-4 text-center">
              <span className="inline-block text-5xl text-primary">
                {service.icon}
              </span>
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-center">
              {service.title}
            </h2>
            <p className="text-neutral">{service.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
