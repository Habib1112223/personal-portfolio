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

const Projects = () => {
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
                              <h1 className='text-emerald-600 text-5xl font-bold'>Projects</h1>
                              <p className='text-emerald-600 text-5xl font-bold'><GrProjects /></p>

                        </div>
                        <hr />
                        <div className='p-10'>
                              <h2 className='text-center text-4xl mt-10 text-white font-bold font-serif'>Brief Projects info</h2>
                              <div className='ml-80'>
                                    <div className="card w-96 bg-black shadow-xl ">
                                          <figure className="px-10 pt-10">
                                                <img src="https://i.ibb.co/5k0FQQY/tool-white.jpg" alt="Shoes" className="rounded-xl " />
                                          </figure>
                                          <div className="card-body items-center text-center flex gap-8 ">
                                                <div className='flex gap-20'>
                                                      <button className='btn btn-outline'><Link className='font-bold text-2xl text-white' to=""> Demo</Link></button>
                                                      <p className='btn btn-outline'><Link className='font-bold text-2xl text-white' to=""> Code</Link></p>
                                                </div>

                                          </div>
                                    </div>
                                    <div className="card w-96 bg-black shadow-xl">
                                          <figure className="px-10 pt-10">
                                                <img src="https://i.ibb.co/qBk6DV4/cover2.jpg" alt="Shoes" className="rounded-xl " />
                                          </figure>
                                          <div className="card-body items-center text-center flex gap-8 ">
                                                <div className='flex gap-20'>
                                                      <button className='btn btn-outline'><Link className='font-bold text-2xl text-white' to=""> Demo</Link></button>
                                                      <p className='btn btn-outline'><Link className='font-bold text-2xl text-white' to=""> Code</Link></p>
                                                </div>

                                          </div>
                                    </div>
                                    <div className="card w-96 bg-black shadow-xl">
                                          <figure className="px-10 pt-10">
                                                <img src="https://i.ibb.co/S362Ybg/learn-hub.png" alt="Shoes" className="rounded-xl " />
                                          </figure>
                                          <div className="card-body items-center text-center flex gap-8 ">
                                                <div className='flex gap-20'>
                                                      <button className='btn btn-outline'><Link className='font-bold text-2xl text-white' to=""> Demo</Link></button>
                                                      <p className='btn btn-outline'><Link className='font-bold text-2xl text-white' to=""> Code</Link></p>
                                                </div>

                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Projects