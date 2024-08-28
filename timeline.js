(function ($) {
  $(function () {
    var agTimeline = $('.js-timeline'),
      agTimelineLine = $('.js-timeline_line'),
      agTimelineLineProgress = $('.js-timeline_line-progress'),
      agTimelinePoint = $('.js-timeline-job-card_point-box'),
      agTimelineItem = $('.js-timeline_item'),
      agOuterHeight = $(window).outerHeight(),
      agHeight = $(window).height(),
      f = -1,
      agFlag = false,
      agPosY = 0,
      i, a, n;

    $(window).on('scroll', function () {
      fnOnScroll();
    });

    $(window).on('resize', function () {
      fnOnResize();
    });

    setTimeout(function () {
      agTimeline = $('.js-timeline');
      agTimelineLine = $('.js-timeline_line');
      agTimelineLineProgress = $('.js-timeline_line-progress');
      agTimelinePoint = $('.js-timeline-job-card_point-box');
      agTimelineItem = $('.js-timeline_item');
      agOuterHeight = $(window).outerHeight();
      agHeight = $(window).height();
      f = -1;
      agFlag = false;
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
    
      var firstItemPoint = agTimelineItem.first().find(agTimelinePoint).offset();
      var firstItemOffset = agTimelineItem.first().offset();
      var lastItemPoint = agTimelineItem.last().find(agTimelinePoint).offset();
      var lastItemOffset = agTimelineItem.last().offset();
    
      if (firstItemPoint && firstItemOffset && lastItemPoint && lastItemOffset) {
        agTimelineLine.css({
          top: firstItemPoint.top - firstItemOffset.top,
          bottom: agTimeline.offset().top + agTimeline.outerHeight() - lastItemPoint.top,
        });
    
        if (f !== agPosY) {
          f = agPosY;
          fnUpdateProgress();
        }
      }
    }

    function fnUpdateProgress() {
      var agTop = agTimelineItem.last().find(agTimelinePoint).offset()?.top;

      i = agTop + agPosY - $(window).scrollTop();
      a = agTimelineLineProgress.offset()?.top + agPosY - $(window).scrollTop();
      n = agPosY - a + agOuterHeight / 2;
      if (i <= agPosY + agOuterHeight / 2) {
        n = i - a;
      }
      agTimelineLineProgress.css({ height: n + 'px' });

      agTimelineItem.each(function () {
        var agTop = $(this).find(agTimelinePoint).offset().top;

        if (agTop + agPosY - $(window).scrollTop() < agPosY + 0.5 * agOuterHeight) {
          $(this).addClass('js-timeline-active');
        } else {
          $(this).removeClass('js-timeline-active');
        }
      });
    }

    function fnUpdateFrame() {
      if (!agFlag) {
        requestAnimationFrame(fnUpdateWindow);
      }
      agFlag = true;
    }
  });
})(jQuery);