/*====================================================
SOHA BURGERS
SCRIPT.JS
PART 1 OF 5
====================================================*/


/*===============================
MENU DATA
===============================*/

const products = [

{

id:1,

name:"Aloo Tikki Burger",

category:"Burgers",

price:71,

image:"images/menu/Aloo Tikki Burger .png",

description:"The Original Potato Patty with Kanda & Tamatar with Inhouse sauce & Professional Mayo"

},

{

id:2,

name:"Super Veggie Burger",

category:"Burgers",

price:91,

image:"images/menu/Super Veggie Burger.png",

description:"Indulge in ultimate Experience with Fresh Veggies, Super Veg Patty with Toasted Buns"

},

{

id:3,

name:"Paneer Cottage Burger",

category:"Burgers",

price:121,

image:"images/menu/Paneer Cottage Burger .png",

description:"The Desi Cheese in between Toasted Buns with Capsicum n more."

},

{

id:4,

name:"Crispy Chicken Burger",

category:"Burgers",

price:101,

image:"images/menu/Crispy Chicken Burger .png",

description:"The Zingerness you cannot forget with Tandoori Punch in Between."

},

{

id:5,

name:"Crispy Chicken Cheese Burger",

category:"Burgers",

price:141,

image:"images/menu/Crispy Chicken Cheese Burger .png",

description:"A deliciously crispy, golden-brown chicken fillet, coated in a flavorful breading."

},

{

id:6,

name:"Tandoori Chicken Cheese Burger",

category:"Burgers",

price:131,

image:"images/menu/Tandoori Chicken Cheese Burger .png",

description:"Perfect for those craving a bold, spicy twist on a classic favorite!"

},


{

id:7,

name:"Miami Island Chicken Burger",

category:"Burgers",

price:171,

image:"images/menu/Miami Island Chicken Burger .png",

description:"A tropical twist on the classic chicken burger! Topped with a sweet and tangy grilled pineapple slice"

},


{

id:8,

name:"Zinger Chicken Burger",

category:"Burgers",

price:151,

image:"images/menu/Zinger Chicken Burger .png",

description:"Zinger Burger You can resist."

},

{

id:9,

name:"Loaded Zinger Chicken Burger",

category:"Burgers",

price:211,

image:"images/menu/Loaded Zinger Chicken Burger .png",

description:"Full of Zingerness"

},

{

id:10,

name:"Tandoori Veg Wrap",

category:"Wraps",

price:91,

image:"images/menu/Tandoori Veg Wrap .png",

description:"A delicious and aromatic vegetarian roll filled with a medley of perfectly marinated vegetables with traditional tandoori sauce."

},

{

id:11,

name:"Southwest Paneer Wrap",

category:"Wraps",

price:121,

image:"images/menu/Southwest Paneer Wrap .png",

description:"A delicious, flavor-packed wrap that is seasoned with southwest spices, wrapped in a soft, warm tortilla."

},

{

id:12,

name:"Mexican Chicken Wrap",

category:"Wraps",

price:141,

image:"images/menu/Mexican Chicken Wrap.png",

description:"A zesty and flavorful roll that brings the vibrant tastes of Mexico to your taste buds"

},

{

id:13,

name:"Chicken Cheese Wrap",

category:"Wraps",

price:151,

image:"images/menu/Chicken Cheese Wrap .png",

description:"A mouthwatering combination of crispy juicy chicken wrapped in a soft, warm tortilla, topped with cheese for that irresistible creamy finish."

},

{

id:14,

name:"Peri Peri Chicken Wrap",

category:"Wraps",

price:131,

image:"images/menu/Peri Peri Chicken Wrap.png",

description:"A bold and flavorful wrap that packs a spicy punch!"

},

{

id:15,

name:"Peri Peri Fries - Regular",

category:"Sides",

price:101,

image:"images/menu/Peri Peri Fries .png",

description:"The tangy kick of peri peri masala enhances each bite, making these fries a tantalizing treat for spice lovers."

},

{

id:16,

name:"Salted French Fries - Regular",

category:"Sides",

price:71,

image:"images/menu/Salted Fries .png",

description:"Thin strips of potato that are deep-fried until golden and crispy. Made from premium-quality potatoes, each fry is carefully cut and deep-fried to perfection, offering a crunchy exterior and a soft, fluffy interior."

},

{

id:17,

name:"Peri Peri Fries - Medium",

category:"Sides",

price:141,

image:"images/menu/Peri Peri Fries .png",

description:"The tangy kick of peri peri masala enhances each bite, making these fries a tantalizing treat for spice lovers."

},

{

id:18,

name:"Salted French Fries - Medium",

category:"Sides",

price:111,

image:"images/menu/Salted Fries .png",

description:"Thin strips of potato that are deep-fried until golden and crispy. Made from premium-quality potatoes, each fry is carefully cut and deep-fried to perfection, offering a crunchy exterior and a soft, fluffy interior."

},

{

id:19,

name:"Sabji Finger Strips - [5 Pcs]",

category:"Sides",

price:111,

image:"images/menu/Sabji Finger Strips.png",

description:"Crunchy on the outside, tender on the inside, our Veggie Finger Strips are a delicious, plant-based treat perfect for any occasion!"

},

{

id:20,

name:"Cheesy Crispy Chicken Popcorn + Schezwan Dip",

category:"Sides",

price:161,

image:"images/menu/Cheesy Crispy Chicken PopCorn.png",

description:"Cheesy Crispy Chicken Popcorn is a bite-sized, indulgent treat thatâ€™s packed with flavor, erved alongside a spicy dip"

},

{

id:21,

name:"Tandoori Potato Cheese Wedges",

category:"Sides",

price:121,

image:"images/menu/Tandoori Potato Cheese Wedges .png",

description:"Tangy potato wedges are a flavorful, crispy treat with a burst of zest. Thick potato wedges are seasoned with a tangy blend of spices, including lemon juice & our secret masalas"

},

{

id:22,

name:"Kurkure Chicken Popcorn - 10 Pcs",

category:"Sides",

price:131,

image:"images/menu/Chicken Popcorn .png",

description:"Tender, bite-sized pieces of chicken are coated in a zesty, spicy Kurkure-style crunch, delivering a perfect blend of bold flavors and satisfying texture."

},

{

id:23,

name:"Two Paneer Cottage Burgers",

category:"Burger Doubles",

price:241,

image:"images/menu/Two Paneer Cottage Burger .png",

description:"Dugana Protein"

},

{

id:24,

name:"Two Aloo Tikki Burgers",

category:"Burger Doubles",

price:121,

image:"images/menu/Two Aloo Tikki Burger .png",

description:"Dual Dhamaka"

},

{

id:25,

name:"Chipotle Cheese Fries",

category:"Loaded Fries",

price:141,

image:"images/menu/Chipotle Cheese Fries .png",

description:"The star of the dish is the chipotle pepper sauce, a rich, velvety sauce with a subtle sweetness and a creamy texture."

},



{

id:26,

name:"Chicken Loaded Cheesy Fries",

category:"Loaded Fries",

price:201,

image:"images/menu/Chicken Loaded Cheesy Fries.png",

description:"Goodness of Cheese with Chicken and Potato."

},

{

id:27,

name:"Veggie Loaded Fries",

category:"Loaded Fries",

price:141,

image:"images/menu/Veggie Loaded Fries .png",

description:"Loaded with fresh vegetables and savory toppings."

},

{

id:28,

name:"Cheesy Loaded Fries",

category:"Loaded Fries",

price:151,

image:"images/menu/Cheese Loaded Fries .png",

description:"Irresistible snack or side dish made with crispy, golden fries piled high with indulgent toppings."

},

{

id:29,

name:"Mint Cheese Fries",

category:"Loaded Fries",

price:141,

image:"images/menu/Mint Cheese Fries.png",

description:"Fries combining the rich, creamy flavor of melted cheese with a cool, vibrant minty touch."

},

{

id:30,

name:"Chicken Classic Strips - 3 Pcs",

category:"Chicken Strips",

price:121,

image:"images/menu/Chicken Classic Strips - 3 Pcs .png",

description:"Tender, juicy strips of chicken breast, coated in a crispy, golden-brown breading and fried to perfection."

},

{

id:31,

name:"Chicken Peri Peri Strips - 3 Pcs",

category:"Chicken Strips",

price:141,

image:"images/menu/Peri Peri Chicken Strips - 3 Pcs .png",

description:"Tender, juicy chicken strips coated in a crispy, golden batter and tossed in a zesty, spicy peri peri masala."

},

{

id:32,

name:"Chicken Chatakdar Strips - 3 Pcs",

category:"Chicken Strips",

price:141,

image:"images/menu/Chicken Chatakdaar Strips - 3 Pcs .png",

description:"Each strip is perfectly seasoned with a special blend of spices, giving them a delightful â€œchatakdarâ€ (zesty) kick in every bite."

},

{

id:33,

name:"Bbq Chicken Strips - 3 Pcs",

category:"Chicken Strips",

price:171,

image:"images/menu/BBQ Chicken Strips - 3 Pcs .png",

description:"BBQ sauce coated Tender, juicy chicken strips coated in a crispy, golden batter and tossed in a zesty, spicy peri peri masala."

},

{

id:34,

name:"Peri Peri Crispy Chicken Wings - 4 Pcs",

category:"Crispy Chicken Wings",

price:151,

image:"images/menu/Peri Peri Chicken Wings - 4 Pcs .png",

description:"Crispy fried chicken wings tossed in fiery peri peri seasoning, blending smoky heat with zesty flavors. A bold and addictive snack with the perfect balance of spice and crunch."

},

{

id:35,

name:"Chatakdaar Crispy Chicken Wings - 4 Pcs",

category:"Crispy Chicken Wings",

price:151,

image:"images/menu/Chatakdaar Chicken Wings - 4 Pcs .png",

description:"Spicy, tangy, and loaded with desi chatpata flavors, these crispy chicken wings deliver the perfect punch of masala with every crunchy bite. Made for true spice lovers craving bold Indian-style taste."

},

{

id:36,

name:"Classic Crispy Chicken Wings - 4 Pcs",

category:"Crispy Chicken Wings",

price:131,

image:"images/menu/Classic Chicken Wings - 4 Pcs .png",

description:"Golden-fried chicken wings with a perfectly crispy coating on the outside and juicy tenderness inside. A classic snack packed with crunch, flavor, and satisfaction in every bite."

},

{

id:37,

name:"BBQ Crispy Chicken Wings - 4 Pcs",

category:"Crispy Chicken Wings",

price:181,

image:"images/menu/BBQ Chicken Wings - 4 Pcs .png",

description:"Crunchy chicken wings coated in rich smoky BBQ flavor, offering a delicious mix of sweetness, smokiness, and savory goodness. Perfect for those who love classic barbecue-style indulgence."

},

{

id:38,

name:"Crispy Chicken Burger Meal",

category:"Cool Meals",

price:191,

image:"images/menu/Crispy Chicken Meal .png",

description:"One Crispy Chicken Burger + Regular Peri Peri Fries + Campa Pet Bottle 200 ml"

},

{

id:39,

name:"Super Veggie Burger Meal",

category:"Cool Meals",

price:181,

image:"images/menu/Super Veggie Meal .png",

description:"One Super Veggie Burger+ Regular Salted Fries + Campa Pet Bottle 200 ml"

},

{

id:40,

name:"Aloo Tikki Burger Meal",

category:"Cool Meals",

price:161,

image:"images/menu/Aloo Tikki Meal .png",

description:"One Aloo Tikki Burger + Regular Salted Fries + Campa Pet Bottle 200 ml"

},

{

id:41,

name:"Tandoori Potato Cheese Wedges Combo",

category:"Combos",

price:141,

image:"images/menu/Tandoori Potato Combo.png",

description:"One Portion Tandoori Potato Cheese Wedges + Campa Pet Bottle 200 ml"

},

{

id:42,

name:"Super Veggie Burger Combo",

category:"Combos",

price:121,

image:"images/menu/Super Veggie Burger Combo.png",

description:"One Super Veggie Burger + Campa Pet Bottle 200 ml"

},

{

id:43,

name:"Crispy Chicken Cheese Burger Combo",

category:"Combos",

price:151,

image:"images/menu/Crispy Chicken Cheese Burger Combo .png",

description:"One Crispy Chicken Cheese Burger + Campa Pet Bottle 200 ml"

},


{

id:44,

name:"Mexican Chicken Wrap Combo",

category:"Combos",

price:161,

image:"images/menu/Mexican Chicken Wrap Combo .png",

description:"One Mexican Chicken Wrap + Campa Pet Bottle 200 ml"

},


{

id:45,

name:"Cheese Dip",

category:"Dips",

price:31,

image:"images/menu/cheese Dip.png",

description:"Perfect for Cheesy Cravings"

},

{

id:45,

name:"Tandoori Dip",

category:"Dips",

price:21,

image:"images/menu/tandoori mayo Dip.png",

description:"The tangy Taste with makes your day."

},


{

id:45,

name:"Mayo Dip",

category:"Dips",

price:21,

image:"images/menu/mayo Dip.png",

description:"The Creamy Delight."

},


{

id:45,

name:"Mint Dip",

category:"Dips",

price:329,

image:"images/menu/mint Dip.png",

description:"The most minty mayo."

},

{

id:45,

name:"BBQ Dip",

category:"Dips",

price:21,

image:"images/menu/BBQ Dip.png",

description:"A rich and smoky BBQ Sauce Dip crafted with a perfect balance of tangy tomatoes, caramelized sweetness, and a hint of spice. Its bold, lip-smacking flavor adds a delicious kick to every biteâ€”perfect for pairing with fries, burgers, and crispy snacks."

},

];


