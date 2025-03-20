import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="min-h-screen flex items-center justify-center">
      <div ref={ref} className="flex flex-col items-center justify-center px-6 md:px-20 py-12">
        {/* INTRODUCTION */}
        <motion.div 
          className="text-center" 
          initial={{ opacity: 0, y: 50 }} 
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-black">INTRODUCTION</h2>
          <div className="flex justify-center items-center gap-2 text-blue-500 font-bold text-lg">
            <span>Jobs!</span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2">
            We are a professional job-seeking platform dedicated to helping job seekers find 
            opportunities that match their skills and aspirations. Our mission is to bridge 
            the gap between talented individuals and top recruiters, making job searching 
            seamless and efficient.
          </p>
        </motion.div>

        {/* ROW: IMAGE + WHY CHOOSE */}
        <div className="flex flex-col md:flex-row items-center mt-12 gap-8">
          {/* IMAGE */}
          <motion.div 
            className="flex justify-center" 
            initial={{ opacity: 0, x: -50 }} 
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} 
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img src="/src/assets/pc-about.webp" alt="Job seeker" className="w-80 h-80" />
          </motion.div>

          {/* WHY CHOOSE */}
          <motion.div 
            className="space-y-4" 
            initial={{ opacity: 0, x: 50 }} 
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} 
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-black">WHY CHOOSE</h2>
            <div className="flex items-center gap-2 text-blue-500 font-bold text-lg">
              <span>Jobs!</span>
              <span className="text-black">?</span>
            </div>
            <ul className="text-gray-600 space-y-2">
              <li>
                <strong>Wide Job Listings</strong> <br /> Access thousands of job
                opportunities from various industries.
              </li>
              <li>
                <strong>Seamless Application Process</strong> <br /> Easy and
                hassle-free job applications.
              </li>
              <li>
                <strong>Smart Job Matching</strong> <br /> Get job recommendations based
                on your skills and interests.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
