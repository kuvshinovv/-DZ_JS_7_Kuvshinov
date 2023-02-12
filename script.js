// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
const dropDownItem = document.querySelectorAll('.dropdown-item');

dropDownItem.forEach(element => {
    element.classList.add('super-dropdown');
});
console.log(dropDownItem);

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
const buttonEdit = document.querySelector('.btn');
if (buttonEdit.classList.contains('btn-secondary'))
{
    buttonEdit.classList.remove('btn-secondary');
}
else
{
    buttonEdit.classList.add('btn-secondary');
}
console.log(buttonEdit);


// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
const elementWithMenu = document.querySelector('.menu');
if (elementWithMenu.classList.contains('dropdown-menu'))
{
    elementWithMenu.classList.remove('dropdown-menu')
}
console.log(elementWithMenu);

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`
const linkA = document.createElement('a');
linkA.setAttribute('href', '#');
linkA.innerText = 'link';

const divDropDown = document.querySelector('div.dropdown');
divDropDown.insertAdjacentElement('afterend', linkA);  // использовал тут не insertAdjacentHTML т.к. это совсем просто...  я начал мыслить в этом задании немного сложнее :))))  создал элемент, а потом начал искать как его вставить...  и нашел вот другой метод для элемента..  а не просто для текста





// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
const dropdownMenuButtonID = document.getElementById('dropdownMenuButton');
console.log(dropdownMenuButtonID);
dropdownMenuButtonID.setAttribute('id','superDropdown');




// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
const arialabelledbyAtr = document.querySelector('[aria-labelledby=dropdownMenuButton]');
arialabelledbyAtr.dataset.dd = 3;
console.log(arialabelledbyAtr);




// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
const elemdropdowntoggle = document.querySelector('.dropdown-toggle');
elemdropdowntoggle.removeAttribute('type');
console.log(elemdropdowntoggle);