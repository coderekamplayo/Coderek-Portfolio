import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/ai-saas.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Retrack</h3>
          <p>
            Retrack is an AI-powered resume analyzer built with React, React Router, and Puter.js, designed to streamline recruitment workflows by automating resume parsing, intelligent profile matching, and delivering real-time candidate evaluations through a dynamic user interface.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>React Router</span>
            <span>Puter.js</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/social-media.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Befit</h3>
          <p>
            Befit is a cutting-edge AI fitness trainer powered by Next.js, TensorFlow.js, and Tailwind CSS, delivering personalized workouts, real-time pose analysis, and adaptive coaching through a responsive interface that blends server-side rendering with intelligent browser-based motion tracking.
          </p>
          <div className="project-tech">
            <span>Next.js</span>
            <span>TensorFlow.js</span>
            <span>Tailwind CSS</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/stopwatch.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Coderek</h3>
          <p>
            Coderek is a scalable video interview platform built with Next.js, Stream, and Convex, offering secure real-time calls, collaborative code editing, and intelligent session workflows through a responsive interface powered by Clerk authentication and modular React components.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>JavaScript</span>
            <span>TailwindCSS</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
