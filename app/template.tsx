'use client';

import React from 'react';
import { AnimatePresence, motion } from 'motion/react';

export default function AuthTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence mode="popLayout">
      <div className="max-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}