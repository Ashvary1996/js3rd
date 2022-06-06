

  document.getElementById("submit").addEventListener("click", submiT)
  var uData = JSON.parse(localStorage.getItem("user")) || [];
  console.log(uData);

  function submiT(e) {
    e.preventDefault();
    var data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      address: document.getElementById("address").value,
      wallet: document.getElementById("amount").value,

    }

    uData.push(data);
    localStorage.setItem("user", JSON.stringify(uData));
    window.location.reload();

  }
