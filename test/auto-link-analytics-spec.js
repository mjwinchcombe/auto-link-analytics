var ga;

describe('auto-links-analytics tests', function() {
  "use strict";
  beforeEach(function() {
    ga = jasmine.createSpy();
  });

  describe('Google analytics initialisation', function() {

    var token = 'UA-68656040-1';

    beforeEach(function() {
      autoLinkAnalytics(token);
    });

    it("that analytics are created with the correct token", function() {
      expect(ga).toHaveBeenCalledWith('create', token, 'auto');
    });

    it("that pageview is sent to analytics", function() {
      expect(ga).toHaveBeenCalledWith('send', 'pageview');
    });
  });

  describe("Links automatically updated to call analytics", function() {

    beforeEach(function() {
      jasmine.getFixtures().fixturesPath = 'base';
      loadFixtures('test/test.html')
    });

    it("that analytics not called when links havent been clicked", function() {
      expect(ga).not.toHaveBeenCalledWith('send', 'event', 'link', 'Google', 'http://www.google.com');
      expect(ga).not.toHaveBeenCalledWith('send', 'event', 'link', 'Yahoo', 'http://www.yahoo.com');
      expect(ga).not.toHaveBeenCalledWith('send', 'event', 'link', 'BBC', 'http://www.bbc.co.uk');
      expect(ga).not.toHaveBeenCalledWith('send', 'event', 'link', 'Amazon', 'http://www.amazon.co.uk');
    });

    it("that clicking a link calls analytics", function() {
      $('#googleLink').click();
      expect(ga).toHaveBeenCalledWith('send', 'event', 'link', 'Google', 'http://www.google.com');
      $('#yahooLink').click();
      expect(ga).toHaveBeenCalledWith('send', 'event', 'link', 'Yahoo', 'http://www.yahoo.com');
      $('#bbcLink').click();
      expect(ga).toHaveBeenCalledWith('send', 'event', 'link', 'BBC', 'http://www.bbc.co.uk');
      $('#amazonLink').click();
      expect(ga).toHaveBeenCalledWith('send', 'event', 'link', 'Amazon', 'http://www.amazon.co.uk');
    });
  });
});
