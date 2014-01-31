(function() {
  require.config({
    paths: {
      jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.0/jquery.min',
      modal: '/js/vendor/modal.min'
    },
    shim: {
      modal: {
        deps: ['jquery']
      }
    }
  });

  require(['jquery', 'modal'], function($) {
    $('#play-video').on('click', function() {
      return $('#modal').modal();
    });
    $("#modal").on($.modal.BEFORE_CLOSE, function() {
      var iframe;
      iframe = $('iframe#video');
      iframe.remove();
      return $('.fluid-width-video-wrapper').append(iframe);
    });
    return $(document).keyup(function(e) {
      if (e.keyCode === 27) {
        return $.modal.close();
      }
    });
  });

}).call(this);
