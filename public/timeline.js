(function ($) {
  $(function () {
    
    $(window).on('scroll', function () {
      fnOnScroll();
    });

    $(window).on('resize', function () {
      fnOnResize();
    });

    var agTimeline = $('.js-timeline'),
      agTimelineLine = $('.js-timeline_line'),
      agTimelineLineProgress = $('.js-timeline_line-progress'),
      agTimelinePoint = $('.js-timeline-job-card_point-box'),
      agTimelineItem = $('.js-timeline_item'),
      agOuterHeight = $(window).outerHeight(),
      agHeight = $(window).height(),
      f = -1,
      agFlag = false;


      //TODO: is there a better way - this is to avoid issues with react where not all items are available yet
      setTimeout(
        function() 
        {
          //TODO: only load what is necessary

          agTimeline = $('.js-timeline');
          agTimelineLine = $('.js-timeline_line');
          agTimelineLineProgress = $('.js-timeline_line-progress');
          agTimelinePoint = $('.js-timeline-job-card_point-box');
          agTimelineItem = $('.js-timeline_item');
          agOuterHeight = $(window).outerHeight();
          agHeight = $(window).height();
          f = -1;
          agFlag = false;


          //TODO: can be probably shortened
        }, 2000);

    

    function fnOnScroll() {
      agPosY = $(window).scrollTop();

      fnUpdateFrame();
    }

    function fnOnResize() {
      agPosY = $(window).scrollTop();
      agHeight = $(window).height();

      fnUpdateFrame();
    }

    function fnUpdateWindow() {
      agFlag = false;

      agTimelineLine.css({
        top:
          agTimelineItem.first().find(agTimelinePoint).offset()?.top -
          agTimelineItem.first().offset()?.top,
        bottom:
          agTimeline.offset().top +
          agTimeline.outerHeight() -
          agTimelineItem.last().find(agTimelinePoint).offset()?.top,
      });

      f !== agPosY && ((f = agPosY), agHeight, fnUpdateProgress());
    }

    function fnUpdateProgress() {
      var agTop = agTimelineItem.last().find(agTimelinePoint).offset()?.top;

      i = agTop + agPosY - $(window).scrollTop();
      a = agTimelineLineProgress.offset()?.top + agPosY - $(window).scrollTop();
      n = agPosY - a + agOuterHeight / 2;
      i <= agPosY + agOuterHeight / 2 && (n = i - a);
      agTimelineLineProgress.css({ height: n + 'px' });

      agTimelineItem.each(function () {
        var agTop = $(this).find(agTimelinePoint).offset().top;

        agTop + agPosY - $(window).scrollTop() < agPosY + 0.5 * agOuterHeight
          ? $(this).addClass('js-timeline-active')
          : $(this).removeClass('js-timeline-active');
      });
    }

    function fnUpdateFrame() {
      agFlag || requestAnimationFrame(fnUpdateWindow);
      agFlag = true;
    }
  });

})(jQuery);
