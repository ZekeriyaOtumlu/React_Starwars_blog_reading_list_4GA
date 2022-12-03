import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacter } from "../swapi";

export default function Character() {
  let [info, setInfo] = useState();

  let { charid } = useParams();
  useEffect(() => {
    async function settingInfo(){
        let characterInfo = await getCharacter(charid);
        // getCharacter(charid)
        setInfo(characterInfo)
        // console.log(characterInfo);
    }
    settingInfo()    
    // console.log("test")
    
  }, []);

  console.log(info);
  return <h1>{info?.properties?.name}</h1>;
}
//{!info && info.properties.name} OR {info?.properties?.name}
//? it means if info is exist. optional