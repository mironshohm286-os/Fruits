const toUp = document.getElementById("to-up")
const loader = document.getElementById("loader")
const website = document.getElementById("website")
const head = document.getElementById("head")
const article = document.querySelector(".article")
const video = document.getElementById("video")

window.addEventListener('scroll', () => {
    if(scrollY > 300) {
        toUp.classList.add("show")
    } else {
        toUp.classList.remove("show")
    }
})

toUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

const promiseOne = () => {
    return new Promise(resolve=> {
        window.onload = ()=>{
           setTimeout(() => {
                loader.style.display = "none"
                website.style.display = "block"
           }, 800);
            resolve()
        }
    })
}

const promiseThree = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            head.style.opacity = "1"
            head.style.transform = "translateY(0)"
        }, 500);
        resolve()
    })
}

const promiseFour = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            article.style.opacity = "1"
            article.style.transform = "translateX(0)"
        }, 500);
        resolve()
    })
}

const promiseFive = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            video.style.opacity = "1"
            video.style.transform = "translateX(0)"
        }, 500);
        resolve()
    })
}

const promiseAll = async() => {
    try {
        const task1 = await promiseOne()
        const task3 = await promiseThree()
        const task4 = await promiseFour()
        const task5 = await promiseFive()
    } catch(err) {
        console.log(err)
    }
}

promiseAll()