/* constants */
// products listing
const gridItemCards = document.querySelector(".grid-item-cards");
// sort button
const drawerBottom = document.querySelector(".drawer-bottom");
const drawerBackdrop = document.querySelector(".drawer-backdrop");
const sortBtn = document.getElementById("sort-btn");

/* === RENDERING PRODUCTS =============*/
function createProductCard(product) {
    return `
    <section class="item-card">
            <div class="img">
                <img class="suit-img"
                    src='${product.url}'>
            </div>
            <div class="img-overlay">
                ${product.is_ad ? `<div class="pla-container">AD</div>` : ""}
                ${product.is_new ? ` <div class="newTag">new</div>` : ""}
                ${product.has_rating ? `<div class="ratings-container">
                    <span class="rating-text">${product.rating_text}</span>
                    <span class="icon-star good"></span>
                    <span>|</span>
                    <span class="rating-count">${product.rating_count}</span>
                </div>` : ""}
            </div>
            <div class="content-wrap">
                <div class="details">
                    <h3 class="details-title">${product.prod_title}</h3>
                    <span class="details-subtitle">${product.description}</span>
                    <div class="price-cnt">
                        <span class="new-price-cnt">
                            <img src="assets/svg/rupee-symbol.svg" alt="rupees symbol">
                            <span class="new-price">${product.price.orig_price - ((product.price.orig_price) * (product.price.discount_percentage) / 100)}</span>
                        </span>
                        <span class="old-price-cnt">
                            <img src="assets/svg/old-rupee-symbol.svg" alt="rupees symbol">
                            <span class="old-price">${product.price.orig_price}</span>
                        </span>
                        <span class="disc-off">
                            (<span class="disc-perc">${product.price.discount_percentage}</span>% OFF)
                        </span>
                    </div>
                    ${product.is_best_buy === true ? ` <div class="best-price">
                        <span class="bp-green-txt">Best Price</span>
                        <span class="bp-amount">
                            ₹2363
                        </span>
                        <span class="bp-grey-txt">with coupon</span>
                    </div>` : ""}
                </div>
                <div class="cw-like">
                    <img src="assets/svg/header-heart-icon.svg" alt="wishlist image">
                </div>
            </div>
            <div class="plpXceleratorInfoTag"></div>
        </section>

    `;
};


// function to render all the products to grid container
function renderProducts(productList) {
    gridItemCards.innerHTML = "";
    productList.forEach((product) => {
        gridItemCards.innerHTML += createProductCard(product)
    });
};
/* to render all the products from the product list to grid items */
renderProducts(products);
/* ================*/

sortBtn.addEventListener("click", openDrawer);
drawerBackdrop.addEventListener("click", closeDrawer);
function openDrawer() {
    drawerBottom.classList.add("open");
    drawerBackdrop.classList.add("active");
};
drawerBackdrop.addEventListener("click",closeDrawer);

function closeDrawer(){
    drawerBottom.classList.remove("open");
    drawerBackdrop.classList.remove("active");
}



