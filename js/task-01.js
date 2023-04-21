
const categoriesList = document.querySelector('#categories');

const categoriesItems = categoriesList.querySelectorAll('li.item');

console.log(`Number of categories: ${categoriesItems.length} `);

categoriesItems.forEach(item => {

  const title = item.firstElementChild.textContent;

 
  const itemsList = item.lastElementChild.children;

  console.log(`Category: ${title}. Elements: ${itemsList.length}.`);
});
