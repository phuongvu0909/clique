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

                </div>
                <div class="item_about">
                    <div class="item_name">
                        <i class="about_icon fas fa-check-circle"></i>
                        <a class="more" href="#more">
                            <i class=" more fas fa-ellipsis-h"></i>
                        </a>

                    </div>
                    <div class="description">
                        <span></span>   
                    </div>
                    <div class="name_item"></div>
                </div>
                <div class="status">
                    <div class="status_item date">
                    </div>
                    <button class="status_item cmts">
                        <i class="fas fa-comment"></i>
                    </button>
                    <span class="note cmts"></span>
                    <button class="status_item favs">
                        <i class="fas fa-heart"></i>

                    </button>
                    <span class="note favorites"></span>
                </div>
                `;
                body_item.insertAdjacentHTML("afterbegin", item_html);
                home_body.appendChild(body_item);
                body_item.setAttribute("id", data[i].kind);
                var item_img = body_item.querySelector(".item_img");

                var img = document.createElement("img");
                img.src = data[i].imgUrl;
                item_img.appendChild(img);

                var item_about = body_item.querySelector(".item_about");

                var item_name = item_about.querySelector(".item_name");
                var p = document.createElement("p");
                p.textContent = data[i].name;
                item_name.appendChild(p);

                var des = item_about.querySelector(".description");

                var score = des.querySelector("span");
                score.textContent = data[i].score;

                var p = document.createElement("p");
                p.textContent = data[i].description;
                des.appendChild(p);

                var event = document.createElement("span");
                event.textContent = data[i].event;
                event.style.fontSize = "12px";
                event.style.lineHeight = "27px";
                des.appendChild(event);



                var name_item = item_about.querySelector(".name_item");
                name_item.textContent = data[i].kind;

                var status = body_item.querySelector(".status");

                var date = status.querySelector(".date");
                var p = document.createElement("p");
                p.textContent = data[i].postedTime;
                date.appendChild(p);

                var cmts = status.querySelector("span.cmts");
                cmts.textContent = data[i].totalCmt;

                var favorites = status.querySelector("span.favorites");
                favorites.textContent = data[i].totalFavorites;


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