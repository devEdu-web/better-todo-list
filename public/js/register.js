const errorDiv = document.getElementById('error')

document.userForm.onsubmit = async function (event) {
    event.preventDefault(event)
    const form = event.target
    const data = new FormData(form)
    const options = {
        method: 'POST',
        body: new URLSearchParams(data),
        redirect: 'follow'
    }

    const response = await fetch(form.action, options)
    if(response.redirected) {
        window.location.href = response.url
    } else {
        const json = await response.json()
        errorDiv.innerHTML = json.message
        errorDiv.style.display = 'block'
    }

}