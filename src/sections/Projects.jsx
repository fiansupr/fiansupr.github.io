import { useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  const [preview, setPreview] = useState(null);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      {/* Section Title */}
      <h2 className="text-heading text-[#84dfff]">My Selected Projects</h2>

      {/* Divider */}
      <div className="bg-gradient-to-r from-transparent via-[#33c2cc] to-transparent mt-12 h-[1px] w-full" />

      {/* Minimal Placeholder */}
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <p className="text-3xl font-semibold text-[#f26ab9] tracking-wide">
          Coming Soon
        </p>
        <p className="mt-2 text-[#c3baf5] text-base md:text-lg max-w-xl">
          Projects are currently in development.
        </p>
      </div>

      {/* (Optional) Future Preview Feature */}
      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;