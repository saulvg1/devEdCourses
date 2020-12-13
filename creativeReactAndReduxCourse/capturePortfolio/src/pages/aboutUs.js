import AboutSection from '../components/aboutSection';
import ServicesSection from '../components/servicesSection.js';
import FaqSection from '../components/faqSection.js';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation.js';
const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};
export default AboutUs;
