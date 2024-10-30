import Player from "../Player/Player";

const Available = ({players,handleChooseBtn}) => {
    return (
        <div className="m-3 md:m-10 lg:m-16">
            <h2 className="font-bold text-2xl">Available Players</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-10 lg:gap-16 mt-16 mb-48">
            {

                players.map(player => <Player key={player.id} player={player} handleChooseBtn={handleChooseBtn}></Player>)

            }
            </div>
        </div>
    );
};

export default Available;