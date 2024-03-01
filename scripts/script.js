// Получаем поля ввода и значки крестика
var nameInput = document.getElementById('name');
var phoneInput = document.getElementById('phone');
var clearName = document.getElementById('clear-name');
var clearPhone = document.getElementById('clear-phone');

// Функция для отображения или скрытия значка крестика
function toggleClearIcon(input, icon) {
    if (input.value.length > 0) {
        icon.style.display = 'block';
    } else {
        icon.style.display = 'none';
    }
}

// Обработчики событий для отображения значка крестика при вводе
nameInput.addEventListener('input', function() {
    toggleClearIcon(nameInput, clearName);
});
phoneInput.addEventListener('input', function() {
    toggleClearIcon(phoneInput, clearPhone);
});

// Обработчики событий для очистки полей ввода при клике на значок крестика
clearName.addEventListener('click', function() {
    nameInput.value = '';
    toggleClearIcon(nameInput, clearName);
});
clearPhone.addEventListener('click', function() {
    phoneInput.value = '';
    toggleClearIcon(phoneInput, clearPhone);
});
