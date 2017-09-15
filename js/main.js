window.onload = function() {
	// TODO:: Do your initialization job

	// add eventListener for tizenhwkey
	document.addEventListener('tizenhwkey', function(e) {
		if (e.keyName === "back") {
			try {
				tizen.application.getCurrentApplication().exit();
			} catch (ignore) {
			}
		}
	});

	// Sample code
	var textbox = document.querySelector('.contents');
	textbox.addEventListener("click", function() {
		var box = document.querySelector('#textbox');
		box.innerHTML = (box.innerHTML === "Basic") ? "Sample" : "Basic";
	});

	function postNotification() {
		var notification, notificationDict;
		try {
			// Sets notification dictionary.
			notificationDict = {
				content : "Notification Content!",
				iconPath : "../icon.png",
				vibration : true,
				ledColor : "#FFFF00",
				ledOnPeriod : 1000,
				ledOffPeriod : 500
			};
			// Creates notification object.
			notification = new tizen.StatusNotification("SIMPLE",
					"Notification Title", notificationDict);

			// Posts notification.
			tizen.notification.post(notification);
		} catch (err) {
			console.log(err.name + ": " + err.message);
		}
	}
	;

	function init() {
		document.querySelector("#textbox").addEventListener("click",
				postNotification);
	}
	;

	init();
};
