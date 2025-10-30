import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  className?: string;
  /** Optional: override the image used in this section */
  src?: string;
  alt?: string;
};

const ScrollRevealImage: React.FC<Props> = ({
  className,
  src = "/AP2.png", // <-- set this to the image you currently use in this section
  alt = "Featured",
}) => {
  return (
    <div className={["w-full", className].filter(Boolean).join(" ")}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={900}
          priority
          className="w-full h-auto object-cover rounded-xl shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default ScrollRevealImage;
