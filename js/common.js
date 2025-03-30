$(document).ready(function() {

	//Preloader
	setTimeout(function(){
		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	}, 1000);

	// Img
	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	// Phone mask
    $(".phone-mask").mask("+1 (999) 999-9999");

	// Menu Toggle
	$('.navigation--menu-toggle').click(function() {
		$(this).toggleClass("on");
		$('.navigation--menu').slideToggle(500);
	});

	$('.navigation--menu li a').click(function() {
		if ($(window).width() < 992) {
			$('.navigation--menu-toggle').toggleClass("on");
			$('.navigation--menu').slideToggle(500);
		}
	});

	// Popup 
	$('.call-popup').magnificPopup({
		type:"inline",
        mainClass: 'mfp-fade',
        showCloseBtn: false,
        closeBtnInside: true,
        removalDelay: 300,
        fixedContentPos: true
	});

	$('.call-popup').click(function() {
		$('.form__popup').find("input[name='subject']").val($(this).data('subject'));
	});

    $('.popup--close').click(function() {
		$.magnificPopup.close();
	});

	// Scroll to Top
	$(".navigation--menu a, .back-to-top").mPageScroll2id({
		offset: 0
	});

	// Ajax send form 
	$(".form").submit(function(e) {
		if (!this.checkValidity()) {
      		e.preventDefault();
		} else {
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: $(this).serialize()
			}).done(function() {
				$.magnificPopup.open({
				    items: {
				        src: '#success-popup' 
				    },
				    type:"inline",
			        mainClass: 'mfp-fade',
			        showCloseBtn: false,
			        closeBtnInside: true,
			        removalDelay: 300
				});
				setTimeout(function() {
					$(".form").trigger("reset");
				}, 1000);
			});
			return false;
		}
	});

});

