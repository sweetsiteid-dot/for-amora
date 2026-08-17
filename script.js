/* =========================
   PASSWORD
========================= */

function checkPassword() {

    const password =
        document.getElementById("passwordInput").value.trim();

    if (password === "2608") {

        const passwordScreen =
            document.getElementById("passwordScreen");

        const websiteContent =
            document.getElementById("websiteContent");

        passwordScreen.style.opacity = "0";

        setTimeout(() => {

            passwordScreen.style.display = "none";
            websiteContent.style.display = "block";

        }, 500);

    } else {

        alert("Wrong Password 🖤");

        document.getElementById("passwordInput").value = "";

        document.getElementById("passwordInput").focus();

    }

}


/* =========================
   ENTER TO UNLOCK
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const passwordInput =
        document.getElementById("passwordInput");

    passwordInput.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {

            checkPassword();

        }

    });

});


/* =========================
   OPEN GIFT
========================= */

function openGift() {

    const music =
        document.getElementById("music");

    const giftSection =
        document.getElementById("giftSection");


    /* PLAY MUSIC */

    if (music) {

        music.play().catch(() => {

            console.log(
                "Music membutuhkan interaksi pengguna."
            );

        });

    }


    /* SCROLL TO MESSAGE */

    if (giftSection) {

        giftSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    const hearts =
        document.getElementById("hearts");

    if (!hearts) return;


    const heart =
        document.createElement("div");

    heart.innerHTML = "🖤";

    heart.style.position = "fixed";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.top = "-30px";

    heart.style.fontSize =
        (Math.random() * 15 + 12) + "px";

    heart.style.opacity =
        Math.random() * 0.6 + 0.3;

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "10";


    const duration =
        Math.random() * 4 + 5;

    heart.style.animation =
        `fall ${duration}s linear`;


    hearts.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, duration * 1000 + 500);

}


setInterval(createHeart, 500);


/* =========================
   HEART ANIMATION
========================= */

const style =
    document.createElement("style");

style.innerHTML = `

@keyframes fall {

    0% {

        transform:
            translateY(0)
            rotate(0deg);

        opacity: 0;

    }

    10% {

        opacity: 1;

    }

    100% {

        transform:
            translateY(110vh)
            rotate(360deg);

        opacity: 0;

    }

}

.fade-in {

    opacity: 0;

    transform:
        translateY(40px);

    transition:
        all 1s ease;

}

.fade-in.show {

    opacity: 1;

    transform:
        translateY(0);

}

`;

document.head.appendChild(style);


/* =========================
   SCROLL ANIMATION
========================= */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


document.querySelectorAll(
    ".section, .polaroid, .reason-card, .final-section, .ending"
).forEach(element => {

    element.classList.add("fade-in");

    observer.observe(element);

});


/* =========================
   POLAROID EFFECT
========================= */

const polaroids =
    document.querySelectorAll(".polaroid");


polaroids.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
                "scale(1.08) rotate(0deg)";

            card.style.zIndex = "20";

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform = "";

            card.style.zIndex = "";

        }
    );

});


/* =========================
   PARALLAX HERO
========================= */

window.addEventListener(
    "scroll",
    () => {

        const hero =
            document.querySelector(".hero");

        if (!hero) return;


        const scroll =
            window.pageYOffset;


        hero.style.backgroundPositionY =
            scroll * 0.4 + "px";

    }
);


/* =========================
   RANDOM COMPLIMENTS
========================= */

const quotes = [

    "u face? fucking gorgeous. 🖤",

    "your smile is actually insane.",

    "your personality is cute as hell.",

    "you don't even have to try to be pretty.",

    "your little things are my favorite.",

    "your soul is even prettier.",

    "please stop being so mean to yourself.",

    "just be you. that's already enough.",

    "damn, I really like this girl.",

    "u face, u soul. so fucking pretty."

];


const quoteElement =
    document.createElement("div");

quoteElement.className =
    "floating-quote";

quoteElement.innerText =
    quotes[0];


document.body.appendChild(
    quoteElement
);


let currentQuote = 0;


setInterval(() => {

    currentQuote++;

    if (
        currentQuote >= quotes.length
    ) {

        currentQuote = 0;

    }


    quoteElement.style.opacity = "0";


    setTimeout(() => {

        quoteElement.innerText =
            quotes[currentQuote];

        quoteElement.style.opacity =
            "1";

    }, 500);

}, 4500);


/* =========================
   QUOTE STYLE
========================= */

const quoteStyle =
    document.createElement("style");


quoteStyle.innerHTML = `

.floating-quote {

    position: fixed;

    bottom: 20px;

    left: 50%;

    transform:
        translateX(-50%);

    background:
        rgba(0,0,0,.65);

    backdrop-filter:
        blur(12px);

    -webkit-backdrop-filter:
        blur(12px);

    padding:
        12px 20px;

    border:
        1px solid
        rgba(255,255,255,.15);

    border-radius:
        50px;

    font-size:
        13px;

    color:
        white;

    text-align:
        center;

    z-index:
        999;

    transition:
        opacity .5s ease;

    max-width:
        85%;

}

`;

document.head.appendChild(
    quoteStyle
);
