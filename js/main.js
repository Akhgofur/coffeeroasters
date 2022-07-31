const headerBtn = document.querySelector(".burger-btn")
const sitenav = document.querySelector(".sitenav")

// console.log(headerBtn);

const handleSitenavOpen = () => {
    sitenav.classList.toggle('sitenav--open')
    headerBtn.classList.toggle("burger-btn--open")
}

headerBtn.addEventListener('click', handleSitenavOpen)
