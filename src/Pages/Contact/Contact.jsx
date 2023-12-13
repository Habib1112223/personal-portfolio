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
import { MdAddCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BsSendFill } from "react-icons/bs";



const Contact = () => {
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
                              <h1 className='text-emerald-600 text-5xl font-bold'>Contact me</h1>
                              <p className='text-emerald-600 text-5xl font-bold'><MdContactMail /></p>

                        </div>
                        <hr className='p-12' />
                        <div>
                              <h1 className='text-white text-center text-4xl font-bold font-serif mb-12'>Let's Talk</h1>
                              <div className='text-center'>

                                    <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs mr-8 border-4 " />
                                    <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                                    <br />
                                    <textarea placeholder="How Can I help You?" className="textarea textarea-bordered textarea-lg w-full max-w-xs mt-16" ></textarea>
                                    <br />
                                    <button className='btn btn-outline px-8 py-4 mt-16 border-4 text-center text-emerald-500 hover:bg-emerald-600'>Send Message</button>
                              </div>

                              <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 px-10'>
                                    <div className=''>
                                          <p className='text-center text-4xl text-emerald-600 ml-28 mb-4'><BsSendFill /></p>
                                          <p className='text-white text-xl font-semibold'>Webdevelopment.habib2023@gmail.com</p>
                                    </div>
                                    <div>
                                          <p className='text-center text-4xl text-emerald-600 ml-28 mb-4' ><FaLocationDot /></p>
                                          <p className='text-white text-xl font-semibold text-center'>Dhaka,Bangladesh</p>
                                    </div>
                                    <div>
                                          <p className='text-center text-4xl text-emerald-600 ml-28 mb-4'><MdAddCall /></p>
                                          <p className='text-white text-xl font-semibold text-center'>+880158066179</p>
                                    </div>
                              </div>
                        </div>

                  </div>
            </div>
      )
}

export default Contact