//search elements
const tBody = document.querySelector('table tbody');
const addBtn = document.querySelector('#addBtn');
const clearBtn = document.getElementById('clearBtn');
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

const form = document.forms.createProduct;
const modelIn = form.elements.model;
const mileageIn = form.elements.mileage;
const accidentIn = form.elements.accident;

const products = [];

function addProductToTable(item) {
   tBody.innerHTML += `<tr>
                           <th scope="row">${item.id}</th>
                           <td>${item.model}</td>
                           <td>${item.mileage}km</td>
                           <td>
                               ${item.accident
           ? '<span class="badge text-bg-success">True</span>'
           : '<span class="badge text-bg-secondary">False</span>'
       }                      
                           </td>
                       </tr>`;
}
function loadProductsToTable(items) {
   tBody.innerHTML = "";

   for (const i of items) {
       addProductToTable(i);
   }
}
class Product {
   static count = 0;

   constructor(model, mileage, accident) {
       this.model =model;
       this.mileage = mileage;
       this.accident =accident;
       this.id = ++Product.count;
   }
}

addBtn.onclick = (event) => {
   event.preventDefault();

   if(modelIn.value == "" || mileageIn.value == ""){
      alert("INCORRECT INPUT DATA");
   }else{
      //create new element
      let item = new Product(modelIn.value, +mileageIn.value, accidentIn.checked);
      //add to array
      products.push(item);
      console.log("New item:", item);
      //add to table
      addProductToTable(item);
   }

}
clearBtn.onclick = () => {
   //clear table
   tBody.innerHTML = "";
   //info to log
   console.log("Clear all items.");
}
searchBtn.onclick = (event) => {
   event.preventDefault();

   // Отримуємо значення тексту з input
   const searchText = searchInput.value.toLowerCase();
   let filteredProducts; // Оголошуємо filteredProducts за межами блоку if

   // Використовуємо метод filter для відбору елементів зі списку продуктів
   // де model збігається з введеним текстом
   if (searchText == "") {
      filteredProducts = products;
   } else {
      filteredProducts = products.filter(product => product.model.toLowerCase() === searchText);
   }
   // Завантажуємо відфільтровані продукти до таблиці
   loadProductsToTable(filteredProducts);
   console.log("Show elements for search.");
}
