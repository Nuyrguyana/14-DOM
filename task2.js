let tasks = [
    {id: 1, completed: false, text: 'Посмотреть новый урок по JavaScript'},
    {id: 2, completed: false, text: 'Выполнить тест после урока'},
    {id: 3, completed: false, text: 'Выполнить ДЗ после урока'},
]

function creationTasksList(tasks) {
    let sumHTML = ''
    tasks.forEach((task) => {
        sumHTML += `<div class="task-item" data-task-id="${task.id}">
    <div class="task-item__main-container">
        <div class="task-item__main-content">
            <form class="checkbox-form">
                <input class="checkbox-form__checkbox" type="checkbox" id="task-${task.id}">
                    <label for="task-${task.id}"></label>
            </form>
            <span class="task-item__text">${task.text}</span>
        </div>
        <button class="task-item__delete-button default-button
        delete-button" data-delete-task-id="5">Удалить
        </button>
    </div>
</div>`
    })
    const div = document.querySelector('.tasks-list')
    div.innerHTML = sumHTML
}

creationTasksList(tasks)

const createTaskBlock = document.querySelector('.create-task-block')
createTaskBlock.addEventListener('submit', (event) => {
    event.preventDefault()
    const {target} = event
    const taskNameInput = target.taskName
    const inputValue = taskNameInput.value

    const span = document.createElement('span')
    span.className = 'error-message-block'

    const isDuplicate = tasks.filter((task) => {
        return inputValue === task.text
    })

    if (inputValue === '') {
        removeElementsByClass("error-message-block")
        span.textContent = 'Название задачи не должно быть пустым!'
        createTaskBlock.append(span)
    } else if (isDuplicate.length > 0) {
        removeElementsByClass("error-message-block")

        span.textContent = 'Задача с таким названием уже существует'
        createTaskBlock.append(span)
    } else {
        removeElementsByClass("error-message-block")

        tasks.push({
            id: tasks[tasks.length - 1].id + 1,
            completed: false,
            text: inputValue
        })
        creationTasksList(tasks)

    }

})

function removeElementsByClass(className) {
    let elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}


const modalWindow =
    '<div class="modal-overlay modal-overlay_hidden" id="10">\n' +
    '   <div class="delete-modal">\n' +
    '       <h3 class="delete-modal__question">\n' +
    '           Вы действительно хотите удалить эту задачу?\n' +
    '       </h3>\n' +
    '       <div class="delete-modal__buttons">\n' +
    '           <button class="delete-modal__button delete-modal__cancel-button">\n' +
    '               Отмена\n' +
    '           </button>\n' +
    '           <button class="delete-modal__button delete-modal__confirm-button">\n' +
    '               Удалить\n' +
    '           </button>\n' +
    '       </div>\n' +
    '   </div>\n' +
    '</div>\n'


const deletedTask = document.querySelector('.tasks-list')
deletedTask.addEventListener('click', (mainEvent) => {

    document.body.insertAdjacentHTML('beforeend', modalWindow)

    const modalOverlayDiv = document.getElementById('10')

    modalOverlayDiv.classList.remove('modal-overlay_hidden')

    const cancelButtonElement = document.querySelector('.delete-modal__cancel-button')
    cancelButtonElement.addEventListener('click', (event) => {
        const cancelButton = event.target.closest('.delete-modal__cancel-button')
        if (cancelButton) {
            modalOverlayDiv.classList.add('modal-overlay_hidden')
        }
    })

    const deleteButtonElement = document.querySelector('.delete-modal__confirm-button')
    deleteButtonElement.addEventListener('click', (event) => {
        const deleteButton = event.target.closest('.delete-modal__confirm-button')
        if (deleteButton) {
            const dataTaskElement = mainEvent.target.closest('.task-item')
            dataTaskElement.remove()

            modalOverlayDiv.classList.add('modal-overlay_hidden')
        }
    })
})

let isDarkTheme = false

document.addEventListener('keydown', (event) => {
    const {key} = event
    console.log(key)
    if (key === 'Tab') {
        isDarkTheme = !isDarkTheme
    }

    if (isDarkTheme) {
        document.body.style.background = '#24292E'

        document.querySelectorAll('.task-item').forEach((element) => {
            element.style.color = '#ffffff'
        })

        document.querySelectorAll('button').forEach((element) => {
            element.style.border = '1px solid #ffffff'
        })

    } else {
        document.body.style.background = 'initial'

        document.querySelectorAll('.task-item').forEach((element) => {
            element.style.color = 'initial'
        })

        document.querySelectorAll('button').forEach((element) => {
            element.style.border = 'none'
        })
    }
})




