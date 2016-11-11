---
---
// Parse local CSV file
Papa.parse("assets/data.csv", {
    header: true,
    download: true,
	complete: function(results) {
        // Default message
        var message = {
            cta_text: "{{ site.default.cta_text }}",
            cta_title: "{{ site.default.cta_title }}",
            cta_url: "{{ site.default.cta_url }}",
            text: "{{ site.default.text }}"
        };
		var activeMessages = results.data
        .filter(function(item) {
            // only active messages
            return parseInt(item.active, 10) > 0;
        })
        .filter(function(item) {
            // only message with begin date <= today
            return compareDates(dateStringToDate(item.begin), Date.now()) <= -1;
        })
        .filter(function(item) {
            // only message with end date >= today
            return compareDates(dateStringToDate(item.end), Date.now()) >= 0;
        })
        .sort(function(a,b){
            // sort by weight (higher first)
            return b.weight - a.weight;
        });
        if(activeMessages.length){
            var highestWeight = parseInt(activeMessages[0].weight, 10);
            var availableMessages = activeMessages.filter(function(item) {
                // keep only the messages of this weight
                return parseInt(item.weight, 10) == highestWeight;
            });

            // take on of this message
            message = availableMessages[Math.floor(Math.random() * availableMessages.length)];
        }
        pagefn = doT.template(document.getElementById('tmpl').text);
        document.getElementById('content').innerHTML = pagefn(message);
	}
});

function dateStringToDate(dateString) {
    var capture = dateString.match(/(\d{2})\/(\d{2})\/(\d{4})/);
    if (capture) {
        return new Date(capture[3]+'-'+capture[2]+'-'+capture[1]);
    } else {
        return null;
    }
}

// https://gist.github.com/yeco/8970309
function compareDates(a,b) {
    return (
        isFinite(a) &&
        isFinite(b) ?
        (a>b)-(a<b) :
        NaN
    );
}