
import habib from '../../assets/images/350.jpg'
import { IoHomeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { FiTwitter } from "react-icons/fi";
import { RiContactsFill } from "react-icons/ri";
import { MdContactMail } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { DiResponsive } from "react-icons/di";
import { SiMaterialdesignicons } from "react-icons/si";
import { GrPersonalComputer } from "react-icons/gr";




const About = () => {
      return (
            <div className="flex flex-cols ">
                  <div className="w-2/12 bg-teal-600 min-h-screen" >
                        <img src={habib} alt="personal_pic" className='w-[450px] h-[200px]' />
                        <div className=''>
                              <h2 className='text-2xl bg-blue-600 py-2 font-semibold font-serif'>Habibur Rahman</h2>
                        </div>

                        <div className='menu' >
                              <p className='text-2xl px-2 py-4 text-center border-l-4 border-green-600 mt-4  rounded-sm font-serif m-10'><Link className="flex items-center justify-center gap-1 font-bold" to="/"><IoHomeOutline />Home</Link></p>
                              <p className='text-2xl px-2 py-4 text-center border-l-4 border-green-600 mt-4  rounded-sm font-serif m-10'><Link className="flex items-center justify-center gap-1 font-bold" to="/about"><RiContactsFill />About</Link></p>
                              <p className='text-2xl px-2 py-4 text-center border-l-4 border-green-600 mt-4  rounded-sm font-serif m-10'><Link className="flex items-center justify-center gap-1 font-bold" to="/skills"><GiSkills />Skills</Link></p>
                              <p className='text-2xl px-2 py-4 text-center border-l-4 border-green-600 mt-4  rounded-sm font-serif m-10'><Link className="flex items-center justify-center gap-1 font-bold" to="/projects"><GrProjects />Projects</Link></p>
                              <p className='text-2xl px-2 py-4 text-center border-l-4 border-green-600 mt-4  rounded-sm font-serif m-10'><Link className="flex items-center justify-center gap-1 font-bold" to="/contact"><MdContactMail />Contact me</Link></p>

                              <hr className='mt-4' />
                        </div>

                        <footer className='text-center'>
                              <div>
                                    <p className='text-2xl font-semibold'> Social Media:</p>
                                    <ol className='flex flex-cols gap-4 justify-center items-center my-4'>
                                          <li><FaFacebookF className='text-2xl' /></li>
                                          <li><IoLogoLinkedin className='text-2xl' /></li>
                                          <li><IoLogoGithub className='text-2xl' /></li>
                                          <li><FiTwitter className='text-2xl' /></li>
                                    </ol>
                              </div>
                              <p className='text-sm'>2021 © Cosmos-Themes.
                                    All Right Reserved.</p>
                        </footer>
                  </div>
                  <div className="w-10/12 bg-black">
                        <div className='flex justify-between items-center s p-10 '>
                              <h1 className='text-emerald-600 text-5xl font-bold'>About me</h1>
                              <p className='text-emerald-600 text-5xl font-bold'><RiContactsFill /></p>

                        </div>
                        <hr />
                        <div className='p-10 mt-10' >
                              <h2 className='text-4xl font-bold font-serif text-center text-white'>Fronted web developer</h2>
                              <p className='text-xl mt-4 text-gray-500'>Hi I'am Md.Habibur Rahman. I'm a Front-end web developer in Dhaka, Bangladesh.I loves working with the MERN stack. It stands for MongoDB (where we store data), Express.js (helps with server-side work), React (for making cool and interactive web pages), and Node.js (for building scalable and efficient server-side applications). I enjoy creating websites that look great and work smoothly. I'm always learning about the latest in web development to make sure I use the best tools. Excited to bring my skills to interesting projects and make awesome, user-friendly websites!I am a versatile developer with a B.Sc in CSE in National University, Dhaka, graduating in 2022.</p>
                        </div>

                        <div>
                              <h2 className='text-center p-10 text-4xl text-white font-bold font-serif '>Services</h2>
                              <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-10'>
                                    <div>
                                          <h2 className='text-4xl text-emerald-500 ml-10'><GrPersonalComputer /></h2>
                                          <h3 className='text-2xl text-white mb-2 font-semibold'>web Development</h3>
                                          <p className='text-gray-500'>Web development is a rapidly evolving field, shaped by dynamic trends and technological advancements. In response to the growing prevalence of mobile devices, developers are increasingly adopting responsive web design. </p>
                                    </div>
                                    <div>
                                          <h2 className='text-4xl text-emerald-500 ml-10'><SiMaterialdesignicons /></h2>
                                          <h3 className='text-2xl text-white mb-2 font-semibold' >web Design</h3>
                                          <p className='text-gray-500'>Web design is a dynamic and ever-evolving discipline where aesthetics, functionality, and user experience converge to create compelling online environments. In the fast-paced world of the internet, designers are continually .</p>
                                    </div>
                                    <div>
                                          <h2 className='text-4xl text-emerald-500 ml-10'><DiResponsive /></h2>
                                          <h3 className='text-2xl text-white mb-2 font-semibold'>Responsive web Design</h3>
                                          <p className='text-gray-500'>Responsive web design has become a cornerstone of modern web development, adapting to the diverse array of devices and screen sizes that users employ to access the internet. This article delves into the principles.</p>
                                    </div>
                                  
                              </div>
                        </div>


                  </div>
            </div>
      );
};

export default About;