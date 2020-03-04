function toggleSidebar(s) {
    var side = s;
    var sideClass = "";
    var sideId = "";
    var sideBarOpen = $(".app").hasClass("sidebar-open");

    // Set side class and id for left and right
    if (side == "left") {
        sideClass = "sidebar-left-open";
        sideId = "#appSidebarLeft";
    };
    if (side == "right") {
        sideClass = "sidebar-right-open";
        sideId = "#appSidebarRight";
    };

    //console.log("side: " + side);

    $(sideId).toggleClass("d-none");

    // Toggle sidebar open or closed
    $(".app").toggleClass(sideClass).toggleClass("sidebar-open");
    
};

function toggleSidebarContent(c) {
    var contentName = c;
    var contentId = "";

    // Set content id and toggle visibility
    contentId = "#" + contentName;
    //console.log("contentId: " + contentId);
    $(contentId).toggleClass("active d-none");
};


$( document ).ready(function() {

    /* ==============================
    CLOSE SIDEBAR
    ============================== */
    $(".close-sidebar").on('click', function() {
        var s = "";
        var c = "";

        s = $(this).attr("data-sidebar-side");
        c = $(this).parents(".app-sidebar").find(".sidebar-content.active").attr("id");

        console.log("close s: " + s);
        console.log("close c: " + c);

        toggleSidebarContent(c);
        toggleSidebar(s);
    });


    /* ==============================
    COACH PROFILE
    ============================== */

    $(".view-coach-profile").on('click', function() {
        var s = "left";
        var c = "coachProfile";
        var coach = "";

        coach = $(this).attr("data-coach");

        c = c + coach;

        toggleSidebarContent(c);
        toggleSidebar(s);
    });


    /* ==============================
    COACHEE PROFILE
    ============================== */

    $(".view-coachee-profile").on('click', function() {
        var s = "left";
        var c = "coacheeProfile";

        toggleSidebarContent(c);
        toggleSidebar(s);
    });

}); // end document.ready