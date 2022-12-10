

const boxLine = document.querySelector(".box-line");
const headerList = document.querySelector(".header-list");
const cross = document.querySelector(".cross");

console.log(boxLine);

boxLine.addEventListener("click", function(){
    headerList.style.display = "block";
    cross.style.display = "block";
    boxLine.style.display = "none";
});

cross.addEventListener("click", function(){
    boxLine.style.display = "block";
    headerList.style.display = "none";
    cross.style.display = "none";
});