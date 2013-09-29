
  
/* vsdoc for _global_ */

(function (window) {
    

    window._global_ = {
        /// <summary></summary>
        /// <returns type="_global_"/>
                
    };

    var $x = window._global_;
    $x.__namespace = "true";
    $x.__typeName = "_global_";
})(this);

  

  
/* vsdoc for atropa */

(function (window) {
    

    window.atropa = {
        /// <summary></summary>
        /// <field name="setAsOptionalArg" type="">Required module, the docs for it are in the &lt;code&gt;
        ///  atropa-setAsOptionalArg/docs&lt;/code&gt; directory where this module 
        ///  is located.</field>
        /// <field name="waitFor" type="">Polling functions for quick and sloppy work.</field>
        /// <returns type="atropa"/>
                
    };

    var $x = window.atropa;
    $x.__namespace = "true";
    $x.__typeName = "atropa";
})(this);

  

  
/* vsdoc for atropa.waitFor */

(function (window) {
    window.atropa = window.atropa || {};

    window.atropa.waitFor = {
        /// <summary></summary>
        /// <returns type="atropa.waitFor"/>
                
        test: function(testFn, onSuccessCallback, onMaxPollCallback, pollInterval, maxPoll) {
            /// <summary>Generic Wait for true.</summary>
            /// <param name="testFn" type="Function">A function to tell when the wait is over. Must
            ///  return true on success, false on failure.</param>
            /// <param name="onSuccessCallback" type="Function">Optional. The function to run when testFn
            ///  returns true. Defaults to &lt;code&gt;function () {} &lt;/code&gt;</param>
            /// <param name="onMaxPollCallback" type="function">Optional. The function to run when testFn
            ///  has been run maxPoll times and the wait is being given up.
            /// Defaults to &lt;code&gt;function () {}&lt;/code&gt;</param>
            /// <param name="pollInterval" type="Integer" integer="true">Optional. The amount of time in ms between
            ///  polling testFn to see if it returns true. Defaults to 200ms.</param>
            /// <param name="maxPoll" type="Integer" integer="true">Optional. The quantity of polls at which it makes
            ///  sense to give up waiting. Defaults to 50.</param>
        }, 
        
        element: function(testFn, Optional., Optional., Optional., Optional.) {
            /// <summary>Wait for Element</summary>
            /// <param name="testFn" type="Function">A function which returns a reference to an HTML
            ///  Element.</param>
            /// <param name="Optional." type="Function">onSuccessCallback</param>
            /// <param name="Optional." type="function">onMaxPollCallback</param>
            /// <param name="Optional." type="Integer" integer="true">pollInterval</param>
            /// <param name="Optional." type="Integer" integer="true">maxPoll</param>
        }
        
    };

    var $x = window.atropa.waitFor;
    $x.__namespace = "true";
    $x.__typeName = "atropa.waitFor";
})(this);

  

