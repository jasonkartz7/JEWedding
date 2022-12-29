(function ($) {
    $(document).ready(function () {
        "use strict";

        /*RSVP Form*/
        $(".submit_block_1").on("click", function (e) {
            send_form('block_1');
            return false;
        });

        function send_form(type) {

            var name = $("input#name_" + type).val();
            if (name == "") {
                $("input#name_" + type).css({ border: "1px solid red" });
                $("input#name_" + type).focus();
                return false;
            }
            var baby = $("input#email_" + type).val();
            if (baby == "") {
                $("input#email_" + type).css({ border: "1px solid red" });
                $("input#email_" + type).focus();
                return false;
            }
            var guest = $("input#guest_" + type).val();
            if (guest == "") {
                $("input#guest_" + type).css({ border: "1px solid red" });
                $("input#guest_" + type).focus();
                return false;
            }
            var attending = $("input#attending_" + type).val();
            if (attending == "") {
                $("input#attending_" + type).css({ border: "1px solid red" });
                $("input#attending_" + type).focus();
                return false;
            }

            var e = document.getElementById("guest_block_1");
            var value = e.value;
            var text = e.options[e.selectedIndex].text;

            var e = document.getElementById("attending_block_1");
            var value1 = e.value;
            var text = e.options[e.selectedIndex].text;

            var number = parseInt(document.getElementById("email_block_1").value);

            console.log(name)
            console.log(value)
            console.log(number)
            console.log(value1)
            console.log(form)
            
            

            var dataString = '&entry.1177868191=' + name + '&entry.826281268=' + value + '&entry.98540033=' + number + '&entry.558569460=' + value1;
            var form = $(this);
            var str = form.serialize();
            function sent() {
                $('#div_' + type).html("<div id='form_send_message'>Thank you :)</div>", 1500);
            }
            $.ajax({
                type: "POST",

                url: "https://docs.google.com/forms/d/e/1FAIpQLSewpYzrC_3_KSaB0qCc9RNubT5iuc2wQ9P0GD2liX3HHlce7Q/formResponse?usp=pp_url" + dataString,
                
                complete: sent
            });
        }

        /*ScrollR */
        if ($(window).width() > 1024) {
            var s = skrollr.init({
                forceHeight: false
            });
        }

        /*Gallery ColorBox */
        $('.gallery_txt a').colorbox({
            rel: 'gal',
            maxWidth: "100%",
        });

        /*Main Menu Button */
        $('.main_menu_btn').on("click", function (e) {
            $(this).toggleClass('main_menu_btn_open');
            $('.main_menu_block').toggleClass('main_menu_block_open').fadeToggle();
            $('.main_menu_block').find('.menu_wrapper').toggleClass('active');
            $('header .anim').toggleClass('active');
            e.preventDefault();
        });

        /* Section Background */
        $('section, .parallax').each(function () {
            var image = $(this).attr('data-image');
            if (image) {
                $(this).css('background-image', 'url(' + image + ')');
            }
        });

        /*ColorBox*/
        if ($(window).width() >= 760) {
            $(".youtube").colorbox({ iframe: true, innerWidth: 640, innerHeight: 390 });
        } else {
            $(".youtube").colorbox({ iframe: true, innerWidth: 320, innerHeight: 240 });
        }
        $(window).resize(function () {
            if ($(window).width() >= 760) {
                $(".youtube").colorbox({ iframe: true, innerWidth: 640, innerHeight: 390 });
            } else {
                $(".youtube").colorbox({ iframe: true, innerWidth: 320, innerHeight: 240 });
            }
        });

        /*Scroll Effect*/
        $('.intro_down, .go').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1000);
            e.preventDefault();
        });

        /*Show/Hide Photo in When&Where Block*/
        $('.photocamera span').on("click", function (e) {
            $(this).parents('section').find('.opacity').toggleClass('fade');
            $(this).parents('section').find('.over').fadeToggle();
            e.preventDefault();
        });

        /*Player*/
        $('.music').on("click", function (e) {
            $('.player').fadeToggle();
            e.preventDefault();
        });

        /*CountDown*/
        $('.married_coundown').countdown({ until: new Date("Dec 17, 2022 12:30:00") });

        /*OWL Carousel in Our Story*/
        $(".story_wrapper").owlCarousel({
            navigation: true, responsive: true, responsiveRefreshRate: 200, slideSpeed: 200,
            paginationSpeed: 200, rewindSpeed: 500, items: 3, itemsTablet: [768, 1], autoPlay: false,
            itemsMobile: [479, 1], itemsDesktopSmall: [980, 1], itemsDesktop: [1500, 2], mouseDrag: true
        });

        /*Gallery Carousel */
        $(".gallery_wrapper").owlCarousel({
            navigation: true, responsive: true, responsiveRefreshRate: 200, slideSpeed: 200,
            paginationSpeed: 200, rewindSpeed: 500, items: 3, itemsTablet: [768, 2], autoPlay: true,
            itemsMobile: [479, 1], mouseDrag: true
        });

        /*Registry Carousel */
        $(".registry_wrapper").owlCarousel({
            navigation: true, responsive: true, responsiveRefreshRate: 200, slideSpeed: 200, paginationSpeed: 200,
            rewindSpeed: 500, stopOnHover: true, autoHeight: true, items: 3, mouseDrag: true, autoPlay: true
        });

        /*The Crew Carousel*/
        $(".guest_wrapper").owlCarousel({
            navigation: true, responsive: true, responsiveRefreshRate: 200, slideSpeed: 200, paginationSpeed: 200,
            rewindSpeed: 500, stopOnHover: true, autoHeight: true, items: 4, mouseDrag: true, autoPlay: true
        });

        /*Slider Carousel*/
        $(".slider").owlCarousel({
            navigation: true,
            responsive: true,
            responsiveRefreshRate: 200,
            slideSpeed: 200,
            paginationSpeed: 200,
            rewindSpeed: 500,
            stopOnHover: false,
            autoHeight: true,
            singleItem: true,
            mouseDrag: true,
            autoPlay: true,
            transitionStyle: "fade"
        });

        /* Top Menu Click to Section */
        $('.sub_menu').find('a').on("click", function (e) {
            $('.sub_menu').find('a').removeClass('active');
            $(this).addClass('active');
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top + 1
            }, 1000);
            $(".main_menu_btn").trigger('click');
            e.preventDefault();
        });

        /*FireFly in Intro*/
        $.firefly({
            color: '#fff', minPixel: 1, maxPixel: 3, total: 55, on: '.into_firefly'
        });

        /* Refresh ScrollR */
        s.refresh($(".guest_wrapper, .our_story"));

    });
}(jQuery));