const categoriesList = document.getElementById("categories");
const categoryItems = document.querySelectorAll("li.item");

const categoryCount = categoryItems.length;

categoryItems.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryItemsCount = category.querySelectorAll("li").length;
});
