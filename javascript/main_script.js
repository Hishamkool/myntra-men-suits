document.addEventListener("DOMContentLoaded", async () => {

    let itemsList = [];
    const section = document.createElement("section");
    section.className = "item-card";

    try {
        const response = await fetch("data/items-list.json");
        const cards = await response.json();


    } catch (error) {
        console.error(`failed to fetch items ${error}`);
    }

});