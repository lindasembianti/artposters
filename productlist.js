const url = "https://artposters-3f2b.restdb.io/rest/artposters?max=28";
const mediaurl = "https://artposters-3f2b.restdb.io/media/";
const options = {
  headers: { "x-apikey": "6033b1645ad3610fb5bb64ef" },
};

fetch(url, options)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  const template = document.querySelector("#postertemplate").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".artistname").textContent = `${product.artistname}`;
  const imgurl = mediaurl + product.posterimg[0];
  copy.querySelector(".productimage").src = imgurl;
  console.log(imgurl);
  const parent = document.querySelector("main");
  parent.appendChild(copy);
}

{
  /* <template id="postertemplate">
          <article class="posters">
            <div class="img_wrapper">
              <img
                class="productimage"
                src="img/poster_example.jpg"
                alt="Descripton here"
              />
            </div>

            <h2 class="postername">Poster Name</h2>
            <h3 class="artistname">Artist Name</h2>
            <p class="style">Style</p>
          </article>
        </template> */
}
