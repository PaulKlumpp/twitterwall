'use strict'

var cheerio = require('cheerio')

module.exports = function (app) {
  app.controller('SitesCtrl', function ($scope, $http, $timeout, $sce) {
    //var sites = $scope.config.sites.sort(Math.random.bind(Math))
    var siteList = $scope.config.sites.siteList


    function getAndSaveContent () {
      var snatchIt = ''
      $http.get($scope.sites.url).then(function (res) {
        //console.log('snatched: ' + res)

        var $ = cheerio.load(res.data)
        var snatchElementName = $scope.sites.snatchElement
        var snatchedHtml = ''
        if (Array.isArray(snatchElementName)) {
          snatchElementName.forEach(function(entry) {
            var x = $(entry).toString()
            snatchedHtml = snatchedHtml + x
          })
        } else {
          snatchedHtml = $(snatchElementName).html()
        }

        $scope.sites.content = $sce.trustAsHtml(snatchedHtml);
        //$scope.sites.content = res.data

      })
    }

    function swap () {
      $scope.sites = siteList[0] // chose first in array

      // now move the first element to the end (with push). And remove the first element (with shift).
      siteList.shift(siteList.push(siteList[0]))

      getAndSaveContent()

      $timeout(swap, $scope.sites.duration || 15000)

    }

    swap()
  })
}
