$(window).on('load', function () {
    // Customize loox product rating.
    const raters = $('#loox_product-rating').data('raters');
    $('#loox_product-rating .loox-rating-label').addClass('fs-15 fw-400 font__Poppins');
    $('#loox_product-rating .loox-rating-label').css({ 'margin-left': '10px', 'color': '#242424' });
    $('#loox_product-rating .loox-rating-label').text('(' + raters + ' Reviews)');
});

// Tab action script
$(document).ready(function () {
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

    // Custom script for discount
    $('#section__maing-roduct .pack-group .pack-item').on('click', function () {
        var q = $(this).data('quantity');
        $('#section__maing-roduct .pack-group .pack-item').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
        $('#section__maing-roduct .product-form__quantity input.quantity__input').val(q);
    });

    $('button.product-form__submit').on('click', function() {
        $(this).parents('form[data-type=add-to-cart-form]').submit();
    });

    // FAQ custom script
    if ($('#section__maing-roduct .accordion__item__header').length > 0) {
        var active = 'active';
        $('#section__maing-roduct .accordion__item__header').click(function () {
          $(this).toggleClass(active);
        });
    }
});
