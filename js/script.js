//navbar menor
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


//para quando clicar nos nomes do header direcionar par aa pagina
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

//quando scroll para baixo o header para de ser transparente
window.onscroll =() => {
//para quando clicar nos nomes do header direcionar par aa pagina 
sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
        //active navbar links
        navlinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
    } 
});

//quando scroll para baixo o header para de ser transparente 
    let header =document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 200);


//remove nav bar ao clicar em algum icone dela 
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

}
