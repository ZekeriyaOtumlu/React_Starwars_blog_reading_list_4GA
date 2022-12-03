import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlanet, getAllPlanets } from "../swapi";

export  default function Planet(){
    let [info, setInfo] = useState();

  let { planetid } = useParams();
  useEffect(() => {
    async function settingInfo(){
        let planetInfo = await getPlanet(planetid);
        // getCharacter(planetid)
        setInfo(planetInfo)
        // console.log(planetInfo);
    }
    settingInfo()    
    // console.log("test")
    
  }, []);

  console.log(info);
  return <h1>{info?.properties?.name}</h1>;
}
//{!info && info.properties.name} OR {info?.properties?.name}
//? it means if info is exist. optional
