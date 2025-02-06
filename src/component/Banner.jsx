import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter, } from "react-icons/fa";


const Banner = () => {
  return (
    <div className="w-full h-auto md:h-screen flex flex-col md:flex-row items-center mt-20">
      
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left p-8  md:p-20">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Hello, I'm <span className="text-blue-600 md:text-5xl"> <br />Joni Fakir</span>
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-600">
          I'm a passionate Front-end Developer. I create beautiful and responsive web designs.
        </p>
        {/* social btn */}
        <div className="justify-center md:justify-start mt-4 md:mx-0 flex gap-3">
       <a href="https://web.facebook.com/md.johnny.526"> <FaFacebook size={40} className="text-blue-800"/></a>
       <a href="https://github.com/johhny47"> <FaGithub size={40} className="text-black-800"/></a>
       <a href="https://www.linkedin.com/in/joni-fakir-50803b344"> <FaLinkedinIn size={40} className="text-blue-700"/></a>
       <a href="https://x.com/mdjohnny063"> <FaTwitter size={40} className="text-blue-700"/></a>
          
        </div>
        <a 
          href="../public/asset/resume.pdf" 
          download="Joni_Fakir_Resume.pdf" 
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Download Resume
        </a>
      </div>
      
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img 
          className="w-3/4 md:w-2/3 h-auto rounded-full border-4 border-gray-300" 
          src="https://i.ibb.co/rFkSttj/Screenshot-2024-07-07-111320.png" 
          alt="Joni Fakir" 
        />
      </div>

    </div>
  );
}

export default Banner;
