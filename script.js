if (location.protocol != "https:") {
    location.href =
        "https:" +
        window.location.href.substring(window.location.protocol.length);
}
var map;
function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        mapTypeId: Microsoft.Maps.MapTypeId.ordnanceSurvey
    });
}
