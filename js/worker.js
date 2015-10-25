$(document).ready(function() {

        var updateFeed = function() {
            var initialQuery = $('#query').val();
            initialQuery = initialQuery.replace(" ", "");
            var queryTags = initialQuery.split(",");
            $('.social-feed-container').socialfeed({
                // FACEBOOK
                // WILL NEED TO GET ANOTHER ACCESS TOKEN
                facebook: {
                    accounts: queryTags,
                    limit: 10, //Integer: max number of posts to load
                    access_token: '150849908413827|a20e87978f1ac491a0c4a721c961b68c'
                },
                
                // GOOGLEPLUS 
                // WILL NEED TO GET ANOTHER ACCESS TOKEN
                // google: {
                //     accounts: queryTags,
                //     limit: 10, //Integer: max number of posts to load
                //     access_token: 'AIzaSyDAelFmJhg6BSUbSLe8UT7s-G53tL4_KRg'
                // },
                
                // Twitter
                // WILL NEED TO GET ANOTHER ACCESS TOKEN
                twitter: {
                    accounts: queryTags,
                    limit: 10, //Integer: max number of posts to load
                    consumer_key: 'qzRXgkI7enflNJH1lWFvujT2P', // make sure to have your app read-only
                    consumer_secret: '8e7E7gHuTwyDHw9lGQFO73FcUwz9YozT37lEvZulMq8FXaPl8O', // make sure to have your app read-only
                },
                
                // INSTAGRAM
                // WILL NEED TO GET ANOTHER ACCESS TOKEN
                instagram: {
                    accounts: queryTags,
                    limit: 10, //Integer: max number of posts to load
                    client_id: '88b4730e0e2c4b2f8a09a6184af2e218'
                },

                // GENERAL SETTINGS
                length: 201,
                show_media: true,
                // Moderation function - if returns false, template will have class hidden
                moderation: function(content) {
                    return (content.text) ? content.text.indexOf('fuck') == -1 : true;
                },
                //update_period: 5000,
                // When all the posts are collected and displayed - this function is evoked
                callback: function() {
                    console.log('all posts are collected');
                }
            });
        };

        updateFeed();
        $('#button-update, #button-top').click(function() {
            //first, get rid of old data/posts.
            $('.social-feed-container').html('');
            $(document).scrollTop(0);

            //then load new posts
            updateFeed();
        });

    });