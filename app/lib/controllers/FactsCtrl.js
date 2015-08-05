'use strict'

/* global document */

var markdown = require('markdown').markdown

module.exports = function (app) {
  app.controller('FactsCtrl', function ($animate, $scope, $timeout, $sce) {
    //var sites = $scope.config.sites.sort(Math.random.bind(Math))
    var facts = $scope.config.facts
    var factList = []

    function randomInterval (low, high) {
      return Math.floor(Math.random() * (high - low + 1) + low);
    }
    function svgify (icon) {
      return 'https://twemoji.maxcdn.com/svg/' + icon + '.svg'
    }

    function swapFact () {
      if (factList.length == 0) {
        // this array queue is empty, we either have shown all facts or this was a fresh start. populate it!
        factList = $scope.config.facts.factList.slice() // with slice() it becomes a copy, not a reference
      }

      var one = randomInterval(0, factList.length - 1)
      console.log("one: " + one)

      if (factList[one]) {
        var fact = factList[one]
        console.log("fact0: "+ fact )
        fact = markdown.toHTML(fact)
        console.log("fact1: "+ fact )

        $scope.fact = $sce.trustAsHtml(fact) // a random from above

        // now remove that element
        factList.splice(one, 1) // we're working on the copy 'factList'.
        console.log("factList.length: "+ factList.length)
        console.log("$scope.config.facts.factList.length: "+ $scope.config.facts.factList.length)

      }

      $timeout(swapFact, facts.duration || 15000)

    }

    swapFact()
  })
}
