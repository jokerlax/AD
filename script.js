// Default configuration object
const DEFAULT_CONFIG = {
    herName: "Beautiful",
    yourName: "Always yours. ❤️",
    heroSubtext: "Every detail here was built to put a smile on your face today.",
    letterDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    letterPreview: "Click the envelope to open a message written just for you...",
    letterContent: `My Beautiful, ❤️

I wanted to create something a little different for you — something that’s just yours, because you deserve something special.

There’s something about you that’s hard to put into words. Maybe it’s your smile, the way you laugh, the way you make even the simplest moments feel meaningful, or simply the way I feel whenever I’m around you.

You have this beautiful way of making my days brighter without even trying. Talking to you can make a bad day better, and being with you can make an ordinary moment feel like a memory I want to keep.

I know there have been moments when I’ve hurt you, and I wish I could take back every moment that caused you pain. I know I’m not perfect, and sometimes I make mistakes or say things I don’t mean. But even through all of that, one thing has never changed — you are still the only person in my heart.

No matter how difficult things become, my heart still chooses you. You’re not just someone I love when everything is perfect. You’re the person I still think about, care about, and want beside me even when things aren’t easy.

I made this little corner of the internet for you because I wanted to give you something special — something that might make you smile and remind you just how much you mean to me.

I may make mistakes, but my feelings for you are real. And no matter what happens, a part of my heart will always belong to you. ❤️

So, my beautiful girl…
are you ready for my little question? 😉`,
    questionTitle: "So, my beautiful girl… are you ready for my little question? 😉",
    questionSubtext: "Would you do me the honor of spending some time together?",
    planIdea: "A Special Date Just For Us ✨",
    planTime: "Whenever you're ready!",
    reasons: [
        {
            icon: "fa-regular fa-face-smile-beam",
            title: "Your Smile & Laugh",
            text: "The way you make even the simplest moments feel meaningful.",
            modalTitle: "Your Smile Lights Up Everything ✨",
            modalBody: "Whenever you smile, it genuinely changes the whole mood. Your laugh is one of my favorite sounds in the world, and knowing that I can bring even one smile to your face means everything to me.",
            modalQuote: "Keep smiling, beautiful — it suits you perfectly. ❤️"
        },
        {
            icon: "fa-solid fa-wand-magic-sparkles",
            title: "Your Brighter Energy",
            text: "Talking to you can make a bad day better instantly.",
            modalTitle: "My Favorite Comfort ✨",
            modalBody: "You have this rare, magical way of bringing peace and warmth wherever you go. Even on the hardest or most stressful days, just talking to you brings an instant feeling of calm and comfort.",
            modalQuote: "Thank you for being my favorite person to talk to. 🌸"
        },
        {
            icon: "fa-solid fa-heart-pulse",
            title: "My Heart's Choice",
            text: "Through every up and down, you are still the only person in my heart.",
            modalTitle: "Always & Only You ❤️",
            modalBody: "Life isn't always smooth, and we've had our moments. But out of all the people in the world, my heart has never doubted who it wants. I care about you deeply, and my heart still chooses you.",
            modalQuote: "You will always hold a special place in my heart. 💖"
        },
        {
            icon: "fa-solid fa-star",
            title: "Unconditional Feelings",
            text: "I care about you and want you beside me through everything.",
            modalTitle: "Here For You Always ✨",
            modalBody: "My feelings for you aren't based on perfect days alone. I care about you through the good times, the tough times, and everything in between. I just want to support you, make you happy, and stand by your side.",
            modalQuote: "You deserve all the love, happiness, and sweetness in the world. 🌟"
        },
        {
            icon: "fa-solid fa-gem",
            title: "Your Gentle Heart",
            text: "The genuine, beautiful kindness you show in everything you do.",
            modalTitle: "Your Precious Gentle Heart ✨",
            modalBody: "There is something truly rare about the softness and sincerity in your heart. You care genuinely about the people around you, and being able to know someone as pure and sweet as you is one of the greatest blessings.",
            modalQuote: "Never change the sweet, wonderful person you are. 🌟"
        }
    ],
    polaroids: [
        {
            img: "romantic_3d_couple.jpg",
            caption: "You & Me Always ❤️",
            angle: -3
        },
        {
            img: "photo1.jpg",
            caption: "Starry Night Dreams ✨",
            angle: 4
        },
        {
            img: "photo2.jpg",
            caption: "Flower Garden Magic 🌸",
            angle: -2
        }
    ]
};

