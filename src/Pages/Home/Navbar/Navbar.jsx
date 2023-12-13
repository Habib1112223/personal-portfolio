

import banner from '../../../assets/images/habib23.jpg'
import habib from '../../../assets/images/350.jpg'
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
import { GrDownload } from "react-icons/gr";





const Navbar = () => {
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
                  <div className="w-10/12 ">
                        <img src={banner} alt="banner_image" className='' />
                        <div className='p-10 absolute top-52 ml-48'>
                              <h2 className='text-4xl font-bold font-serif text-emerald-600'>HI, I'M HABIBUR RAHMAN! <br />CREATIVE WEB DEVELOPER</h2>
                              <p className='text-xl text-gray-500'>I'm a passionate Fronted web developer with a mission to create delightful <br />  and intuitive digital experiences. With a strong foundation in design principles and a keen eye for detail,<br />  I specialize in translating complex ideas into user-friendly interfaces that captivate and engage.</p>
                              <button className='btn bg-green-500 hover:bg-green-600 px-8 py-4 mt-10'><Link className="flex items-center justify-center gap-1 font-bold  " to="/">Download cv<GrDownload /></Link></button>
                        </div>

                  </div>
            </div>
      );
};

export default Navbar;