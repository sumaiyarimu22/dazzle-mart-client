"use client";
import { getTransition } from "@/utils/getTransition";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="wrapper section-padding h-[calc(100vh-5rem)] grid grid-cols-5 relative">
      {/* FIRST COL */}
      <div className="w-full h-full ">
        <div className="w-full h-4/6 overflow-hidden">
          <motion.div
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={getTransition()}
            className="w-full h-full"
          >
            <Image
              src="https://images.pexels.com/photos/9872118/pexels-photo-9872118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="hand img"
              width={300}
              height={700}
              priority
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      {/* SECOND COL */}
      <div className="w-full h-full "></div>
      {/* THIRD COL */}
      <div className="w-full h-full flex items-center">
        <div className="w-full h-4/6 overflow-hidden">
          <motion.div
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={getTransition(0.3)}
            className="w-full h-full"
          >
            <Image
              src="https://images.pexels.com/photos/2922450/pexels-photo-2922450.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="girls img"
              width={300}
              height={700}
              priority
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      {/* FOURTH COL */}
      <div className="w-full h-full "></div>
      {/* FIFTH COL */}
      <div className="w-full h-full flex items-end">
        <div className="w-full h-4/6 overflow-hidden">
          <motion.div
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={getTransition(0.6)}
            className="w-full h-full"
          >
            <Image
              src="https://images.pexels.com/photos/5430782/pexels-photo-5430782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Book img"
              width={300}
              height={700}
              priority
              className="w-full h-full object-cover "
            />
          </motion.div>
        </div>
      </div>
      {/*LEFT TEXT CONTENTS */}
      <div className="absolute left-0 bottom-10  w-2/5">
        <h2 className="text-4xl font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </h2>
      </div>
      <div className="absolute right-0 top-10  w-2/5">
        <h2 className="text-4xl font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </h2>
      </div>
    </section>
  );
};

export default Hero;
