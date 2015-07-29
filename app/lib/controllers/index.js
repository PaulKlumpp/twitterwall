'use strict'

module.exports = function (app) {
  require('./ScheduleCtrl')(app)
  require('./SiteCtrl')(app)
  require('./SitesCtrl')(app)
  require('./TweetCtrl')(app)
  require('./SponsorCtrl')(app)
}
