const logOutNode = document.getElementById('logout-nav');
const iconUser =document.querySelector('.li-nav-child i')
let checkClick =true ;
iconUser.addEventListener('click',()=>{
    if(checkClick) {
        logOutNode.classList.add('logout-nav');
        logOutNode.style.display='block';
    }else if(checkClick == false) {
        logOutNode.classList.remove('logout-nav');
        logOutNode.style.display='none';
    }
    checkClick = !checkClick;
})


var i = 0;
var img = document.getElementById("img");
var arr = ["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.jpg", "slide5.jpg"];
// user value
const logoutNav = document.getElementById("logout-nav");
const getuserValue = localStorage.getItem("userName-key");
logoutNav.innerHTML += `<li class="user-value" style="color: black; text-transform: lowercase; font-size = 14px;">${getuserValue}</li>`;

//click slider
function next() {
    i++;
    if (i >= arr.length) {
        i = 0;
    }
    img.src = "/assignment/img-slide/" + arr[i];
}

function back() {
    i--;
    if (i < 0) {
        i = arr.length - 1;
    }
    img.src = "/assignment/img-slide/" + arr[i];
}

document.getElementById("next").addEventListener('click', function() {
    next();
});

// Event listener for the "Back" button
document.getElementById("back").addEventListener('click', function() {
    back();
});

// auto play slide
var autoplayInterval = setInterval(function() {
    document.getElementById("next").click(); // lấy giá trị hành động click vào id next mỗi giây,
}, 3000);

// hover slider
const slider = document.querySelector('.slider');
const backI = document.getElementById('back');
const nextI = document.getElementById('next');

slider.addEventListener('mouseover', () => {
    backI.style.display = 'block'; // hiện display icon
    nextI.style.display = 'block';
});

slider.addEventListener('mouseout', () => {
    backI.style.display = 'none'; // ản display icon
    nextI.style.display = 'none';
});

// mảng product
var products = [
    {
        img: "./img-product/pr1.jpg",
        name: "Luffy Gear 5",
        newprice: 4000,
    },
    {
        img: "./img-product/pr2.jpg",
        name: "LAW",
        newprice: 2000,
    },
    {
        img: "./img-product/prX.jpg",
        name: "Luffy Gear 5 X",
        newprice: 5000,
    },
    {
        img: "./img-product/kaido.jpg",
        name: "Kaido",
        newprice: 2000,
    },
    {
        img: "./img-product/gear4.jpg",
        name: "Luffy Gear 4",
        newprice: 2500,
    },
    {
        img: "./img-product/sanji.jpg",
        name: "Sanji",
        newprice: 1000,
    },
    {
        img: "./img-product/yamato-fight.jpg",
        name: "Yamato Fight",
        newprice: 2000,
    },
    {
        img: "./img-product/yamato.jpg",
        name: "Yamato",
        newprice: 3000,
    },
    {
        img: "./img-product/zoro.jpg",
        name: "Zoro",
        newprice: 3500,
    },
];

var product = document.querySelector('#products');

for (let i = 0; i < products.length; i++) {
    let productsList = products[i];
    product.innerHTML += (`
    <div class="container" onmouseenter="onMouseOver(this)" onmouseleave="onMouseLeave(this)">
        <img src="${productsList.img}" alt="" class="img-product">
        <h1 class="name">${productsList.name}</h1>
        <p class="detail">${productsList.newprice} $</p>
        <div><button class="btn-Buy">Add to cart</button></div>
        <div class="blur-product" style="cursor: pointer;">
          <i class="fa-solid fa-heart"></i>
          <i class="fa-solid fa-cart-plus"></i>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
    </div> 
  `);

}

// hover
function onMouseOver(newThis) {
    var productDetail = newThis.querySelector('.blur-product');
    productDetail.style.display = 'flex';
    productDetail.style.background = 'rgba(128, 128, 128, 0.661)';
    productDetail.style.transition = "all .5s";
    productDetail.style.cursor = "pointer";
}

function onMouseLeave(newThis) {
    var productDetail = newThis.querySelector('.blur-product');
    productDetail.style.display = 'none';
}

// show cart
var cartDisplay = document.querySelector('.cart-display');
var cartIcon = document.querySelector('.view-cart');
var cartclose = document.querySelector('.close-cart');
let checkcart = true;
cartIcon.addEventListener('click', function() {
    if(checkcart) {
        cartDisplay.style.display = 'block';
    }else{
        cartDisplay.style.display = 'none';
    }
    checkcart = !checkcart;

});

cartclose.addEventListener('click', function() {
    cartDisplay.style.display = 'none';
});

// add to cart
var addToCartButtons = document.querySelectorAll('.btn-Buy');
var showAddToCart = document.querySelector('#tableCart');
var showTotal = document.querySelector('.show-total');
var btnBuy = document.querySelector('.btn-Buy');
var cart = [];

// dùng vòng lặp để gọi tới từng nút trong list-product
addToCartButtons.forEach((btnBuy, index) => {
    // thực hiện hành động click vào button
    btnBuy.addEventListener('click', function() {
        // truy suất tới mảng product và add thuộc tính vào
        addToCart(products[index].name, products[index].newprice, products[index].img,0);

        upLoadCart(); //sau khi thêm sẽ làm mới index của cart
    });
});
// thêm sản phẩm vào cart
function addToCart(name, newprice, img,quantity) {
  var itemCheck = cart.find(item => item.name === name);// kiểm tra sản phẩm có trùng tên không

  if (itemCheck) {
      itemCheck.quantity += 1;// trùng thì cộng số lượng sản phẩm
      itemCheck.total += newprice;
  } else {
      cart.push({
          name: name,
          newprice: newprice,
          quantity: 1, // cho sản phẩm bằng 1 khi chưa có sản phẩm nào được thêm vào
          total: newprice,
          img: img
      });
  }
}
// lấy dữ liệu
function upLoadCart() {
  var showAddToCart = document.querySelector('#tableCart tbody');
  showAddToCart.innerHTML = '';

  var sum = 0; // tạo biến tổng
  var totalQuantity = 0; // tạo biến kiểm tra số lượng

  cart.forEach(item => {
      showAddToCart.innerHTML += `<tr>
          <td><img class="img-table" src="${item.img}" alt=""></td>
          <td class="name">${item.name}</td>
          <td class="price">${item.newprice}</td>
          <td class="sl">${item.quantity}</td>
          <td class="total">${item.total}</td>
          <td><i class="fa-solid fa-trash-can" onclick="deleteItem('${item.name}')"></i></td>
      </tr>`;

      sum += item.newprice * item.quantity; // tính biến tổng tại đây
      totalQuantity += item.quantity; // cộng số lượng trong mảng
  });

  console.log(showTotal);
  if (sum === 0) {
      showTotal.innerHTML = "0 USD";
  } else {
      showTotal.innerHTML = sum + " " + "USD";
  }

  // hiển thị tổng số lượng có trong giỏ hàng
  var cartQuantity = document.querySelector('#quantity');
  cartQuantity.innerHTML = totalQuantity;
}


function deleteItem(name) {
    //tìm chỉ định "name" trong mảng cart
    var index = cart.findIndex(item => item.name === name);
    // kiểm tra xem có được tìm thấy trong mảng ko
    if (index !== -1) {
        // nếu có thì xóa phần tử trong mảng bằng splice
        cart.splice(index, 1);
        upLoadCart();
    }
}
