(function($, Drupal) {
  /**
   * Automatic Field width resizing
   */
  Drupal.behaviors.labelWidths = {
    attach: function(context, settings) {
      function labelWidths() {
        $('.form-type-textfield, .form-type-number, .form-type-select, .form-type-email, .form-type-password').each(function() {
          var labelWidth = $(this).find('label').outerWidth(true) + 'px';
          $(this).find('input').css('--labelWidth', labelWidth);
        });
      }

      $(window).on("load resize mresize", function(){
        labelWidths;
      });
      setTimeout(labelWidths, 10000);
    }
  };

  /**
   * Sticky panel
   */
  // Drupal.behaviors.stickyPanel = {
  //   attach: function(context, settings) {
  //     var stickyTop;
  //     var windowTop;
  //     var currentPosition;
  //     var $panel;
  //     var panelWidth
  //     var topSpacing;

  //     $panel = $('#edit-advanced');

  //     sticky();
  //     $(window).on("resize mresize", function(){
  //       setTimeout(sticky, 500);
  //     });

  //     function sticky() {
  //         panelWidth = $panel.width();
  //         topSpacing = ((isNaN($('.toolbar-fixed #toolbar-bar').height())) ? 0 : $('#toolbar-bar').height()) + ((isNaN($('.toolbar-tray-horizontal.is-active').height())) ? 0 : $('.toolbar-tray-horizontal.is-active').height());
  //         $panel.css({
  //           position: "static",
  //         });

  //         stickyTop = $panel.offset().top; // tells how far our target element is from the top of the page
  //         windowTop = $(window).scrollTop(); // tells how far our screen is currently from the top of the page
  //         currentPosition = stickyTop - windowTop - topSpacing; // tells how far our target element is from where our screen is currently

  //         // console.log('Distance from top of page: ' + stickyTop);
  //         // console.log('Position on load ' + currentPosition);

  //         if ((window.matchMedia("(orientation: landscape)").matches) && (($(window).height() < 547))) {
  //           $(".header-container").css("height", "unset");
  //           return;
  //         }

  //         if (currentPosition < 0) { // if target element goes above the screen
  //           $panel.not('sticky-panel').addClass('sticky-panel');
  //           $panel.css({
  //             top: topSpacing,
  //             position: "",
  //             width: panelWidth,
  //           });
  //         } else {
  //           $panel.removeClass('sticky-panel');
  //           $panel.css({
  //             top: "",
  //             width: "unset",
  //           });
  //         }
  //         // console.log("Top spacing is " + topSpacing);
  //     }

  //     $(window).scroll(function() { // scroll event 
  //       if ((window.matchMedia("(orientation: landscape)").matches) && (($(window).height() < 547))) {
  //         return;
  //       }

  //       windowTop = $(window).scrollTop(); // tells how far our screen is currently from the top of the page
  //       currentPosition = stickyTop - windowTop - topSpacing; // tells how far our target element is from where our screen is currently

  //       // console.log('Distance from top of page: ' + stickyTop);
  //       // console.log('Current position: ' + currentPosition);

  //       if (currentPosition < 0) { // if target element goes above the screen
  //         $panel.not('sticky-panel').addClass('sticky-panel');
  //         $panel.css({
  //           top: topSpacing,
  //           position: "",
  //           width: panelWidth,
  //         });
  //       } else if (currentPosition >= 0) {
  //         $panel.removeClass('sticky-panel');
  //         $panel.css({
  //           top: "",
  //           width: "unset",
  //         });
  //       }
  //       // console.log("Top spacing is " + topSpacing);
  //     });
  //   }
  // }; 

})(jQuery, Drupal);
