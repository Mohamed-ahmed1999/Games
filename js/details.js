

import { Ui } from "./ui.js";

export class Details {
   constructor(id) {
      this.ui = new Ui();
      this.setupClose();
      this.fetchDetails(id);
   }

   setupClose() {
      const close = document.getElementById("closefile");
      if (close) {

         document.getElementById("closefile").addEventListener("click", () => {
            document.querySelector(".linkgames").classList.remove("d-none");

         });

      }
   }

   toggleVisibility(selector, hide) {
      const element = document.querySelector(selector);
      if (element) {
         element.classList.toggle("d-none", hide);
      }
   }

   async fetchDetails(idGames) {
      const download = document.querySelector(".download");
      this.toggleVisibility(".download", false);

      try {
         const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`, {
            method: "GET",
            headers: {
               "X-RapidAPI-Key": "03dfe45824mshf2fee6ec301f418p1de2a3jsn2d97470a4218",
               "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            },
         });

         const datagames = await response.json();
         this.ui.detailsGames(datagames);

      }
      

      finally {
         this.toggleVisibility(".download");
      }
   }
}

