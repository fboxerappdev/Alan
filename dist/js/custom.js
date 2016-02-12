

		$(document).ready(function(){
			$('.reviews-slider').bxSlider({
				auto: true,
				autoControls: true
			});

			var winwith = $(document).width();
			if(winwith<768){
				$(".vt-center").find("br").remove();
				$(".social-icons").insertAfter(".footer-block img");
			}
		});