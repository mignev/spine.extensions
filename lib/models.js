(function() {
  var isArray;
    if (typeof Spine !== "undefined" && Spine !== null) {
    Spine;
  } else {
    Spine = require('spine');
  };
  isArray = Spine.isArray;
    if (typeof require !== "undefined" && require !== null) {
    require;
  } else {
    require = (function(value) {
      return eval(value);
    });
  };
  Spine.Model.extend({
    create: function(atts, options) {
      var att, record, _i, _len, _results;
      atts = isArray(atts) ? atts.slice() : [atts];
      _results = [];
      for (_i = 0, _len = atts.length; _i < _len; _i++) {
        att = atts[_i];
        record = new this(att);
        _results.push(record.save(options));
      }
      return _results;
    }
  });
}).call(this);
