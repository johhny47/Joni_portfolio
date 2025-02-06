import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
const Skills = () => {
    return (
        <div className="p-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Skills</h2>
            <div className="max-w-4xl mx-auto flex justify-evenly gap-3 mt-8">
               <FaHtml5 size={60} className="text-yellow-600"></FaHtml5>
               <FaCss3 size={60} className="text-blue-600"></FaCss3>
               <SiTailwindcss size={60} className="text-blue-600" />
               <FaJs size={60} className="text-yellow-300"></FaJs>
               <FaReact size={60} className="text-blue-400"></FaReact>
               <FaNodeJs size={60} className="text-green-700"></FaNodeJs>
               <SiExpress size={60} className="text-black font-extrabold" />
               <DiMongodb size={60} className="text-green-700" />
               <RiNextjsFill size={60} className="text-black" />
            </div>
        </div>
    );
};

export default Skills;