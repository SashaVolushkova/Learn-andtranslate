'use strict';

lt.templates.templatesFeed = {
    templatesFeed_item: function(item) {
        var tags = item.original.tags.map(function(tag){
            var tagTemplate = '<li><a href="#tags=' + tag + '">#' + tag + '</a></li>';

            return tagTemplate;
        });
        var template = '<li class="battle">' +
            '<div class="names">' +
                '<div class="man m-bg-yellow">' +
                    '<div class="avatar"></div>' +
                    '<div class="name">' + item.battle[0].autor_name + '</div>' +
                '</div>' +
                '<div class="vs"><img src="/images/vs.png" alt="VS"></div>' +
                '<div class="man m-bg-green">' +
                    '<div class="avatar"></div>' +
                    '<div class="name">' + item.battle[1].autor_name + '</div>' +
                '</div>' +
            '</div>' +
            '<div class="details">' +
                '<h3 class="header">' + item.original.title + '</h3>' +
                '<div class="content">' +
                    '<ul class="tags" style="padding-left: 0px;">' + tags.join('') + '</ul>' +
                    '<div class="text" style="margin-right: 70px;">' + item.original.text + '</div>' +
                '</div>' +
                '<div class="info">' +
                    '<div class="timer">Времени осталось: <em>155 сек.</em></div>' +
                    '<div class="lang">' + item.language + ' to русский</div>' +
                '</div>' +
            '</div>' +
        '</li>';

        return template;
    }
}
