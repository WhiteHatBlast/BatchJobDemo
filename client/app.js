AppCtrl = RouteController.extend({

  templates: 'App',

  subscriptions: function(){
   
     

  }

})

var MyCron = new Cron(1000);

  //Get the current unix time in seconds
  var ts = Math.round((new Date()).getTime() / 1000);

  //This job will get called once after 5 second
  MyCron.addScheduleJob(ts + 5, function() {
    console.log('schedule tick');
  });
You can also use this trick to create something amazing.

  var MyCron = new Cron(100);

  //Get the current unix time in seconds
  var ts = Math.round((new Date()).getTime() / 1000);

  //The recursive function
  var recur = function() {

    //Get the current unix time in seconds
    var ts = Math.round((new Date()).getTime() / 1000);

    //Getting a random number
    var ran = Math.round(Math.random()*10)

    console.log('schedule tick. I will get called again in ' + ran + ' second(s)');

    //Create a new schedule before the old one gets deleted
    MyCron.addScheduleJob(ts + ran, recur);
  };

  //Call the recursive function for the first time
  recur();
