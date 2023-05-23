import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant, slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import arti from "../assets/arti.jpg";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in Java Programming and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with teams to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. 
        <br/>
        I am a Computer Science student looking for opportunities in Web Development and Software Engineering.
        <br/>
        Let's work together to bring your ideas to life!
      </motion.p>

      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75]"
        >
          <img
            src={arti}
            alt="profile"
            className="max-w-[82%] rounded-[20px]"
          />
        </motion.div>
        <Tilt className="xs:w-[500px]  w-full">
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="xl:flex-1 xl:h-auto md:h-[550px] h-[282px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card mt-5"
          >
            <div
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[292px] w-full flex justify-evenly flex-col pb-10 grid grid-cols-2 gap-4"
            >
              <div className="flex flex-row">
              <ul className="list-disc">
                <li className=" py-4"><strong className="text-[#ffffff]">Branch :</strong><span className="text-[#ffffff] font-sans"> Computer Science and Engineering</span></li>
                <li className="py-4"><strong className="text-[#ffffff]">Degree :</strong><span> B.Tech</span></li>
                <li className="py-4"><strong className="text-[#ffffff]">College :</strong><span> GCOEA</span></li>
                <li className="py-4"><strong className="text-[#ffffff]">CGPA :</strong><span> 8.17 (SEM 3)</span></li>
              </ul>
              </div>

              <div className="flex flex-row pr-2">
              <ul className="list-disc">
                <li className="py-4"><strong className="text-[#ffffff]">Graduation Year :</strong><span> 2024</span></li>
                <li className="py-4"><strong className="text-[#ffffff]">Email :</strong><span> aartimanputra20@gmail.com</span></li>
                <li className="py-4" ><strong className="text-[#ffffff]">Phone :</strong><span> +91-7028575552</span></li>
                <li className="py-4" ><strong className="text-[#ffffff]">City :</strong><span> Amravati</span></li>
              </ul>
              </div>


            </div>
          </motion.div>
        </Tilt>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

// import React from "react";
// import Tilt from "react-tilt";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { services } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";
// import { SectionWrapper } from "../hoc";

// const ServiceCard=({index,title,icon})=>{
// return(
//   <Tilt className="xs:w-[250px] w-full">
//     <motion.div
//     variants={fadeIn("right","spring",0.5*index,0.75)}
//     className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
//     >
//    <div
//    options={{
//     max:45,
//     scale:1,
//     speed:450
//    }}
//    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
//    >
// <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
// <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
//    </div>
//     </motion.div>
//   </Tilt>
// )
// }

// const About = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={styles.sectionSubText}>Introduction</p>
//         <h2 className={styles.sectionHeadText}>Overview.</h2>
//       </motion.div>
//       <motion.p
//         variants={fadeIn("", "", 0.1, 1)}
//         className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
//       >
//         I'm a skilled software developer with experience in TypeScript and
//         JavaScript, and expertise in frameworks like React, Node.js, and
//         Three.js. I'm a quick learner and collaborate closely with clients to
//         create efficient, scalable, and user-friendly solutions that solve
//         real-world problems. Let's work together to bring your ideas to life!
//       </motion.p>

//       <div className="mt-20 flex flex-wrap gap-10">
//         {services.map((service,index)=>(
//          <ServiceCard  key={service.title} index={index} {...service}/>
//         ))}

//       </div>
//     </>
//   );
// };

// export default SectionWrapper (About,"about")
