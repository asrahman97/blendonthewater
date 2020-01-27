import React from 'react';
const place = 'place_id:ChIJaQR-pCFZwokRNMloynEQPgA'
const key = 'AIzaSyA5j2U5sxqhJ4FYNWev0rSR4dyF5N5VFDk'
function Map(){
  return (
    <iframe
      title="google map"
      className = "map"
      src={`https://www.google.com/maps/embed/v1/place?q=${place}&key=${key}`}>
    </iframe>
  )
}
export default Map;
