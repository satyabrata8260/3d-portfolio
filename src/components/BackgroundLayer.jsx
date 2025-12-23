import Background from "./Background";
import Stars from "./Stars";

export default function BackgroundLayer() {
  return (
    <>
      <div className="bg-layer">
        <Background />
      </div>

      <div className="stars-layer">
        <Stars />
      </div>
    </>
  );
}
