document.addEventListener('DOMContentLoaded', function () {
    const accButtons = document.querySelectorAll('.accordion-button');
    const dynamicImage = document.getElementById('dynamic-image');
    const images = ['/main/mac/section_responsive/section_responsive_img/world_mac_iphone.jpg',
     '/main/mac/section_responsive/section_responsive_img/world_mac_ipad.jpg',
      '/main/mac/section_responsive/section_responsive_img/world_mac_watch.jpg']; // Update this array with your own image paths

    // Open the first accordion by default and set its corresponding image
    accButtons[0].classList.add('active');
    accButtons[0].nextElementSibling.style.display = 'block';
    dynamicImage.src = images[0];

    accButtons.forEach(function (btn, index) {
        btn.addEventListener('click', function () {
            const content = this.nextElementSibling;

            if (this.classList.contains('active') && content.style.display === 'block') {
                return;
            }

            accButtons.forEach(function (otherBtn) {
                if (otherBtn !== btn && otherBtn.classList.contains('active')) {
                    otherBtn.classList.remove('active');
                    otherBtn.nextElementSibling.style.display = 'none';
                }
            });

            this.classList.add('active');
            content.style.display = 'block';
            dynamicImage.src = images[index]; // Update the image source when an accordion section is clicked
        });
    });
});