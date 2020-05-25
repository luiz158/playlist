
jQuery(document).ready(function() {
    var myPlayer = new jPlayerPlaylist(myPlayer);
    $.getJSON("/playlist/",function(data){  
        $.each(data,function(index,value){
            myPlayer.add(value);
        })
    }); 
    var myPlayer = new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_17",
        cssSelectorAncestor: "#jp_container_17"
    }, [],
    
     {
       
        playlistOptions: { loopOnPrevious: true, },
        loop: true,
        swfPath: "../static/images/audio/jplayer.swf",
        supplied: "mp3, oga",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: false,
        preload: 'auto',
        preload: 'metadata',
        smoothPlayBar: true,
        audioFullScreen: true,
        keyEnabled: true,
        size: { width: "100px", height: "100%" },

    });

    var $jp = $('#jquery_jplayer_17');
       $jp.on($.jPlayer.event.play,  function(e){
           $('#current-track1').empty();
           $('#current-track1').append(myPlayer.playlist[myPlayer.current].title);
           $('#current-track1').append("<small>" + myPlayer.playlist[myPlayer.current].music +"</small>");
    });
});
