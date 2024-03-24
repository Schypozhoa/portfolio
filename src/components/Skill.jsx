import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaPython, FaNode, FaReact, 
  FaBootstrap, FaGithub, FaAws } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { BiLogoPostgresql, BiLogoTailwindCss } from "react-icons/bi";
import { SiTailwindcss, SiMysql, SiFirebase, SiNumpy, 
  SiPandas, SiTensorflow, SiMongodb, SiFlask,
  SiScikitlearn, SiKeras, SiGooglecloud } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";

const SkillComponent = () => {
  const ref = useRef();
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 1.2,
          },
        },
      }}
    >
      <div className="w-full pb-4 px-8 lg:pb-32 lg:px-28">
        <div className="mx-auto">
          <p className="text-4xl font-bold text-mikuPrimary pb-4 text-center">
            Skills
          </p>

          <div className="grid grid-cols-6 grid-rows-1 gap-4 bg-mikuSecondary bg-opacity-75 my-2 p-8 rounded-2xl">
            <div className="flex text-white items-center text-2xl w-max justify-self-center text-center md:w-fit mr-4 col-span-6 lg:col-span-1">
              Backend
            </div>
            <div className="col-span-6 lg:col-span-5">
              <ul className="flex justify-center lg:justify-start items-center flex-row flex-wrap gap-8 mb-2 ">
                <li className=" text-xl font-bold flex justify-center items-center flex-col">
                  <FaPython size="40px" />
                  Python
                </li>
                <li className=" text-xl font-bold flex justify-center items-center flex-col">
                  <FaNode size="40px" />
                  Node.js
                </li>
                <li className=" text-xl font-bold flex justify-center items-center flex-col">
                  <SiFlask size="40px" />
                  Flask
                </li>
                <li className=" text-xl font-bold flex justify-center items-center flex-col">
                  <SiMysql size="40px" />
                  MySQL
                </li>
                <li className=" text-xl font-bold flex justify-center items-center flex-col">
                  <BiLogoPostgresql size="40px" />
                  PostgreSQL
                </li>
                <li className=" text-xl font-bold flex justify-center items-center flex-col">
                  <SiMongodb size="40px" />
                  MongoDB
                </li>
                <li className=" text-xl font-bold flex justify-center items-center flex-col">
                  <SiFirebase size="40px" />
                  Firebase
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-6 grid-rows-1 gap-4 bg-mikuSecondary bg-opacity-75 my-2 p-8 rounded-2xl">
            <div className="flex text-white items-center text-2xl w-max justify-self-center text-center md:w-fit mr-4 col-span-6 lg:col-span-1">
              Frontend
            </div>
            <div className="col-span-6 lg:col-span-5">
              <ul className="flex justify-center lg:justify-start items-center flex-row flex-wrap gap-8 mb-2 ">
                <li className=" text-xl font-bold flex justify-center items-center flex-col">
                  <RiReactjsFill size="40px" />
                  React.js
                </li>
                <li className=" text-xl font-bold flex justify-center items-center flex-col">
                  <BiLogoTailwindCss size="40px" />
                  Tailwind CSS
                </li>
                <li className=" text-xl font-bold flex justify-center items-center flex-col">
                  <FaBootstrap size="40px" />
                  Bootstrap
                </li>
                <li className=" text-xl font-bold flex justify-center items-center flex-col">
                  <FaHtml5 size="40px" />
                  HTML
                </li>
                <li className=" text-xl font-bold flex justify-center items-center flex-col">
                  <FaCss3Alt size="40px" />
                  CSS
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-6 grid-rows-1 gap-4 bg-mikuSecondary bg-opacity-75 my-2 p-8 rounded-2xl">
            <div className="flex text-white items-center text-2xl w-max justify-self-center text-center md:w-fit mr-4 col-span-6 lg:col-span-1">
              ML / AI
            </div>
            <div className="col-span-6 lg:col-span-5">
              <ul className="flex justify-center lg:justify-start items-center flex-row flex-wrap gap-8 mb-2 ">
                <li className=" text-xl font-bold flex justify-center items-center flex-col">
                  <SiTensorflow size="40px" />
                  Tensorflow
                </li>
                <li className=" text-xl font-bold flex justify-center items-center flex-col">
                  <SiKeras size="40px" />
                  Keras
                </li>
                <li className=" text-xl font-bold flex justify-center items-center flex-col">
                  <SiScikitlearn size="40px" />
                  Scikit-learn
                </li>
                <li className=" text-xl font-bold flex justify-center items-center flex-col">
                  <SiNumpy size="40px" />
                  Numpy
                </li>
                <li className=" text-xl font-bold flex justify-center items-center flex-col">
                  <SiPandas size="40px" />
                  Pandas
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-6 grid-rows-1 gap-4 bg-mikuSecondary bg-opacity-75 my-2 p-8 rounded-2xl">
            <div className="flex text-white items-center text-2xl w-max justify-self-center text-center md:w-fit mr-4 col-span-6 lg:col-span-1">
              Other
            </div>
            <div className="col-span-6 lg:col-span-5">
              <ul className="flex justify-center lg:justify-start items-center flex-row flex-wrap gap-8 mb-2 ">
                <li className=" text-xl font-bold flex justify-center items-center flex-col">
                  <FaGithub size="40px" />
                  Github/Git
                </li>
                <li className=" text-xl font-bold flex justify-center items-center flex-col">
                  <SiGooglecloud size="40px" />
                  GCP
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default SkillComponent;
