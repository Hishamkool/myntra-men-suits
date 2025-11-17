/* function to generate filters based on products we have */
function generateFilters() {
    let debug = false;
    // count each items for each category
    const countItem = (array, key) => array.reduce((acc, item) => {
        // first key
        const val = item[key];
        // if current key exists check for accumulators key  
        if (val) {
            // start wotj zero if the key is not in accumulator 
            acc[val] = (acc[val] || 0) + 1;
            return acc;
        }
    }, {});
    // creating category objects from product list
    const categories = countItem(products, "category");
    // object for brands
    const brands = countItem(products, "brand");
    // objects for colors
    const colors = countItem(products, "color");
    // discount items values
    let discountBucket = {};
    const discountRanges = [10, 20, 30, 40, 50, 60, 70, 80];
    discountRanges.forEach((disValue) => {
        const count = products.filter(p => p.price.discount_percentage >= disValue).length;
        discountBucket[`${disValue}% and higher`] = count;
    });



    /* loggin each filter item */
    if (debug) {
        console.log("categories", categories);
        console.log("brands", brands);
        console.log("colors", colors);
        console.log("discount bucket", discountBucket);
    }
    /* dont add spaces in key names because we are using querry selectors for selection set */
    const filterObject = {
        "category": categories,
        "brand": brands,
        "color": colors,
        "discount_range": discountBucket
    };


    console.log("Generated filter object:", filterObject);

    return filterObject;


}