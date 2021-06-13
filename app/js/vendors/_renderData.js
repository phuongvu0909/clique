var dataUrl = "../app/js/vendors/_data.json";

async function getData(dataUrl) {
    var response = await fetch(dataUrl);
    var data = await response.json();
    console.log(data[0].imgUrl);
    document.getElementById("img1").src = data[0].imgUrl;
    document.getElementById("n1").textContent = data[0].name;
    document.getElementById("d1").textContent = data[0].description;
    document.getElementById("i1").textContent = data[0].kind;
    document.getElementById("pt1").textContent = data[0].postedTime;
    document.getElementById("f1").textContent = data[0].totalFavorites;
    document.getElementById("c1").textContent = data[0].totalCmt;
    // for (var i = 0; i < data.length; i++) {
    //     var img = document.getElementsByClassName("item_img");
    //     // img = data[i].imgUrl;
    //     img.src = data[i].imgUrl;
    //     console.log(img);
    // }
}
getData(dataUrl);