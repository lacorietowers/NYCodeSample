
(function ($) { $(document).ready(function(){
    //Switches the search bar icon and added class that controls the position of the search bar
    $('.searchIcon').click(function(){
        $('.frontSearch').toggleClass("open");
        $('#bs-example-navbar-collapse-1').find('img').toggle();
    });
  

    //Controlls the back to top button in the footer
    $("#scroll").click(function(){
        $("html, body").animate({ scrollTop: 0}, 600);
        return false;
    });
    
    //Switches out the back to top image on hover
    $("#scroll").mouseenter(function(){
        $("#scroll").attr("src", "/sites/default/files/images/to-top-hover%20(1).png");
    });
    $("#scroll").mouseleave(function(){
        $("#scroll").attr("src", "/sites/default/files/images/arrow-circle-boxed.png");
    });
    
    
    }); })(jQuery);
