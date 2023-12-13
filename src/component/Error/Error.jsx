import img from '../../assets/error-404.jpg'
import {Link} from 'react-router-dom'

const Error = () => {
      return (
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                  <div className='' >
                        <img src={img} alt="image_404" />
                  </div>
                  <div className=''>
                        <button className='btn btn-outline hover:bg-teal-700  text-amber-600 mt-36 ml-20 '><Link to="/">Go to Home</Link></button>
                  </div>

            </div>
      );
};

export default Error;