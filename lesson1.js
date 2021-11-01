/*
const tasksBlock = document.getElementById('tasks') //через айди
console.log(tasksBlock)
const allNavButtons = document.getElementsByClassName('main-navigation__button-item') // через класс
console.log(allNavButtons)
const allButtons = document.getElementsByTagName('button') // через тег
console.log(allButtons)

// querySelector

const tasksBlock2 = document.querySelector('#tasks') // айди
console.log(tasksBlock2)
const mainNavigation = document.querySelector('.main-navigation') // класс
console.log(mainNavigation)
const firstButton = document.querySelector('button') // тег
console.log(firstButton)
const thirdNavigationButton = document.querySelector('[data-button-id="3"]') // атрибут
console.log(thirdNavigationButton)

// querySelectorAll

const allNavBtn = document.querySelectorAll('.main-navigation__button-item')
console.log(allNavBtn)
allNavBtn.forEach((button, index) => {
    console.log(index, button)
})

const createTaskBlock = document.querySelector('.create-task-block')
const submitBtn = createTaskBlock.querySelector('[type="submit"]')
console.log(submitBtn)
 */


/*
const taskWrapper = document.querySelector('.tasks__wrapper')
console.log(taskWrapper.className)

taskWrapper.className = 'tasks__wrapper-1'
console.log(taskWrapper.className)

const taskBlock = document.querySelector('#tasks')
console.log(taskBlock.id)

// taskBlock.id = 'newTask'

const submitBtn = document.querySelector('.create-task-block')
console.log(submitBtn.innerText)
console.log(submitBtn.textContent)

// submitBtn.textContent = 'создать новую задачу'

// innerHTML

console.log(taskBlock.innerHTML)

// taskBlock.innerHTML = '<b>tasksBlock</b>'

// children

const createTaskForm = document.querySelector('.create-task-block')
console.log(createTaskForm.children)

// data - атрибуты

const firstNavBtn = document.querySelector('.main-navigation__button-item')
console.log(firstNavBtn.dataset.buttonId)

firstNavBtn.dataset.buttonId = '10'

// style

console.log(firstNavBtn.style)
firstNavBtn.style.fontWeight = 'bold'
firstNavBtn.style.boxShadow = 'inset 0 0 3px #fff'
*/


// createElement



const newNavBtn = document.createElement('a')
newNavBtn.className = 'main-navigation__button-item'
newNavBtn.href = '#tasks_expired'
newNavBtn.dataset.buttonId = '4'
newNavBtn.textContent = 'просроченные задачи'
console.log(newNavBtn)

// append, prepend

const mainNav = document.querySelector('.main-navigation')
// mainNav.append(newNavBtn)

mainNav.insertAdjacentElement('beforebegin', newNavBtn)

// mainNav.remove()

const taskItemText = document.querySelector('.task-item__text')
console.log(taskItemText)

const taskItem = taskItemText.closest('.task-item')
console.log(taskItem)

// classList (add, remove, toggle - если данного класса нет добавит, если есть удалит)

const  firstNavBtn = document.querySelector('.main-navigation__button-item')
firstNavBtn.classList.add('main-navigation__button-item_selected')
firstNavBtn.classList.remove('main-navigation__button-item_selected')
firstNavBtn.classList.toggle('main-navigation__button-item_selected')

// hasAttribute - проверяет существует ли атрибут
// getAttribute - получить значение атрибута
// removeAttribute - удаляет атрибут
// setAttribute - добавляет атрибут

const createTaskInput = document.querySelector('.create-task-block__input')
console.log(createTaskInput.hasAttribute('type'))
console.log(createTaskInput.getAttribute('value'))
createTaskInput.removeAttribute('placeholder')
createTaskInput.setAttribute('placeholder', 'создать новую задачу')