// State variables
let appConfig = loadConfig();

// DOM Content Loaded Handler
document.addEventListener('DOMContentLoaded', () => {
    initParticleCanvas();
    renderPageContent();
    setupLoginScreen();
    setupIntroOverlay();
    setupEnvelopeInteraction();
    setupLoveNotesGenerator();
    setupQuestionButtons();
    setupAudioPlayer();
});

// Setup Romantic Login / Lock Screen
function setupLoginScreen() {
    const loginOverlay = document.getElementById('loginOverlay');
    const loginForm = document.getElementById('loginForm');
    const passcodeInput = document.getElementById('passcodeInput');
    const loginError = document.getElementById('loginError');
    const loginCard = document.getElementById('loginCard');
    const loginIcon = document.getElementById('loginIcon');
    const hintBtn = document.getElementById('hintBtn');
    const hintDisplay = document.getElementById('hintDisplay');

    if (!loginOverlay || !loginForm) return;

    // Correct secret password (default: "love")
    const SECRET_PASSCODE = "love";

    hintBtn.addEventListener('click', () => {
        hintDisplay.classList.toggle('show');
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const enteredPasscode = passcodeInput.value.trim().toLowerCase();

        if (enteredPasscode === SECRET_PASSCODE || enteredPasscode === "1234") {
            loginError.textContent = "";
            loginCard.classList.add('unlocked');
            if (loginIcon) loginIcon.innerHTML = `<i class="fa-solid fa-lock-open"></i>`;
            triggerHeartBurst();

            setTimeout(() => {
                loginOverlay.classList.add('unlock-fade');
                setTimeout(() => {
                    loginOverlay.style.display = 'none';
                }, 800);
            }, 500);
        } else {
            loginError.textContent = "Oops! Wrong passcode. Try entering 'love' ❤️";
            loginCard.classList.add('shake');
            setTimeout(() => {
                loginCard.classList.remove('shake');
            }, 450);
        }
    });
}

// Secret Love Notes Generator Logic
function setupLoveNotesGenerator() {
    const nextBtn = document.getElementById('nextNoteBtn');
    const displayNote = document.getElementById('displayLoveNote');
    if (!nextBtn || !displayNote) return;

    const loveNotes = [
        "\"Even on the hardest days, my heart will always choose you. You are my favorite person.\"",
        "\"Your smile is the prettiest thought in my head all day long. ❤️\"",
        "\"I don't just love you when everything is easy — I love you with all my heart, through everything.\"",
        "\"Talking to you makes my whole world feel brighter, softer, and sweeter. 🌸\"",
        "\"You bring out the best in me, and I want to keep growing into a better person for you. ✨\"",
        "\"Out of all the people in the world, you are the only one who holds my heart.\"",
        "\"I am so grateful for every laugh, every moment, and every memory we share. 💖\"",
        "\"No matter what happens, a special part of my heart will always belong to you. ❤️\"",
        "\"You make ordinary moments feel like memories I want to keep forever.\"",
        "\"Keep smiling, beautiful — your happiness is all I truly want. 🌟\""
    ];

    let currentNoteIndex = 0;

    nextBtn.addEventListener('click', () => {
        currentNoteIndex = (currentNoteIndex + 1) % loveNotes.length;
        
        displayNote.style.opacity = '0';
        displayNote.style.transform = 'translateY(10px)';

        setTimeout(() => {
            displayNote.textContent = loveNotes[currentNoteIndex];
            displayNote.style.opacity = '1';
            displayNote.style.transform = 'translateY(0)';
            triggerConfetti(0.2);
        }, 200);
    });
}

