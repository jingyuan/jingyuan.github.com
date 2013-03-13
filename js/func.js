jQuery(document).ready(function($) {

if (jQuery().isotope) {
    jQuery(function () {
        var $container = jQuery('.isotope');

        // initialize Isotope
        $container.isotope({
            layoutMode: 'fitRows',
            animationEngine : 'jquery',
            animationOptions: {
                duration: 500,
                easing: 'linear',
                queue: false
            },
            itemSelector : '.work'
        });

        optionFilter = jQuery('#filter'),
        optionFilterLinks = optionFilter.find('a');
        optionFilterLinks.attr('href', '#');
        optionFilterLinks.click(function () {
            var selector = jQuery(this).attr('data-filter');
            // initialize Isotope
            $container.isotope({
                filter : '.' + selector
            });
            // Highlight the correct filter
            optionFilterLinks.removeClass('active');
            jQuery(this).addClass('active');
            return false;
        });
    });
}

$('.navigation li').each(function() {
    var href = $(this).find('a').attr('href');
    if (href === window.location.pathname) {
        $(this).addClass('current');
    }
});

$("select.dropdown-menu option").each(function() {
    this.selected = (this.value == window.location.pathname);
});

$('select.dropdown-menu').change(function() {
    if (this.value !== "")
        window.location.href = this.value;
});

});