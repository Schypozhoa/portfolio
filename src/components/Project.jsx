import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { FaLink } from "react-icons/fa6";

const ProjectItem = ({ title, description, imagePath, techStack, githubLink, projectLink }) => {
  return (
    <section className="p-4 md:p-8 bg-mikuSecondary bg-opacity-75 rounded-lg shadow-2xl my-8">
        <h1 className="font-bold text-lg md:text-xl text-white pb-4">
          {title}
        </h1>
        <div className="grid grid-cols-10 gap-0 sm:gap-8 items-center">
          <div className="col-span-10 lg:col-span-2 aspect-w-5 aspect-h-3 justify-self-center">
          <Image
            className="w-auto h-auto"
            src={imagePath}
            width={200}
            height={500}
            alt=""
          />
          </div>
          <blockquote className="col-span-10 lg:col-span-8">
            <p className="text-base">
              {description}
            </p>
            <cite className="inline-flex items-center mt-8 not-italic">
              <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
              <p className="text-base text-white lg:ml-3">
                {techStack}
              </p>
            </cite>
            <div className="flex pt-8 space-x-4">
              <div>
                { githubLink 
                  ? (
                  <Link
                    href={githubLink}
                    target="_blank"
                    rel="noopner noreferrer"
                  >
                    <FiGithub size="30px" />
                  </Link>)
                  : null
                }
                { projectLink
                  ? (
                  <Link
                    href={projectLink}
                    target="_blank"
                    rel="noopner noreferrer"
                  >
                    <FaLink size='30px'/>
                  </Link>)
                  : null
                }
              </div>
            </div>
          </blockquote>
        </div>
      </section>
  );
};

const ProjectComponent = () => {
  const ref = useRef();
  const isInView = useInView(ref);

  return (
    <motion.div 
      className="w-full pt-20 pb-4 px-8 lg:pb-32 lg:px-28 mx-auto"
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
      <p className="text-4xl font-bold text-mikuPrimary pb-6 text-center">
        Projects
      </p>
      <ProjectItem
        title="F2 Education WebApp [On-Going Project]"
        description="F2 Education WebApp is a web-based application that 
        helps the owner of the organization to manage their students and teachers as 
        well as the attendance system. This project is built using Next.js, React.js 
        and MySQL as the database."
        imagePath="/coming-soon.webp"
        techStack="Node.js, React.js, MySQL, Next.js, TailwindCSS"
      />
      <ProjectItem 
        title="WeListen Website"
        description="WeListen is a business start-up that has a vision to become a forum 
        for clients who are experiencing depression to share stories with
        psychologists and active listeners to reduce feelings of depression.
        This project is built using Next.js and React.js."
        imagePath="/welisten-web.webp"
        techStack="Next.js, React.js, TailwindCSS"
        projectLink={"https://welistenindonesia.vercel.app/"}
      />
      <ProjectItem 
        title="WeListen Whatsapp Service"
        description="WeListen Whatsapp Service is a service that provides a platform for 
        clients who are experiencing depression to share stories with psychologists and 
        active listeners using whatsapp to reduce feelings of depression. This project is 
        built using Node.js."
        imagePath="/welisten-wa.webp"
        techStack="Node.js, Express.js, MongoDB"
        projectLink={"https://lynk.id/welisten"}
      />
      <ProjectItem
        title="SATA - Saran Wisata (AI Recommendation System)"
        description="SATA - Saran Wisata is an android-based application that
        provides a recommendation system for tourist destinations in Indonesia using
        user inserted image. In this project, I built the backend system using Flask 
        and the recommendation system using collaborative filtering with image classification 
        using TensorFlow."
        imagePath="/sata.webp"
        techStack="Flask, Python, TensorFlow, Keras"
        githubLink="https://github.com/C23-PR589/C23-PR589/tree/ML_Sata/ML"
      />
      <ProjectItem
        title="RekoBuk"
        description="RekoBuk is a web-based app book recommendation system using Content 
        Based and Item Based Filtering techniques. This system was created to help 
        users find a book based on recommendations from ratings given by other users. 
        This project is built using Python, Flask, Pandas, and Scikit-Learn."
        imagePath="/rekobuk.webp"
        techStack="Flask, Python, Pandas, Scikit-Learn"
        githubLink="https://github.com/Wintec-Yuda/Project-akhir-MSIB"
      />
    </motion.div>
  );
};

export default ProjectComponent;
