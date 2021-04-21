(function($, Drupal) {
  /**
   * Toolbar Spacing
   */
  Drupal.behaviors.labelWidths = {
    attach: function(context, settings) {
      function labelWidths() {
        $('.form-type-textfield, .form-type-number, .form-type-select, .form-type-email, .form-type-password').each(function() {
          var labelWidth = $(this).find('label').outerWidth(true) + 'px';
          $(this).find('input').css('flex', 'calc(100% - ' + labelWidth + ')');
        });
      }

      labelWidths();
      $(window).on("resize mresize", labelWidths);
    }
  }; 

})(jQuery, Drupal);
