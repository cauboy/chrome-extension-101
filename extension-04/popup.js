var e;
document.addEventListener("DOMContentLoaded", function(event) {
  chrome.system.cpu.getInfo(function(info) {
    var elem = document.getElementById('info');
    e = elem;
    console.log(info, elem);
    var str = '';
    Object.keys(info).forEach(function(key) {
      str += '<h4>' + key + '</h4>';
      str += '<p>' + info[key] + '</p>';
    })
    console.log(str);
    document.getElementById('info').innerHTML = str;
  });
});

