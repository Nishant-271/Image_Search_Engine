const searchform = document.getElementById("form");
const searchbox = document.getElementById("search-box");
const searchresult = document.getElementById("search-result");
const lastbtn = document.getElementById("showmore");
const accesskey = "fLW9nJlpfxrhQT8BMhUqAYhzCkvF3LF7K_p_9elAsJk";

let keyword = "";
let page = 1;
async function searchimage() {
  keyword = searchbox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();
  if (page === 1) {
    searchresult.innerHTML = "";
  }

  const results = data.results;
  results.map(function (result) {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imagelink = document.createElement("a");
    imagelink.href = result.links.html;
    imagelink.target = "_blank";
    imagelink.appendChild(image);

    searchresult.appendChild(imagelink);

    lastbtn.style.display = "block";
  });
}

searchform.addEventListener("submit", function (e) {
  e.preventDefault();
  page = 1;
  searchimage();
});

lastbtn.addEventListener("click", function () {
  page++;
  searchimage();
});
