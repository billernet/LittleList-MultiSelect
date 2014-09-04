LittleList
==========

#### Version 0.1 (Work in progress)

Simple multi select list jquery plugin. Turns a select list into a multi-select. This plugin will build the HTML around a select list to turn it into a multiselect. All HTML element classes and ids are prefixed with bpp to avoid conflicts with existing code.

1. Add a reference to the jqery.littlelist.js file.
2. Add in the stylesheet.
3. Call the plugin in your javascript.


##### Basic usage:

```
$.littleList("#selectlist");
```

Selected items will all be submitted with the name "selection" by default.


##### Usage with options:

Pass an object with any of the below options to overide the defaults (Defaults shown in the example below)

```
$.littleList("#selectList", {
  
  maxItems: -1, // -1 means no limit
  
  selectionName: "selection",
  
  onAdd: function(addedOption) { },
  
  onRemove: function(removedOption) { }

});
```
