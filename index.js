const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.forEach(l => l.style.backgroundColor = '');
                link.style.backgroundColor = '#34495e';
            });
        });

        //BANNER
        // Initializing canvas for matrix effect
        const canvas = document.getElementById('matrix');
        const ctx = canvas.getContext('2d');

        // Setting canvas size to match banner
        function resizeCanvas() {
            canvas.height = canvas.parentElement.offsetHeight;
            canvas.width = canvas.parentElement.offsetWidth;
        }
        resizeCanvas();

        // Defining characters for matrix effect
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
        const fontSize = 12; // Smaller font for banner
        const columns = canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);

        // Drawing matrix effect
        function drawMatrix() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#00ff00';
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = chars.charAt(Math.floor(Math.random() * chars.length));
                const x = i * fontSize;
                const y = drops[i] * fontSize;
                ctx.fillText(text, x, y);

                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        // Running matrix animation
        setInterval(drawMatrix, 33);

        // Typing effect for banner text
        const text = 'KEYTECHCORPS';
        let index = 0;
        const bannerText = document.getElementById('banner-text');

        function typeText() {
            if (index < text.length) {
                bannerText.textContent += text.charAt(index);
                index++;
            } else {
                setTimeout(() => {
                    bannerText.textContent = '';
                    index = 0;
                }, 1000);
            }
        }

        // Starting typing animation
        function startTyping() {
            typeText();
            setTimeout(startTyping, index < text.length ? 100 : 2000);
        }

        startTyping();

        // Handling window resize
        window.addEventListener('resize', () => {
            resizeCanvas();
            const newColumns = canvas.width / fontSize;
            drops.length = Math.floor(newColumns);
            drops.fill(1);
        });