import Rcover from "../components/Rcover/Rcover";

export default function HighEndPage() {
  return (
    <div>
      <Rcover
        topSrc="/images/MTG-08.webp"
        leftSrc="/images/MTG-03.webp"
        rightSrc="/images/MTG-04.webp"
        altTop="HighEnd top"
        altLeft="HighEnd left"
        altRight="HighEnd right"
        priorityTop
        prioritySides
      />
    </div>
  );
}
