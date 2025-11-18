/* constants */
// products listing
const gridItemCards = document.querySelector(".grid-item-cards");
// sort button
const sortBtn = document.getElementById("sort-btn");
const drawerBottom = document.querySelector(".drawer-bottom");
const drawerBackdrop = document.querySelector(".drawer-backdrop");
/* sorting */
const sortByPopularity = document.getElementById("sort-popularity");
const sortByLatest = document.getElementById("sort-latest");
const sortByDiscount = document.getElementById("sort-discount");
const sortByHigh2Low = document.getElementById("sort-price-high-low");
const sortByLow2High = document.getElementById("sort-price-low-high");
const sortByCusRating = document.getElementById("sort-customer-rating");
// each item
const sortItems = document.querySelectorAll(".sort-item");

// filter page
/* filter heading */
const clearAllBtn = document.getElementById("clear-all");
const filterBtn = document.getElementById("filter-btn");
const filterPage = document.querySelector(".filter-page");
const filterFilterCntDiv = document.querySelector(".filter-filterContent-div");
const querySelectorFilters = document.querySelector(".filters");
const categoriesContents = document.querySelector(".categories-contents");
const closeFilterPage = document.getElementById("close-filter");
const applyFilterBtn = document.getElementById("apply-filter");
/* filter options */
const filterOptionsContainer = document.querySelector(".filter-options");
/* current items shown after filteing and sorting */
let currentList = [...products];

/* selected items set */
let selectedFilters = {};


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
                            <span class="new-price">${(product.price.orig_price - ((product.price.orig_price) * (product.price.discount_percentage) / 100)).toFixed(0)}</span>
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
    currentList = [...productList]
    gridItemCards.innerHTML = "";
    productList.forEach((product) => {
        gridItemCards.innerHTML += createProductCard(product)
    });
};
/* to render all the @products from the product list to grid items */
renderProducts(currentList);
/* ================*/

/* @sort opening drawer */
sortBtn.addEventListener("click", () => {
    drawerBottom.classList.add("open");
    drawerBackdrop.classList.add("active");
});



/* closing sort drawer */
drawerBackdrop.addEventListener("click", () => {
    drawerBottom.classList.remove("open");
    drawerBackdrop.classList.remove("active");
});



/* @filter opening  */
filterBtn.addEventListener("click", openFilterPage);
function openFilterPage() {
    filterPage.classList.add("open");
};
/* @close filter page */
closeFilterPage.addEventListener("click", () => {
    filterPage.classList.remove("open");
});

/* ===========Filter page generation =========== */

// to generate an object of filters for each category with count value from products

/* function to render all filter optionns */
function renderAllFilterOptions(filterObj) {
    filterOptionsContainer.innerHTML = "";
    Object.entries(filterObj).forEach(([filterName, FilterOptions]) => {
        const section = document.createElement("div");
        section.classList.add("filter-option-section");
        section.id = `filter-section-${filterName}`;
        section.style.display = "none";
        /* adding search bar in case of color , brand .... */
        if (['size', 'color', 'brand'].includes(filterName)) {
            const rippleCnt = document.createElement("div");
            rippleCnt.classList.add("ripple-container", "col-2");

            const searchDiv = document.createElement("div");
            searchDiv.classList.add("client-search");
            searchDiv.id = `${filterName}-search`;
            searchDiv.innerHTML =
                `
            <input class="search-input" type="text" placeholder="Search by ${filterName}">
            <img class="search-icon" src="assets/svg/filter/search-bar-icon.svg"
                                    alt="search bar icon">
            `;
            rippleCnt.appendChild(searchDiv);
            section.appendChild(rippleCnt);


        };


        const scrollDiv = document.createElement("div");
        scrollDiv.classList.add("scroll-container");

        const ul = document.createElement("ul");
        ul.classList.add("categories-contents", "col-2");

        Object.entries(FilterOptions).forEach(([Option, count]) => {
            const li = document.createElement("li");
            li.classList.add("category-list");

            const isSelected = selectedFilters[filterName]?.has(Option);
            li.innerHTML = `
            <label for="${Option}" class="category-list-item ${isSelected ? 'selected-option' : ''}">
            <!-- add [checked] to input to show tick -->
                <input class="filter-checkbox" type="checkbox" name="${Option}" id="${Option}" ${isSelected ? 'checked' : ''}>
                <div class="checkbox-indicator"></div> 
                <div class="filter-value ">${Option}</div>
                <span class="filter-count">${count}</span>
            </label> 
            `;
            ul.appendChild(li);
        });
        scrollDiv.appendChild(ul);
        section.appendChild(scrollDiv);
        filterOptionsContainer.appendChild(section);
    });
};



/* generate keys and for each key create object when onclick */
function renderFilters(filterObj) {
    let keys = Object.keys(filterObj);
    keys.forEach((filter) => {
        let li = document.createElement("li");
        li.classList.add("filter-by");

        li.textContent = filter.replace("_", " ");
        li.textContent = li.textContent.charAt(0).toUpperCase() + li.textContent.slice(1);
        li.addEventListener("click", () => {
            selectFilter(li);
            showFilter(filter);
            attachFilterEvents(filter);
        });
        querySelectorFilters.appendChild(li);
    });
};

// function to select first filter
function selectFilter(selectedFilter) {
    const allFilters = document.querySelectorAll(".filter-by");
    allFilters.forEach((filterName) => {
        filterName.classList.remove("selected");
    });
    selectedFilter.classList.add("selected");
}

