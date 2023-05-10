const nextMeme = document.getElementById("memeBtn");
const memePicture = document.getElementById("showImg");
const memeCreator = document.getElementById("meme-owner");

const updateMemePage = (url, author) => {
  memePicture.setAttribute("src", url);
  memeCreator.innerHTML = `Created by : ${author}`;
};

const generateMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((memeData) => {
      updateMemePage(memeData.url, memeData.author);
    });
};

nextMeme.addEventListener("click", generateMeme);

generateMeme();
