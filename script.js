document.addEventListener('DOMContentLoaded', function() {
    // Ініціалізація AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Відео контроли
    const video = document.querySelector('video');
    const playBtn = document.querySelector('.play-btn');
    const muteBtn = document.querySelector('.mute-btn');

    // Початковий стан відео
    video.pause();
    video.muted = false;
    playBtn.innerHTML = '<i class="fas fa-play"></i>';

    // Кнопка відтворення/паузи
    playBtn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            video.pause();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    // Кнопка звуку
    muteBtn.addEventListener('click', () => {
        if (video.muted) {
            video.muted = false;
            muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            video.muted = true;
            muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
    });

    // Оновлення іконок при зміні стану відео
    video.addEventListener('play', () => {
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    });

    video.addEventListener('pause', () => {
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    });

    // Анімація сердечок
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach((heart, index) => {
        heart.style.animationDelay = `${index}s`;
    });

    // Плавна прокрутка для секцій
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}); 