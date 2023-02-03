import "./Map.scss";
import mapGenshin from "@assets/map-genshin.png";

export default function Map() {
  return (
    <div className="map-global">
      <div className="div-style">
        <h1>Teyvat Map</h1>
        <p>
          You have arrived in Teyvat — a fantasy world where the seven elements
          flow and converge. In the distant past, the Archons granted mortals
          unique elemental abilities. With the help of such powers, people
          formed a bountiful homeland out of the wilderness. However, 500 years
          ago, the collapse of an ancient civilization turned the universe
          upside down... Though the calamity the world suffered has ceased,
          peace has yet to be restored.
        </p>
      </div>
      <div className="map-items">
        <img src={mapGenshin} alt="" />
      </div>
    </div>
  );
}
