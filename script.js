// --- Code dyal Compteur (Kayt3awd kola nhar m3a Noss Lil) ---

const countdownEl = document.getElementById('countdown');

if (countdownEl) {
    setInterval(() => {
        // L'weqt dyal daba
        const now = new Date();
        
        // Kanhaddu l'weqt dyal l'hdaf (Lyouma m3a 23:59:59)
        const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59).getTime();
        const currentTime = now.getTime();
        
        // Ch7al bqa dyal l'weqt
        const distance = endOfDay - currentTime;

        // L'7isab dyal Swa3e3, Dqayeq, w Tawani
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Zid '0' ila kan rqm sgher mn 10 bach ybqa l'format nqi (ex: 09:05:01)
        const h = hours < 10 ? '0' + hours : hours;
        const m = minutes < 10 ? '0' + minutes : minutes;
        const s = seconds < 10 ? '0' + seconds : seconds;

        // Kifach ghatban f l'HTML (Matalan: 08:15:30)
        countdownEl.innerHTML = `${h}:${m}:${s}`;
        
    }, 1000);
}