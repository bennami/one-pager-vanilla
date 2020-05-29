let tabButtons = document.querySelectorAll(".tab-btn");
let tabButton = document.querySelector(".tab-btn");
let parent = document.getElementById("parent")

//console.log(tabButtons, tabContent);

    tabButtons.forEach(node =>{
         node.addEventListener("click",function () {
             tabButtons.forEach(node =>{
                 node.classList.remove("btn-active");
             })

            node.classList.add("btn-active");
         })
    });

//toggle between the tab content


tabButton.addEventListener("click", function () {
    tabButtons.style=".btn-active"

});
