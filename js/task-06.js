const input = document.querySelector("#validation-input");

function validateInput() {
  const requiredLength = input.dataset.length;
  const enteredValue = input.value.trim();
  const isValid = enteredValue.length === Number(requiredLength);

  if (isValid) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}

input.addEventListener("blur", validateInput);


// 1. Знаходимо інпут за допомогою метода document.querySelector() та зберігаємо його у змінну input.Ми шукаємо елемент зі селектором #validation - input, який відповідає інпуту, що має атрибут id = "validation-input".

// 2. Створюємо функцію validateInput(), яка буде перевіряти правильність введеного користувачем значення.
// 3. Отримуємо значення атрибуту data - length інпуту та зберігаємо його у змінну requiredLength.Цей атрибут містить правильну кількість символів, яку користувач повинен ввести.

// 4. Отримуємо значення, яке користувач ввів у поле введення, та зберігаємо його у змінну enteredValue.Метод trim() використовується для видалення зайвих пробілів з початку та кінця рядка.

// 5. Перевіряємо, чи введена кількість символів відповідає значенню requiredLength.Якщо так, то змінюємо клас інпуту на valid, якщо ні - на invalid.
   
// 6.Додаємо або видаляємо відповідний клас для інпуту в залежності від результату перевірки правильності введення.

// 7.Додаємо слухача події blur на інпут, який викликає функцію validateInput(), коли користувач виходить з поля введення.