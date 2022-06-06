

var storeitem = JSON.parse(localStorage.getItem("purchase")) || [];
console.log(storeitem);

async function main() {
    try {
        let url = "https://masai-vouchers-api.herokuapp.com/api/vouchers";
        let res = await fetch(url);
        let data = await res.json();
        //  return data;
        //  console.log(data[0].vouchers);
        append(data[0].vouchers);

    } catch (error) {
        console.log("Error happen", error)
    }
}


function append(data) {

    data.forEach(function (elem) {

        let div = document.createElement("div");

        let image = document.createElement("img");
        let name = document.createElement("h2");
        let price = document.createElement("h4");
        let buy = document.createElement("button");

        image.src = elem.image;
        name.innerText = elem.name;
        price.innerText = elem.price;
        buy.innerText = "Buy";

        div.setAttribute("class", "voucher");
        buy.setAttribute("class", "buy_voucher");

        buy.addEventListener("click", items)

        div.append(image, name, price, buy)
        document.getElementById("voucher_list").append(div);

        function items() {
            let s1 = {
                name: elem.name,
                image: elem.image,
                price: elem.price,
            }
            storeitem.push(s1);
            localStorage.setItem("purchase", JSON.stringify(storeitem));
            console.log("triggere", elem.name)
        }


        document.getElementById("wallet_balance").innerText = elem.wallet


    });
}


// ////////////////////////////////////////////////////////////

var getinput = JSON.parse(localStorage.getItem("user")) || [];
console.log(getinput);

function take(getinput) {

    getinput.forEach(function (elem) {
        let balance = document.createElement("h2");
        balance.innerText = elem.wallet;


        document.getElementById("wallet_balance").append(balance);
        console.log(elem.wallet);
        console.log(balance);
    });
}
take(getinput)


main();