/*===============================
GLOBAL VARIABLES
===============================*/

let cart=[];

let currentCategory="All";


const menuContainer=document.getElementById("menuContainer");

const cartBadge=document.getElementById("cartBadge");

const cartItems=document.getElementById("cartItems");

const cartTotal=document.getElementById("cartTotal");

const cartDrawer=document.getElementById("cartDrawer");


/*===============================
LOAD PRODUCTS
===============================*/

displayProducts(products);


/*===============================
DISPLAY PRODUCTS
===============================*/

function displayProducts(data){

menuContainer.innerHTML="";

data.forEach(product=>{

menuContainer.innerHTML+=`

<div class="menu-card">

<div class="menu-image">

<img src="${product.image}">

</div>

<div class="menu-content">

<h3>${product.name}</h3>

<p>${product.description}</p>

<div class="price">

<h4>₹${product.price}</h4>

</div>

<button

class="add-btn"

onclick="addToCart(${product.id})">

ADD TO CART

</button>

</div>

</div>

`;

});

}


/*===============================
ADD TO CART
===============================*/

function addToCart(id){

const item=products.find(p=>p.id===id);

const exist=cart.find(p=>p.id===id);

if(exist){

exist.qty++;

}

else{

cart.push({

...item,

qty:1

});

}

updateCart();

showToast(item.name+" added");

}


