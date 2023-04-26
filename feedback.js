const image = document.getElementById("image");
const name = document.getElementById("name");
const rating = document.querySelectorAll(".fa-star");

rating[0].addEventListener("click",()=>{
    rating[0].style.color = "#8ce26b";
    rating[1].style.color = "";
    rating[2].style.color = "";
    rating[3].style.color = "";
    rating[4].style.color = "";
    image.innerHTML = `<img src="./worst.gif" alt="">`;
    name.innerHTML = `Worst`;
})

rating[1].addEventListener("click",()=>{
    rating[0].style.color = "#8ce26b";
    rating[1].style.color = "#8ce26b";
    rating[2].style.color = "";
    rating[3].style.color = "";
    rating[4].style.color = "";
    image.innerHTML = `<img src="./bad.gif" alt="">`;
    name.innerHTML = `Bad`;
})

rating[2].addEventListener("click",()=>{
    rating[0].style.color = "#8ce26b";
    rating[1].style.color = "#8ce26b";
    rating[2].style.color = "#8ce26b";
    rating[3].style.color = "";
    rating[4].style.color = "";
    image.innerHTML = `<img src="./average.gif" alt="">`;
    name.innerHTML = `Average`;
})

rating[3].addEventListener("click",()=>{
    rating[0].style.color = "#8ce26b";
    rating[1].style.color = "#8ce26b";
    rating[2].style.color = "#8ce26b";
    rating[3].style.color = "#8ce26b";
    rating[4].style.color = "";
    image.innerHTML = `<img src="./good.gif" alt="">`;
    name.innerHTML = `Good`;
})

rating[4].addEventListener("click",()=>{
    rating[0].style.color = "#8ce26b";
    rating[1].style.color = "#8ce26b";
    rating[2].style.color = "#8ce26b";
    rating[3].style.color = "#8ce26b";
    rating[4].style.color = "#8ce26b";
    image.innerHTML = `<img src="./excellent01.gif" alt="">`;
    name.innerHTML = `Excellent`;
})

