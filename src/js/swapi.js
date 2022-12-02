import Planet from "./pages/planet";

async function getPlanet() {
  // fetch("https://www.swapi.tech/api/planets/1/")
  // .then(res => res.json())
  // .then(data => console.log(data))
  // .catch(err => console.error(err))
  const response = await fetch("https://www.swapi.tech/api/planets/1");
  let data = await response.json();
  // console.log(data)
  // console.log(data.results)
  return data.result;
}

async function getAllPlanets() {
  const response = await fetch("https://www.swapi.tech/api/planets/");
  let data = await response.json();
  // console.log(data)
  // console.log(data.results)
  return data.results;
}

async function getCharacter(id) {
  const response = await fetch("https://www.swapi.tech/api/people/" + id);
  let data = await response.json();
  // console.log(data)
  console.log(data);
  return data.result;
}

async function getAllCharacters() {
  const response = await fetch("https://www.swapi.tech/api/people/");
  let data = await response.json();
  // console.log(data)
  console.log(data.results);
  return data.results;
}

export { getPlanet, getAllPlanets, getAllCharacters, getCharacter };
