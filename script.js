function toggleComment(){

    var box = document.getElementById("commentBox");

    if(box.style.display==="block"){

        box.style.display="none";

    }else{

        box.style.display="block";

    }
}



function openMenu(){
    document.getElementById("topMenu").classList.add("show");
}

function closeMenu(){
    document.getElementById("topMenu").classList.remove("show");
}



function showTimeline() {
    const timeline = document.getElementById("timeline");

    timeline.classList.remove("hidden");

    timeline.scrollIntoView({
        behavior: "smooth"
    });
}

function hideTimeline() {
    document.getElementById("timeline").classList.add("hidden");
}



function toggleView(clickedImage) {

    const clickedContainer = clickedImage.parentElement;
    const clickedInfo = clickedContainer.querySelector(".info");

    const isOpen = clickedInfo.style.display === "block";

    const allContainers = document.querySelectorAll(".image-container");
    const backBtn = document.getElementById("backBtn");

   
    allContainers.forEach(container => {
        container.style.display = "flex";
        container.querySelector(".info").style.display = "none";
    });

  
    if (isOpen) {
        backBtn.style.display = "none";
        return;
    }

   
    allContainers.forEach(container => {
        if (container !== clickedContainer) {
            container.style.display = "none";
        }
    });

    clickedInfo.style.display = "block";
    backBtn.style.display = "block";
}

function showAll() {

    const allContainers = document.querySelectorAll(".image-container");

    allContainers.forEach(container => {
        container.style.display = "flex";
        container.querySelector(".info").style.display = "none";
    });

    document.getElementById("backBtn").style.display = "none";
}


function tukarWarna(id, warna) {

    const gambar = document.getElementById(id);

    if (id === "gambar1") {
        gambar.src = (warna === "blue")
            ? "image/img5-1.png"
            : "image/img5-2.png";
    }

    else if (id === "gambar2") {
        gambar.src = (warna === "blue")
            ? "image/img6-3.png"
            : "image/img6-2.png";
    }

    else if (id === "gambar3") {
        gambar.src = (warna === "blue")
            ? "image/img7-3.png"
            : "image/img7-2.png";
    }
}



function tukarWarnasaree(id, warna) {
    let gambar;

   
    if (id === 1) {
        gambar = document.getElementById("gambar1");

        if (warna === 3) {
            gambar.src = "image/img1(3).png"; 
        } else if (warna === 4) {
            gambar.src = "image/img1(4).png";
        }
    }

    else if (id === 2) {
        gambar = document.getElementById("gambar2");

        if (warna === 3) {
            gambar.src = "image/img4(3).png"; 
        } else if (warna === 4) {
            gambar.src = "image/img4(4).png"; 
        }
    }
}




function tukarWarnasaree1(id, warna) {
    let gambar;

   
    if (id === 1) {
        gambar = document.getElementById("gambar1");

        if (warna === 3) {
            gambar.src = "image/img1-3.png"; 
        } else if (warna === 4) {
            gambar.src = "image/img1-4.png";
        }
    }

    else if (id === 2) {
        gambar = document.getElementById("gambar2");

        if (warna === 3) {
            gambar.src = "image/img2-3.png"; 
        } else if (warna === 4) {
            gambar.src = "image/img2-4.png"; 
        }
    }
}




function tukarWarnasaree2(id, warna) {
    let gambar;

   
    if (id === 1) {
        gambar = document.getElementById("gambar1");

        if (warna === 3) {
            gambar.src = "image/img8(3).png"; 
        } else if (warna === 4) {
            gambar.src = "image/img8(4).png";
        }
    }

    else if (id === 2) {
        gambar = document.getElementById("gambar2");

        if (warna === 3) {
            gambar.src = "image/img8-3.png"; 
        } else if (warna === 4) {
            gambar.src = "image/img8-4.png"; 
        }
    }
}




function toggleFestival(id){

    let festival=document.getElementById(id);

    if(festival.style.display==="block"){

        festival.style.display="none";

    }else{

        let semua=document.querySelectorAll(".section");

        semua.forEach(function(item){

            item.style.display="none";

        });

        festival.style.display="block";
    }

}