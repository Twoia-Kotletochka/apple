document.addEventListener('DOMContentLoaded', function () {
    const accButtons = document.querySelectorAll('.accordion-button-container');
    const dynamicImage = document.getElementById('dynamic-image');
    const images = ['/main/mac/section_responsive/section_responsive_img/world_mac_iphone.jpg',
     '/main/mac/section_responsive/section_responsive_img/world_mac_ipad.jpg',
      '/main/mac/section_responsive/section_responsive_img/world_mac_watch.jpg']; 

    accButtons[0].classList.add('active');
    accButtons[0].nextElementSibling.style.display = 'block';
    dynamicImage.src = images[0];

    accButtons.forEach(function (btn, index) {
        const buttonImage = btn.querySelector('#accordion-button-img');

        // Set initial state for images
        if (btn.classList.contains('active')) {
            buttonImage.src = '/main/mac/section_responsive/section_responsive_img/arrow.svg';
        } else {
            buttonImage.src = '/main/mac/section_responsive/section_responsive_img/arrow_180.svg';
        }

        btn.addEventListener('click', function () {
            const content = this.nextElementSibling;

            if (this.classList.contains('active') && content.style.display === 'block') {
                return;
            }

            accButtons.forEach(function (otherBtn) {
                if (otherBtn !== btn && otherBtn.classList.contains('active')) {
                    otherBtn.classList.remove('active');
                    otherBtn.nextElementSibling.style.display = 'none';

                    let otherButtonImage = otherBtn.querySelector('#accordion-button-img');
                    otherButtonImage.src = '/main/mac/section_responsive/section_responsive_img/arrow_180.svg';
                }
            });

            // Set arrow image for active button
            buttonImage.src = '/main/mac/section_responsive/section_responsive_img/arrow.svg';
            
            this.classList.add('active');
            content.style.display = 'block';
            dynamicImage.src = images[index];
        });
    });
});