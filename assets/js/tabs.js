let tabButtons = document.querySelectorAll("[data-tab-target]");
let  tabContent = document.querySelectorAll("[data-tab-target]");





tabButtons.forEach(node=> {
    node.addEventListener("click", function () {
        const target = document.querySelector(node.dataset.tabTarget)
        target.style.display = "block";
    });
})




//toggle between the tab content
window.addEventListener("load",function () {
tabContent.forEach(node =>{
    node.style.display="none"
    tabContent[0].style.display="block";
})
})


