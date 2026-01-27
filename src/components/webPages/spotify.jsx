import React from "react";
import Terminal from "./terminal";

const Spotify=()=>{
    return (
        <Terminal height={400} width={400}>
            <div className="spotify">
                <iframe data-testid="embed-iframe" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/72KM0NvxEeiL21iWkVrNSG?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </Terminal>
    )
}

export default Spotify;