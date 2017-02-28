/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */

    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });



        it('has entries with URLs', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });


        it('has entries with names', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });



    describe('The menu', function() {



        it('is defaulted to hidden', function() {

            expect($('body')).toHaveClass('menu-hidden'); //menu shuld be hidden at start

        });

        it('should change visibility when menu icon is clicked', function() {
            $('.menu-icon-link').click(); //click menu icon
            expect($('body')).not.toHaveClass('menu-hidden'); //menu should not be hidden
            $('.menu-icon-link').click(); //click menu icon again
            expect($('body')).toHaveClass('menu-hidden'); //menu should now be hidden
        });

    });


    describe('Initial Entries', function() {


        beforeEach(function(done) {
            loadFeed(0, done);
        });
        it('should load at least one entry in the feed container', function() {
            var entry = $('.entry');
            console.log(entry.length);
            expect(entry.length).not.toBe(0); // insure that feed container isn't empty

        });
    });

    describe('New Feed Selection', function() {

        var currentFeed;
        var newFeed;


        beforeEach(function(done) {
            loadFeed(0, function() { //load initial feed
                currentFeed = $('.feed').html(); //store HTML content of feed into currentFeed
                loadFeed(1, function() { //load another feed
                    newFeed = $('.feed').html(); //store HTML content into newFeed
                    done();
                });

            });

        });

        it('changes content of feed container when new feed is clicked', function() {

            console.log(newFeed);
            console.log(currentFeed);
            expect(newFeed).not.toBe(currentFeed); //test value of newFeed against value of currentFeed

        });

    });
}());
