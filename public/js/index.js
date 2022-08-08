const contentCard = document.querySelector('.container-rating')
const thankYouCard = document.querySelector('.container-state')
let messageRating = document.querySelector('.rate')

function changeCardOnScreen() {
    const btnSubmit = document.querySelector('.btn-submit')

    btnSubmit.addEventListener('click', () => {
        contentCard.style.display = 'none'
        thankYouCard.style.display = 'flex'
    })
}

function generateMessage() {
    const button = document.querySelectorAll('.btn')

    button.forEach((btn) => {
        btn.addEventListener('click', event => {
            let rateNumber = event.target.value

            btn.style.background = 'hsl(25, 97%, 53%)'
            btn.style.color = 'hsl(0, 0%, 100%)'

            messageRating.innerHTML = `You selected ${rateNumber} out of 5`

            changeCardOnScreen()
        })
    })
}
generateMessage()

