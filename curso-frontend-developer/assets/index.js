    const video = document.querySelector("video"); //Tremso el vídeo con su id 
    const playPause = document.querySelector("button"); //damos pause 

    playPause.addEventListener("click", mediaplayer); 

    class Player
    {
      constructor()
      {
        this.iniciopause();
      }

      iniciopause()
      {
        if (video.paused)
        {
          video.play();
      }
      else 
      {
        video.pause();
      }
    }
  }

    function mediaplayer ()
    {
      const player = new Player();
    }
      //llama al metodo play, no se pone dierectament ya que arroja un error.
