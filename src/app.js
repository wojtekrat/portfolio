const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton(){
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

$('.skill-percent').each(function(){
    $(this).animate({
      width:$(this).attr('data-percent')},1600);
    });