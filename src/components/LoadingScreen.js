import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

const messages = [
  "Analyzing your behavioral patterns...",
  "Comparing with 21st Century Leadership benchmarks...",
  "Mapping your scores to Hansen Beck methodology...",
  "Identifying your core strengths...",
  "Finalizing your personalized growth pathway..."
];

const LoadingScreen = () => {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-10 text-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        className="mb-6 text-blue-600"
      >
        <Cpu size={64} />
      </motion.div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Our AI is drafting your report</h2>
      
      <motion.p
        key={msgIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="text-gray-500 italic text-lg h-8"
      >
        {messages[msgIndex]}
      </motion.p>

      <div className="w-64 bg-gray-200 h-1.5 rounded-full mt-10 overflow-hidden">
        <motion.div 
          className="bg-blue-600 h-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 15 }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;