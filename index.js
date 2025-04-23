const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.forEach(l => l.style.backgroundColor = '');
                link.style.backgroundColor = '#34495e';
            });
        });