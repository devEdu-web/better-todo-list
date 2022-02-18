

document.userForm.onsubmit = async function (event) {
    event.preventDefault(event)
    const form = event.target
    const data = new FormData(form)
    const options = {
        method: 'POST',
        body: new URLSearchParams(data)
    }

    console.log(form.action)

    const response = await fetch(form.action, options)
    const jsonResponse = await response.json()

    console.log(jsonResponse)

}