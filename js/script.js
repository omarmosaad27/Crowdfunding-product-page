// assign all numbers
let currentBackers = document.querySelector(".current");
let backersnum = 89914;
currentBackers.innerHTML = `$${backersnum}`;

let totalBackers = document.querySelector(".total");
let totalBackersNum = 5007;
totalBackers.innerHTML = `${totalBackersNum}`;



// 1- toggle menu 
let menuBtn = document.querySelector(".menu-toggle")
let navlinks = document.querySelector(".nav-links")

menuBtn.addEventListener("click", function () {
    navlinks.classList.toggle("show")
    if (navlinks.classList.contains("show")) {
        menuBtn.innerHTML = `<img src="images/icon-close-menu.png"/>`
    } else {
        menuBtn.innerHTML = `<img src="images/icon-hamburger.png"/>`
    }
})


// bookmark active toggle

let bookmark = document.querySelector(".bookmark")

bookmark.addEventListener("click", function (e) {
    bookmark.classList.toggle("active")
})




// progress bar
let progress = document.querySelector(".progress")
let states = document.querySelector(".states")

window.addEventListener("scroll", function () {
    if (window.scrollY = states.offsetTop) {
        let progressNumber = backersnum.toString().split("").splice(0,2).join("")
        console.log(progressNumber);
        progress.style.width = `${progressNumber}%`
    }
})


// function to create thanks popup
const thanksPop = () => {
    let thanks = document.createElement("div")
    thanks.className="thanks-pop"
        let thanksMarkup = `
            <i class="fa-solid fa-check"></i>
            <h2>Thanks for your support!</h2>
            <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
            an email once our campaign is completed.</p>
            <span class="btn green got">Got it</span>
        `
    thanks.innerHTML = thanksMarkup;
    document.body.appendChild(thanks)
}


// choose reward main programs
let programs = document.querySelectorAll(".about .programs .program .green")


programs.forEach((program) => {
    program.addEventListener("click", function (e) {
        overlay.style.display = "block"
        thanksPop()
        let target = parseFloat(e.target.dataset.pledge);
        backersnum += target
        console.log(backersnum);
        currentBackers.innerHTML = `$${backersnum}`
        totalBackersNum = totalBackersNum + 1;
        totalBackers.innerHTML = totalBackersNum
        let thanksbtn = document.querySelector(".got")
        thanksbtn.addEventListener("click", function () {
        document.querySelector(".thanks-pop").remove()
        overlay.style.display = "none"
})
    })
})

// back this project pop up
let backBtn = document.querySelector(".back")
let backpop = document.querySelector(".back-project")
let closeMdoal = document.querySelector(".close-modal")
let overlay = document.querySelector(".overlay")
backBtn.addEventListener("click", function () {
    backpop.style.display = "flex"
    overlay.style.display = "block"
})

closeMdoal.addEventListener("click", function () {
    backpop.style.display = "none"
    overlay.style.display = "none"
})



let backPrograms = Array.from(document.querySelectorAll(".back-project .programs .program"))
let footers = Array.from(document.querySelectorAll(".back-project .programs .program .footer"))
let select = document.querySelectorAll(".back-project .head .heading .select")
backPrograms.forEach((program) => {
    program.addEventListener("click", function (e) {
        backPrograms.forEach((p) => {
            p.style.border = "none"
        })
        program.style.border = "1px solid hsl(176, 50%, 47%)"
        footers.forEach((f) => {
            f.style.display = "none"
        })
        program.lastElementChild.style.display = "flex"
        select.forEach((s) => {
            s.classList.remove("show")
        })
        program.firstElementChild.firstElementChild.firstElementChild.classList.add("show")
    })

})
let continueBtn = document.querySelectorAll(".back-project .footer .continue")
let input = document.querySelectorAll(".input")
input.forEach((i) => {
    i.addEventListener("change", function () {
        i.nextElementSibling.dataset.pledge = i.value
        
    })
})
continueBtn.forEach((b) => {
    b.addEventListener("click", function (e) {
        backpop.style.display = "none"
        thanksPop()
        let target = parseFloat(e.target.dataset.pledge);
        backersnum += target
        console.log(backersnum);
        currentBackers.innerHTML = `$${backersnum}`
        totalBackersNum = totalBackersNum + 1;
        totalBackers.innerHTML = totalBackersNum
        let thanksbtn = document.querySelector(".got")
        thanksbtn.addEventListener("click", function () {
        document.querySelector(".thanks-pop").remove() 
        overlay.style.display = "none"
})
    })
})