# moment.fromNowUpdate.js
Plugin for moment.js to auto update fuzzy time

Feel free to use and change this plugin as you wish as it has been developed to suit my own application, but maybe not yours. Fill your boots!

Version currently live: **0.1.0**

## Requirements

* Moment.js (2.1.0) - http://momentjs.com

### Download the script

* [moment.fromNowUpdate.js](https://raw.github.com/garethadavies/moment.fromNowUpdate/master/moment.fromNowUpdate.js)
* [moment.fromNowUpdate.min.js](https://raw.github.com/garethadavies/moment.fromNowUpdate/master/moment.fromNowUpdate.min.js)

### Reference the script

This script requires Moment.js, so make sure you add it after that file.

```<script src="path/to/file/moment.js"></script>```

```<script src="path/to/file/moment.fromNowUpdate.min.js"></script>```

### Usage

```js
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
```
