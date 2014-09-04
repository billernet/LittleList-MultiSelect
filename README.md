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

* maxItems - Set the maximum number of items allowed to be selected. The Add button will not add any more item to the selection once this value has been reached. Remember to also validate on the server.
* selectionName - This is the name of the form elements that will be submitted with the selected values.
* onAdd - A function to execute after an item is added to the list from the select list. The parameter is the option that was added.
* onRemove - A function to execute after an item is removed from the list back to the select list. The parameter is the option that was removed.
 
### Server side
This plugin will produce form elements that can be submitted in any normal way. In the form collection there will be multiple keys with the name "selection" (if more than one item was selected). Platforms with model binding will be able to bind this to a collection of strings.

Example: ASP.NET
```
public ActionResult SelectItems(IEnumberable<string> selection)
{
    return View();
}
```
The binding will also work if the collection of strings is a property on a model.
