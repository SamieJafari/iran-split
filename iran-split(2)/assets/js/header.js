var parent_1 = document.querySelectorAll(".parent_1");
var child_1  = document.querySelectorAll(".child_1");
var side     = document.querySelector(".side");
parent_1.forEach(parent=>{
    parent.addEventListener("click",e=>{
        e.preventDefault();
        parent.classList.toggle("active_1");
    })
})
var h_menu = document.getElementById("h_menu");
h_menu.onclick= ()=>{
    side.classList.remove("d-none");
    side.classList.add("animate__animated");
    side.classList.add("animate__bounceInRight");
    darkE.classList.remove("d-none");
}
darkE.addEventListener("click",e=>{
    e.preventDefault();
    side.classList.add("d-none");
    side.classList.remove("animate__animated");
    side.classList.remove("animate__bounceInRight");
    darkE.classList.add("d-none");
})
var old1 = document.getElementById("old1")
var old2 = document.getElementById("old2")
var darkA = document.getElementById("darkA")
old1.addEventListener("click", e=>{
    e.preventDefault()
    old2.classList.toggle("d-none")
    old2.classList.add("animate__animated")
    old2.classList.add("animate__zoomIn")
    darkA.classList.remove("d-none")
})
darkA.addEventListener("click",e=>{
    old2.classList.toggle("d-none")
    old2.classList.remove("animate__animated")
    old2.classList.remove("animate__zoomIn")
    darkA.classList.add("d-none")
})
var search = document.getElementById("search")
var search1 = document.getElementById("search1")
var search2 = document.getElementById("search2")
var darkB = document.getElementById("darkB")
search1.addEventListener("click",e=>{
    e.preventDefault()
    search.classList.remove("d-none")
    search.classList.add("animate__animated")
    search.classList.add("animate__bounceInDown")
    darkB.classList.remove("d-none")
})
search2.addEventListener("click",e=>{
    e.preventDefault()
    search.classList.remove("d-none")
    search.classList.add("animate__animated")
    search.classList.add("animate__bounceInDown")
    darkB.classList.remove("d-none")
})
darkB.addEventListener("click",e=>{
    search.classList.remove("animate__animated")
    search.classList.remove("animate__bounceInDown")
    search.classList.add("d-none")
    darkB.classList.add("d-none")
})