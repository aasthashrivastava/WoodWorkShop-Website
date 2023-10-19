const iconnavmenu = document.getElementsByClassName("ri-menu-line")[0];
const iconclosemenu = document.getElementsByClassName('ri-close-line')[0];
const navright = document.getElementById("navright");

//for screen 550-800 nav list
function navMenu() {
    iconnavmenu.style.display = 'none';
    iconclosemenu.style.display = 'flex';
    navright.style.display = 'flex';
}
function navMenuclose() {
    iconnavmenu.style.display = 'flex';
    iconclosemenu.style.display = 'none';
    navright.style.display = 'none';
}

//for page4 right content.
const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
    let header = item.querySelector("header");
    header.addEventListener("click", () => {
        item.classList.toggle("is-open");

        let description = item.querySelector(".accordion-content-description");
        if (item.classList.contains("is-open")) {
            description.style.height = `${description.scrollHeight}px`;
            item.querySelector("i").classList.replace("ri-add-line", "ri-close-line");
        } else {
            description.style.height = "0px";
            item.querySelector("i").classList.replace("ri-close-line", "ri-add-line");
        }
        removeOpenedContent(index);
    })
})

function removeOpenedContent(index) {
    accordionContent.forEach((item2, index2) => {
        if (index != index2) {
            item2.classList.remove("is-open");
            let descrip = item2.querySelector(".accordion-content-description");
            descrip.style.height = "0px";
            item2.querySelector("i").classList.replace("ri-close-line", "ri-add-line");
        }
    })
}

//video close
const video = document.getElementsByClassName('video');

function videoPlay() {
    video[0].style.display = 'flex';
}

function videoClose() {
    video[0].style.display = 'none';
}
