let btn = document.getElementById("generatorBtn");
let ratingInput = document.getElementById("rating");
let ratingValue = document.getElementById("ratingValue");

/* Show rating value while sliding */
ratingInput.addEventListener("input", function () {
    ratingValue.innerText = ratingInput.value;
});

/* Get values & generate card */
btn.addEventListener("click", function () {

    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let description = document.getElementById("description").value;
    let image = document.getElementById("image").value;
    let category = document.getElementById("category").value;
    let rating = ratingInput.value;
    let warranty = document.getElementById("warranty").value;
    let company = document.getElementById("company").value;
    let returnPolicy = document.getElementById("returnPolicy").value;

    /* Show Card Data */
    document.getElementById("cardName").innerText = name || "Product Name";

    document.getElementById("cardPrice").innerText = price
        ? "Price: ₹" + price
        : "Price: ₹--";

    document.getElementById("cardDescription").innerText = description
        ? "Description: " + description
        : "Description: --";

    document.getElementById("cardCategory").innerText = category
        ? "Category: " + category
        : "Category: --";

    /* Rating with stars */
    let stars = "⭐".repeat(Math.floor(rating));
    document.getElementById("cardRating").innerText = 
        "Rating: " + stars + " " + rating + "/5";

    document.getElementById("cardWarranty").innerText = warranty
        ? "Warranty: " + warranty
        : "Warranty: --";

    document.getElementById("cardCompany").innerText = company
        ? "Company: " + company
        : "Company: --";

    document.getElementById("cardReturn").innerText = returnPolicy
        ? "Return Policy: " + returnPolicy
        : "Return Policy: --";

    /* Image Display */
    const cardImage = document.getElementById("cardImage");

    if (image) {
        cardImage.src = image;
        cardImage.onerror = function() {
            cardImage.src = "https://via.placeholder.com/300x200?text=Image+Not+Found";
        };
    } else {
        cardImage.src = "https://via.placeholder.com/300x200?text=No+Image";
    }
});