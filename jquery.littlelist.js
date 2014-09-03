;(function($) {

    $.littleList = function(element, options) {

        var defaults =  { 
            selectionName: 'selection', //This is the name of the inputs that will be submitted
            maxItems: -1, //The total number of items allowed in the list. Remember to validate server side!
            onAdd: function() {},
            onRemove: function() {}
        }

        var plugin = this;

        plugin.settings = {}

        var $element = $(element),
             element = element;

        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);
                        
            var $parent = $('<div class="bpp-listbox-outer"></div>');
            $element.addClass("bpp-listbox-control");  
            $element.prop("name", "");                                    
            $element.before($parent);
            $parent.append($element);
            $element.before($('<div id="bpp-listbox-inner"></div>'));
            $element.after($('<input type="button" class="bpp-listbox-add bpp-listbox-control" id="bpp-listbox-add" value="Add"></input>')); 
            $element.data("listbox", plugin);
            $("#bpp-listbox-add").click(function() {
                var opt = $element.find('option:selected');
                if (opt.val() != undefined && (plugin.settings.maxItems == -1 || plugin.count() < plugin.settings.maxItems)) {
                    opt.detach();
                    $("#bpp-listbox-inner").append($("<div class='bpp-listbox-item' id='" + opt.val() + "'><span class='bpp-item-text'>" + opt.text() + "</span><input type='hidden' class='bpp-selected-item' name='selection' value='" + opt.val() + "'></input><input type='button' class='bpp-listremove' value=''></input><br /></div>"));
                    $("#" + opt.val()).data("option", opt);
                    
                    $(".bpp-listremove").click(function() {
                        var removedOpt = $(this).closest("div").data("option")
                        $element.append(removedOpt);
                        $(this).closest("div").remove();
                        plugin.settings.onRemove(removedOpt);
                    });
                    
                    plugin.settings.onAdd(opt);                      
                }                    
            });              
        } 
           
        plugin.count = function () {
            return $("#bpp-listbox-inner .bpp-selected-item").length;
        }         
        
        plugin.init();
    }

    $.fn.littleList = function(options) {

        return this.each(function() {
            if (undefined == $(this).data('littleList')) {
                var plugin = new $.LittleList(this, options);
                $(this).data('littleList', plugin);
            }
        });

    }

})(jQuery);