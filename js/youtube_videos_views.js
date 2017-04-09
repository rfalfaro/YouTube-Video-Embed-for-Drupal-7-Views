(function ($) {

	Drupal.behaviors.YouTubeWindow = {
		attach: function (context, settings) {
		//code starts
		
		$('.youtube_video').click(function(e) {
    		var youtube_video_id = $(this).attr('data-id');
			var youtube_embed_html = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + youtube_video_id + '?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>';
			
			e.preventDefault();
			$('#ytv-' + youtube_video_id).html(youtube_embed_html);
    	});		
		//code ends
		}
	}
	
})(jQuery);