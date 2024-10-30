import del from '../../images/Frame (5).png'

const Selected = ({ choosePlayers,handleRemoveBtn,handleButton }) => {

    return (
        <div className="mx-3 md:mx-16">
            <h2 className='font-bold text-2xl my-6'>Selected ({choosePlayers.length}/6)</h2>
            {
                choosePlayers.map(player => (
                    <div key={player.id} className="flex justify-between my-6  p-8 border-2 rounded-lg items-center">
                    <div className="flex gap-6 items-center">
                        <div><img className="w-20 h-20 rounded-md" src={player.img} alt="" /></div>
                        <div>
                            <h2 className="font-bold">{player.name}</h2>
                            <h3>{player.role}</h3>
                        </div>
                        </div>
                        <button onClick={() => {
                            handleRemoveBtn(player)
                        }}><img src={del}></img></button>

                    </div>
                ))
            }
                <button onClick={() => {
                    handleButton(true)
                }} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                Add more players
                </button>
        </div>
    );
};

export default Selected;
