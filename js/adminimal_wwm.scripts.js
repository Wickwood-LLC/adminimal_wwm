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

      labelWidths();
      $(window).on("resize mresize DOMSubtreeModified", labelWidths);
    }
  }; 

})(jQuery, Drupal);