/*===============================
UPDATE BADGE
===============================*/

function updateBadge(){

let count=0;

cart.forEach(item=>{

count+=item.qty;

});

cartBadge.innerText=count;

}

/*====================================================
SOHA BURGERS
SCRIPT.JS
PART 2 OF 5
SHOPPING CART
====================================================*/


/*===============================
UPDATE CART
===============================*/

function updateCart(){

    updateBadge();

    renderCart();

}


/*===============================
RENDER CART
===============================*/

function renderCart(){

    cartItems.innerHTML="";

    let total=0;

    if(cart.length===0){

        cartItems.innerHTML=`
            <div class="empty-cart">
                <h3>Your cart is empty</h3>
                <p>Add some delicious burgers 🍔</p>
            </div>
        `;

        cartTotal.innerText="0";

        return;

    }

    cart.forEach(item=>{

        total += item.price * item.qty;

        cartItems.innerHTML += `

        <div class="cart-item">

            <img src="${item.image}" alt="${item.name}">

            <div class="cart-info">

                <h4>${item.name}</h4>

                <div class="cart-price">
                    ₹${item.price}
                </div>

                <div class="cart-controls">

                    <button onclick="decreaseQty(${item.id})">−</button>

                    <span>${item.qty}</span>

                    <button onclick="increaseQty(${item.id})">+</button>

                </div>

                <button
                    class="remove-item"
                    onclick="removeItem(${item.id})">

                    Remove

                </button>

            </div>

        </div>

        `;

    });

    cartTotal.innerText=total;

}


