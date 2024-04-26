import style from "./map.module.scss";
import KakaoMap from "./_component/KakaoMap";
import MapChildren from "./_component/MapChildren";
const MapPage = () => {
  return (
    <KakaoMap className={style.map_page_container}>
      <MapChildren />
    </KakaoMap>
  );
};

export default MapPage;
