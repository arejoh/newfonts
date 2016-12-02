(function($, window, document) {

    window.uibBase = window.uibBase || {};

    uibBase.init = function() {
        
    };

    uibBase.Utils = {

        addWindowResizeHandler: function(handler) {
            if (window.addEventListener)
                window.addEventListener("resize", handler, false);
            else
                window.attachEvent("onresize", handler, this);
        },

        removeWindowResizeHandler: function(handler) {
            if (window.removeEventListener)
                window.removeEventListener("resize", handler, false);
            else
                window.detachEvent("onresize", handler, this);
        }

    };

    $(document).ready(function() {
        uibBase.init();
    });

})(jQuery, window, document);