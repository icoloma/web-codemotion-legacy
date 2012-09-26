define([ 'jquery', 'underscore', 'bootstrap_alert', 'bootstrap_dropdown', 'bootstrap_collapse'], 
  function($, Underscore) {
  

  var core = {
    getParamValue: function (paramName) {
      /// <summary>
      ///     Get the value of input parameter from the querystring
      /// </summary>
      /// <param name="paramName" type="String">The input parameter whose value is to be extracted</param>
      /// <returns type="String">The value of input parameter from the querystring</returns>

      //parName = paramName.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
      var pattern = '[\\?&]' + paramName + '=([^&#]*)';
      var regex = new RegExp(pattern);
      var matches = regex.exec(window.location.href);
      if (matches == null)
        return '';
      else 
        return decodeURIComponent(matches[1].replace(/\+/g, ' '));
    },
    
};

return core;

  
})