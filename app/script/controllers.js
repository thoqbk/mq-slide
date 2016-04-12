'use strict';

/* Controllers */

var slideApp = angular.module( 'slideApp.controllers', [ ] );
slideApp.controller( 'SlideController', function( $scope ) {
    $scope.pages = [
        'start.html',
        'outline.html',
        'rubichat.html',
        'competitor-n-data.html',
        'install-rubichat.html',
        'issues.html',
        'solutions/title.html',
        'solutions/solution-01-multi-tier.html',
        "solutions/solution-01-with-load-balancer.html",
        "solutions/solution-01-disadvantages.html",
        "solutions/solution-01-disadvantages-02.html",
        "solutions/solution-02-service-bus.html",
        "solutions/solution-02-service-bus-muleesb.html",
        "mq/title.html",
        "mq/rabbitmq-introduction.html",
        "mq/rabbitmq-rubichat.html",
        "mq/hust-sis.html",
        "conclusion.html",
        'thank-you.html'
    ];
    var initialized = false;
    $scope.initialize = function() {
        if ( !initialized ) {
            Reveal.initialize( {
                controls: true,
                progress: true,
                history: true,
                center: true,
                theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
                transition: 'linear', // default/cube/page/concave/zoom/linear/fade/none

                // Optional libraries used to extend on reveal.js
                dependencies: [
                    { src: 'library/reveal/lib/js/classList.js', condition: function() {
                            return !document.body.classList;
                        } },
                    { src: 'library/reveal/plugin/markdown/marked.js', condition: function() {
                            return !!document.querySelector( '[data-markdown]' );
                        } },
                    { src: 'library/reveal/plugin/markdown/markdown.js', condition: function() {
                            return !!document.querySelector( '[data-markdown]' );
                        } },
                    { src: 'library/reveal/plugin/highlight/highlight.js', async: true, callback: function() {
                            hljs.initHighlightingOnLoad();
                        } },
                    { src: 'library/reveal/plugin/zoom-js/zoom.js', async: true, condition: function() {
                            return !!document.body.classList;
                        } },
                    { src: 'library/reveal/plugin/notes/notes.js', async: true, condition: function() {
                            return !!document.body.classList;
                        } }
                ]
            } );
            initialized = true;
        }
        return "";
    };
} );