import { listBestSeller } from "./bestSeller.list.js";
import { listLatestPost } from "./lastestPost.list.js";
import { shopListItem } from "./shop.list.js";

let defaultTab = 1;
let arrayContents = [

    `
        <div class="card">
            <h2>Hoa Hồng</h2>
            <img src="/r1.png" alt="Hoa hồng đỏ">
            <p>Hoa hồng biểu tượng cho tình yêu và sự lãng mạn, với đa dạng màu sắc rực rỡ và hương thơm quyến rũ.</p>
        </div>

    `,
    `
        <div class="card">
            <h2>Hoa Lan</h2>
            <img src="/r2.png" alt="Hoa lan">
            <p>Hoa lan mang vẻ đẹp sang trọng, quý phái. Loài hoa này có cấu tạo tinh tế, màu sắc phong phú, được nhiều người yêu thích.</p>
        </div>
    `,
    `
        <div class="card">
            <h2>Hoa Tulip</h2>
            <img src="/r3.png" alt="Hoa tulip">
            <p>Tulip là loài hoa đặc trưng của Hà Lan. Sắc hoa rực rỡ, hình dáng độc đáo, báo hiệu mùa xuân về.</p>
        </div>
    ` 
];

function sendEmail(formName, formEmail, formMessage) {
    let templateParams = {
        name: formName,
        message: formMessage,
        email: formEmail
    };

    emailjs.send('service_kcgyado', 'template_1tk7ghp', templateParams).then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
            console.log('FAILED...', error);
        },
    );
}

let btnTabs = document.querySelector(".btn-tabs")
let tabContent = document.querySelector(".tab-content")
btnTabs.addEventListener("click", function(event){
    console.log(event.target.closest(".btn-t"));
    let btnTab = event.target.closest(".btn-t");
    if (btnTab!== null){
        let index=btnTab.getAttribute("data-tab")
        let content = arrayContents[index - 1]
        console.log(content)
        tabContent.innerHTML = content;
        let activeBtn = document.querySelector(".active-tab2")
        activeBtn.classList.remove("active-tab2")
        btnTab.classList.add("active-tab2");
    }
})
tabContent.innerHTML = arrayContents[defaultTab];

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const nameEl = document.querySelector("#formName");
        const emailEl = document.querySelector("#formEmail");
        const messageEl = document.querySelector("#formMessage");

        const nameValue = nameEl.value.trim();
        const emailValue = emailEl.value.trim();
        const messageValue = messageEl.value.trim();

        if (!nameValue || !emailValue) {
            alert('Please enter your name and email.');
            return;
        }

        alert(`Cảm ơn ${nameValue} đã liên hệ với chúng tôi!`);
        sendEmail(nameValue, emailValue, messageValue);

        contactForm.reset();
    });
} else {
    console.warn('contactForm element not found on this page.');
}

// Render best seller cards
let bestCards = document.querySelector(".best-cards");
const bestSellerItems = listBestSeller.map((bestId) => {
    let item = shopListItem.find(function(shopItem){
        return shopItem.id === bestId;
    });
    return item;
})
console.log(bestSellerItems)
let bestCardsContent = '';
bestSellerItems.forEach(function(item, index){

    let card = `<div class="card-item" product-code=${item.id}>
        <img class="main-img" src="${item.img}" alt="">
        <p class="card-item-title">${item.tittle}</p>
        <div class="card-item-bot">
            <p>${item.price} đ</p>
            <div>
                <img src="./cart.svg" alt="">
                <a href="#">Add to cart</a>
            </div>
        </div>
    </div>` 
    console.log(card)

    bestCardsContent = bestCardsContent + card
})

bestCards.innerHTML = bestCardsContent

// Render latest post
let postsEle = document.querySelector(".posts");
let lastestPostCard = "";
listLatestPost.forEach(function(item, index) {
    lastestPostCard += `
        <div class="post-item">
            <div class="post-item-head">
                <div class="post-avatar">
                    <img src="./${item.avatar}" alt="">
                    <span>${item.name}</span>
                </div>
                <div class="post-date">${item.date}</div>
            </div>
            <div class="post-img">
                <img src="./${item.img}" alt="">
            </div>
            <div class="post-info">
                <div class="post-tittle">${item.title}</div>
                <div class="post-des">${item.content}</div>
            </div>
            <div class="post-item-footer">
                <div class="post-react">
                    <div class="post-liked">
                        <img src="./heart.svg" alt="">
                        <span>${item.likes}</span>
                    </div>
                    <div class="post-view">
                        <img src="./eye.svg" alt="">
                        <span>${item.views}</span> 
                    </div>
                </div>
                <a href="">Read more</a>
            </div>
        </div>
    `
})
postsEle.innerHTML = lastestPostCard


