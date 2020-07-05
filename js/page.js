(function($) {

    $(document).ready(function() {

        var btn_theme = $("header .button .btn .dot");

        btn_theme.click(function(e) {
            e.preventDefault();

            $(this).toggleClass("on");

            $('body').toggleClass("lightmode");
        })

    });

})(jQuery);