        $(document).ready(function() {
            $('#fullpage').fullpage({
              sectionsColor: ['black', 'white', '#eee', 'whitesmoke', '#ccddff'],
              anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
              menu: '#menu',

			onLeave: function(index, nextIndex, direction){
				var leavingSection = $(this);
				var aboutEl = $('.textCenter');
				var aboutElement = $('.vertical');

				// after leaving section 1
				if(index == 1 && direction =='down'){
					aboutEl.removeClass("hidden");
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