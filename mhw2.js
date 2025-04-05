function aprimenu(event) {
    const burger = document.querySelector("#burger");
    const menutendina = document.querySelector("#menutendina");
    const studiumimage=document.createElement("img");
    const bigbox=document.querySelector("#home-bigbox")
    studiumimage.src="studium.png";
    studiumimage.style.width="50px";
    studiumimage.style.height="50px";
    studiumimage.style.marginLeft="5px";
    menutendina.prepend(studiumimage);
    menutendina.classList.remove("hidden");
    burger.classList.add("hidden");
    bigbox.style.justifyContent="right";
    event.stopPropagation();
    document.addEventListener("click", chiudiMenu);
}

function chiudiMenu(event){
    const menu = document.querySelector("#menutendina");
        if (!menu.contains(event.target)) {
            const burger = document.querySelector("#burger");
            const studiumimage=document.querySelector("img[src='studium.png']");
            const bigbox=document.querySelector("#home-bigbox")
            studiumimage.remove();
            menutendina.classList.add("hidden");
            burger.classList.remove("hidden");
            bigbox.style.justifyContent="space-between";
            event.stopPropagation();
        }
}


const burger = document.querySelector('#burger');
burger.addEventListener('click', aprimenu);


