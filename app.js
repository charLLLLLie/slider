function slidesPlugin(activeSlde = 0) {
    const slides = document.querySelectorAll('.slide')

    slides[activeSlde].classList.add('active')
    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses()
            slide.classList.add('active')

        })

    }

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

slidesPlugin()