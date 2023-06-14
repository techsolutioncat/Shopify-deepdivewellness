$(window).on('load', function() {
    // Customize loox product rating.
    const raters = $('#loox_product-rating').data('raters');
    $('#loox_product-rating .loox-rating-label').addClass('fs-15 fw-400 font__Poppins');
    $('#loox_product-rating .loox-rating-label').css({ 'margin-left': '10px', 'color': '#242424' });
    $('#loox_product-rating .loox-rating-label').text('(' + raters + ' Reviews)');
});

    // Tab action script
$(document).ready(function() {
    const tabs = document.querySelectorAll("[data-tab-target]");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            tabs.forEach((tab) => {
            tab.classList.remove("active");
            });
            tab.classList.add("active");
            tabContents.forEach((tabContent) => {
            tabContent.classList.remove("active");
            });
            const target = document.querySelector(tab.dataset.tabTarget);
            target.classList.add("active");
        });
    });
});
