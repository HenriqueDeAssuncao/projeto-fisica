const btnMenu = document.getElementById('btnMenu');
const btnHideMenu = document.getElementById('btnHideMenu');
const menu = document.getElementById('menu');
btnMenu.addEventListener("click", function showMenu() {
    menu.style.height = '159px';
    btnMenu.style.display = 'none';
    btnHideMenu.style.display = 'block';
});
btnHideMenu.addEventListener("click", function hideMenu() {
    menu.style.height = '0px';
    btnMenu.style.display = 'block';
    btnHideMenu.style.display = 'none';
});
function fresh() {
    if (window.innerWidth >= 992) {
        location.reload();
    }
}