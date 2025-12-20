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
