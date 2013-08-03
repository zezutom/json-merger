/**
 * @author Tomas Zezula
 * 
 * based on 
 * http://www.ubelly.com/2011/11/scalablejs/
 * http://css-tricks.com/how-do-you-structure-javascript-the-module-pattern-edition/
 * http://www.w3schools.com/html/tryit.asp?filename=tryhtml5_geolocation
 * https://tutsplus.com/tutorial/writing-modular-javascript/
 * http://www.youtube.com/watch?feature=player_embedded&v=mKouqShWI4o
 */


Core = function() {
	var moduleData = {};
	var sandbox = null;
	
	return {
		init: function() {
			sandbox = new Sandbox();	
		},
		register: function(moduleId, creator) {
			moduleData[moduleId] = {
				creator: creator,
				instance: null
			};
		},
		start: function(moduleId) {
			var data = moduleData[moduleId];
			var instance = data.instance;
			instance = data.creator(sandbox);
			instance.init();
		},
		stop: function(moduleId) {
			var data = moduleData[moduleId];
			var instance = data.instance;
			if (instance) {
				instance.destroy();
				instance = null;
			}
		},
		startAll: function() {
			this._toggleAll(this.start);
		},
		stopAll: function() {
			this._toggleAll(this.stop);
		},
		_toggleAll: function(command) {
			for (var moduleId in moduleData) {
				if (moduleData.hasOwnProperty(moduleId)) {
					command(moduleId);
				}	
			}
			sandbox.broadcastAll();			
		}
	}
} ();

Sandbox = function() {
	var subscribers = new Array();
	var eventIds = new Array();
	
	// TODO unsubscribe automatically when a module gets stopped	
	return {
		subscribe: function(eventId, callback) {
			var callbacks = subscribers[eventId];
			
			if (!callbacks) 
				callbacks = new Array(); 
			callbacks.push(callback);
			subscribers[eventId] = callbacks;
		},	
		publish: function(eventId, data, broadcast) {
			var publishedEvent = {eventId: eventId, data: data};
			if (broadcast) 
				this.broadcast(publishedEvent);
			else
				eventIds.push(publishedEvent);
			
		},
		broadcast: function(publishedEvent) {
			var callbacks = subscribers[publishedEvent.eventId];

			if (callbacks && callbacks.length > 0) {
				for (c in callbacks) 
					callbacks[c](publishedEvent.data);				
			}									
		},
		broadcastAll: function() {
			for (var i in eventIds) {
				this.broadcast(eventIds[i]);							
			}
			eventIds.length = 0;
		}
	}
}


