$('.custom_review_flex').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

  $('.trusted-slider').slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    arrows: false,
    swipe: false,
    slidesToShow: 6,
    slidesToScroll: 1,
        dots: false,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

$('.custom_video_flex').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
if($(window).innerWidth() <= 1440) {
$(window).on('load', function(){ 

  $(".custom_video_box .play_button").click(function () {
      const $this = $(this);
      $this.hide(); // Hide the play button
      const videoElement = $this.siblings().get(0);
      $(videoElement).attr("controls", true) // Add controls attribute
                    .attr("playsinline", true) // Add playsinline attribute
                    .prop("muted", false); // Unmute the video
      videoElement.play(); // Play the video
      console.log("Video Play");
    videoElement.trigger("play");
  });
  
  $(".custom_video_box video").click(function () {
      const $this = $(this);
      const videoElement = $this.get(0);
      videoElement.pause(); // Pause the video
      $this.removeAttr("controls") // Remove controls attribute
           .removeAttr("playsinline") // Remove playsinline attribute
           .prop("muted", true); // Mute the video
      $this.closest(".hero_video_box").find(".play_button").show(); // Show the play button
      console.log("Video Pause");
  });
 
})
  } else {
$(window).on('load', function() { 
  $(".custom_video_box video").hover(
    function () { // Mouse enter
      const $this = $(this);
      const videoElement = $this.get(0);

      // Pause other videos and manage their play buttons
      $(".custom_video_box video").not($this).each(function() {
          const otherVideo = $(this).get(0);
          otherVideo.pause();
          $(this).removeAttr("controls").removeAttr("playsinline").prop("muted", true);
          $(this).closest(".custom_video_box").find(".play_button").show(); // Show the play button for other videos
      });

      // Play the hovered video
      $this.attr("controls", true) // Add controls attribute
           .attr("playsinline", true) // Add playsinline attribute
           .prop("muted", false); // Unmute the video
      videoElement.play(); // Play the video
      $this.closest(".custom_video_box").find(".play_button").hide(); // Hide play button for this video
      console.log("Video Play on Hover");
    },
    function () { // Mouse leave
      const $this = $(this);
      const videoElement = $this.get(0);

      // Mute the video and remove controls
      $this.prop("muted", true) // Mute the video
           .removeAttr("controls") // Remove controls attribute
           .removeAttr("playsinline"); // Remove playsinline attribute

      // Show the play button if the video is not playing
      if (videoElement.paused) {
          $this.closest(".custom_video_box").find(".play_button").show(); // Show the play button
      }
      console.log("Video Mute on Hover Out");
    }
  );
});


}






$(document).ready(function() {
    // Open the first FAQ by default
    $('.faq_heading_col').first().addClass('active').siblings('.faq_desc').show();

    $('.faq_heading_col').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).siblings('.faq_desc').slideUp();
            $(this).removeClass('active');
        } else {
            $('.faq_desc').slideUp();
            $('.faq_heading_col').removeClass('active');
            $(this).siblings('.faq_desc').slideDown();
            $(this).addClass('active');
        }
    });
});

$(document).delegate('details.mega-menu', 'mouseover', 'click', function(){
  $(this).attr('open',  '');
});
$(document).delegate('details.mega-menu', 'mouseout', 'click', function(){
  $(this).removeAttr('open', '');
});

document.querySelector('.get_btn').addEventListener('click', function () {
  document.querySelector('.QL_text_form_sec').scrollIntoView({ behavior: 'smooth' });
});
