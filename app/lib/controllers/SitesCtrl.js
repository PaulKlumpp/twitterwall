'use strict'

var cheerio = require('cheerio')

module.exports = function (app) {
  app.controller('SitesCtrl', function ($scope, $http, $timeout, $sce) {
    //var sites = $scope.config.sites.sort(Math.random.bind(Math))
    var sites = $scope.config.cineprog.sites


    function getAndSaveContent () {
      var snatchIt = ''
      $http.get($scope.sites.url).then(function (res) {
        //console.log('snatched: ' + res)


        var $ = cheerio.load(res.data)
        var snatchElementName = $scope.sites.snatchElement
        var snatchedHtml = $(snatchElementName).toString()
        $scope.sites.content = $sce.trustAsHtml(snatchedHtml);
        //$scope.sites.content = res.data

      })

    }

    function swap () {
      sites.unshift(sites.pop())

      $scope.sites = sites[0] // chose first in array after popping and shifting...

      getAndSaveContent()

      $timeout(swap, $scope.sites.duration || 1e4)

    }

    swap()
  })
}
