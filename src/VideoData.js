import mp4_url from './BackgroundRaw.mp4';

const VideoData = {
    video_height: 1080, // the preview should be 1080 pixels tall (for 1080p). The aspect ratio is 16x9.
    highlight_color: [ // This is the color of the accent text ("your" and "+" in the text below)
            25, 
            29, 
            38, 
            100
    ], 
    text_background_color: [ // the color of the bars behind the text
            255, 
            167, 
            38, 
            100
    ],
    font: "Uni Sans", // the name of the font being used, already loaded for you on the page
    text: [ // a list of text that should appear in the video
        {
            content: "What is your morning routine?", // the first sentence that should appear in the video
            keyword_indexes: [ // the portion of text inside of these indexes should be rendered with the "highlight_color". The rest should be white.
                8, 
                12
            ]
        }, 
        {
            content: "Coffee + Email!", // the second sentence that should appear in the video
            keyword_indexes: [
                7, 
                8
            ]
        }
    ],
    background: {
        mp4_url, // the url to the video (mp4 version)
        duration: 11979, // the duration of the source footage
        width: 1920, // the width of the source footage
        height: 1080, // the height of the source footage
        thumbnail_url: "https://storage.googleapis.com/lumen5-prod-video/tmp-placeholder-imgBamxpr.jpg", // a thumbnail, if you'd like to use it
        webm_url: "https://storage.googleapis.com/lumen5-prod-video/videoblocks-adult-woman-working-on-the-koS72xA.webm", // a webm version, if you'd like to use it
    }, 
    duration: 6562, // the time that the video should play. You can eyeball how long each bit of text should be on the screen.
};

export default VideoData;