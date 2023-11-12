"use strict"; 

const body = document.body;
const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
const menuBorder = menu.querySelector(".menu__border");
let activeItem = menu.querySelector(".active");

function clickItem(item, index) {

    menu.style.removeProperty("--timeOut");
    
    if (activeItem == item) return;
    
    if (activeItem) {
        activeItem.classList.remove("active");
    }

    
    item.classList.add("active");
    body.style.backgroundColor = bgColorsBody[index];
    activeItem = item;
    offsetMenuBorder(activeItem, menuBorder);
    
    
}

function offsetMenuBorder(element, menuBorder) {

    const offsetActiveItem = element.getBoundingClientRect();
    const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth  - offsetActiveItem.width) / 2) +  "px";
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;

}

offsetMenuBorder(activeItem, menuBorder);

menuItems.forEach((item, index) => {

    item.addEventListener("click", () => clickItem(item, index));
    
})

window.addEventListener("resize", () => {
    offsetMenuBorder(activeItem, menuBorder);
    menu.style.setProperty("--timeOut", "none");
});
const middleButton = document.getElementById('middleButton');
const animatedImage = document.getElementById('animatedImage');
let clickCount = 0;

// middleButton.addEventListener('click', () => {
//   clickCount++;

//   if (clickCount == 2) {
//     middleButton.style.display = 'none';
//     animatedImage.style.display = 'block';
//   } else {
//     clickCount = 0; // Reset clickCount to 0
//     middleButton.style.display = 'block';
//     animatedImage.style.display = 'none';
//   }
// });

// jQuery(function(abo) {
//   abo('middleButton').click(function() {
//       return false;
//   }).dblclick(function() {
//       href = "https://example.com"
//       window.location = this.href;
//       return false;
//   }).keydown(function(event) {
//       switch (event.which) {
//           case 13: // Enter
//           case 32: // Space
//               window.location = this.href;
//               return false;
//       }
//   });
// });


