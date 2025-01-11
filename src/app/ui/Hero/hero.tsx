import React from "react";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center py-12"
      style={{
        backgroundImage: "url('/images/hero.webp')",
        minHeight: "490px",
      }}
    >
      <div className="relative z-10 max-w-[960px]  text-black  mr-auto px-1">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 p-2 w-1/2">
          Discover Vancouver&#39;s Persian Business Directory
        </h1>
        <p className="text-lg md:text-xl leading-relaxed p-2 w-1/2 mb-2">
          Easily find Persian businesses, services, and community resources in
          Vancouver. Explore our categories and start your journey today!
        </p>
      </div>
    </div>
  );
};

export default Hero;
