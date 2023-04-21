const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// 1. отримав посилання на елемент списку ul
const ul = document.querySelector("#ingredients");
// 2. Використовую forEach для перебору масиву і створення нового ел-та li
const liElements =  ingredients.map((ingredient) => {
  // 3. Створюю новий ел=т за допомогою методу createElement.
  const li = document.createElement("li");
  // 4. Додаю текстовий вміст з назвою інгредієнта.
  li.textContent = ingredient;
  // 5. додаю ел-ту клас item.
  li.classList.add("item");
  return li;
});
ul.append(...liElements);

