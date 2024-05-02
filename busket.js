// const addToBasket = document.querySelector(".addToBasket");

// // Находим все элементы с классом itemDiv
// const itemDivs = document.querySelectorAll(".itemDiv");

// itemDivs.forEach((itemDiv) => {
//   const itemName = itemDiv.querySelector(".itemName").textContent;
//   const itemPrice = parseInt(itemDiv.querySelector(".itemPrice").textContent);
//   const input = itemDiv.querySelector("input");

//   // Добавляем обработчик события на кнопку "Добавить в корзину"
//   itemDiv.querySelector(".addToBasket").addEventListener("click", function () {
//     const amount = parseInt(input.value);
//     if (isNaN(amount) || amount <= 0) {
//       alert("Пожалуйста, введите корректное количество товара.");
//     } else {
//       addInfoProduct(itemName, itemPrice, amount);
//       renderProducts(products); // Вызываем после добавления товара
//     }
//   });
// });

// let products = [];

// // Класс товара
// class Product {
//   constructor(title, price, amount) {
//     this.title = title;
//     this.price = price;
//     this.amount = amount;
//     this.totalPrice = price * amount;
//   }
// }

// // Функция добавления данных по товару в объект
// function addInfoProduct(title, price, amount) {
//   let product = new Product(title, price, amount);
//   products.push(product);
//   console.log(products);
// }

// //функция отрисовки карточки
// function renderProducts(products) {
//   let totalPrice = 0;
//   let totalAmount = 0;
//   //вывод товаров из массива на экран
//   for (let product of products) {
//     const divCards = document.querySelector(".card");

//     //создаем элементы
//     const div = document.createElement("div");
//     const spanTitle = document.createElement("span");
//     const spanAmount = document.createElement("span");
//     const spanPrice = document.createElement("span");
//     const spanTotalPrice = document.createElement("span");

//     //добавляем классы элементам
//     div.classList.add("card__item");
//     spanTitle.classList.add("item__title");
//     spanAmount.classList.add("item__amount");
//     spanPrice.classList.add("item__price");
//     spanTotalPrice.classList.add("item__title");

//     //присваиваем значение элементам
//     spanTitle.textContent = product.title;
//     spanAmount.textContent = product.amount;
//     spanPrice.textContent = product.price;
//     spanTotalPrice.textContent = product.totalPrice;
//     console.log(divCards);

//     //вставляем узлы в конец элемента
//     divCards.append(div);
//     div.append(spanTitle, spanAmount, spanPrice, spanTotalPrice);

//     totalPrice += product.totalPrice;
//     totalAmount += product.amount;

//     displayTotalPrice(divCards, totalAmount, totalPrice);

//     // const divResult = document.createElement("div");
//     // divResult.classList.add("card__result");
//     // divResult.textContent = `Всего: ${totalAmount} позиции, ${totalPrice}`;
//     // divCards.append(divResult);
//   }

//   function displayTotalPrice(divCards, totalAmount, totalPrice) {
//     const divResult = document.createElement("div");
//     divResult.classList.add("card__result");
//     divResult.textContent = `Всего: ${totalAmount} позиции, ${totalPrice}`;
//     divCards.append(divResult);
//   }
// }

//vers 2

// const addToBasket = document.querySelectorAll(".addToBasket");

// document.querySelectorAll(".quantity").forEach((quantity) => {
//   const input = quantity.querySelector(".quantity-input");
//   const plusBtn = quantity.querySelector(".plus");
//   const minusBtn = quantity.querySelector(".minus");

//   plusBtn.addEventListener("click", () => {
//     input.value = parseInt(input.value) + 1;
//   });

//   minusBtn.addEventListener("click", () => {
//     const value = parseInt(input.value);
//     if (value > 1) {
//       input.value = value - 1;
//     }
//   });
// });

// addToBasket.forEach((button) => {
//   button.addEventListener("click", function () {
//     const itemDiv = button.closest(".itemDiv");
//     const itemName = itemDiv.querySelector(".itemName").textContent;
//     const itemPrice = parseInt(itemDiv.querySelector(".itemPrice").textContent);
//     const input = itemDiv.querySelector("input");
//     const amount = parseInt(input.value);

