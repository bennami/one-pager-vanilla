let tabButtons = document.querySelectorAll(
    ".tab-btn"
);
let tabContent = document.querySelectorAll(
    ".tab-content"
);
//console.log(tabButtons, tabContent);
function showPanel() {
    tabButtons.forEach(function (node) {
    node.style.backgroundColor="grey";
    node.style.color= "black"
    });

}
