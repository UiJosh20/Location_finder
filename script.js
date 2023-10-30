const findMe = () => {
  navigator.geolocation.getCurrentPosition((Myplaces)=>{
    let information = Myplaces.coords;
    locationLatitude = Math.round(information.latitude);
    locationLongitude = Math.round(information.longitude);
    display.innerHTML = `<p>your location is : ${locationLatitude}N and ${locationLongitude}E</p>`
  })
}
