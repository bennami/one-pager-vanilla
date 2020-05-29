let tabButtons = document.querySelectorAll('[data-tab-target]');
let  tabContents = document.querySelectorAll("[data-tab-content]");


//toggle  tab content
tabButtons.forEach(node  => {

    node.addEventListener("click", function () {
        let tab = document.querySelector(node.dataset.tabTarget);
        tabContents.forEach(tab  => tab.classList.remove('active'));
        tab.classList.add('active');
    });
});

//remove active style on tabs
function resetActiveTab(){
    tabButtons.forEach(node =>{
        node.classList.remove("btn-active");
    })
}

tabButtons.forEach(node =>{
    node.addEventListener("click",function () {
       resetActiveTab();
       node.classList.add("btn-active");
    })
});

//on load show first
window.addEventListener("load",function () {
    tabContents[0].classList.add('active');
});




