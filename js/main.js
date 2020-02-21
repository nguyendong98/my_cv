$(function(){
    $('.socials-text').click(function(){
        $('.socialicons').toggleClass('active');
    })
    // Logo
    // Logo
	var $logo 	= $('#logo');

   
	
    // Needed variables
	var $content 		= $("#content");
	
	// Run easytabs
  	$content.easytabs({
	  animate			: true,
	  updateHash		: false,
	  transitionIn		:'slideDown',
	  transitionOut		:'slideUp',
	  animationSpeed	:600,
	  tabs				:".tmenu",
	  tabActiveClass	:'active',
	});

	
	// Hover menu effect
	$content.find('.tabs li a').hover(
		function() {
			$(this).stop().animate({ marginTop: "-7px" }, 200);
		},function(){
			$(this).stop().animate({ marginTop: "0px" }, 300);
		}
	);

	// button setting change color
	$('.setting-icon').click(function(){
		$('.color-box').toggleClass('main');
	})

	$('#yellow-color').click(function(){
		$('.main-wrapper-resume').attr("id", "yellow")
	})
	$('#blue-color').click(function(){
		$('.main-wrapper-resume').attr("id", "blue")
	})
	$('#red-color').click(function(){
		$('.main-wrapper-resume').attr("id", "red")
	})
	$('#green-color').click(function(){
		$('.main-wrapper-resume').attr("id", "green")
	})
})