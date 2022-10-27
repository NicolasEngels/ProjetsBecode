const date = new Date();
document.write("Brussels : " + date.toLocaleString('en-US',{timeZone: 'Europe/Brussels'}) + "<br/><br/>");
document.write("Anchorage : " + date.toLocaleString('en-US',{timeZone: 'America/Anchorage'}) + "<br/><br/>");
document.write("Reykjavik : " + date.toLocaleString('en-US',{timeZone: 'Atlantic/Reykjavik'}) + "<br/><br/>");
document.write("Saint-Petersburg : " + date.toLocaleString('en-US',{timeZone: 'Europe/Moscow'}));