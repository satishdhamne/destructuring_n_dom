let btn = document.querySelector("button")



function random() {

    let topR = Math.random()*90
    let leftR = Math.random()*90

    return {topR, leftR}
}

function randomImg(params) {
    let arr = [
        "https://imgs.search.brave.com/jeaR58_oRPL4mc_VSkd9A8VV2QJmBYQ7DZzMLJNGnE4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLXZlY3Rvci8y/MDIyMTIwOC9vdXJt/aWQvcG5ndHJlZS1j/YXJ0b29uLWlsbHVz/dHJhdGlvbi1yZWQt/cm9ja2V0LXBuZy1p/bWFnZV82NTE1NDM5/LnBuZw",

       "https://www.designstub.com/png-resources/wp-content/uploads/2022/12/cartoon-bomb.png",

       "https://imgs.search.brave.com/eg0tt9j9J8jvK6mYiinmcUS8iv8Z75r9b0wthy6flgc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVzaWduc3R1Yi5j/b20vcG5nLXJlc291/cmNlcy93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8xMi9Db21p/Yy1leHBsb3Npb24t/cG5nLXRoLnBuZw",

      " https://imgs.search.brave.com/KVa3SngeMoHM6_c7hcfHopzpRItYD9-XkiQqusPjl7U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDQ0Lzk5/My85MTUvbm9uXzJ4/L2NhcnRvb24tZmxh/bWluZy1ib21iLXBu/Zy5wbmc"

    ]

    let i = Math.floor(Math.random()*5)
    return arr[i]
}


btn.addEventListener("click", () => {

    let img = document.createElement("img")
    img.style.height = "100px"
    img.style.position = "absolute"

    let {topR, leftR} = random()

    img.style.top = topR + "%"
    img.style.left = leftR + "%"
    img.style.transform = `rotate(${Math.floor(Math.random()*360)}deg)`

    img.setAttribute("src", randomImg());

    document.body.appendChild(img)
  
})