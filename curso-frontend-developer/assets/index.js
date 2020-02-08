import MediaPlayer from "./MediaPlayer.js";

const video = document.querySelector("video"); //Seleccionamos el video y botón por su selector
    const playPause = document.querySelector("button"); 
    const playPause_v = document.querySelector("video");
  playPause.addEventListener("click", MediaPlayer); //Llamamos a la función MediaPlayer cuando de hace click
  playPause_v.addEventListener("click", MediaPlayer);
  