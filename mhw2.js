function aprimenu(event) {
    const burger = document.querySelector("#burger");
    const menutendina = document.querySelector("#menutendina");
    const studiumimage=document.createElement("img");
    studiumimage.src="studium.png";
    studiumimage.style.width="25%";
    studiumimage.style.height="5%";
    studiumimage.style.marginLeft="5px";
    menutendina.prepend(studiumimage);
    menutendina.classList.remove("hidden");
    burger.classList.add("hidden");
    event.stopPropagation();

    document.addEventListener("click", chiudiMenu);
}
function chiudiMenu(event){
    const menu = document.querySelector("#menutendina");
        if (!menu.contains(event.target)) {
            const burger = document.querySelector("#burger");
            const studiumimage=document.querySelector("img[src='studium.png']");
            studiumimage.remove();
            menutendina.classList.add("hidden");
            burger.classList.remove("hidden");
            event.stopPropagation();
        }
}


const burger = document.querySelector('#burger');
burger.addEventListener('click', aprimenu);


