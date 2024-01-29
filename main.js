// EXAMPLE: navbar slowly fades in

document.getElementById('nav').style.opacity = '0';
setTimeout(() => {
    document.getElementById('nav').style.transition = 'opacity 1s';
    document.getElementById('nav').style.opacity = '1';
}, 100);

// EXAMPLE: navbar slides down 

document.getElementById('nav').style.transform = 'translateY(-100%)';
setTimeout(() => {
    document.getElementById('nav').style.transition = 'transform 0.5s';
    document.getElementById('nav').style.transform = 'translateY(0)';
}, 100);

// EXAMPLE: navbar links enlarged when cursor hovers

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.style.transition = 'transform 0.3s ease-in-out';

    link.addEventListener('mouseenter', () => {
        link.style.fontSize = '1rem';
    });

    link.addEventListener('mouseleave', () => {
        link.style.fontSize = '';
    });
});