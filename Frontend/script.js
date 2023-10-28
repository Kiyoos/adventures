async function apiFetch(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const getData = async () => {
  const data = await apiFetch('http://localhost:8080/hikes/6529f7c1b9c8f31137139389');
  displayAllData(data);
};

function displayAllData(data) {
  displayHikeName(data.hikeName);
  displayLocation(data.location);
  displayType(data.type);
  displayMiles(data.miles);
  displayStart(data.elevationStart);
  displayEnd(data.elevationEnd);
  displayGain(data.elevationGain);
}

function displayHikeName(name) {
  let hikeName = document.getElementById('hikeName');
  hikeName.innerHTML = name;
}

function displayLocation(loc) {
  let hikeLocation = document.getElementById('hikeLocation');
  hikeLocation.innerHTML = loc;
}

function displayType(type) {
  let hikeType = document.getElementById('hikeType');
  hikeType.innerHTML = type;
}

function displayMiles(miles) {
  let hikeMiles = document.getElementById('hikeMiles');
  hikeMiles.innerHTML = miles;
}

function displayStart(start) {
  let elevationStart = document.getElementById('elevationStart');
  elevationStart.innerHTML = start;
}

function displayEnd(end) {
  let elevationEnd = document.getElementById('elevationEnd');
  elevationEnd.innerHTML = end;
}

function displayGain(gain) {
  let elevationGain = document.getElementById('elevationGain');
  elevationGain.innerHTML = gain;
}

getData();
