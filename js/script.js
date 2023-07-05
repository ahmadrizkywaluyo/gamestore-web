const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener('click', () => {
    menuList.classList.toggle('hidden');
});


document.addEventListener('click', function(e) {
    if (!menuIcon.contains(e.target) && !menuList.contains(e.target)) {
        menuList.classList.add('hidden');
    }
});