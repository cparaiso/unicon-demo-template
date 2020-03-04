$( document ).ready(function() {

    /* ==============================
    TOOLTIPS
    ============================== */
    // Enable tooltips everywhere
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    /* ==============================
    POPOVERS
    ============================== */
    // Enable popovers everywhere
    $(function () {
        $('[data-toggle="popover"]').popover({
            trigger: 'focus'
        });
    })

    /* ==============================
    DROPDOWNS
    ============================== */
    // Enable Bootstrap dropdowns to update
    $(".dropdown--update-label .dropdown-menu .dropdown-item").click( function() {
        var item = $(this).text();
        //console.log("item: " + item);
        $(this).parents(".dropdown").find(".dropdown-toggle").text(item);
    });

    /* ==============================
    BUTTON STYLE RADIOS AND CHECKBOXES
    ============================== */
    // Enable clickable buttons for radio options
    $(".options-as-buttons .option-styled").click( function() {
        var checkbox = $(this).find("input");
        var isChecked = checkbox.is(":checked");

        if ( isChecked == true ) {
            // Already selected, unselect
            checkbox.prop("checked", false);
        } else {
            // Select
            checkbox.prop("checked", true);
        }
    });

    /* ==============================
    TAG LIST
    ============================== */
    // Toggle tags in tag list
    $('.tag-list .tag').on('click', function() {
        $(this).toggleClass("active");
    });

}); // end document.ready