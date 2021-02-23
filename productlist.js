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
  copy.querySelector(".productimage").addEventListener("click", function () {
    document.querySelector(".popup_product").classList.remove("hidden");
    document.querySelector(".popup_product img").src = imgurl;
    document.querySelector(
      ".artistname2"
    ).textContent = `${product.artistname}`;
    document.querySelector(".postername").textContent = `${product.postername}`;
    document.querySelector(".style").textContent = `${product.style}`;
    copy.querySelector(".kryds").addEventListener("click", function () {
      document.querySelector(".popup_product").classList.add("hidden");
    });
  });
  console.log(imgurl);
  const parent = document.querySelector("section");
  parent.appendChild(copy);
}

{
}
