"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="wrapper section-padding h-[calc(100vh-5rem)] grid grid-cols-5">
      <div className="w-full h-full ">
        <Image
          src="https://images.pexels.com/photos/9872118/pexels-photo-9872118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="hand img"
          width={300}
          height={700}
          priority
          className="w-full h-4/6 object-cover"
        />
      </div>
      <div className="w-full h-full "></div>
      <div className="w-full h-full flex items-center">
        <Image
          src="https://images.pexels.com/photos/2922450/pexels-photo-2922450.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="girls img"
          width={300}
          height={700}
          priority
          className="w-full h-4/6 object-cover"
        />
      </div>
      <div className="w-full h-full "></div>
      <div className="w-full h-full flex items-end">
        <Image
          src="https://images.pexels.com/photos/5430782/pexels-photo-5430782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Book img"
          width={300}
          height={700}
          priority
          className="w-full h-4/6 object-cover "
        />
      </div>
    </section>
  );
};

export default Hero;
