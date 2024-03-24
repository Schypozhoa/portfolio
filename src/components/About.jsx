import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutComponent = () => {
  const ref = useRef();
  const isInView = useInView(ref);

  return (
    <div className="flex justify-between md:mx-20 md:pt-34 pt-20">
      <div className="flex flex-col md:ml-20 px-10 mt-10">
        <div className="flex flex-col md:flex-row">
          <div className=" md:px-8 ">
            <motion.div
              className="md:w-96"
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
                    delay: 0.4,
                  },
                },
              }}
            >
              <h1 className="text-3xl font-bold sm:text-4xl mb-8">
                Hello, I&#39;m <span className="text-mikuPrimary">Danu</span>
              </h1>
            </motion.div>
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
                    delay: 0.6,
                  },
                },
              }}
            >
              <h2 className="font-bold text-3xl text-left mb-5">
                I&#39;m a
                <span className="text-mikuPrimary"> Back End Developer</span> with
                a passion for
                <span className="text-mikuPrimary"> ML/AI</span> development.
              </h2>
            </motion.div>
          </div>
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
                  delay: 1,
                },
              },
            }}
          >
            <p className="text-left font-normal mb-5 flex-wrap">
              I have recently graduated with a major in Informatics. My expertise 
              primarily lies in backend development and ML/AI especially on computer 
              vision domain.
            </p>
            <p className="text-left font-normal mb-5 flex-wrap"></p>
            <p className="text-left font-normal mb-5 flex-wrap">
              Exploring AI development, especially in LLM, has caught my interest. 
              I dream of diving deeper into this field and crafting my own LLM model. 
              This goal fuels my passion for innovation and exploration in artificial 
              intelligence.
            </p>
          </motion.div>
        </div>
        <div className="text-bold text-3xl mt-10">
          
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
