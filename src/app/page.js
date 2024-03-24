"use client";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import HomeComponent from "@/components/Home";
import NavbarComponent from "@/components/Navbar";
import AboutComponent from "@/components/About";
import SkillComponent from "@/components/Skill";
import ProjectComponent from "@/components/Project";

export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const [isHomeInView, setIsHomeInView] = useState(false);
  const [isAboutInView, setIsAboutInView] = useState(false);
  const [isProjectInView, setIsProjectInView] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.target.id === 'home') {
          setIsHomeInView(entry.isIntersecting);
        } else if (entry.target.id === 'about') {
          setIsAboutInView(entry.isIntersecting);
        } else if (entry.target.id === 'projects') {
          setIsProjectInView(entry.isIntersecting);
        }
      });
    };

    const observer = new IntersectionObserver(callback, observerOptions);

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    if (projectRef.current) {
      observer.observe(projectRef.current);
    }
    
    return () => {
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };

    
  }, []);

  return (
    <div className="bg-black text-white">
      <Head>
        <meta
          name="description"
          content="Danu Adi Nugroho portfolio. I am web developer, artificial intelligence and machine learning enthusiast. Danu Adi Nugroho, DanuAdiNugroho, danu adi nugroho"
        />
      </Head>
      <NavbarComponent isHomeInView={isHomeInView} isAboutInView={isAboutInView} isProjectInView={isProjectInView} />
      <motion.div ref={homeRef} id="home">
        <HomeComponent />
      </motion.div>
      <motion.div ref={aboutRef} id="about">
        <AboutComponent />
        <SkillComponent />
      </motion.div>
      <motion.div ref={projectRef} id="projects">
        <ProjectComponent />
      </motion.div>
    </div>
  );
}
