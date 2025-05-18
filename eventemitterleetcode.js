// Custom Event Emitter | Detailed Explanation

// Souradeep Biswas
// Jun LeetCoding Challenge
// 2441
// May 31, 2023
// JavaScript
// Intuition & Approach:
// The EventEmitter class is designed to allow for event-driven programming, where events can be subscribed to and emitted.

// The constructor function initializes the events property as a new Map. This Map will store event names as keys and arrays of callback functions as values.

// The subscribe method allows users to subscribe to events by providing an event name and a callback function. It performs the following steps:

// We checks if the event name already exists in the events Map using the has method. If the event name doesn't exist, a new entry is added to the Map with an empty array as the initial value.
// Retrieves the array of callbacks associated with the event name from the events Map using the get method.
// Creates a unsubscribe function that can be used later to remove the callback from the subscribers array. This function performs the following steps:
// Finds the index of the callback in the subscribers array using the indexOf method.
// If the callback is found (index is not -1), it is removed from the subscribers array using the splice method and the callback is added to the subscribers array using the push method.
// Finally we return an object with an unsubscribe method that allows users to unsubscribe the callback from the event.
// The emit method triggers the execution of the callbacks associated with a particular event. It takes an event name and an optional array of arguments as input. The method follows these steps:

// Retrieves the array of callbacks associated with the event name from the events Map.
// If no callbacks are found (the array is falsy), an empty array is returned. Otherwise, an array named results is initialized to store the results of the callback executions.
// The method iterates over each callback in the subscribers array using a for...of loop.
// For each callback, the spread syntax ...args is used to pass the provided arguments as separate values to the callback.
// The result of each callback execution is stored in the results array using the push method. Finally, the results array is returned.


// добавить once

class EventEmitter {
    constructor() {
        this.events = new Map();
    }
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if(!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }

        const listeners = this.events.get(eventName);
        listeners.push(callback);

        return {
            unsubscribe: () => {
                const ndx = listeners.indexOf(callback)
                if(ndx !== -1) {
                    listeners.splice(ndx, 1)
                }
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if(!this.events.get(eventName)) {
            return []
        }
            const result = []

            const listeners = this.events.get(eventName);

            for(let callback of listeners) {
                result.push(callback(...args));
            }

            return result

    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */