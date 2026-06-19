const giftScreen = document.getElementById('gift-screen');
const contentScreen = document.getElementById('content-screen');
const giftButton = document.getElementById('gift-button');
const bgMusic = document.getElementById('bg-music');
const paperPages = document.querySelectorAll('.paper-page');
const surpriseBtn = document.getElementById('surprise');
const surpriseScreen = document.getElementById('surprise-screen');
const surpriseVideo = document.getElementById('Svideo');
const paperPages1 = document.querySelectorAll('.paper-page-1');

bgMusic.volume = 0.3;


surpriseVideo.play();
surpriseVideo.pause();


giftButton.addEventListener('click', () => {
    // 1. Play the music safely following native browser rules
    bgMusic.play().catch(error => {
        console.log("Audio play blocked or failed: ", error);
    });


    // 2. Smoothly fade out the gift box cover screen
    giftScreen.style.opacity = '0';
    setTimeout(() => {
        giftScreen.style.display = 'none';
    }, 800);

    // 3. Make the scrolling page content visible
    contentScreen.classList.add('show-screen');

    // 4. Cascade animate the cards falling into place cleanly
    paperPages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('animate-card');
        }, 400 + (index * 250)); // Staggered delays for a fluid presentation drop
    });
});

surpriseBtn.addEventListener('click', () => {
    bgMusic.pause();
    contentScreen.style.opacity = '0';
    setTimeout(() => {
        contentScreen.style.display = 'none';
    }, 200);

    surpriseScreen.classList.remove('hidden');
    surpriseScreen.classList.add('show-screen');

    setTimeout(() => {
        surpriseVideo.play().catch(error => {
            console.log("Video play blocked or failed: ", error);
        });
    }, 1000);

    paperPages1.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('animate-card');
        }, 400 + (index * 250)); // Staggered delays for a fluid presentation drop
    });
    
});