import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion"; // Importando o motion do Framer Motion
import { skills } from "../../data.js";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <motion.div whileHover={{ scale: 1.2 }}>
            <ChipIcon className="w-10 inline-block mb-4" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Skills &amp; Tecnologias
            </h1>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Habilidades e tecnologias.
            </p>
          </motion.div>
          <motion.div></motion.div>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              className="p-2 sm:w-1/2 w-full"
              whileHover={{ scale: 1.2 }} // Adicionando efeito de escala ao passar o mouse
            >
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
