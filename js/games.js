import { Details } from "./details.js";
import { Ui } from "./ui.js";

export class Games {
   constructor() {
      this.getGames("mmorpg");

      document.querySelectorAll(".text-nav a").forEach((link) => {
         link.addEventListener("click", (e) => {
            document.querySelector(".text-nav .active").classList.remove("active");
            e.target.classList.add("active");
            this.getGames(e.target.dataset.category);
         });
      });

      this.ui = new Ui();
   }


   
   async getGames(category) {
      const download = document.querySelector(".download");
      download.classList.remove("d-none");
      const options = {
         method: "GET",
         headers: {
            "X-RapidAPI-Key": '03dfe45824mshf2fee6ec301f418p1de2a3jsn2d97470a4218',
            "X-RapidAPI-Host": 'free-to-play-games-database.p.rapidapi.com',
         }, 
      };  

      const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
      const response = await api.json();

      this.ui.displayDataGame(response);
      this.startnav();
      download.classList.add("d-none");
   }

   startnav() {
      document.querySelectorAll(".card").forEach((e) => {
         e.addEventListener("click", () => {
            const id = e.dataset.id;
            this.showDetails(id);
         });
      });
   }

   showDetails(idGame) {
      const data1 = new Details(idGame);
      document.querySelector(".linkgames").classList.add("d-none");
      document.querySelector(".data1").classList.remove("d-none");
   }
}
