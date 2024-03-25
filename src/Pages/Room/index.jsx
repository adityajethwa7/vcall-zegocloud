import React from "react";
import { useParams } from "react-router-dom";
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

const RoomPage = () => {
    const {roomId} = useParams();
    const MyMeeting = async (element) => {
        const appId = 389851086;
        const serverSecret = "7a88a2ecfefc1603d38579dcfd8e0d94";
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