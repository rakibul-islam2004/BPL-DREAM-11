import logo from '../../images/logo-footer.png'
import bg from '../../images/bg-shadow.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-36 pt-40 pb-12 relative">
      <div className=" rounded-lg mx-auto text-center py-12 px-3  md:px-32 md:max-w-5xl mb-12 absolute bg-blue-50 top-[-120px] left-1/2 transform -translate-x-1/2 bg-no-repeat bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${bg})`}}>
        <h3 className="text-3xl font-bold text-black">Subscribe to our Newsletter</h3>
        <p className="text-gray-700 mt-2 text-gray-900">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-52 md:w-64 px-4 py-3 rounded-l-md border border-gray-300 text-black"
          />
          <button className=" text-white px-6 py-3 rounded-r-md bg-blue-500 hover:bg-blue-600">
            Subscribe
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-10 lg:mt-0 mb-10">
        <img src={logo} alt="" className="h-24" />
      </div>

      <div className="mx-16 grid grid-cols-1 md:grid-cols-3 text-center justify-between sm:text-left ">
        <div>
          <h4 className="text-xl font-semibold mb-4">About Us</h4>
          <p className="text-gray-400 md:pr-16">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>

        <div className='md:pl-16'>
          <h4 className="text-xl font-semibold mb-4 ">Quick Links</h4>
          <ul className="space-y-3 text-gray-400">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li><a href="#">Contact </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Subscribe</h4>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="flex justify-center sm:justify-start">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-64 px-4 py-3 rounded-l-md border border-gray-300  text-black"
            />
            <button className=" text-white px-6 py-3 rounded-r-md bg-blue-500 hover:bg-blue-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>


      <div className="text-center text-gray-500 mt-8">
        ©2024 Your Company All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