//     if (isNaN(amount) || amount <= 0) {
//       alert("Пожалуйста, введите корректное количество товара.");
//     } else {
//       let currentProduct = products.find(
//         (product) => product.title === itemName
//       );
//       if (currentProduct) {
//         currentProduct.amount += amount;
//         currentProduct.totalPrice += itemPrice * amount;
//       } else {
//         addInfoProduct(itemName, itemPrice, amount);
//       }

//       input.value = ""; // Очищаем поле ввода

//       // Изменяем текст кнопки и делаем ее неактивной
//       button.textContent = "В корзине";
//       button.disabled = true;

//       renderProducts(products);
//     }
//   });
// });

// let products = [];

// // Класс товара
// class Product {
//   constructor(title, price, amount) {
//     this.title = title;
//     this.price = price;
//     this.amount = amount;
//     this.totalPrice = price * amount;
//   }
// }

// // Функция добавления данных по товару в объект
// function addInfoProduct(title, price, amount) {
//   let product = new Product(title, price, amount);
//   products.push(product);
//   console.log(products);
// }

// // Функция отрисовки карточки товаров и итоговой стоимости
// function renderProducts(products) {
//   const card = document.querySelector(".card");
//   card.innerHTML = ""; // Очищаем контейнер для корзины

//   let totalPrice = 0;
//   let totalAmount = 0;

//   for (let product of products) {
//     //создаем элементы
//     const div = document.createElement("div");
//     const spanTitle = document.createElement("span");
//     const spanAmount = document.createElement("span");
//     const spanPrice = document.createElement("span");
//     const spanTotalPrice = document.createElement("span");
//     const btnRemove = document.createElement("button");

//     //добавляем классы элементам
//     div.classList.add("card__item");
//     spanTitle.classList.add("item__title");
//     spanAmount.classList.add("item__amount");
//     spanPrice.classList.add("item__price");
//     spanTotalPrice.classList.add("item__totalPrice");
//     btnRemove.classList.add("item__btnRemove");

//     //присваиваем значение элементам
//     spanTitle.textContent = product.title;
//     spanAmount.textContent = product.amount;
//     spanPrice.textContent = product.price;
//     spanTotalPrice.textContent = product.totalPrice;
//     btnRemove.textContent = "Удалить";

//     //вставляем узлы в конец элемента
//     card.appendChild(div);
//     div.append(spanTitle, spanAmount, spanPrice, spanTotalPrice, btnRemove);

//     totalPrice += product.totalPrice;
//     totalAmount += product.amount;
//   }

//   displayTotalPrice(card, totalAmount, totalPrice);
// }

// // Функция отображения итоговой стоимости
// function displayTotalPrice(card, totalAmount, totalPrice) {
//   const divResult = document.createElement("div");
//   divResult.classList.add("card__result");
//   divResult.textContent = `Всего: ${totalAmount} позиции, ${totalPrice} руб.`;
//   card.append(divResult);
// }

//vers 3

const addToBasket = document.querySelectorAll(".addToBasket");

document.querySelectorAll(".quantity").forEach((quantity) => {
  const input = quantity.querySelector(".quantity-input");
  const plusBtn = quantity.querySelector(".plus");
  const minusBtn = quantity.querySelector(".minus");

  plusBtn.addEventListener("click", () => {
    input.value = parseInt(input.value) + 1;
    updateCart();
  });

  minusBtn.addEventListener("click", () => {
    const value = parseInt(input.value);
    if (value > 1) {
      input.value = value - 1;
      updateCart();
    }
  });

  input.addEventListener("input", updateCart);
});

