$(document).ready(function(){
  /*
  var patterns;
  $.getJSON("sample.json", function(data) {
    patterns = $.map(data, function(pattern) {
      fn = pattern.name;
      patternName = fn.substring(0, fn.lastIndexOf("."));
      fileType = fn.substring(fn.lastIndexOf(".") + 1);
      return { "name": patternName, "type": fileType, "url": pattern.html_url};
    });
  });
  */
  $.getJSON("http://api.github.com/repos/jacqui/streamtools-library/contents/patterns", function(data) {
    $.each(data, function(i, pattern) {
      row = "<tr><td><a href=\"" + pattern.html_url + "\">" + pattern.name + "</a></td></tr>";
      $("#patterns-list").append(row);
    });
  });

});
