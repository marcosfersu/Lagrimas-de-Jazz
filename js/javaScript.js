        $(document).ready(function() {
            $('#fullpage').fullpage({
              sectionsColor: ['black', 'white', '#eee', 'whitesmoke', '#ccddff'],
              anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
              menu: '#menu',

				onLeave: function(index, nextIndex, direction){
					var leavingSection = $(this);
					var aboutEl = $('.textCenter');
					var aboutElement = $('.vertical');
					var aboutmusic = $(".music-container");
					var aboutmusictext = $(".text-disc")

					// after leaving section 1
					if(index == 1 && direction =='down'){
						aboutEl.removeClass("hidden"),

						setTimeout(function(){
							aboutmusic.removeClass("opacity");
						}, 1500)

						setTimeout(function(){
							aboutmusictext.removeClass("appear");
						}, 1300)
					}

					// after leaving section 2
					if(index == 2 && direction =='up'){
						aboutEl.addClass("hidden");
					}

					// after leaving section 3
					if(index == 3 && direction =='up' && nextIndex == 1){
						aboutEl.addClass("hidden");
					}

					// after leaving section 1
					if(index == 1 && direction =='down' && nextIndex == 3){
						aboutElement.removeClass("hidden1");
					}

					// after leaving section 2
					if(index == 2 && direction =='up'){
						aboutElement.addClass("hidden1");
					}

					// after leaving section 3
					if(index == 3 && direction =='up' && nextIndex == 1){
						aboutElement.addClass("hidden1");
					}	

				},

				afterLoad: function(anchorLink, index){
					var aboutElement = $('.vertical');

					if(index == 2){
						aboutElement.removeClass("hidden1");
					}

				}

			});



	    });

// $(document).ready(function() {

//         $(".play").each(function(index){
//         	console.log("marquitos apesta")
//         	var music_play = $(".play").eq(index)
//         	var music_song = $("audio").eq(index)

//         	music_play.on("click", hacemeplay(music_song));   
//         });

// 			var playing = false;

//         function hacemeplay(itemQueNecesitaPlay){  

//         	if(!itemQueNecesitaPlay.playing){
//               console.log(itemQueNecesitaPlay);
// 				itemQueNecesitaPlay.play();
// 				itemQueNecesitaPlay.playing = true;                  
// 			}else{
// 				itemQueNecesitaPlay.pause();
// 				itemQueNecesitaPlay.playing = false;
// 			}
//         }


// });

        
    $(document).ready(function() {                         
        
        window.playStatus = {
        	currentlyPlaying: false,
        	indexPlaying: null,
        	playTime: null
        }                                           
        

			$('.disc-container').click(function(){
				var index = $(this).index();
				if (!playStatus.currentlyPlaying){
					playStatus.currentlyPlaying = true;
					console.log("0");
					playSong(index);

				}else {

					if(index === playStatus.indexPlaying){
					playStatus.currentlyPlaying = false;
					$("audio")[playStatus.indexPlaying].pause();
					$(".img-play").eq(index).attr("src","imgs/play-button.svg");
					$(".overlay").eq(index).removeClass("hover-pause");	
					console.log("1");

					} else {
						console.log("2");
						$("audio")[playStatus.indexPlaying].pause()
						$("audio")[playStatus.indexPlaying].currentTime = 0;
						$(".img-play").attr("src","imgs/play-button.svg");				       
						$(".overlay").removeClass("hover-pause");					 
						playSong(index)	
					}
				}

				function playSong(indexNumber) {
					$("audio")[indexNumber].play();
					playStatus.indexPlaying = indexNumber;
					$(".img-play").eq(indexNumber).attr("src","imgs/pause-button.svg");
					$(".overlay").eq(indexNumber).addClass("hover-pause");
				}
			});			

			$("audio").on('ended', function(){
				$(".img-play").attr("src","imgs/play-button.svg");         
				playStatus.currentlyPlaying = false;
			});
	});


