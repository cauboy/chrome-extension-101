'use strict';

chrome.system.cpu.getInfo(function(info) {
  alert("Number of Processors: " + info.numOfProcessors);
});
