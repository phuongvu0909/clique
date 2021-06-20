var dataUrl = "../app/js/vendors/_data.json";


// load 20 more posts in one go
function loadData(dataUrl) {
    fetch(dataUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var home_body = document.querySelector(".home_body");
            for (i = 0; i < data.length; i++) {
                var body_item = document.createElement("div");
                body_item.classList.add("body_item");
                var item_html = `
                <div class="item_img">
                    <img src="${data[i].imgUrl}">
                </div>
                <div class="item_about">
                    <div class="item_name">
                        <p>${data[i].name}</p>
                        <i class="about_icon fas fa-check-circle"></i>
                        <a class="more" href="#more">
                            <i class=" more fas fa-ellipsis-h"></i>
                        </a>

                    </div>
                    <div class="description">
                        <span>${data[i].score}</span> 
                        <p>${data[i].description}</p> 
                        <span style="font-size = "12px"; line-heigth="27px"">${data[i].event}</span> 
                    </div>
                    <div class="name_item">${data[i].kind}</div>
                </div>
                <div class="status">
                    <div class="status_item date">
                    <p>${data[i].postedTime}</p>
                    </div>
                    <button class="status_item cmts">
                        <i class="fas fa-comment"></i>
                    </button>
                    <span class="note cmts">${data[i].totalCmt}</span>
                    <button class="status_item favs">
                        <i class="fas fa-heart"></i>

                    </button>
                    <span class="note favorites">${data[i].totalFavorites}</span>
                </div>
                `;
                body_item.insertAdjacentHTML("afterbegin", item_html);
                home_body.appendChild(body_item);
                body_item.setAttribute("id", data[i].kind);
            }

            //create filter
            var buttons = document.querySelectorAll("li");
            var section = document.querySelectorAll(".body_item");
            var values = "Schedule";
            filter(values);

            function filter(values) {
                section.forEach(show => {
                    show.style.display = "none";
                    if (show.getAttribute("id") === values || values === "Schedule") {
                        show.style.display = "inline-block";
                    }
                });
            }

            function kq() {
                buttons.forEach(item => {
                    item.addEventListener('click', () => {
                        buttons.forEach(item => {
                            item.className = "";
                        });
                        item.className = "active";
                        var values = item.textContent;
                        filter(values);
                    });
                });
            }
            kq();

            // change icon
            var click = document.querySelectorAll(".favs");
            var icon_favorites = document.querySelectorAll(".fa-heart");
            var totalFavs = document.querySelectorAll(".favorites");
            for (let i = 0; i < click.length; i++) {
                click[i].addEventListener('click', () => {
                    icon_favorites[i].style.color = "red";
                    tfavs = totalFavs[i].textContent;
                    console.log(tfavs);
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].totalFavorites == tfavs) {
                            tfavs = data[i].totalFavorites + 1;
                            // data[i].totalFavorites = tfavs;
                        }
                    }
                    totalFavs[i].innerHTML = tfavs;
                })
            }
        })


}
loadData(dataUrl);

// add post when scrolling to bottom 

function scrollBar(dataUrl) {
    window.addEventListener("scroll", () => {

        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        if (Math.ceil(scrolled) == scrollable && scrolled < 6635) {
            loadData(dataUrl);
        }
    })
}
scrollBar(dataUrl);