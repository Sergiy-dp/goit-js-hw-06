
const categoriesList = document.querySelector('#categories');



const categoriesItems = categoriesList.querySelectorAll('li.item');


console.log(`В списку ${categoriesItems.length} категорії.`);


categoriesItems.forEach(item => {

  const title = item.querySelector("h2").textContent;

 
  const itemsList = item.querySelectorAll("li");

  console.log(`Категорія: ${title}. Кількість елементів: ${itemsList.length}.`);
});