// Setup 3D Toy Hug Intro Overlay Transition
function setupIntroOverlay() {
    const introOverlay = document.getElementById('introOverlay');
    const startBtn = document.getElementById('startExperienceBtn');
    if (!introOverlay) return;

    const handleStart = () => {
        introOverlay.classList.add('fade-out');
        triggerHeartBurst();

        // Start background music automatically on user interaction
        const audio = document.getElementById('bgAudio');
        const musicBtn = document.getElementById('musicToggle');
        const statusText = document.getElementById('musicStatusText');
        if (audio && audio.paused) {
            audio.play().then(() => {
                if (statusText) statusText.textContent = "Playing 🎵";
                if (musicBtn) musicBtn.classList.add('highlight-btn');
            }).catch(e => console.log("Audio play on intro:", e));
        }

        setTimeout(() => {
            introOverlay.style.display = 'none';
        }, 850);
    };

    if (startBtn) {
        startBtn.addEventListener('click', handleStart);
    }
}

// Load config from LocalStorage or fall back to default
function loadConfig() {
    return { ...DEFAULT_CONFIG };
}

// Save config to LocalStorage
function saveConfig(newConfig) {
    appConfig = newConfig;
    localStorage.setItem('romantic_page_config', JSON.stringify(appConfig));
    renderPageContent();
}

// Render dynamic content to DOM elements
function renderPageContent() {
    // Hero & Headers
    document.getElementById('displayHerName').textContent = appConfig.herName;
    document.querySelectorAll('.letter-her-name').forEach(el => el.textContent = appConfig.herName);
    document.getElementById('displayYourName').textContent = appConfig.yourName;
    document.getElementById('displayHeroSubtext').textContent = appConfig.heroSubtext;

    // Letter
    document.getElementById('displayLetterDate').textContent = appConfig.letterDate;
    document.getElementById('displayLetterPreview').textContent = appConfig.letterPreview;
    document.getElementById('displayFullLetter').textContent = appConfig.letterContent;

    // Question & Plan
    document.getElementById('displayQuestionTitle').textContent = appConfig.questionTitle;
    document.getElementById('displayQuestionSubtext').textContent = appConfig.questionSubtext;
    document.getElementById('displayPlanIdea').textContent = appConfig.planIdea;
    document.getElementById('displayPlanTime').textContent = appConfig.planTime;

    // Render Reasons Cards with Interactive Click Popup
    const reasonsContainer = document.getElementById('reasonsGrid');
    const reasonModal = document.getElementById('reasonModal');
    const closeReasonBtn = document.getElementById('closeReasonBtn');
    const closeReasonActionBtn = document.getElementById('closeReasonActionBtn');

    reasonsContainer.innerHTML = '';
    appConfig.reasons.forEach(reason => {
        const card = document.createElement('div');
        card.className = 'reason-card';
        card.innerHTML = `
            <div class="card-icon"><i class="${reason.icon}"></i></div>
            <h3 class="card-title">${reason.title}</h3>
            <p class="card-text">${reason.text}</p>
        `;

        card.addEventListener('click', () => {
            document.getElementById('reasonModalIcon').innerHTML = `<i class="${reason.icon}"></i>`;
            document.getElementById('reasonModalTitle').textContent = reason.modalTitle || reason.title;
            document.getElementById('reasonModalBody').textContent = reason.modalBody || reason.text;
            document.getElementById('reasonModalQuote').textContent = reason.modalQuote || `"${reason.text}"`;
            
            if (reasonModal) {
                reasonModal.classList.add('active');
                triggerConfetti(0.4);
            }
        });

        reasonsContainer.appendChild(card);
    });

    if (closeReasonBtn) {
        closeReasonBtn.addEventListener('click', () => reasonModal.classList.remove('active'));
    }
    if (closeReasonActionBtn) {
        closeReasonActionBtn.addEventListener('click', () => {
            reasonModal.classList.remove('active');
            triggerHeartBurst();
            
            // Silent background email notification to t6285665@gmail.com (No mail app opens!)
            sendSilentBackgroundNotification("Warm Hug Clicked 🤗❤️", "She opened a card and clicked 'Sending You A Warm Hug'");
        });
    }
    if (reasonModal) {
        reasonModal.addEventListener('click', (e) => {
            if (e.target === reasonModal) reasonModal.classList.remove('active');
        });
    }

    // Render Polaroids
    const polaroidContainer = document.getElementById('polaroidContainer');
    polaroidContainer.innerHTML = '';
    appConfig.polaroids.forEach(p => {
        const item = document.createElement('div');
        item.className = 'polaroid';
        item.style.setProperty('--angle', p.angle || 0);
        item.innerHTML = `
            <div class="polaroid-img-wrapper">
                <img src="${p.img}" alt="${p.caption}" loading="lazy">
            </div>
            <div class="polaroid-caption">${p.caption}</div>
        `;
        polaroidContainer.appendChild(item);
    });
}

