(function() {
    console.log('Intro script loaded - waiting for DOM');

    // Function to initialize the intro
    function initIntro() {
        console.log('Initializing intro...');
        
        // Don't run if intro already exists
        if (document.getElementById('intro-screen')) {
            console.log('Intro already exists, skipping');
            return;
        }

        // Create and inject styles
        const styles = `
            /* === INTRO OVERLAY === */
            body.intro-active { overflow: hidden; }

            #intro-screen {
                position: fixed;
                inset: 0;
                background-color: #414141;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                transition: opacity 0.7s ease, visibility 0.7s ease;
            }

            #intro-screen.hidden-intro {
                opacity: 0;
                visibility: hidden;
            }

            #intro-logo-wrapper {
                display: flex;
                flex-direction: column;
                align-items: center;
                animation: fadeIn 1s ease-out forwards;
            }

            #intro-title {
                font-family: "Orbitron", sans-serif;
                font-size: 42px;
                font-weight: 700;
                letter-spacing: 3px;
                margin-bottom: 20px;
                background: linear-gradient(90deg, #d3a410, #b7870f, #ffe4a1);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                filter: drop-shadow(0 0 8px rgba(211,165,16,0.4));
                opacity: 0;
                animation: titleFade 1s ease forwards 0.4s;
            }

            @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
            @keyframes titleFade { from { opacity:0; transform:translateY(-12px);} to{opacity:1; transform:translateY(0);} }

            @keyframes bounce { 0%,100%{ translate:0px 36px; } 50%{ translate:0px 46px; } }
            @keyframes bounce2 { 0%,100%{ translate:0px 46px; } 50%{ translate:0px 56px; } }
            @keyframes umbral { 0%{ stop-color:#d3a5102e; } 50%{ stop-color:rgba(211,165,16,0.519); } 100%{ stop-color:#d3a5102e; } }
            @keyframes particles { 0%,100%{ translate:0px 16px; } 50%{ translate:0px 6px; } }

            #particles { animation: particles 4s ease-in-out infinite; }
            #animatedStop { animation: umbral 4s infinite; }
            #bounce { animation: bounce 4s ease-in-out infinite; translate:0px 36px; }
            #bounce2 { animation: bounce2 4s ease-in-out infinite; translate:0px 46px; animation-delay:0.5s; }

            @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&display=swap');
        `;

        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
        console.log('Styles injected');

        // Create intro HTML
        const introDiv = document.createElement('div');
        introDiv.id = 'intro-screen';
        introDiv.innerHTML = `
            <div id="intro-logo-wrapper">
                <div id="intro-title">Tinkle Games</div>
                <svg xmlns="http://www.w3.org/2000/svg" height="200" width="200">
                    <g style="order:-1;">
                        <polygon transform="rotate(45 100 100)" stroke-width="1" stroke="#d3a410" fill="none" points="70,70 148,50 130,130 50,150" id="bounce"></polygon>
                        <polygon transform="rotate(45 100 100)" stroke-width="1" stroke="#d3a410" fill="none" points="70,70 148,50 130,130 50,150" id="bounce2"></polygon>
                        <polygon transform="rotate(45 100 100)" stroke-width="2" fill="#414750" points="70,70 150,50 130,130 50,150"></polygon>
                        <polygon stroke-width="2" fill="url(#gradiente)" points="100,70 150,100 100,130 50,100"></polygon>
                        <defs>
                            <linearGradient y2="100%" x2="10%" y1="0%" x1="0%" id="gradiente">
                                <stop style="stop-color:#1e2026;stop-opacity:1" offset="20%"></stop>
                                <stop style="stop-color:#414750;stop-opacity:1" offset="60%"></stop>
                            </linearGradient>
                            <linearGradient y2="100%" x2="0%" y1="-17%" x1="10%" id="gradiente2">
                                <stop style="stop-color:#d3a51000;stop-opacity:1" offset="20%"></stop>
                                <stop style="stop-color:#d3a51054;stop-opacity:1" offset="100%" id="animatedStop"></stop>
                            </linearGradient>
                            <linearGradient y2="100%" x2="10%" y1="0%" x1="0%" id="gradiente3">
                                <stop style="stop-color:#d3a51000;stop-opacity:1" offset="20%"></stop>
                                <stop style="stop-color:#d3a51054;stop-opacity:1" offset="100%"></stop>
                            </linearGradient>
                        </defs>
                        <polygon transform="translate(20,31)" stroke-width="2" fill="#b7870f" points="80,50 80,75 80,99 40,75"></polygon>
                        <polygon transform="translate(20,31)" stroke-width="2" fill="url(#gradiente2)" points="40,-40 80,-40 80,99 40,75"></polygon>
                        <polygon transform="rotate(180 100 100) translate(20,20)" stroke-width="2" fill="#d3a410" points="80,50 80,75 80,99 40,75"></polygon>
                        <polygon transform="rotate(0 100 100) translate(60,20)" stroke-width="2" fill="url(#gradiente3)" points="40,-40 80,-40 80,85 40,110.2"></polygon>
                        <polygon transform="rotate(45 100 100) translate(80,95)" stroke-width="2" fill="#ffe4a1" points="5,0 5,5 0,5 0,0" id="particles"></polygon>
                        <polygon transform="rotate(45 100 100) translate(80,55)" stroke-width="2" fill="#ccb069" points="6,0 6,6 0,6 0,0" id="particles"></polygon>
                        <polygon transform="rotate(45 100 100) translate(70,80)" stroke-width="2" fill="#fff" points="2,0 2,2 0,2 0,0" id="particles"></polygon>
                        <polygon stroke-width="2" fill="#292d34" points="29.5,99.8 100,142 100,172 29.5,130"></polygon>
                        <polygon transform="translate(50,92)" stroke-width="2" fill="#1f2127" points="50,50 120.5,8 120.5,35 50,80"></polygon>
                    </g>
                </svg>
            </div>
        `;

        // Make sure body exists before appending
        if (document.body) {
            document.body.appendChild(introDiv);
            document.body.classList.add('intro-active');
            console.log('Intro div added to page');
            
            // Setup auto-hide
            setupAutoHide(introDiv);
        } else {
            console.error('Document.body not available!');
        }
    }

    // Function to handle auto-hiding
    function setupAutoHide(introDiv) {
        // Auto-hide after 2 seconds
        window.addEventListener('load', function() {
            console.log('Window loaded, starting 2s timer');
            setTimeout(function() {
                console.log('Hiding intro');
                introDiv.classList.add('hidden-intro');
                document.body.classList.remove('intro-active');
                setTimeout(function() {
                    if (introDiv.parentNode) {
                        introDiv.remove();
                        console.log('Intro removed from DOM');
                    }
                }, 800);
            }, 2000);
        });

        // If window is already loaded
        if (document.readyState === 'complete') {
            console.log('Document already complete, triggering load handler');
            window.dispatchEvent(new Event('load'));
        }
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        // DOM still loading, wait for DOMContentLoaded
        document.addEventListener('DOMContentLoaded', initIntro);
        console.log('Waiting for DOMContentLoaded...');
    } else {
        // DOM already ready, initialize immediately
        initIntro();
    }
})();
