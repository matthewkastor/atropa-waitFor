
  
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
        /// <field name="waitFor" type="">Polling functions for quick and sloppy work.</field>
        /// <field name="data" type="">Container for gobal data related to the classes and functions.</field>
        /// <returns type="atropa"/>
                
        supportCheck: function(className, errorMessage) {
            /// <summary>Checks whether this class has been marked as unsupported and throws an 
            ///  error if it has.</summary>
            /// <param name="className" type="String">The name of the class.</param>
            /// <param name="errorMessage" type="String">Optional. A custom error message. Defaults to
            ///  atropa.data[className].error</param>
        }, 
        
        requires: function(className, requirementFn, errorMessage) {
            /// <summary>Pushes a requirement check into atropa.data.requirements. The test
            ///  tests whether the class is supported in this environment. Sets
            ///  atropa.data[className]&apos;s support to unsupported and error to errorMessage
            ///  if the requirementFn returns false. The requirement checks will all be run
            ///  after the library has loaded.</summary>
            /// <param name="className" type="String">The name of the class.</param>
            /// <param name="requirementFn" type="Function">A function to test whether or not the class
            ///  is supported in this environment. If supported, returns true otherwise
            ///  return false.</param>
            /// <param name="errorMessage" type="String">The error message to use when this class or its
            ///  methods are called in unsupported environments. Defaults to:
            ///  &apos;The atropa.&apos; + className + &apos; class is unsupported in this environment.&apos;;</param>
        }, 
        
        setAsOptionalArg: function(defaultVal, optionalArg) {
            /// <summary>Set default values for optional function parameters.</summary>
            /// <param name="defaultVal" type="Mixed">The default value to set.</param>
            /// <param name="optionalArg" type="Mixed">A reference to the optional argument.</param>
            /// <returns type="Mixed">Returns the default value supplied when the optional
            /// argument is undefined or null. Otherwise, the supplied optional argument
            /// is returned.</returns>
        }
        
    };

    var $x = window.atropa;
    $x.__namespace = "true";
    $x.__typeName = "atropa";
})(this);

  

  
/* vsdoc for atropa.data */

(function (window) {
    window.atropa = window.atropa || {};

    window.atropa.data = {
        /// <summary></summary>
        /// <returns type="atropa.data"/>
                
    };

    var $x = window.atropa.data;
    $x.__namespace = "true";
    $x.__typeName = "atropa.data";
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

  

