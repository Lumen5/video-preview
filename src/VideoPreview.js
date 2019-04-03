import React from 'react';

import VideoData from './VideoData';


class VideoPreview extends React.Component {
    componentDidMount() {
        document.fonts.ready.then(() => {
            // for some reason, we need to wait a little longer still...
            window.setTimeout(() => {
                this.beginDraw(this.refs.canvas);
            }, 200);
        });
    }

    beginDraw(canvas) {
        const ctx = canvas.getContext('2d');
        const font_size = 10;
        const message = "My preview here!";
        ctx.font = `${font_size}px "${VideoData.font}"`;
        ctx.fillText(
            message,
            canvas.width / 2 - ctx.measureText(message).width / 2,
            canvas.height / 2 - font_size / 2,
        );
    }

    render() {
        return (
            <div className="lefts-border-line manufacturer-panel">
                <h1 className="manufacturer-title">
                    Video Preview
                </h1>
                <hr/>
                <div className="video-container">
                    <div className="aspect-ratio-fixer">
                        <div className="use-aspect-ratio">
                            <canvas ref="canvas" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoPreview;
