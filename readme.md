## YouTube embed for Drupal 7 Views built on Bootstrap Subtheme Starter Kit

This code is based on the original work of Amit Agarwal at http://labnol.org/?p=27941 but coded for Drupal 7 Views.  It uses Bootstrap Modal as dialog box.

## Required content type and fields 
It requires the creation of a specific content type.  In this case, it is based on the following content type configuration:

[title] = Video Title
[body] = Video Description
[field_youtube_id] = YouTube ID	

It only requires the YouTube video ID (e.g. l4bDVq-nP-0 instead of https://www.youtube.com/watch?v=l4bDVq-nP-0).

## Required modules

In order to make it work, take the html code from the rewrite_html folder and use it under the Views rewrite option.  This code requires https://www.drupal.org/project/views and other additional modules in order to work.

## Required themes

For this code we are using the Bootstrap CDN Starter Kit (https://www.drupal.org/project/bootstrap)