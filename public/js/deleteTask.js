const deleteButtons = document.querySelectorAll('.btn-close')


deleteButtons.forEach(button => {
    button.addEventListener('click', deleteTask)
})

async function deleteTask(e) {
    const rowToBeDeleted = e.target.parentElement.parentElement.children[0]
    const taskIndexInDb = Number(rowToBeDeleted.innerHTML) - 1

    const response = await fetch(`/delete-task/${taskIndexInDb.toString()}`, {
        method: "DELETE",
        redirect: 'follow'
    })
    window.location.href = '/'
    // const dataResponse = await response.json()
    // console.log(response)

}