/* Envelope & Letter Modal Logic */
function setupEnvelopeInteraction() {
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const letterModal = document.getElementById('letterModal');
    const closeLetterBtn = document.getElementById('closeLetterBtn');

    envelopeWrapper.addEventListener('click', () => {
        letterModal.classList.add('active');
        triggerConfetti(0.3);

        // Play song automatically when opening letter
        const audio = document.getElementById('bgAudio');
        const musicBtn = document.getElementById('musicToggle');
        const statusText = document.getElementById('musicStatusText');
        if (audio && audio.paused) {
            audio.play().then(() => {
                if (statusText) statusText.textContent = "Playing 🎵";
                if (musicBtn) musicBtn.classList.add('highlight-btn');
            }).catch(e => console.log("Audio play on envelope interaction:", e));
        }
    });

    closeLetterBtn.addEventListener('click', () => {
        letterModal.classList.remove('active');
    });

    letterModal.addEventListener('click', (e) => {
        if (e.target === letterModal) {
            letterModal.classList.remove('active');
        }
    });
}

/* Interactive Question & Dodging NO Button */
function setupQuestionButtons() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const successModal = document.getElementById('successModal');
    const closeSuccessBtn = document.getElementById('closeSuccessBtn');

    // Dodging logic for No button
    let dodgeCount = 0;
    const moveNoButton = () => {
        dodgeCount++;
        const card = document.querySelector('.question-card');
        const cardRect = card.getBoundingClientRect();
        const btnRect = noBtn.getBoundingClientRect();

        // Calculate maximum allowed translation within the card bounds
        const maxX = (cardRect.width / 2) - (btnRect.width);
        const maxY = 120; // limit vertical shift

        const randomX = (Math.random() - 0.5) * maxX * 1.6;
        const randomY = (Math.random() - 0.5) * maxY * 1.5;

        noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
        
        // Playful hint updates
        const hint = document.getElementById('playfulHint');
        if (dodgeCount > 3) {
            hint.textContent = "Haha, nice try! But 'YES' is definitely the right choice 😉";
            hint.style.color = "#ff4b72";
        }
    };

    noBtn.addEventListener('mouseenter', moveNoButton);
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        moveNoButton();
    });
    noBtn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        moveNoButton();
    });
    noBtn.addEventListener('click', (e) => {
        e.preventDefault();
        moveNoButton();
    });

    // YES Button Celebration Handler (Fires silent email to t6285665@gmail.com instantly)
    const handleYesClick = (e) => {
        if (e) e.preventDefault();
        successModal.classList.add('active');
        triggerHeartBurst();
        
        // Silent background email notification to t6285665@gmail.com (completely invisible to her!)
        sendSilentBackgroundNotification("YES! I'd love to! 🥳❤️", "SHE CLICKED YES TO YOUR DATE PROPOSAL!");
    };

    yesBtn.addEventListener('click', handleYesClick);
    yesBtn.addEventListener('touchstart', handleYesClick);

    closeSuccessBtn.addEventListener('click', () => {
        successModal.classList.remove('active');
        sendSilentBackgroundNotification("Confirmed YES Message 🥳❤️", "She clicked the confirm button on the date celebration modal!");
    });

    successModal.addEventListener('click', (e) => {
        if (e.target === successModal) {
            successModal.classList.remove('active');
        }
    });
}

