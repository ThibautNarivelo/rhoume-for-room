import React, { FC } from "react";
import { motion } from "framer-motion";
import { FaqCard } from "./FaqCard";

export const Faq: FC = () => {
  return (
    <div className="h-screen w-screen bg-r-mainwhite">
      <motion.div
        initial={{
          y: 300,
        }}
        whileInView={{
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
        className="h-full flex relative space-x-5 overflow-x-scroll snap-x snap-mandatory"
      >
        {/* BEFORE CARE */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 2,
          }}
        >
          <FaqCard />
        </motion.div>

        {/* AFTER CARE */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 2,
          }}
        >
          <FaqCard />
        </motion.div>

        {/* BOOKINGS */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 2,
          }}
        >
          <FaqCard />
        </motion.div>

        {/* APPOINTMENTS */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 2,
          }}
        >
          <FaqCard />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default null;
