# moment.fromNowUpdate.js
Plugin for moment.js to auto update fuzzy time

## How to use?
Simply call the `isocalendar` method on any moment object.  It returns an array
of four items: `year`, `week_of_year`, `day_of_week`, `minutes_since_midnight`.

```javascript
moment(new Date(2011, 11, 23, 14, 30)).isocalendar();
// [2011, 51, 5, 870]
```
