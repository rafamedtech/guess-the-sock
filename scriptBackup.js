const styleItem = document.querySelectorAll(".style");
const button = document.getElementById("check");
const colorItem = document.querySelectorAll(".color");
const image = document.getElementById("img");

const start = document.getElementById("start");

const styleSelected = document.getElementById("style-answer");
const colorSelected = document.getElementById("color-answer");

const checkResult = document.getElementById("check-result");

const socks = {
  style: "",
  color: "",
};
// let answer1;
// let answer2;

function selectStyle() {
  styleItem.forEach((item) => {
    item.addEventListener("click", () => {
      removeSelectedClass();
      item.classList.toggle("selected");
      const answer1 = item.innerText;
      socks.style = answer1;
      styleSelected.innerText = answer1;
      return answer1;
    });
    const answerTest = answer1;
    return answerTest;
  });
}

function selectColor() {
  colorItem.forEach((item) => {
    item.addEventListener("click", () => {
      removeSelectedClass();
      item.classList.toggle("selected");
      const answer2 = item.innerText;
      socks.color = answer2;
      colorSelected.innerText = answer2;
      return answer2;
    });
  });
}

function removeSelectedClass() {
  styleItem.forEach((item) => {
    item.classList.remove("selected");
  });
}

function validateAnswers(sock, style, color) {
  if (style === sock.name && color === sock1.color) {
    checkResult.innerText = "Correcto";
  } else {
    checkResult.innerText = "Incorrecto";
  }
}

const socksList = [
  {
    name: "Women's Wide Calf Socks",
    color: "Logwood",
    img: "https://assets.bombas.com/image/fetch/c_crop,h_3040,w_3040/b_rgb:F5F8F8,c_scale,w_1068/f_auto,q_auto/https://cdn.shopify.com/s/files/1/1119/5850/products/logwood-layflat-product-transparent_fcf0eb29-c3ad-48fa-a0a7-fa7967431d41.png%3Fv%3D1624999979",
  },

  {
    name: "Women's Merino Wool Running Calf Socks",
    color: "Midnight Olive",
    img: "https://assets.bombas.com/image/fetch/c_crop,h_3040,w_3040/b_rgb:F5F8F8,c_scale,w_1068/f_auto,q_auto/https://cdn.shopify.com/s/files/1/1119/5850/products/midnight-olive-layflat-product-transparent_f87e17ba-b2d6-4ad9-b025-c9afbe2e1579.png%3Fv%3D1622150687",
  },

  {
    name: "Transgender Pride Flag Calf Socks",
    color: "Charcoal",
    img: "https://assets.bombas.com/image/fetch/c_crop,h_3040,w_3040/b_rgb:F5F8F8,c_scale,w_1068/f_auto,q_auto/https://cdn.shopify.com/s/files/1/1119/5850/products/charcoal-layflat-product-transparent_f9f1b1ab-c9a5-40ab-b031-e8f0bcdf2dee.png%3Fv%3D1620326751",
  },

  {
    name: "Pride All-Purpose Performance Calf Socks",
    color: "Rainbow",
    img: "https://assets.bombas.com/image/fetch/c_crop,h_3040,w_3040/b_rgb:F5F8F8,c_scale,w_1068/f_auto,q_auto/https://cdn.shopify.com/s/files/1/1119/5850/products/rainbow-layflat-product-transparent_8ee9b1d1-8c38-4fa4-8221-10f725051a16.png%3Fv%3D1622125785",
  },

  {
    name: "Heart And Sole Calf Socks",
    color: "Midnight Navy",
    img: "https://assets.bombas.com/image/fetch/c_crop,h_3040,w_3040/b_rgb:F5F8F8,c_scale,w_1068/f_auto,q_auto/https://cdn.shopify.com/s/files/1/1119/5850/products/midnight-navy-layflat-product-transparent_3f224957-6329-4b21-adde-1b42b1fb11dc.png%3Fv%3D1611783339",
  },

  {
    name: "Men's Dress Knee High Socks",
    color: "Soft White",
    img: "https://assets.bombas.com/image/fetch/c_crop,h_3040,w_3040/b_rgb:F5F8F8,c_scale,w_1068/f_auto,q_auto/https://cdn.shopify.com/s/files/1/1119/5850/products/soft-white-layflat-product-transparent_e638a40b-5bae-42fa-95b5-6623ca1bc4fa.png%3Fv%3D1616703173",
  },

  {
    name: "Men's Performance Cushioned No Show Socks",
    color: "Parakeet",
    img: "https://assets.bombas.com/image/fetch/c_crop,h_3040,w_3040/b_rgb:F5F8F8,c_scale,w_1068/f_auto,q_auto/https://cdn.shopify.com/s/files/1/1119/5850/products/parakeet-layflat-product-transparent_f4219642-f76b-4358-9892-b1300e986207.png%3Fv%3D1624313886",
  },

  {
    name: "Men's Merino Wool Ski & Snowboard Socks",
    color: "Purple Blue",
    img: "https://assets.bombas.com/image/fetch/c_crop,h_3040,w_3040/b_rgb:F5F8F8,c_scale,w_1068/f_auto,q_auto/https://cdn.shopify.com/s/files/1/1119/5850/products/purple-blue-layflat-product-transparent.png%3Fv%3D1590004447",
  },

  {
    name: "Men's Performance Cycling Calf Socks",
    color: "Blue Multi",
    img: "https://assets.bombas.com/image/fetch/c_crop,h_3040,w_3040/b_rgb:F5F8F8,c_scale,w_1068/f_auto,q_auto/https://cdn.shopify.com/s/files/1/1119/5850/products/blue-multi-layflat-product-transparent_e1322164-b6f8-4d64-9164-7e79d2ef22c6.png%3Fv%3D1623184668",
  },

  {
    name: "Men's Performance Boot Calf Socks",
    color: "Brown",
    img: "https://assets.bombas.com/image/fetch/c_crop,h_3040,w_3040/b_rgb:F5F8F8,c_scale,w_1068/f_auto,q_auto/https://cdn.shopify.com/s/files/1/1119/5850/products/brown-layflat-product-transparent_606e3162-b891-4deb-be8f-8eb198603e4f.png%3Fv%3D1588346322",
  },
];

start.addEventListener("click", test);

function test() {
  image.innerHTML = "";
  socksList.forEach((sock) => {
    sockImage = document.createElement("img");
    sockImage.src = sock.img;
    image.appendChild(sockImage);
    selectStyle();
    selectColor();
    validateAnswers(sock);
  });
}

// validateAnswers
