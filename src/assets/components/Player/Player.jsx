import user from '../../images/user 1.png'
import report from '../../images/report 1.png'

const Player = ({ player,handleChooseBtn }) => {
    const { id, name, country, img, role, batType, bowlType, bidPrice } = player;

    return (
        <div className="bg-white shadow-lg rounded-lg p-4 ">
            <img 
                src={img} 
                alt={name} 
                className="w-full h-96 object-cover rounded-md"
            />

            <div className="flex items-center gap-3 mt-4">
                <img src={user} alt="" />
                <h2 className="text-lg font-semibold">{name}</h2>
            </div>

            <div className="flex justify-between items-center mt-2">
                <div className="flex items-center gap-2">
                    <img 
                        src={report} 
                        alt={country} 
                        className="w-6 h-4 object-cover"
                    />
                    <h3 className="text-sm font-medium">{country}</h3>
                </div>
                <button className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                    {role}
                </button>
            </div>

            <hr className="my-3 border-gray-200"/>

            <h2 className="text-md font-bold">Rating</h2>
            <div className="flex justify-between mt-2">
                <h3 className="text-sm">{batType}</h3>
                <h3 className="text-sm">{bowlType}</h3>
            </div>

            <div className="mt-4 flex justify-between items-center">
                <h3 className="text-md font-medium">Price: ${bidPrice}</h3>
                <button onClick={()=>{handleChooseBtn(player)}} className="bg-blue-500 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-600">
                    Choose Player
                </button>
            </div>
        </div>
    );
};

export default Player;
