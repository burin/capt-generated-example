define(['Handlebars'], function(Handlebars) {
function ISODateString(d) {
    function pad(n){
        return n < 10 ? '0'+n : n
    }
    return d.getUTCFullYear()+'-'
    + pad(d.getUTCMonth()+1)+'-'
    + pad(d.getUTCDate())+'T'
    + pad(d.getUTCHours())+':'
    + pad(d.getUTCMinutes())+':'
    + pad(d.getUTCSeconds())+'Z'
}
Handlebars.registerHelper('timeSimple', function(date) {
    return moment(date).format('hh:mma');
});

Handlebars.registerHelper('prettyDate', function(date) {
    var hehe = moment(date).format('ddd MMM D, YYYY');
    return hehe;
});

Handlebars.registerHelper('toLowerCase', function(string) {
    return string.toLowerCase();
});

Handlebars.registerHelper('carrierIconTag', function(carrierCode) {
    // escape carrier code
    carrierCode = Handlebars.Utils.escapeExpression(carrierCode);
    // concat image tag with carrier code
    var img = '<img width="18" height="18" alt="' + carrierCode.toLowerCase() + 'logo" src="http://i.travelocity.com.edgesuite.net/legacy/logos/ag_' + carrierCode.toLowerCase() + 'logo_3.gif" />';
    // output safestring
    return new Handlebars.SafeString(img);
});

Handlebars.registerHelper('formatPrice', function(price) {
    return parseFloat((price)*100/100).toFixed(2);
});
});

