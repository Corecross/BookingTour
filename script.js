let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');
let bookForm = document.querySelector('.book-form-container');
let bookBtn = document.querySelector('#book-btn');
let formCloseB = document.querySelector('#form-close-book');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    bookForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
    bookForm.classList.remove('active');
});

formCloseB.addEventListener('click', () =>{
  bookForm.classList.remove('active');
});

bookBtn.addEventListener('click', () =>{
  bookForm.classList.add('active');
});

// chat

function toggleChat() {
  var chatBox = document.getElementById("chatBox");
  if (chatBox.style.display === "none" || chatBox.style.display === "") {
      chatBox.style.display = "flex";
      setTimeout(() => chatBox.classList.add("show"), 10); // Kích hoạt animation
  } else {
      chatBox.classList.remove("show");
      setTimeout(() => chatBox.style.display = "none", 300); // Chờ animation kết thúc rồi ẩn
  }
}

function sendMessage() {
  var input = document.getElementById("messageInput");
  var chatBody = document.getElementById("chatBody");

  if (input.value.trim() !== "") {
      // Tạo tin nhắn khách hàng (user)
      var userMessage = document.createElement("div");
      userMessage.classList.add("message", "user");
      userMessage.innerText = input.value;
      
      chatBody.appendChild(userMessage);
      chatBody.scrollTop = chatBody.scrollHeight;
      input.value = "";

      // Giả lập phản hồi từ hệ thống
      setTimeout(function() {
          var botMessage = document.createElement("div");
          botMessage.classList.add("message", "bot");
          botMessage.innerText = "Cảm ơn bạn! Chúng tôi sẽ phản hồi sớm.";
          chatBody.appendChild(botMessage);
          chatBody.scrollTop = chatBody.scrollHeight;
      }, 1000);
  }
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
      sendMessage();
  }
}

// chat ends

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});


const API_URL = "https://script.google.com/macros/s/AKfycbxh1i2YbfF2byaWDwS-2Efl7DsqyigsKPUXKyQrgf75uKU-pg0Lz6TiyP4yUZPkc3ftlg/exec";  // Thay bằng URL đã sao chép

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        document.getElementById("visitor-count").innerText = data.visitorCount;
    })
    .catch(error => console.error("Lỗi khi tải dữ liệu:", error));