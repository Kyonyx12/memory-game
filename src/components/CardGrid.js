import Card from "./Card";
export default function CardGrid({ randomImg, matched, images, handleClick }) {
  return randomImg.map((_, ind) => {
    let isPair = false;
    if (matched.includes(ind)) {
      isPair = true;
    }

    return (
      <Card
        key={ind}
        isPair={isPair}
        images={images}
        randomImg={randomImg}
        ind={ind}
        handleClick={handleClick}
      />
    );
  });
}
