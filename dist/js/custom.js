

		$(document).ready(function(){
			$('.reviews-slider').bxSlider({
				auto: true,
				autoControls: true
			});
			$(".mobi-menu-list li a").click(function(){
				$(this).next("ul").slideToggle();
				$(this).parent(".list").toggleClass("active");
			});

			$(".nav-toggle").click(function(){
				$(".nav-mobile").toggleClass("nav-open");
			});

			var winwith = $(document).width();
			if(winwith<768){
				$(".vt-center").find("br").remove();
				$(".social-icons").insertAfter(".footer-block img");
			}
		});