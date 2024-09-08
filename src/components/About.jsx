import React from "react";
import about from "./../assets/Hero-Csbs.png";

function About() {
  return (
    <section className="mx-12 mb-10 mt-20">
      <div>
        <div>
          <h1 className="text-center text-6xl">About <span className="text-[#646cff]">Us</span></h1>
        </div>
        <div className="mx-16 my-12 text-lg font-extralight tracking-widest leading-8 text-neutral-400">
          "Welcome to Your-CSBS-Partner, your one-stop destination for
          comprehensive course materials designed for students of Computer
          Science with Business Systems. This unique program, offered in
          collaboration with TCS, blends core computer science principles with
          essential business concepts, equipping you with the skills needed to
          excel in today's dynamic tech-driven world. Whether you're diving into
          the intricacies of algorithms or exploring business strategy, our
          platform provides the resources you need to succeed."
        </div>
        <div className="flex ml-16 mr-20">
          <div className="w-1/3">
            <img src={about} alt="" className=' rounded-xl' />
          </div>
          <div className="w-2/3 pl-10">
          <h2 className="text-center text-3xl mb-10 font-semibold">Our Mission</h2>
          <div className="text-2xl leading-10 text-neutral-300 tracking-wider">
            "Our mission is to empower students with the knowledge and tools to
            thrive in a competitive environment where technology meets business.
            By providing curated, high-quality content tailored specifically to
            the Computer Science with Business Systems curriculum, we aim to
            make your learning experience more accessible, engaging, and
            effective."
          </div>
          <div className="justify-between">
          <button className="button mt-10 w-full text-lg">Explore</button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