addToBasket.forEach((button) => {
  button.addEventListener("click", function () {
    const itemDiv = button.closest(".itemDiv");
    const itemName = itemDiv.querySelector(".itemName").textContent;
    const itemPrice = parseInt(itemDiv.querySelector(".itemPrice").textContent);
    const input = itemDiv.querySelector("input");
    const amount = parseInt(input.value);

    if (isNaN(amount) || amount <= 0) {
      alert("Пожалуйста, введите корректное количество товара.");
    } else {
      let currentProduct = products.find(
        (product) => product.title === itemName
      );
      if (currentProduct) {
        currentProduct.amount += amount;
        currentProduct.totalPrice += itemPrice * amount;
      } else {
        addInfoProduct(itemName, itemPrice, amount);
      }

      // Установим значение инпута в 0
      input.value = "0";

      renderProducts(products);
    }
  });
});

let products = [];

// Класс товара
class Product {
  constructor(title, price, amount) {
    this.title = title;
    this.price = price;
    this.amount = amount;
    this.totalPrice = price * amount;
  }
}

// Функция добавления данных по товару в объект
function addInfoProduct(title, price, amount) {
  let currentProductIndex = products.findIndex(
    (product) => product.title === title
  );

  if (currentProductIndex !== -1) {
    products[currentProductIndex].amount += amount;
    products[currentProductIndex].totalPrice += price * amount;
  } else {
    let product = new Product(title, price, amount);
    products.push(product);
  }
}

// Функция отрисовки карточки товаров и итоговой стоимости
function renderProducts(products) {
  const card = document.querySelector(".card");
  card.innerHTML = ""; // Очищаем контейнер для корзины

  let totalPrice = 0;
  let totalAmount = 0;

  const onlyProducts = {};

  for (let product of products) {
    if (!onlyProducts[product.title]) {
      onlyProducts[product.title] = product;
    } else {
      onlyProducts[product.title].amount += product.amount;
      onlyProducts[product.title].totalPrice += product.totalPrice;
    }
  }

  for (const [key, value] of Object.entries(onlyProducts)) {
    const product = value;
    //создаем элементы
    const div = document.createElement("div");
    const spanTitle = document.createElement("span");
    const spanAmount = document.createElement("span");
    const spanPrice = document.createElement("span");
    const spanTotalPrice = document.createElement("span");
    const btnRemove = document.createElement("button");

    //добавляем классы элементам
    div.classList.add("card__item");
    spanTitle.classList.add("item__title");
    spanAmount.classList.add("item__amount");
    spanPrice.classList.add("item__price");
    spanTotalPrice.classList.add("item__totalPrice");
    btnRemove.classList.add("item__btnRemove");

    //присваиваем значение элементам
    spanTitle.textContent = product.title;
    spanAmount.textContent = product.amount;
    spanPrice.textContent = product.price;
    spanTotalPrice.textContent = product.totalPrice;
    btnRemove.textContent = "Удалить";

    //вставляем узлы в конец элемента
    card.appendChild(div);
    div.append(spanTitle, spanAmount, spanPrice, spanTotalPrice, btnRemove);

    // Обработчик события для кнопки удаления
    btnRemove.addEventListener("click", () => {
      const index = products.findIndex(
        (p) => p.title === product.title && p.price === product.price
      );
      if (index !== -1) {
        products.splice(index, 1);
        renderProducts(products);
      }
    });

    totalPrice += product.totalPrice;
    totalAmount += product.amount;
  }

  displayTotalPrice(card, totalAmount, totalPrice);
}

// Функция отображения итоговой стоимости
function displayTotalPrice(card, totalAmount, totalPrice) {
  const divResult = document.createElement("div");
  divResult.classList.add("card__result");
  divResult.textContent = `Всего: ${totalAmount} позиции, ${totalPrice} руб.`;
  card.append(divResult);
}

// Функция для обновления корзины
function updateCart() {
  const newProducts = [];
  document.querySelectorAll(".card__item").forEach((item) => {
    const title = item.querySelector(".item__title").textContent;
    const amount = parseInt(item.querySelector(".item__amount").textContent);
    const price = parseFloat(item.querySelector(".item__price").textContent);
    const totalPrice = parseFloat(
      item.querySelector(".item__totalPrice").textContent
    );
    newProducts.push(new Product(title, price, amount));
  });
  products = newProducts;
  renderProducts(products);
}
