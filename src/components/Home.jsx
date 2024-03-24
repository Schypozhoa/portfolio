import { motion } from "framer-motion";
import Link from "next/link";

const HomeComponent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
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
      <div className="flex px-4 md:py-32 mx-auto h-screen items-center">
        <div className="text-center mx-auto">
          <h1 className="text-4xl font-extrabold md:text-6xl">
            Danu Adi Nugroho
          </h1>
          <h1 className="text-4xl text-mikuPrimary font-extrabold md:text-6xl">
            Back End Developer
          </h1>
          <p className="text-sm mt-4 sm:leading-relaxed md:text-xl">
            Web Developer, ML/AI Enthusiast, and Tech Enthusiast.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8 grid-cols-2">
            <Link href="#">
              <p className="px-12 py-3 text-sm font-medium text-white bg-mikuSecondary rounded shadow active:bg-mikuSecondary hover:bg-carolinaBlue focus:outline-none focus:ring">
                Contact Me
              </p>
            </Link>
            <Link href="#">
              <p
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-3 text-sm font-medium text-white bg-mikuSecondary rounded shadow active:bg-mikuSecondary hover:bg-carolinaBlue focus:outline-none focus:ring"
              >
                Resume
              </p>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeComponent;
