function MediaPlayer ()
{
  const player = new Player();
}

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

export default MediaPlayer;
    //llama al metodo play, no se pone dierectament ya que arroja un error.

