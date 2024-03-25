import React from "react";
import { useLocation } from "react-router-dom";
import KakaoMap from "../components/KakaoMap/KakaoMap";

const Map = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const lat = params.get("lat");
  const lon = params.get("lon");
  const place = params.get("place");
  const address = params.get("address");
  return <KakaoMap lat={lat} lon={lon} place={place} address={address} />;
};

export default Map;
