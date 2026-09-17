var movie = [
  {
    title: "Inception",
    genre: "Sci-Fi",
    rating: 8.8,
    image: "https://tse4.mm.bing.net/th/id/OIP.hV5y7Xmazv9Ypf1AMAsGfQHaEK?pid=Api&P=0&h=180"
  },
  {
    title: "The Dark Knight",
    genre: "Action",
    rating: 9.0,
    image: "https://tse2.mm.bing.net/th/id/OIP.DBHJH-EE8tBMpzRCLBEi-AHaEl?pid=Api&P=0&h=180"
  },
  {
    title: "3 Idiots",
    genre: "Comedy/Drama",
    rating: 8.4,
    image: "https://image.tmdb.org/t/p/original/wDrQOaIYrTHAteGlFATfZtU3m3o.jpg"
  },
  {
    title: "Interstellar",
    genre: "Sci-Fi",
    rating: 8.7,
    image: "https://tse3.mm.bing.net/th/id/OIP.8UGEVWbF9oYyh_4nrQOfNwHaDa?pid=Api&P=0&h=180"
  } 
  
];

var movie2=[
   {
    "title": "Dangal",
    "genre": "Biography/Sports",
    "rating": 8.3,
    "image": "https://flxt.tmsimg.com/assets/p13537054_v_h10_ab.jpg"
  },
  {
    "title": "Avengers: Endgame",
    "genre": "Action/Sci-Fi",
    "rating": 8.4,
    "image": "https://tse4.mm.bing.net/th/id/OIP.fK3JnkuPtelPNYU7HAzmfgHaDA?pid=Api&P=0&h=180"
  },
  {
    "title": "Zindagi Na Milegi Dobara",
    "genre": "Drama/Adventure",
    "rating": 8.2,
    "image": "https://static.spotboye.com/uploads/znmd_2021-7-15-10-45-49_thumbnail.jpg"
  },
  {
    "title": "Joker",
    "genre": "Crime/Drama",
    "rating": 8.4,
    "image": "https://tse1.mm.bing.net/th/id/OIP.SwwS6qTM93ZmKuxuVfwRdQHaET?pid=Api&P=0&h=180"
  },
  
]


var mov1="";

var mov2="";

movie.forEach(function(elem){

    mov1 += `<div class="mov">
                <img src="${elem.image}" alt="">
                <h3>Title: ${elem.title}</h3>
                <h3>Genre: ${elem.genre}</h3>
                <h3>Rating: ${elem.rating}</h3>
            </div>`;

});

movie2.forEach(function(elem){

    mov2 += `<div class="mov">
                <img src="${elem.image}" alt="">
                <h3>Title: ${elem.title}</h3>
                <h3>Genre: ${elem.genre}</h3>
                <h3>Rating: ${elem.rating}</h3>
            </div>`;

});


var container = document.querySelector("#movie-Container");
var container2=document.querySelector('#movie-Container2');

container.innerHTML = mov1;
container2.innerHTML=mov2;

main.style.display = "grid";
main.style.gap = "20px";


