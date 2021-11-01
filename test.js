const divTaskItem = document.createElement('div')
const divTaskItemMainContainer = document.createElement('div')
const  divTaskItemMainContent = document.createElement('div')
const formCheckbox = document.createElement('form')
const input = document.createElement('input')
const label = document.createElement('label')
const span = document.createElement('span')
const button = document.createElement('button')

divTaskItem.className = 'task-item'
divTaskItem.id = '1'
divTaskItemMainContainer.className = 'task-item__main-container'
divTaskItemMainContent.className = 'task-item__mail-content'
formCheckbox.className = 'checkbox-form'
input.className = 'checkbox-form__checkbox'
input.type = 'checkbox'
input.id = '1'
label.htmlFor = 'task-1'
span.className = 'task-item__text'
span.textContent = 'Посмотреть новый урок по JavaScript'
button.className = 'task-item__delete-button default-button delete-button'
button.id = '5'
button.textContent = 'удалить'

formCheckbox.append(input, label)
divTaskItemMainContent.append(formCheckbox, span)
divTaskItemMainContainer.append(divTaskItemMainContent, button)
divTaskItem.append(divTaskItemMainContainer)
const taskList = document.querySelector('.tasks-list')
taskList.append(divTaskItem)
document.body.append(taskList)