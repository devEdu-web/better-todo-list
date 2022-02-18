const deleteButtons = document.querySelectorAll('.btn-close')


deleteButtons.forEach(button => {
    button.addEventListener('click', deleteTask)
})

async function deleteTask(e) {
    const rowToBeDeleted = e.target.parentElement.parentElement
    const rowIndex = e.target.parentElement.parentElement.children[0]
    const taskIndexInDb = Number(rowIndex.innerHTML) - 1

    console.log(rowToBeDeleted)

    const response = await fetch(`/delete-task/${taskIndexInDb.toString()}`, {
        method: "DELETE",
        redirect: 'follow'
    })

    rowToBeDeleted.remove()

    // window.location.href = '/'
    // const dataResponse = await response.json()
    // console.log(response)

}