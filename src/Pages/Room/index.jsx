import React from "react";
import { useParams } from "react-router-dom";
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

const RoomPage = () => {
    const {roomId} = useParams();
    const MyMeeting = async (element) => {
        const appId = 1282022965;
        const serverSecret = "163561caedb34bf55a71a5018f6cbc3f";
        const kitTocken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appId, 
            serverSecret, 
            roomId, 
            Date.now().toString(),
             "Aditya Jethwa"
            );
            const zc = ZegoUIKitPrebuilt.create(kitTocken);
            zc.joinRoom(
                {
                    container: element,
                    sharedLinks:[
                        {
                            name: 'Copy link',
                            url: `http://localhost:3000/room/${roomId}`
                        }
                    ],
                        scenario: {
                            mode: ZegoUIKitPrebuilt.OneONoneCall,
                        },
                        showScreenSharingButton: false,
                }
            );
    };





    return  <div>
        <div ref={MyMeeting} />
    </div>;

    
};
export default RoomPage;