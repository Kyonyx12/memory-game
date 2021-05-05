import React, { useState } from "react";
import { images, randomImg, all, init } from "./data";
import CardGrid from "./CardGrid";

const CardApp = () => {
  const [matched, setMatched] = useState([]);
  const [win, setWin] = useState(false);

  /* HANDLE PAIR */

  let first;
  let second;
  let oneClicked = false;
  let clicked = [null, null];

  const comparer = () => {
    for (let i = 0; i <= all.length - 1; i++) {
      if (all[i][0] === clicked[0] && all[i][1] === clicked[1]) {
        setMatched([...matched, clicked[0]]);
        clicked = [null, null];
      }
    }
  };

  /* HANDLE WIN */

  const checkWin = () => {
    if (matched.length === 9 && clicked[0] === clicked[1]) {
      setWin(true);
    }
  };

  /* HANDLE ON CLICK */

  const handleClick = (ind) => {
    if (oneClicked === false) {
      oneClicked = true;
      first = ind;
      setTimeout(() => {
        first = null;
      }, 2000);
    } else {
      oneClicked = false;
      second = ind;
      setTimeout(() => {
        second = null;
      }, 2000);
    }
    clicked = [first, second];

    if (clicked[0] !== null && clicked[1] !== null) {
      comparer();
    }
    checkWin(ind);
  };

  return (
    <main className={`${win && "win"}`}>
      {win && (
        <div className="modal">
          <div className="modal-info">
            <h1>You win!</h1>
            <button
              className="modal-button"
              onClick={() => {
                setWin(false);
                setMatched([]);
                init();
              }}
            >
              <p>Play Again</p>
            </button>
          </div>
        </div>
      )}
      <div className="title">
        <h1>Memory Game w/ Poke</h1>
      </div>
      <div className="CardApp">
        <div className="row-one">
          <CardGrid
            matched={matched}
            randomImg={randomImg}
            handleClick={handleClick}
            images={images}
          />
        </div>
        <div className="row-two">
          <CardGrid
            matched={matched}
            randomImg={randomImg}
            handleClick={handleClick}
            images={images}
          />
        </div>
      </div>
    </main>
  );
};
export default CardApp;
