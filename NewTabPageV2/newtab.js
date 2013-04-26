$(function() {
	var Clock = {
	      time : $('#time'),
	      date : $('#date'),

	  weekdays : ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
	  months : ["January","February","March","April","May","June","July","August","September","October","November","December"],

	  timeParts: function() {
	    var date = new Date(),
	        hour = date.getHours()
	      if(hour > 12) {
	          hour -= 12
	      } else if(hour === 0) {
	        hour = 12
	      }
	    return {
	      day: Clock.weekdays[date.getDay()],
	      date: date.getDate(),
	      month: Clock.months[date.getMonth()],
	      hour: hour,
	      minute: Clock.prependZero(date.getMinutes()),
	      second: Clock.prependZero(date.getSeconds())
	    }
	  },

	  prependZero : function(num) {
	    if(num < 10) {
	      return "0" + num
	    }
	    return num
	  },

	  refresh: function() {
	    var parts = Clock.timeParts()
	    Clock.date.html(parts.day + ', ' + parts.month + ' ' + parts.date)
	    Clock.time.html("<span class='hour'>"+parts.hour+"</span>:"+"<span class='minute'>"+parts.minute+"</span>:"+"<span class='second'>"+parts.second+"</span")
	  },

	  start: function() {
	    if (Clock._running) {
	      clearInterval(Clock._running)
	    }

	    Clock._running = setInterval(function() {
	      Clock.refresh()
	    }, 1000)
	    Clock.refresh()
	  }
	}
	Clock.start()
})