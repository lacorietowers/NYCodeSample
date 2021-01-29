/* this file is for www.mdek12.org */

(function ($) { $(document).ready(function(){

    //sets the timer for home page carousel
    $('.carousel').carousel({
  				interval: 5000
		    })
						
    //Hides and displays the Accessibility bar on click
			$(".accessibilityToggle").click(function(){
        	 if($("#Accessibility").hasClass('hide')) {       
				 $("#Accessibility").removeClass('hide');
			 }
    		else{
        	$("#Accessibility").addClass('hide');
    }
			});      

    //Scrolls past the slider to page content on click
			$("#skip").click(function() {
    				$('html, body').animate({
        				scrollTop: $("#mainContent").offset().top
    				}, 1000);
			});
			
    // Make Sidebar the same height as the main content
            var sidebarHeight = $('.mainContent').height();
            $('.rightContent').css('min-height', sidebarHeight + 'px');


    //hide documents and resources initially
            $("h4:contains('Documents')").toggleClass('con exp');
            $("h4:contains('Documents')").siblings('div.views-element-container').addClass('hide');
            $("h4:contains('Resources')").toggleClass('con exp');
            $("h4:contains('Resources')").siblings('div.views-element-container').addClass('hide');
            $("h4:contains('Document Links')").toggleClass('con exp');
            $("h4:contains('Document Links')").siblings('div.views-element-container').addClass('hide');


    //Shows and Hides Mobile Search Toggle on click
            $('.mobileSearchIcon').click(function () {
                $('.siteSearch').toggle();
            });

            $('.closeSearch img').click(function () {
                $('.siteSearch').hide();
            });

    // Add Placeholder attribute for search bar
            $("input.form-search").attr("placeholder", "Search this site...");

            

    // Don't follow links with just '#'
            $("a[href='']").attr("href", "JavaScript:Void(0);");



    /* Audience navigation Dropdown Dropdowns: Points to a page on smaller screens. Closes there audience menus when another is open */
    //Community

            $('#commlink').click(function (e) {
                if ($(window).width() < 900) {
                    window.location.href = "/community";

                }
                else {
                    $('#famlink').parent().children('.aud-dd').addClass('hidden');
                    $('#adminlink').parent().children('.aud-dd').addClass('hidden');
                    $('#edulink').parent().children('.aud-dd').addClass('hidden');
                    if ($(this).parent().children('.aud-dd').hasClass('hidden')) {
                        $(this).parent().children('.aud-dd').toggleClass('hidden');
                    }
                    else {
                        $(this).parent().children('.aud-dd').addClass('hidden');
                    }
                }
            });
    //Family
            $('#famlink').click(function (e) {
                if ($(window).width() < 900) {
                    window.location.href = "/family";

                }
                else {
                    $('#adminlink').parent().children('.aud-dd').addClass('hidden');
                    $('#commlink').parent().children('.aud-dd').addClass('hidden');
                    $('#edulink').parent().children('.aud-dd').addClass('hidden');
                    if ($(this).parent().children('.aud-dd').hasClass('hidden')) {
                        $(this).parent().children('.aud-dd').toggleClass('hidden');
                    }
                    else {
                        $(this).parent().children('.aud-dd').addClass('hidden');
                    }
                }
            });
    //Educators
            $('#edulink').click(function (e) {
                if ($(window).width() < 900) {
                    window.location.href = "/educators";

                }
                else {
                    $('#famlink').parent().children('.aud-dd').addClass('hidden');
                    $('#commlink').parent().children('.aud-dd').addClass('hidden');
                    $('#adminlink').parent().children('.aud-dd').addClass('hidden');
                    if ($(this).parent().children('.aud-dd').hasClass('hidden')) {
                        $(this).parent().children('.aud-dd').toggleClass('hidden');
                    }
                    else {
                        $(this).parent().children('.aud-dd').addClass('hidden');
                    }
                }
            });
    //Administrators
            $('#adminlink').click(function (e) {
                if ($(window).width() < 900) {
                    window.location.href = "/administrators";

                }
                else {
                    $('#famlink').parent().children('.aud-dd').addClass('hidden');
                    $('#commlink').parent().children('.aud-dd').addClass('hidden');
                    $('#edulink').parent().children('.aud-dd').addClass('hidden');
                    if ($(this).parent().children('.aud-dd').hasClass('hidden')) {
                        $(this).parent().children('.aud-dd').toggleClass('hidden');
                    }
                    else {
                        $(this).parent().children('.aud-dd').addClass('hidden');
                    }
                }
            });
    
    
}); })(jQuery);
