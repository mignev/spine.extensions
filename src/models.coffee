Spine   ?= require('spine')
isArray = Spine.isArray
require ?= ((value) -> eval(value))

Spine.Model.extend
  create: (atts, options) ->
    atts = if isArray(atts) then atts.slice() else [atts]
    for att in atts
      record = new @(att)
      record.save(options)
