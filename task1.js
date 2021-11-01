

// создаю тег в док-те, к которому прикреплен этот js файл и присваиваю его переменной
const form = document.createElement('form')
const label1 = document.createElement('label')
const input1 = document.createElement('input')
const label2 = document.createElement('label')
const input2 = document.createElement('input')
const label3 = document.createElement('label')
const btn = document.createElement('button')
// задаю атрибуты тегам
form.className = 'create-user-form'
label1.textContent = 'Имя' // задаю текстовое содержание
input1.type = 'text'
input1.name = 'userName'
input1.placeholder = 'Введите ваше имя'
label2.textContent = 'Пароль'
input2.type = 'password'
input2.name = 'password'
input2.placeholder = 'Придумайте Пароль'
btn.type = 'submit'
btn.textContent = 'Подтвердить'

label1.append(input1)
label2.append(input2)
label3.append(btn)
form.append(label1, label2, label3)
document.body.append(form)

console.log(document.body)


/*
const form = '<form className="create-user-form">\n' +
    '    <label>\n' +
    '        Имя\n' +
    '        <input type="text" name="userName" placeholder="Введите ваше имя">\n' +
    '    </label>\n' +
    '    <label>\n' +
    '        Пароль\n' +
    '        <input type="password" name="password" placeholder="Придумайте Пароль">\n' +
    '    </label>\n' +
    '    <button type="submit">\n' +
    '        Подтвердить\n' +
    '    </button>\n' +
    '</form>'

document.body.innerHTML = form
console.log(document.body)
*/