const giftScreen = document.getElementById('gift-screen');
const contentScreen = document.getElementById('content-screen');
const giftButton = document.getElementById('gift-button');
const bgMusic = document.getElementById('bg-music');
const paperPages = document.querySelectorAll('.paper-page');
const surpriseBtn = document.getElementById('surprise');
const surpriseScreen = document.getElementById('surprise-screen');
const surpriseAudio = document.getElementById('sAudio');
const paperPages1 = document.querySelectorAll('.paper-page-1');

bgMusic.volume = 0.3;


surpriseAudio.play();
surpriseAudio.pause();


giftButton.addEventListener('click', () => {
    
    bgMusic.play().catch(error => {
        console.log("Audio play blocked or failed: ", error);
    });


    
    giftScreen.style.opacity = '0';
    setTimeout(() => {
        giftScreen.style.display = 'none';
    }, 800);

    
    contentScreen.classList.add('show-screen');

    
    paperPages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('animate-card');
        }, 400 + (index * 250)); 
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
        surpriseAudio.play().catch(error => {
            console.log("Video play blocked or failed: ", error);
        });
    }, 1000);

    paperPages1.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('animate-card');
        }, 400 + (index * 250)); 
    });
    
});
