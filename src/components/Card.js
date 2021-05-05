import { useState } from "react";
import { CgPokemon } from "react-icons/cg";

export default function Card({ isPair, images, randomImg, ind, handleClick }) {
  const [select, setSelect] = useState(false);

  const reverse = () => {
    setSelect(true);

    setTimeout(() => {
      setSelect(false);
    }, 2500);
  };

  return (
    <>
      <div id={ind} className={`card ${select && "select"}`}>
        <img
          className={`${select ? "visible rotate stop" : "hidden"} ${
            isPair && "visible pair stop"
          } `}
          src={images[randomImg[ind]]}
          alt="pokemon"
        />
        {!isPair && (
          <CgPokemon
            color="gold"
            className={`icon ${select ? "hidden" : "visible"}`}
            onClick={() => {
              if (isPair) {
                setSelect(true);
              } else {
                reverse();
              }

              handleClick(ind);
            }}
          />
        )}
      </div>
    </>
  );
}
