
// Query id of slide
const topMusic = document
  .querySelector("#top-music-slide")
  .querySelector(".carousel-inner");
const chillMusic = document
  .querySelector("#chill-music-slide")
  .querySelector(".carousel-inner");

const studyMusic = document
  .querySelector("#study-music-slide")
  .querySelector(".carousel-inner");

const sleepMusic = document
  .querySelector("#sleep-music-slide")
  .querySelector(".carousel-inner");


getAllSongsForGenre()


//########## GET ALL SONGS FOR SLIDE IN HOME
async function getAllSongsForGenre(){
    getTopSongs();
    getChillSongs();
    getStudySongs();
    getSleepSongs();
    
}
async function getTopSongs() {
  // Default options are marked with *
  const response = await fetch("/api/top-music", {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
  });

  const data = await response.json();
  href= "/playmusic?album=top-music&id=";

  addCarouselItem(topMusic, href+ data[0]._id, data[0].picture_src, true);
  for (let i = 1; i < data.length; ++i) {
    addCarouselItem(topMusic, href+data[i]._id, data[i].picture_src, false);
  }
  const topMusicSlides = document.querySelectorAll(
    "#top-music-slide .carousel-item"
  );
  createSlides(topMusicSlides);
}
async function getChillSongs() {
  // Default options are marked with *
  const response = await fetch("/api/chill-music", {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
  });

  const data = await response.json();
  href= "/playmusic?album=chill-music&id=";
  addCarouselItem(chillMusic, href+data[0]._id, data[0].picture_src, true);
  for (let i = 1; i < data.length; ++i) {
    addCarouselItem(chillMusic, href+data[i]._id, data[i].picture_src, false);
  }
  const chillMusicSlides = document.querySelectorAll(
    "#chill-music-slide .carousel-item"
  );
  createSlides(chillMusicSlides);
}
async function getStudySongs() {
  // Default options are marked with *
  const response = await fetch("/api/study-music", {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
  });

  const data = await response.json();
  href= "/playmusic?album=study-music&id=";
  addCarouselItem(studyMusic,href+data[0]._id, data[0].picture_src, true);
  for (let i = 1; i < data.length; ++i) {
    addCarouselItem(studyMusic, href+data[i]._id, data[i].picture_src, false);
  }
  const studyMusicSlides = document.querySelectorAll(
    "#study-music-slide .carousel-item"
  );
  createSlides(studyMusicSlides);
}
async function getSleepSongs() {
  // Default options are marked with *
  const response = await fetch("/api/sleep-music", {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
  });

  const data = await response.json();
  href= "/playmusic?album=sleep-music&id=";
  addCarouselItem(sleepMusic, href + data[0]._id, data[0].picture_src, true);
  for (let i = 1; i < data.length; ++i) {
    addCarouselItem(sleepMusic,href + data[i]._id , data[i].picture_src, false);
  }
  const sleepMusicSlides = document.querySelectorAll(
    "#sleep-music-slide .carousel-item"
  );
  createSlides(sleepMusicSlides);
}
function createSlides(topicSlides) {
  topicSlides.forEach((el) => {
    const minPerSlide = 6;
    let next = el.nextElementSibling;
    for (var i = 1; i < minPerSlide; i++) {
      if (!next) {
        // wrap carousel by using first child
        next = topicSlides[0];
      }
      let cloneChild = next.cloneNode(true);
      el.appendChild(cloneChild.children[0]);
      next = next.nextElementSibling;
    }
  });
}
function addCarouselItem(parent, href, secureUrlImg, active = false) {
  var carousel = document.createElement("div");
  carousel.classList.add("carousel-item");
  if (active) {
    carousel.classList.add("active");
  }
  carousel.innerHTML = ` <a class="col-md-2" href=${href}>
    <div class="card">
      <div class="card-img">
        <img
          src= ${secureUrlImg}
          class="img-fluid w-100"
          alt="no image"
          style="max-width: 240px"
        />
      </div>
    </div>
  </a>
`;
  parent.appendChild(carousel);
}

