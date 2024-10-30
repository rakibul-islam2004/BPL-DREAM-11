import { useState } from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import bg from '../../images/bg-shadow.png';
import cricket from '../../images/banner-main.png';
import coinImg from '../../images/DoubleDollar.png';
import menuBar from '../../images/pngwing.com.png';


const Header = ({ claimCredit, coin }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className='flex justify-between items-center my-4 m-3 md:m-10 lg:m-16'>
                <div>
                    <img className='h-18' src={logo} alt="" />
                </div>
                
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 text-2xl focus:outline-none">
                        <img className='w-10 h-10' src={menuBar} alt="" />
                    </button>
                </div>

                <div className={`absolute top-16 right-0 w-full md:w-auto md:static ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <ul className='flex flex-col md:flex-row gap-4 md:gap-10 lg:gap-16 text-gray-900 items-center text-xl bg-white md:bg-transparent p-4 md:p-0'>
                        <li>Home</li>
                        <li>Fixture</li>
                        <li>Teams</li>
                        <li>Schedules</li>
                        <li className='text-black font-bold'>
                            <button className='flex gap-1 bg-slate-50 text-black font-bold py-2 px-4 rounded border-2 border-gray-100 items-center'>
                                {coin} Coin <img src={coinImg} alt="" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div
                className="bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center gap-5 text-center py-16 rounded-lg overflow-hidden bg-black h-full m-3 md:m-16 px-3"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <img src={cricket} alt="" className="w-60" />
                <h2 className='text-white text-4xl font-bold my-2'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p className='text-2xl font-semibold text-gray-100 mb-1'>Beyond Boundaries Beyond Limits</p>
                <button onClick={claimCredit} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                    Claim your free credit
                </button>
            </div>
        </div>
    );
};

export default Header;
