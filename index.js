let startbtn = document.querySelector('.start')
let stopbtn = document.querySelector('.stop')

//function for genrating a background
let genrateBg = function () {
    let hexCodes = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * 16)];
    }
    return color
}
//function for changing the color
let callToChangeColor = function () {
    //setting the interval for generating the color after every 1 second
    let interval = setInterval(() => {
        document.body.style.backgroundColor = genrateBg()
    }, 1000)
    //adding event listener on clicking stop btn
    stopbtn.addEventListener('click', () => {
        clearInterval(interval)
    })
}

//adding event listener on clicking start btn
startbtn.addEventListener('click', callToChangeColor)

console.log(genrateBg())