/* show filter options when selecting an item */
function showFilter(filterName) {
    document.querySelectorAll(".filter-option-section").forEach((filterSection) => {
        filterSection.style.display = "none";
    });
    const filter =
        document.getElementById(`filter-section-${filterName}`);
    filter.style.display = "block";
};


/* getting the filter object generated form the products */
let filterObj = generateFilters(currentList);
/* rendering filter page */
renderFilters(filterObj);
renderAllFilterOptions(filterObj);
// showing the first filter by default when opening filter page
const firstFilterObj = Object.keys(filterObj)[0];

if (firstFilterObj) {
    const firstFilter = document.querySelectorAll(".filter-by")[0];
    selectFilter(firstFilter);
    showFilter(firstFilterObj);
    attachFilterEvents(firstFilterObj);
}

/* click events on filter options - creting sets for each filtername and also adding checkboxes */
function attachFilterEvents(filterName) {
    /* this filterCheckbox are not generated yet to put it on the top */
    const filterCheckBox = document.querySelectorAll(`#filter-section-${filterName} .filter-checkbox`);

    filterCheckBox.forEach((checkbox) => {
        checkbox.addEventListener("change", (e) => {
            if (!selectedFilters[filterName]) {
                selectedFilters[filterName] = new Set();
            }
            if (checkbox.checked) {
                checkbox.closest(".category-list").classList.add("selected-option");
                checkbox.classList.add("checked");
                selectedFilters[filterName].add(checkbox.id);
            } else {
                checkbox.closest(".category-list").classList.remove("selected-option");
                checkbox.classList.remove("checked");
                selectedFilters[filterName].delete(checkbox.id);
            }
            // console.log("selected filters:", selectedFilters);

        });
    });
};

/* function to clear all selected filters */
clearAllBtn.addEventListener("click", () => {
    selectedFilters = {};

    // to disable tick mark i need to remove checked from all filter-checkbox
    document.querySelectorAll(".filter-checkbox").forEach((checkbox) => {
        checkbox.checked = false;
        checkbox.classList.remove("checked");
    });
    // to disable bold text i need to remove all sected-option from category-list li items
    document.querySelectorAll(".category-list").forEach((catList) => {
        catList.classList.remove("selected-option");
    });
    currentList = [...products];
    renderProducts(currentList);
});


// function to @apply those filters
applyFilterBtn.addEventListener("click", () => {
    console.log("selected filters:", selectedFilters);
    let filteredList = [...products];

    for (let [filterName, filterOption] of Object.entries(selectedFilters)) {
        if (filterOption.size === 0) continue;

        filteredList = filteredList.filter((item) => {
            let productValue = item[filterName];
            // i dont have a discount_range key in products so i have handle that
            if (filterName === "discount_range") {
                return [...filterOption].some((rangeString) => {
                    const num = parseInt(rangeString);
                    return item.price.discount_percentage >= num;
                });
            }
            if (Array.isArray(productValue)) {
                return [...filterOption].some((selectedValue) =>
                    productValue.includes(selectedValue)
                );
            }
            return filterOption.has(productValue);

        });
    }
    currentList = filteredList;
    console.log(`filtered `, currentList);
    renderProducts(currentList);

    filterPage.classList.remove("open");
});

/* @sorting */
// item selection 
sortItems.forEach((item) => {
    item.addEventListener("click", () => {
        sortItems.forEach((item) => item.classList.remove("selected"));
        item.classList.add("selected");
    })
});
// sorting by discount percentage hight to low
sortByDiscount.addEventListener("click", () => {
    currentList = [...currentList].sort((a, b) => {
        return b.price.discount_percentage - a.price.discount_percentage
    });
    renderProducts(currentList);
});

// soriting by new tag or added latest to list
sortByLatest.addEventListener("click", () => {
    currentList = [...currentList].sort((a, b) => {

        if (b.is_new != a.is_new) { // if both has is_new or both dosent have is_new then latest id first
            //  if either one has is_new then latest is new is put first
            return b.is_new - a.is_new;
        }
        return b.id - a.id;
    });
    renderProducts(currentList);
});
// sorting by no.of ratings
sortByPopularity.addEventListener("click", () => {
    currentList = [...currentList].sort((a, b) => {
        const aRatngs = a.has_rating ? a.rating_count : -1;
        const bRatngs = b.has_rating ? b.rating_count : -1;
        return bRatngs - aRatngs;
    });
    renderProducts(currentList);
});

// soting by price high to low (discounted price is the selling price)
sortByHigh2Low.addEventListener("click", () => {
    currentList = [...currentList].sort((a, b) => {
        return b.price.discounted_price - a.price.discounted_price;
    });
    renderProducts(currentList);
});
// soting by price low to high (discounted price is the selling price)
sortByLow2High.addEventListener("click", () => {
    currentList = [...currentList].sort((a, b) => {
        return a.price.discounted_price - b.price.discounted_price;
    });
    renderProducts(currentList);
});
// sorting by customer rating
sortByCusRating.addEventListener("click", () => {
    currentList = [...currentList].sort((a, b) => {
        const aRatngs = a.has_rating ? a.rating_text : -1;
        const bRatngs = b.has_rating ? b.rating_text : -1;
        return bRatngs - aRatngs;
    });
    renderProducts(currentList);
});