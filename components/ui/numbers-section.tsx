"use client";

import Image from "next/image";
import { motion } from "motion/react";

const one = "/images/1.png";
const two = "/images/2.png";
const three = "/images/3.png";
const four = "/images/4.png";
const five = "/images/5.png";

export const MyNumbersFloatingThings = () => {
  return (
    <>
      {/* 1 - Elemento flotante superior izquierdo */}
      <motion.div
        className="
          absolute z-0 
          left-[6%] top-[8%]
          sm:left-[8%] sm:top-[10%]
          md:left-[12%] md:top-[12%]
          lg:left-[15%] lg:top-[10%]
          xl:left-[40%] xl:top-[8%]
        "
        initial={{ x: 0, y: 0, rotate: 0 }}
        animate={{
          x: [0, 8, -6, 4, 0],
          y: [0, -12, 8, -4, 0],
          rotate: [0, 3, -2, 1, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src={one}
          alt="My Art 1"
          width={53.274}
          height={53.274}
          className="
            scale-[0.42]
            sm:scale-[0.55]
            md:scale-[0.75]
            lg:scale-[0.9]
            xl:scale-100
          "
        />
      </motion.div>

      {/* 2 - Elemento flotante inferior derecho */}
      <motion.div
        className="
          absolute z-0 
          left-[58%] bottom-[160px]
          sm:left-[62%] sm:bottom-[-20px]
          md:left-[65%] md:bottom-[-40px]
          lg:left-[68%] lg:bottom-[-50px]
          xl:left-[16%] xl:bottom-[-62px]
        "
        initial={{ x: 0, y: -200, rotate: 29.719 }}
        animate={{
          x: [0, -25, 15, -35, 0],
          y: [-200, -215, -185, -205, -200],
          rotate: [29.719, 24, 34, 26, 29.719],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2,
        }}
      >
        <div className="
          h-[45px] w-[45px]
          sm:h-[55px] sm:w-[55px]
          md:h-[70px] md:w-[70px]
          lg:h-[85px] lg:w-[85px]
          xl:h-[99.388px] xl:w-[101.601px]
          relative
        ">
          <Image
            src={two}
            alt="My Art 5"
            fill
            className="object-contain"
          />
        </div>
      </motion.div>

      {/* 3 - Elemento flotante central móvil */}
      <motion.div
        className="
          absolute z-0 
          left-[-40%] top-[30%]
          sm:left-[-25%] sm:top-[32%]
          md:left-[-15%] md:top-[28%]
          lg:left-[38%] lg:bottom-[-45px]
          xl:left-[45%] xl:bottom-[-50px]
        "
        initial={{ x: 380, y: 20, rotate: 0 }}
        animate={{
          x: [380, 360, 395, 365, 380],
          y: [20, 5, 30, 10, 20],
          rotate: [0, -8, 10, -5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
        }}
      >
        <div className="
          h-[80.71px] w-[80.71px]
          sm:h-[100px] sm:w-[100px]
          md:h-[130px] md:w-[130px]
          lg:h-[160px] lg:w-[160px]
          xl:h-[190.75px] xl:w-[190.75px]
          relative
        ">
          <Image
            src={three}
            alt="My Art 2"
            fill
            className="object-contain"
          />
        </div>
      </motion.div>

      {/* 4 - Elemento flotante inferior izquierdo */}
      <motion.div
        className="
          absolute z-0 
          left-[-20%] bottom-[20px]
          sm:left-[-15%] sm:bottom-[15px]
          md:left-[-10%] md:bottom-[10px]
          lg:left-[40%] lg:bottom-[-45px]
          xl:left-[45%] xl:bottom-[-50px]
        "
        initial={{ x: 100, y: -20, rotate: 0 }}
        animate={{
          x: [100, 85, 115, 90, 100],
          y: [-20, -35, -10, -30, -20],
          rotate: [-4, 8, -6, 4, -4],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <Image
          src={four}
          alt="My Art 4"
          width={101.601}
          height={99.388}
          className="
            scale-[0.45]
            sm:scale-[0.55]
            md:scale-[0.7]
            lg:scale-[0.85]
            xl:scale-100
          "
        />
      </motion.div>

      {/* 5 - Elemento flotante superior izquierdo grande */}
      <motion.div
        className="
          absolute z-0 
          left-[-15%] top-[12%]
          sm:left-[30%] sm:top-[10%]
          md:left-[8%] md:top-[5%]
          lg:left-[10%] lg:top-[-2%]
          xl:left-[10%] xl:top-[-6%]
        "
        initial={{ x: 180, y: 180, rotate: 0 }}
        animate={{
          x: [180, 165, 190, 170, 180],
          y: [180, 165, 190, 170, 180],
          rotate: [0, 12, -8, 6, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
      >
        <Image
          src={five}
          alt="My Art 2"
          width={198.806}
          height={198.806}
          className="
            scale-[0.45]
            sm:scale-[0.55]
            md:scale-[0.7]
            lg:scale-[0.85]
            xl:scale-100
          "
        />
      </motion.div>
    </>
  );
};