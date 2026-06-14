// === SLIDER ===
const track = document.getElementById('sliderTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('sliderDots');

if (track) {
    const slides = track.querySelectorAll('.slide');
    let current = 0;
    let autoSlide; // زدنا هادي باش نتحكمو فالسلايدر الأوتوماتيكي

    // قاد النقط (Dots)
    slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        
        dot.addEventListener('click', () => {
            goTo(i);
            resetAutoSlide(); // ملي يكليكي، نريزيتيو الوقت باش ما يهربش السلايدر
        });
        dotsContainer.appendChild(dot);
    });

    function goTo(index) {
        current = (index + slides.length) % slides.length;
        track.style.transform = `translateX(-${current * 100}%)`;
        
        document.querySelectorAll('.dot').forEach((d, i) =>
            d.classList.toggle('active', i === current));
    }

    // الأسهم
    prevBtn.addEventListener('click', () => {
        goTo(current - 1);
        resetAutoSlide();
    });
    
    nextBtn.addEventListener('click', () => {
        goTo(current + 1);
        resetAutoSlide();
    });

    // دوز التصاور بوحدك
    function startAutoSlide() {
        autoSlide = setInterval(() => goTo(current + 1), 3000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlide);
        startAutoSlide();
    }

    startAutoSlide(); // كيبدا خدام فالبدية

    // وقف يلا حط الماوس (Hover)
    track.addEventListener('mouseenter', () => clearInterval(autoSlide));
    track.addEventListener('mouseleave', startAutoSlide);

    // التاتش فالتليفون
    let startX = 0;
    track.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
        clearInterval(autoSlide); // وقف الأوتوماتيك ملي يحط صبعو
    });
    
    track.addEventListener('touchend', e => {
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1));
        startAutoSlide(); // رجع الأوتوماتيك ملي يهز صبعو
    });
}

// === COUNTDOWN ===
const countdownEl = document.getElementById('countdown');
if (countdownEl) {
    setInterval(() => {
        const now = new Date();
        const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59).getTime();
        let distance = endOfDay - now.getTime();
        
        if (distance < 0) distance = 0;
        
        const h = String(Math.floor(distance / 3600000)).padStart(2, '0');
        const m = String(Math.floor((distance % 3600000) / 60000)).padStart(2, '0');
        const s = String(Math.floor((distance % 60000) / 1000)).padStart(2, '0');
        
        countdownEl.innerHTML = `${h}:${m}:${s}`;
    }, 1000);
}
