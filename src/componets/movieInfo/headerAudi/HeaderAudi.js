 import { useState } from "react";
 import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import css from './footerAudi.css'
const HeaderAudi = () => {
    const musicTracks = [
        {
            name: "Memories",
            src: "https://ds.deliciouspumpkin.com/dl/1247982013/Senpai_Ru_-_Marathon_(musportal.org).mp3?t=20220212&i=73802498"
        },
        {
            name: "Memories",
            src: "https://dilozor.com/uploads/music/2022/04/pesnya-let-me-down-slowly-mp3.mp3"
        }

    ];

     const [trackIndex, setTrackIndex] = useState(0);

     const handleClickPrevious = () => {
         setTrackIndex((currentTrack) =>
             currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
         );
     };

     const handleClickNext = () => {
         setTrackIndex((currentTrack) =>
             currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
         );
     };
    return (
        <div className={'player'}>

            <div className={'audiWrap'}>
                <AudioPlayer className={'audi'}
                     style={{ maxWidth: "100px" }}
                    style={{ borderRadius: "1rem" }}
                    autoPlay
                    // layout="horizontal"
                    src={musicTracks[trackIndex].src}
                    onPlay={(e) => console.log("onPlay")}
                    showSkipControls={true}
                    showJumpControls={false}
                    onClickPrevious={handleClickPrevious}
                    onClickNext={handleClickNext}
                     onEnded={handleClickNext}
                />
            </div>

        </div>
    );
};

export {HeaderAudi};

