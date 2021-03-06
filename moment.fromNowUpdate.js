/**
Moment.fromNowUpdate
Version: 0.1.0
*/

/*
Requires:
  * Moment.js
Contents:
  * Set defaults
  * Check interval value
  * Create our array of elements
  * Array Validation
  * Set Timeout
Author(s):
  * Gareth Davies @garethadavies
Usage:

  moment().fromNowUpdate({

    // The id of a container element | default: body
    container: 'notes-list',
    // Classname of the time elements you wish to be updated | default: 'fuzzywuzzy'
    className: 'fuzzywuzzy',
    // The time interval in milliseconds between updates | default: 30000 (30 seconds)
    interval: 30000,
    // Set a limit on dates which will be updated
    // 1 = do not update items older than 1 day old
    dayLimit: 1

  });

*/

;(function (window, document, moment, undefined) {

  moment.fn.fromNowUpdate = function(options) {

    var elementArray = [];

    /*
    Set defaults
    */

    // Make options an empty object if nothing is supplied
    options = options || {};

    // Set the default options
    options.container = options.container || undefined;
    options.className = options.className || 'fuzzywuzzy';
    options.interval = options.interval || 30000;
    options.dayLimit = options.dayLimit || 1000000;

    /*
    Check interval value
    */

    // If interval is set to anything less than 1 second
    options.interval = (options.interval < 1000) ? options.interval = 30000 : options.interval;

    /*
    Create our array of elements
    */

    // Has a continer been supplied?
    if (!options.container) {

      // Add all the elements to the array
      elementArray = document.getElementsByClassName(options.className);

    }
    else {

      // Reference the supplied container
      var container = document.getElementById(options.container);

      // Was the container found?
      if (container) {

        // Add all the elements to the array
        elementArray = container.getElementsByClassName(options.className);

      }
      else {

        // Let the developer know what has happened
        throw('The container ' + options.container + ' cannot be found in the DOM');

      }


    }

    /*
    Array Validation
    */

    // Are there any target className?
    if (elementArray.length > 0) {

      /*
      Set Timeout
      */

      (function loop() {

        setTimeout(function () {

          // Loop through each array item
          for (var i = 0; i < elementArray.length; i++) {

            var datetimeAttr = elementArray[i].attributes.datetime;

            /*
            Validate
            */

            // Do we have a datetime attribute?
            if (datetimeAttr) {

              var datetimeValue = datetimeAttr.value;

              // Do we have a datetime value?
              if (datetimeValue.length > 0) {

                // Do we have a valid date?
                if (moment(datetimeValue).isValid()) {

                  var
                  now = moment(),
                  // Work out the difference between the original time and now
                  difference = now.diff(datetimeValue, 'days');

                  // Are we within the day limit?
                  if (difference < options.dayLimit) {

                    // Update the current fuzzy time
                    elementArray[i].innerHTML = moment(datetimeValue).from(now);

                  }

                }
                else {

                  // Let the developer know what has happened
                  throw('The supplied date ' + datetimeValue + ' is not valid and cannot be used');

                }

              }
              else {

                throw('A valid datetime attribute value is required');

              }

            }
            else {

              throw('A time element with a datetime attribute is required');

            }

          }

          // Repeat this function
          loop();

        }, options.interval);

      })();

    }
    else {

      // Let the developer know what has happened
      throw('No items with the class name ' + options.className + ' were found in the DOM');

    }

  };

})(window, document, moment);
