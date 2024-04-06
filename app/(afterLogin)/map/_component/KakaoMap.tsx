"use client";

import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import style from "./../map.module.scss";
import { Round } from "../../home/page";

const KakaoMap = ({ className, markList, children }: { className: string; markList?: Round[]; children?: ReactNode }) => {
  const mapRef = useRef<HTMLDivElement>(null);


  const initMap = useCallback(() => {
    if (mapRef.current) {
      const { kakao } = window as any;
      kakao.maps.load(() => {
        const options = {
          //지도를 생성할 때 필요한 기본 옵션
          center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };
        const map = new kakao.maps.Map(mapRef.current, options);

        if (markList && markList.length !== 0) {
          const { kakao } = window as any;
          console.log(markList)
          // geocoder로 주소 찾기.
          const geocoder = new kakao.maps.services.Geocoder();
          const bounds = new kakao.maps.LatLngBounds();
          for (const info of markList) {
            const address = info.restaurant_addr;
    
            geocoder.addressSearch(address, (result: any, status: any) => {
              if (status === kakao.maps.services.Status.OK) {
                const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
    
                // marker setting
                const marker = new kakao.maps.Marker({
                  map: map,
                  position: coords,
                });
                marker.setMap(map);
    
                // marker memo setting
                const infowindow = new kakao.maps.InfoWindow({
                  content: `<div style="width:150px; text-align:center; padding:4px; color:black;">${address}</div>`,
                });
                infowindow.open(map, marker);
    
                // arange setting
                bounds.extend(coords);
                map.setBounds(bounds);
              }
            });
          }
        }
      });
    }
  }, [markList]);

  useEffect(() => {
    if (window?.kakao) initMap();
  }, [initMap]);

  return (
    <div id="map" ref={mapRef} className={`${className}`}>
      {children}
    </div>
  );
};
export default KakaoMap;
