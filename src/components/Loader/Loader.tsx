import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Loader.css";

interface LoaderProps {
  onCompletion?: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onCompletion }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isVisible]);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setIsVisible(false);
        onCompletion?.();
      }, 200);
    }
  }, [progress, onCompletion]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="loader__contents container"
        >
          <div className="loader__progress-wrapper">
            <div className="loader__progress-bar">
              <motion.div
                className="loader__progress-bar-fill"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.01, ease: "easeInOut"}}
              />
            </div>
            
            <div className="loader__progress">
              <span className="loader__progress-text">{progress}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
