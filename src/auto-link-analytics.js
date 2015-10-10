function autoLinkAnalytics(token) {
  "use strict";

  function setupAnalytics() {
    if (typeof ga === 'undefined') {
      console.log("Initialising Google analytics");
      (function(i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function() {
          (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
          m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
      })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
    } else {
      console.log("Test mode");
    }

    ga('create', token, 'auto');
    ga('send', 'pageview');
  }

  function linkClickHandler() {
    var link = $(this);
    ga('send', 'event', 'link', link.text(), link.attr('href'));
  };

  setupAnalytics();
  $('a').click(linkClickHandler);
}
