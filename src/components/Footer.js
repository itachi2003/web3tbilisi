import React from "react";
import Fav from "./Fav";
const Footer =() => {
  return (
    <div className="mt-4">    
    <div className=" mt-10 Jokes " >
      Jokes
    </div>
    <div class="jokelist bg-white shadow rounded text-black text-4xl">
    Q: What did the spider do on the computer?  A: Made a website!
  </div>
  <div class="jokelist bg-white shadow rounded text-black text-4xl ">
  Q: What do computers eat for a snack? A: Microchips!
  </div>
  <div class="jokelist bg-white shadow rounded text-black text-4xl ">
  What happens to a frog's car when it breaks down? It gets toad away.
  </div>
  <div class="jokelist bg-white shadow rounded text-black text-4xl">
  Q: What's Forrest Gump’s password? A: 1forrest1.
  </div>
  <Fav />
    </div>
  )
}

export default Footer