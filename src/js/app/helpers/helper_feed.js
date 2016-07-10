'use strict';

lt.helpers.feed = function(data) {
    data.forEach(function(item){
        document.getElementById('battle-list').innerHTML += lt.templates.templatesFeed.templatesFeed_item(item);
    });
}