/*===============================
INCREASE QUANTITY
===============================*/

function increaseQty(id){

    const item=cart.find(product=>product.id===id);

    if(item){

        item.qty++;

    }

    updateCart();

}


/*===============================
DECREASE QUANTITY
===============================*/

function decreaseQty(id){

    const item=cart.find(product=>product.id===id);

    if(!item) return;

    item.qty--;

    if(item.qty<=0){

        cart=cart.filter(product=>product.id!==id);

    }

    updateCart();

}


/*===============================
REMOVE ITEM
===============================*/

function removeItem(id){

    cart=cart.filter(product=>product.id!==id);

    updateCart();

    showToast("Item removed");

}


/*===============================
OPEN CART
===============================*/

document.querySelector(".cart-icon").onclick=function(){

    cartDrawer.classList.add("open");

};


/*===============================
CLOSE CART
===============================*/

document.getElementById("closeCart").onclick=function(){

    cartDrawer.classList.remove("open");

};


/*===============================
CLOSE CART ON OUTSIDE CLICK
===============================*/

document.addEventListener("click",function(e){

    if(

        cartDrawer.classList.contains("open") &&

        !cartDrawer.contains(e.target) &&

        !e.target.closest(".cart-icon")

    ){

        cartDrawer.classList.remove("open");

    }

});


