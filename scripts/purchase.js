
var storeitem = JSON.parse(localStorage.getItem("purchase")) || [];

function display(storeitem) {

  storeitem.forEach(function (elem) {

    let div = document.createElement("div");

    let image = document.createElement("img");
    let name = document.createElement("h2");
    let price = document.createElement("h4");

    image.src = elem.image;
    name.innerText = elem.name;
    price.innerText = elem.price;


    div.setAttribute("class", "voucher");


    div.append(image, name, price)
    document.getElementById("purchased_vouchers").append(div);


  });
}
display(storeitem)


