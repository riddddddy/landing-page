
//start of hamburger icon
const hamburgerDiv = document.querySelector(".hamburger")

hamburgerDiv.addEventListener("click" ,function(){
    const navBarDiv = document.querySelector(".top-nav")
    navBarDiv.classList.toggle("active")
    console.log("it is working")
})

//end of hamurger icon

//who am i button

const whoAmI = document.querySelector(".who")

whoAmI.addEventListener("click", function(){
    const descDiv = document.querySelector(".desc")
    descDiv.innerHTML = `<p>My name is Ridwan Yusoff</p>
    <p>I am born and raised in Singapore<p>
    <p>I am aspiring to be a web developer one day</p>
    <p>I am teaching myself to code since 2022</p>
`
})


//end who am i button

let newTab1 = () =>{
    window.open("https://riddddddy.github.io/e-commerce/")
}

let newTab2 = () =>{
    window.open("https://riddddddy.github.io/flixten/")
}

let newTab3 = () =>{
    window.open("https://riddddddy.github.io/campervan-rental/")
}

const toProject = () =>{
    const element = document.querySelector(".project")

    window.scrollTo({
        behavior:"smooth",
        top:element.offsetTop
    })

    const navBarDiv = document.querySelector(".top-nav")
    navBarDiv.classList.remove("active")


}