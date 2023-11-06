import React from "react";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src="../src/assets/Logo.png" alt='SummarAIze Logo' className='w-28 object-contain' />

        {/* <button
          type='button'
          onClick={() =>
            window.open("https://github.com/RylanJGraham", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
        */}
      </nav>

      <h1 className='head_text'>
        Article Summarizer<br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Make your reading easier with SummarAize, an open-source article summarizer that turns
        your long articles into a clear and concise summary!
      </h2>
    </header>
  );
};

export default Hero;