/*===============================
INITIAL CART LOAD
===============================*/

updateCart();


/*====================================================
SOHA BURGERS
SCRIPT.JS
PART 3 OF 5
SEARCH • FILTER • TOTALS • COUPON
====================================================*/


/*===============================
CATEGORY FILTER
===============================*/

const categoryButtons=document.querySelectorAll(".categories button");

categoryButtons.forEach(button=>{

    button.addEventListener("click",function(){

        categoryButtons.forEach(btn=>btn.classList.remove("active"));

        this.classList.add("active");

        currentCategory=this.innerText;

        filterProducts();

    });

});


/*===============================
SEARCH
===============================*/

const search=document.querySelector(".search");

search.addEventListener("keyup",filterProducts);


/*===============================
FILTER PRODUCTS
===============================*/

function filterProducts(){

    const keyword=search.value.toLowerCase();

    const filtered=products.filter(product=>{

        const matchCategory=

        currentCategory==="All"

        ||

        product.category===currentCategory;

        const matchSearch=

        product.name.toLowerCase().includes(keyword)

        ||

        product.description.toLowerCase().includes(keyword);

        return matchCategory && matchSearch;

    });

    if(filtered.length===0){

        menuContainer.innerHTML=`

        <div class="no-products">

            <h2>No Products Found</h2>

            <p>Try another search.</p>

        </div>

        `;

        return;

    }

    displayProducts(filtered);

}


/*===============================
GST & DELIVERY
===============================*/

const GST_PERCENT=5;

const DELIVERY_CHARGE=40;

let couponDiscount=0;


/*===============================
CALCULATE TOTAL
===============================*/

function calculateCart(){

    let subtotal=0;

    cart.forEach(item=>{

        subtotal+=item.price*item.qty;

    });

    const gst=Math.round(subtotal*GST_PERCENT/100);

    const delivery=

    subtotal===0

    ?0

    :DELIVERY_CHARGE;

    let total=

    subtotal+

    gst+

    delivery-

    couponDiscount;

    if(total<0){

        total=0;

    }

    return{

        subtotal,

        gst,

        delivery,

        discount:couponDiscount,

        total

    };

}


/*===============================
UPDATE TOTALS
===============================*/

