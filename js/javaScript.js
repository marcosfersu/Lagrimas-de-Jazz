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

        
        $(document).ready(function() {                            //  Botones de los disco
        var boton = 99;                                           //  Pone un id generico en el boton


			$("#play_00").click(function(){                       //  Miles Davis
					
				if(boton == 99){                                  //  - Si ningun tema está sonando
					$("audio")[0].play();                         //  Play a la cancion
					$("#0").attr("src","imgs/pause.png");		  //  Agrega el boton de pause al scroll
					$("#pause-00").removeClass("dipapear");       //  Agrega la pause en el disco
					boton = 0;                                    //  Cambia el id para el boton especifico

				}else if(boton != 99 && boton != 0){              //  - Si está sonando ontro boton
					$("audio")[boton].pause();                    //  Pone toda la muscica en pause
					$("audio")[boton].currentTime = 0;            //  Pone todos los temas en 0
					$(".img-play").attr("src","imgs/play.png");   //  Pone play a todos los scrolls
					$("#0").attr("src","imgs/pause.png");         //  Pone pause al scroll especifico
					$(".disc-pause").addClass("dipapear");        //  Saca todos los botones de pause a los disc
					$("#pause-00").removeClass("dipapear");	;     //  Pone el pause en el disc espeficico
					$("audio")[0].play();					      //  Le da play al tema especifico
					boton = 0;                                    //  Cambia la id para el boton especifico

				}else if(boton == 0){                             //  - Si les das pause al mismo tema
					$("audio")[0].pause();                        //  Le da pause al tema
					$("#0").attr("src","imgs/play.png");          //  Cambia el boton de play en el scroll
					$("#pause-00").addClass("dipapear");          //  Saca el boton de pause del disc
					boton = 99;                                   //  Pone un id generico en el boton
				}

			});

			$("#play_01").click(function(){                       //  john coltrane

				if(boton == 99){                                  //  - Si ningun tema está sonando
					$("audio")[1].play();                         //  Play a la cancion
					$("#1").attr("src","imgs/pause.png");		  //  Agrega el boton de pause al scroll
					$("#pause-01").removeClass("dipapear");       //  Agrega la pause en el disco
					boton = 1;                                    //  Cambia el id para el boton especifico

				}else if(boton != 99 && boton != 1){              //  - Si está sonando ontro boton
					$("audio")[boton].pause();                    //  Pone toda la muscica en pause
					$("audio")[boton].currentTime = 0;            //  Pone todos los temas en 0
					$(".img-play").attr("src","imgs/play.png");   //  Pone play a todos los scrolls
					$("#1").attr("src","imgs/pause.png");         //  Pone pause al scroll especifico
					$(".disc-pause").addClass("dipapear");        //  Saca todos los botones de pause a los disc
					$("#pause-01").removeClass("dipapear");	;     //  Pone el pause en el disc espeficico
					$("audio")[1].play();					      //  Le da play al tema especifico
					boton = 1;                                    //  Cambia la id para el boton especifico

				}else if(boton == 1){                             //  - Si les das pause al mismo tema
					$("audio")[1].pause();                        //  Le da pause al tema
					$("#1").attr("src","imgs/play.png");          //  Cambia el boton de play en el scroll
					$("#pause-01").addClass("dipapear");          //  Saca el boton de pause del disc
					boton = 99;                                   //  Pone un id generico en el boton
				}

			});

			$("#play_02").click(function(){                       //  Cannonball Adderley

				if(boton == 99){                                  //  - Si ningun tema está sonando
					$("audio")[2].play();                         //  Play a la cancion
					$("#2").attr("src","imgs/pause.png");		  //  Agrega el boton de pause al scroll
					$("#pause-02").removeClass("dipapear");       //  Agrega la pause en el disco
					boton = 2;                                    //  Cambia el id para el boton especifico

				}else if(boton != 99 && boton != 2){              //  - Si está sonando ontro boton
					$("audio")[boton].pause();                    //  Pone toda la muscica en pause
					$("audio")[boton].currentTime = 0;            //  Pone todos los temas en 0
					$(".img-play").attr("src","imgs/play.png");   //  Pone play a todos los scrolls
					$("#2").attr("src","imgs/pause.png");         //  Pone pause al scroll especifico
					$(".disc-pause").addClass("dipapear");        //  Saca todos los botones de pause a los disc
					$("#pause-02").removeClass("dipapear");	;     //  Pone el pause en el disc espeficico
					$("audio")[2].play();					      //  Le da play al tema especifico
					boton = 2;                                    //  Cambia la id para el boton especifico

				}else if(boton == 2){                             //  - Si les das pause al mismo tema
					$("audio")[2].pause();                        //  Le da pause al tema
					$("#2").attr("src","imgs/play.png");          //  Cambia el boton de play en el scroll
					$("#pause-02").addClass("dipapear");          //  Saca el boton de pause del disc
					boton = 99;                                   //  Pone un id generico en el boton
				}

			});

			$("#play_03").click(function(){                       //  The Dave Brubeck Quartet

				if(boton == 99){                                  //  - Si ningun tema está sonando
					$("audio")[3].play();                         //  Play a la cancion
					$("#3").attr("src","imgs/pause.png");		  //  Agrega el boton de pause al scroll
					$("#pause-03").removeClass("dipapear");       //  Agrega la pause en el disco
					boton = 3;                                    //  Cambia el id para el boton especifico

				}else if(boton != 99 && boton != 3){              //  - Si está sonando ontro boton
					$("audio")[boton].pause();                    //  Pone toda la muscica en pause
					$("audio")[boton].currentTime = 0;            //  Pone todos los temas en 0
					$(".img-play").attr("src","imgs/play.png");   //  Pone play a todos los scrolls
					$("#3").attr("src","imgs/pause.png");         //  Pone pause al scroll especifico
					$(".disc-pause").addClass("dipapear");        //  Saca todos los botones de pause a los disc
					$("#pause-03").removeClass("dipapear");	;     //  Pone el pause en el disc espeficico
					$("audio")[3].play();					      //  Le da play al tema especifico
					boton = 3;                                    //  Cambia la id para el boton especifico

				}else if(boton == 3){                             //  - Si les das pause al mismo tema
					$("audio")[3].pause();                        //  Le da pause al tema
					$("#3").attr("src","imgs/play.png");          //  Cambia el boton de play en el scroll
					$("#pause-03").addClass("dipapear");          //  Saca el boton de pause del disc
					boton = 99;                                   //  Pone un id generico en el boton
				}

			});

			$("#play_04").click(function(){                       //  Ornette Coleman

				if(boton == 99){                                  //  - Si ningun tema está sonando
					$("audio")[4].play();                         //  Play a la cancion
					$("#4").attr("src","imgs/pause.png");		  //  Agrega el boton de pause al scroll
					$("#pause-04").removeClass("dipapear");       //  Agrega la pause en el disco
					boton = 4;                                    //  Cambia el id para el boton especifico

				}else if(boton != 99 && boton != 4){              //  - Si está sonando ontro boton
					$("audio")[boton].pause();                    //  Pone toda la muscica en pause
					$("audio")[boton].currentTime = 0;            //  Pone todos los temas en 0
					$(".img-play").attr("src","imgs/play.png");   //  Pone play a todos los scrolls
					$("#4").attr("src","imgs/pause.png");         //  Pone pause al scroll especifico
					$(".disc-pause").addClass("dipapear");        //  Saca todos los botones de pause a los disc
					$("#pause-04").removeClass("dipapear");	;     //  Pone el pause en el disc espeficico
					$("audio")[4].play();					      //  Le da play al tema especifico
					boton = 4;                                    //  Cambia la id para el boton especifico

				}else if(boton == 4){                             //  - Si les das pause al mismo tema
					$("audio")[4].pause();                        //  Le da pause al tema
					$("#4").attr("src","imgs/play.png");          //  Cambia el boton de play en el scroll
					$("#pause-04").addClass("dipapear");          //  Saca el boton de pause del disc
					boton = 99;                                   //  Pone un id generico en el boton
				}

			});

			$("#play_05").click(function(){                       //  Charles Mingus

				if(boton == 99){                                  //  - Si ningun tema está sonando
					$("audio")[5].play();                         //  Play a la cancion
					$("#5").attr("src","imgs/pause.png");		  //  Agrega el boton de pause al scroll
					$("#pause-05").removeClass("dipapear");       //  Agrega la pause en el disco
					boton = 5;                                    //  Cambia el id para el boton especifico

				}else if(boton != 99 && boton != 5){              //  - Si está sonando ontro boton
					$("audio")[boton].pause();                    //  Pone toda la muscica en pause
					$("audio")[boton].currentTime = 0;            //  Pone todos los temas en 0
					$(".img-play").attr("src","imgs/play.png");   //  Pone play a todos los scrolls
					$("#5").attr("src","imgs/pause.png");         //  Pone pause al scroll especifico
					$(".disc-pause").addClass("dipapear");        //  Saca todos los botones de pause a los disc
					$("#pause-05").removeClass("dipapear");	;     //  Pone el pause en el disc espeficico
					$("audio")[5].play();					      //  Le da play al tema especifico
					boton = 5;                                    //  Cambia la id para el boton especifico

				}else if(boton == 5){                             //  - Si les das pause al mismo tema
					$("audio")[5].pause();                        //  Le da pause al tema
					$("#5").attr("src","imgs/play.png");          //  Cambia el boton de play en el scroll
					$("#pause-05").addClass("dipapear");          //  Saca el boton de pause del disc
					boton = 99;                                   //  Pone un id generico en el boton
				}


			});

		});