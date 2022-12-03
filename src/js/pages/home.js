import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPlanet, getAllPlanets, getCharacter, getAllCharacters } from "../swapi";

 function Home(){
    let [characters, setCharacters] = useState();

//   let { planetid } = useParams();
  useEffect(() => {
    async function settingInfo(){
        let characterInfo = await getAllCharacters();
        // getCharacter(planetid)
        setCharacters(characterInfo)
        // console.log(characterInfo);
    }
    settingInfo()    
    // console.log("test")
    
  }, []);

//   console.log(info);
  return (
    <div>
        {characters?.map((character) => {
            console.log(character)
            return <div>
                <h1>{character.name}</h1>
                <Link to={"/character/"+character.uid}>Learn More</Link>
            </div>
        })}
    </div>
  )
}
//{!info && info.properties.name} OR {info?.properties?.name}
//? it means if info is exist. optional
export  {Home}
