import {shopListItem} from "./shop.list.js";
// Render product list in shop page
//  Buớc 1: lưu container element vào 1 biến
let shopCardEle = document.querySelector(".shop-best-cards");
console.log(shopCardEle)
// Bước 2: Đặt 1 biến , giá trị ban đầu = chuỗi rỗng
let shopItemList = "";
// Buớc 3: Dùng vòng lặp forEach cho danh sánh đã import, duyệt qua từng thành phần trong mảng đó, rồi cộng dồn vào biến ở bước 2
shopListItem.forEach(function(item, index) {
    shopItemList += `
        <div class="shop-card-item" product-code="${item.id}">
            <img class="main-img" src="${item.img}" alt="">
            <p class="card-item-title">${item.tittle}</p>
            <div class="card-item-bot">
                <p>${item.price}$</p>
                <div>
                    <img src="./cart.svg" alt="">
                    <a href="#">Add to cart</a>
                </div>
            </div>
        </div>
    `
});
// Buớc 4: dùng cú pháp innerHTML vào biến đã lưu ở buóc 1 = giá trị cồng dồn ở bước 2
shopCardEle.innerHTML = shopItemList;