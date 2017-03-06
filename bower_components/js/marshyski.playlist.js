//<![CDATA[
$(document).ready(function() {

    new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_1",
        cssSelectorAncestor: "#jp_container_1"
    }, [{
        title: "Marshy Ski - Combustion",
        free: true,
        mp3: "https://marshyski.com/musik/Marshy%20Ski%20-%20Combustion.mp3",
    }, {
        title: "Marshy Ski - We Will",
        free: true,
        mp3: "https://marshyski.com/musik/Marshy%20Ski%20-%20We%20Will.mp3",
    }, {
        title: "Marshy Ski - Pancakes and Waffles",
        free: true,
        mp3: "https://www.marshyski.com/musik/pan%20waffes%20mp3.mp3",
    }, {
        title: "Marshy Ski - Where Did You Go",
        free: true,
        mp3: "https://marshyski.com/musik/Marshy%20Ski%20-%20Where%20Did%20You%20Go.mp3",
    }, {
        title: "Pocket Full of Wood - Things Happen For A Rason (Live)",
        free: true,
        mp3: "https://www.marshyski.com/musik/Pocket%20Full%20of%20Wood%20-%20Things%20Happen%20For%20A%20Reason%20Live.mp3",
    }, {
        title: "Pocket Full of Wood - House of The Rising Sun (Live)",
        free: true,
        mp3: "https://marshyski.com/musik/Pocket%20Full%20of%20Wood%20-%20House%20of%20The%20Rising%20Sun%20Live.mp3",
    }, {
        title: "Her Vendetta - Problem Solving Project",
        free: true,
        mp3: "https://www.marshyski.com/musik/HerVendettaProblemSolvingProject.mp3",
    }, ], {

        swfPath: "js",

        supplied: "mp3",

        wmode: "window",

        smoothPlayBar: true,

        keyEnabled: true

    });

});

//]]>