let inp = document.querySelector('.inp')
let img = document.querySelector('.item_img')
let btn = document.querySelector('.button')

let form = document.forms.register
let inputs = form.querySelectorAll('input')


btn.addEventListener('click', () => {
    if (inp.value.length === 0 ) {
        img.style.display = "block"
    } else {
        inp.style.borderColor = "green"
    }
})


form.onsubmit = (event) => {
    event.preventDefault()
    let arr = []
    inp.forEach(inp => {
        if (inp.value.length === 0) {
            arr.push('error')
        }
    })
    if (arr.length === 0) {
        submit()
    } else {
        alert('error')
    }
}

function submit() {
    let user = {}
    let fm = new FormData(form)
    fm.forEach((value, key) => {
        user[key] = value
    })
    console.log(user);
}