function updateTotals(){

    const bill=calculateCart();

    const subtotalElement=document.getElementById("subtotal");

    const gstElement=document.getElementById("gst");

    const deliveryElement=document.getElementById("delivery");

    const discountElement=document.getElementById("discount");

    const grandElement=document.getElementById("grandTotal");

    if(subtotalElement){

        subtotalElement.innerText="₹"+bill.subtotal;

    }

    if(gstElement){

        gstElement.innerText="₹"+bill.gst;

    }

    if(deliveryElement){

        deliveryElement.innerText="₹"+bill.delivery;

    }

    if(discountElement){

        discountElement.innerText="-₹"+bill.discount;

    }

    if(grandElement){

        grandElement.innerText="₹"+bill.total;

    }

    cartTotal.innerText=bill.total;

}


/*===============================
OVERRIDE UPDATE CART
===============================*/

const oldUpdateCart=updateCart;

updateCart=function(){

    updateBadge();

    renderCart();

    updateTotals();

};


/*===============================
COUPON
===============================*/

function applyCoupon(){

    const input=document.getElementById("coupon");

    if(!input){

        return;

    }

    const code=input.value.trim().toUpperCase();

    if(code==="SOHA100"){

        couponDiscount=100;

        showToast("₹100 Discount Applied");

    }

    else if(code==="WELCOME50"){

        couponDiscount=50;

        showToast("₹50 Discount Applied");

    }

    else{

        couponDiscount=0;

        showToast("Invalid Coupon");

    }

    updateTotals();

}


/*===============================
APPLY BUTTON
===============================*/

const applyButton=document.querySelector(".apply-btn");

if(applyButton){

    applyButton.addEventListener("click",applyCoupon);

}


/*===============================
INITIAL FILTER
===============================*/

filterProducts();


/*====================================================
SOHA BURGERS
SCRIPT.JS
PART 4 OF 5
CHECKOUT • WHATSAPP • LOCAL STORAGE
====================================================*/


/*================================
LOCAL STORAGE
================================*/

function saveCart(){

    localStorage.setItem(

        "sohaCart",

        JSON.stringify(cart)

    );

}

function loadCart(){

    const saved=localStorage.getItem("sohaCart");

    if(saved){

        cart=JSON.parse(saved);

    }

    updateCart();

}

loadCart();


/*================================
AUTO SAVE
================================*/

const originalUpdateCart=updateCart;

updateCart=function(){

    originalUpdateCart();

    saveCart();

};


/*================================
CHECKOUT BUTTON
================================*/

const checkoutButton=document.getElementById("checkout");

if(checkoutButton){

checkoutButton.addEventListener("click",openCheckout);

}


function openCheckout(){

    if(cart.length===0){

        showToast("Your cart is empty");

        return;

    }

    document.querySelector(".checkout-modal").style.display="flex";

}


/*================================
CLOSE CHECKOUT
================================*/

function closeCheckout(){

document.querySelector(".checkout-modal").style.display="none";

}


/*================================
ORDER NUMBER
================================*/

function generateOrderID(){

    return "SOHA-"+

    Math.floor(

        100000+

        Math.random()*900000

    );

}


/*================================
PLACE ORDER
================================*/

function placeOrder(){

const customerName=document.getElementById("customerName").value.trim();

const phone=document.getElementById("customerPhone").value.trim();

const address=document.getElementById("customerAddress").value.trim();

const instructions=document.getElementById("customerNote").value.trim();


if(customerName===""){

showToast("Enter your name");

return;

}

if(phone.length<10){

showToast("Enter valid phone");

return;

}

if(address===""){

showToast("Enter address");

return;

}


const bill=calculateCart();

const orderID=generateOrderID();

let message="";

message+="🍔 *SOHA BURGERS ORDER*%0A%0A";

message+="Order ID : "+orderID+"%0A%0A";

message+="Customer : "+customerName+"%0A";

message+="Phone : "+phone+"%0A";

message+="Address : "+address+"%0A%0A";

message+="*Items*%0A";


cart.forEach(item=>{

message+=

item.name+

" x "+

item.qty+

" = ₹"+

(item.qty*item.price)+

"%0A";

});


message+="%0A";

message+="Subtotal : ₹"+bill.subtotal+"%0A";

message+="GST : ₹"+bill.gst+"%0A";

message+="Delivery : ₹"+bill.delivery+"%0A";

message+="Discount : ₹"+bill.discount+"%0A";

message+="--------------------%0A";

message+="TOTAL : ₹"+bill.total+"%0A%0A";

if(instructions!=""){

message+="Instructions : "+instructions+"%0A%0A";

}

message+="Thank You ❤️";


window.open(

"https://wa.me/918826652060?text="+message,

"_blank"

);


cart=[];

couponDiscount=0;

updateCart();

saveCart();

closeCheckout();

showToast("Redirecting to WhatsApp");

}


