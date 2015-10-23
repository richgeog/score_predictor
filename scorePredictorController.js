scorePredictor.controller('ScorePredictorController', ['$resource', function($resource){

  var self = this;
  var fixturesResource = $resource('http://football-api.com/api/?Action=fixtures&APIKey=API&comp_id=1204&&from_date=24.10.2015&to_date=26.10.2015');

  self.fixtures = fixturesResource.get()
  console.log(self.fixtures)
}]);