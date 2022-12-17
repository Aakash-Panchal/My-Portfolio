import React from "react";
import { motion } from "framer-motion";

const RouteTransition = ({ children }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        exit={{ opacity: 1 }}
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 1,
        }}
        exit={{ y: "0%" }}
        className="pageTransition"
      >
        <motion.div
          initial={{ y: "0" }}
          animate={{ y: "-100%" }}
          transition={{
            delay: -0.3,
            type: "tween",
            ease: "easeInOut",
            duration: 1,
          }}
          exit={{ y: "0" }}
          className="pageTransitionInner"
        ></motion.div>
      </motion.div>
    </>
  );
};

export default RouteTransition;