/*================================
PLACE ORDER BUTTON
================================*/

const placeButton=document.querySelector(".place-order");

if(placeButton){

placeButton.addEventListener(

"click",

placeOrder

);

}


/*================================
ESC KEY
================================*/

document.addEventListener(

"keydown",

function(e){

if(e.key==="Escape"){

const modal=document.querySelector(".checkout-modal");

if(modal){

modal.style.display="none";

}

}

});


/*================================
CLICK OUTSIDE MODAL
================================*/

const checkoutModal=document.querySelector(".checkout-modal");

if(checkoutModal){

checkoutModal.addEventListener(

"click",

function(e){

if(e.target===checkoutModal){

closeCheckout();

}

});

}


/*====================================================
SOHA BURGERS
SCRIPT.JS
PART 5 OF 5
FINAL FEATURES
====================================================*/


/*================================
TOAST NOTIFICATION
================================*/

function showToast(message){

    let toast=document.querySelector(".toast");

    if(!toast){

        toast=document.createElement("div");

        toast.className="toast";

        document.body.appendChild(toast);

    }

    toast.innerText=message;

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },2500);

}


/*================================
BACK TO TOP BUTTON
================================*/

const topButton=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(topButton){

        if(window.scrollY>500){

            topButton.style.display="block";

        }

        else{

            topButton.style.display="none";

        }

    }

});


if(topButton){

    topButton.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}


/*================================
NAVBAR SHADOW
================================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>30){

        header.style.boxShadow="0 10px 30px rgba(0,0,0,.12)";

    }

    else{

        header.style.boxShadow="0 2px 15px rgba(0,0,0,.08)";

    }

});


/*================================
SCROLL ANIMATION
================================*/

const animatedElements=document.querySelectorAll(

".fade-up,.fade-left,.fade-right,.zoom"

);

function revealOnScroll(){

    animatedElements.forEach(element=>{

        const top=element.getBoundingClientRect().top;

        if(top<window.innerHeight-100){

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();


/*================================
LAZY LOAD IMAGES
================================*/

const images=document.querySelectorAll("img");

const imageObserver=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const img=entry.target;

            if(img.dataset.src){

                img.src=img.dataset.src;

                img.removeAttribute("data-src");

            }

            imageObserver.unobserve(img);

        }

    });

});

images.forEach(img=>{

    if(img.dataset.src){

        imageObserver.observe(img);

    }

});


/*================================
FLOATING WHATSAPP
================================*/

const whatsapp=document.querySelector(".whatsapp");

if(whatsapp){

    whatsapp.addEventListener("click",()=>{

        showToast("Opening WhatsApp...");

    });

}


/*================================
LOADER
================================*/

window.addEventListener("load",()=>{

    const loader=document.querySelector(".loader-wrapper");

    if(loader){

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.remove();

        },500);

    }

});


/*================================
KEYBOARD SHORTCUTS
================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key.toLowerCase()==="c"){

        if(!cartDrawer.classList.contains("open")){

            cartDrawer.classList.add("open");

        }

    }

});


/*================================
CLEAR CART
================================*/

function clearCart(){

    if(confirm("Clear your cart?")){

        cart=[];

        couponDiscount=0;

        updateCart();

        saveCart();

        showToast("Cart cleared");

    }

}


/*================================
AUTO YEAR
================================*/

const year=document.getElementById("year");

if(year){

    year.innerText=new Date().getFullYear();

}


/*================================
WELCOME MESSAGE
================================*/

setTimeout(()=>{

    showToast("Welcome to SOHA BURGERS 🍔");

},800);


/*================================
INITIALIZE
================================*/

updateCart();

updateTotals();

revealOnScroll();

console.log("SOHA BURGERS Website Loaded Successfully.");