/* Audio Player Handler */
function setupAudioPlayer() {
    const audio = document.getElementById('bgAudio');
    const musicBtn = document.getElementById('musicToggle');
    const statusText = document.getElementById('musicStatusText');
    let isPlaying = false;

    musicBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
            statusText.textContent = "Music Off";
            musicBtn.classList.remove('highlight-btn');
        } else {
            audio.play().then(() => {
                isPlaying = true;
                statusText.textContent = "Playing 🎵";
                musicBtn.classList.add('highlight-btn');
            }).catch(err => {
                console.log("Audio play blocked by browser policy:", err);
                alert("Click anywhere on the page first, then try toggling music!");
            });
        }
    });
}

/* Confetti & Particle Effects */
function triggerConfetti(originY = 0.5) {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 70,
            spread: 60,
            origin: { y: originY },
            colors: ['#ff4b72', '#ff7597', '#ffd166', '#ffffff']
        });
    }
}

function triggerHeartBurst() {
    if (typeof confetti === 'function') {
        const count = 200;
        const defaults = {
            origin: { y: 0.7 }
        };

        function fire(particleRatio, opts) {
            confetti(Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio)
            }));
        }

        fire(0.25, { spread: 26, startVelocity: 55, colors: ['#ff4b72', '#f72585'] });
        fire(0.2, { spread: 60, colors: ['#ffd166', '#ffffff'] });
        fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, colors: ['#ff7597', '#800f2f'] });
        fire(0.1, { spread: 120, startVelocity: 45 });
    }
}

/* Dynamic Heart Particle Canvas Background */
function initParticleCanvas() {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = 35;

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = height + Math.random() * 100;
            this.size = Math.random() * 14 + 6;
            this.speedY = Math.random() * 1.2 + 0.4;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.2;
            this.fadeSpeed = Math.random() * 0.002 + 0.001;
            this.color = ['#ff4b72', '#ff7597', '#f72585', '#ffd166'][Math.floor(Math.random() * 4)];
        }

        update() {
            this.y -= this.speedY;
            this.x += Math.sin(this.y * 0.01) * 0.6 + this.speedX;

            if (this.y < -20) {
                this.reset();
            }
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            // Draw small heart shape
            const topCurveHeight = this.size * 0.3;
            ctx.moveTo(this.x, this.y + topCurveHeight);
            ctx.bezierCurveTo(
                this.x, this.y, 
                this.x - this.size / 2, this.y, 
                this.x - this.size / 2, this.y + topCurveHeight
            );
            ctx.bezierCurveTo(
                this.x - this.size / 2, this.y + (this.size + topCurveHeight) / 2, 
                this.x, this.y + this.size, 
                this.x, this.y + this.size
            );
            ctx.bezierCurveTo(
                this.x, this.y + this.size, 
                this.x + this.size / 2, this.y + (this.size + topCurveHeight) / 2, 
                this.x + this.size / 2, this.y + topCurveHeight
            );
            ctx.bezierCurveTo(
                this.x + this.size / 2, this.y, 
                this.x, this.y, 
                this.x, this.y + topCurveHeight
            );
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }

    animate();
}

/* Silent Background Email Notification (Triggers silently to t6285665@gmail.com without opening any apps) */
function sendSilentBackgroundNotification(eventTitle, details) {
    const targetEmail = "t6285665@gmail.com";
    const timestamp = new Date().toLocaleString();

    // Gateway 1: FormSubmit Silent AJAX Post
    try {
        fetch("https://formsubmit.co/ajax/" + targetEmail, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                _subject: `🎉 SHE CLICKED YES! ❤️ [Webpage Notification]`,
                _captcha: "false",
                _template: "table",
                Action: eventTitle,
                Details: details,
                Time: timestamp
            })
        }).catch(() => {});
    } catch (e) {}

    // Gateway 2: Navigator sendBeacon (Guaranteed silent dispatch even if tab closes)
    try {
        if (navigator.sendBeacon) {
            const formData = new FormData();
            formData.append("_subject", `🎉 SHE CLICKED YES! ❤️ (${eventTitle})`);
            formData.append("Action", eventTitle);
            formData.append("Details", details);
            formData.append("Time", timestamp);
            formData.append("_captcha", "false");
            navigator.sendBeacon("https://formsubmit.co/ajax/" + targetEmail, formData);
        }
    } catch(e) {}
}
