const categoriesList = document.getElementById("categories");
const categoryItems = document.querySelectorAll("li.item");

const categoryCount = categoryItems.length;
console.log(`Liczba kategorii: ${categoryCount}`);

categoryItems.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryItemsCount = category.querySelectorAll("li").length;
  console.log(`Kategoria: ${categoryName}`);
  console.log(`Liczba elementów: ${categoryItemsCount}`);
});
