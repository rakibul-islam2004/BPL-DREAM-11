import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import Header from "./assets/components/Header/Header";
import Selected from "./assets/components/Selected/selected";
import Available from "./assets/components/Available/Available";
import Footer from "./assets/components/Footer/Footer";
import './App.css'



const App = () => {

  const [choosePlayers, setChoosePlayers] = useState([]);
  const [coin, setCoin] = useState(0);
  const [isTrue, setIsTrue] = useState(true);
  const [players, setPlayers] = useState([]);

  const claimCredit = () => {
    setCoin(coin + 6000000);
    toast.success("6,000,000 coins claimed successfully!", {
      position: "top-center",
    }
    )
  };

  const handleButton = (i) => {
    setIsTrue(i);
  };

  useEffect(() => {
    fetch("data.JSON")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const handleChooseBtn = (cp) => {
    if (choosePlayers.length >= 6) {
      toast.error("Player limit reached!", { position: "top-left" });
    } else if (choosePlayers.find((chP) => chP === cp)) {
      toast.info(`You have already added ${cp.name}`, { position: "top-center" });
    } else if (coin >= cp.bidPrice) {
      toast.success("Player added successfully!", { position: "top-center" });
      setCoin(coin - cp.bidPrice);
      setChoosePlayers([...choosePlayers, cp]);
    } else {
      toast.error("Insufficient coins to add this player.", { position: "top-center" });
    }
  };

  const handleRemoveBtn = (rp) => {
    toast.info("Player removed successfully!", { position: "top-right" });
    const rPlayer = choosePlayers.find((cPlayer) => cPlayer === rp);
    setChoosePlayers(choosePlayers.filter((chooseP) => chooseP !== rPlayer));
    setCoin(coin + rp.bidPrice);
  };

  return (
    <div>
      <ToastContainer />
      <Header claimCredit={claimCredit} coin={coin} />
      <div className="flex gap-10 justify-end mx-5 md:mx-16">
        <button
          onClick={() => handleButton(true)}
          className={isTrue ? "btn selected" : "btn"}
        >
          Available
        </button>
        <button
          onClick={() => handleButton(false)}
          className={isTrue ? "btn" : "btn selected"}
        >
          Selected ({choosePlayers.length})
        </button>
      </div>
      {isTrue ? (
        <Available players={players} handleChooseBtn={handleChooseBtn} />
      ) : (
        <Selected
          handleRemoveBtn={handleRemoveBtn}
          choosePlayers={choosePlayers}
          handleButton={handleButton}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;
