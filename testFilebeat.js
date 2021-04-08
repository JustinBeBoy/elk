const fs = require('fs');

let stringTest = `
2021-04-05T04:35:57.245 INFO SocketClusterServer registerRPCHandler 8sL1Dr7eH5c7P7nkAAFN share_screen_rpc
2021-04-05T04:35:57.245 INFO SocketClusterServer registerRPCHandler 8sL1Dr7eH5c7P7nkAAFN webrtc_rpc
2021-04-05T04:36:58.223 INFO SocketClusterServer onAgSocketDisconnect null
2021-04-05T04:36:58.223 INFO SocketClusterServer onAgSocketDisconnect 8sL1Dr7eH5c7P7nkAAFN
2021-04-05T04:38:23.668 INFO Speech2Text none Restarting
2021-04-05T04:38:25.424 ERROR Speech2Text API error:  8 RESOURCE_EXHAUSTED: Too many pending audio packets. Audio should be streamed at a rate that approximates real time, and performance is best with larger, less-frequent audio packets. For example, 32 KB packets at a rate of 2 packets per-second.
2021-04-05T04:38:25.424 INFO Transcriber Stop 27 61 ja-JP
2021-04-05T04:38:25.424 INFO JanusAudioListener none stop
2021-04-05T04:38:25.424 INFO WebRTC none Stop webrtc listener
2021-04-05T04:38:25.426 INFO Speech2Text none Stop
2021-04-05T04:38:25.428 INFO WebRTC Change connection state closed
2021-04-05T04:39:19.074 INFO SocketClusterServer onAgSocketConnection tCJi9VgalMqTIfJoAAFO
2021-04-05T04:39:19.074 INFO SocketClusterServer registerRPCHandlers tCJi9VgalMqTIfJoAAFO
2021-04-05T04:39:19.074 INFO SocketClusterServer registerRPCHandler tCJi9VgalMqTIfJoAAFO layout_manage_rpc
2021-04-05T04:39:19.074 INFO SocketClusterServer registerRPCHandler tCJi9VgalMqTIfJoAAFO user_manage_rpc
2021-04-05T04:39:19.074 INFO SocketClusterServer registerRPCHandler tCJi9VgalMqTIfJoAAFO transcriptRpc
2021-04-05T04:39:19.074 INFO SocketClusterServer registerRPCHandler tCJi9VgalMqTIfJoAAFO group_call_rpc
2021-04-05T04:39:19.075 INFO SocketClusterServer registerRPCHandler tCJi9VgalMqTIfJoAAFO share_screen_rpc
2021-04-05T04:39:19.075 INFO SocketClusterServer registerRPCHandler tCJi9VgalMqTIfJoAAFO webrtc_rpc
2021-04-05T04:39:31.485 INFO Authentication none checkAuthenticaion eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ1Iiwicm9sZXMiOltdLCJ0eXBlIjoiaG9sb2xlbiIsInVzZXJuYW1lIjoiVGFuaSIsImlhdCI6MTYxNzc2NzkwMSwiZXhwIjoxNjE3NzY4ODAxfQ.aOOoa9_K7y90OmAayhbqRP8oZEu90d21CSHzKuo1WQ0
2021-04-05T04:39:31.485 WARN Authentication 45 checkAuthenticaion HOLOLEN NOT CHECK AUTHENTICAION
2021-04-05T04:39:31.485 INFO FolderManager 45 getFoldersTree
2021-04-05T04:39:50.179 INFO SocketClusterServer onAgSocketDisconnect null
2021-04-05T04:39:50.179 INFO SocketClusterServer onAgSocketDisconnect tCJi9VgalMqTIfJoAAFO
2021-04-06T06:56:10.695 INFO Authentication 30 verifyToken
2021-04-06T06:56:10.696 INFO UserManager 30 login {usr:1,psk:11111111}
2021-04-06T06:56:10.756 INFO Authentication none checkAuthenticaion eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMwIiwicm9sZXMiOltdLCJ0eXBlIjoiaG9sb2xlbiIsInVzZXJuYW1lIjoiMSIsImlhdCI6MTYxNzg2NDk3MCwiZXhwIjoxNjE3ODY1ODcwfQ.qrAclfzWFMc9zT7fa4uUVqL_KGlBPi42kOVO-mh2Jak
2021-04-06T06:56:10.757 WARN Authentication 30 checkAuthenticaion HOLOLEN NOT CHECK AUTHENTICAION
2021-04-06T06:56:10.757 INFO SocketClusterServer 30 registerRPCHandler {id:30,roles:[],type:hololen,username:1,iat:1617864970,exp:1617865870,token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMwIiwicm9sZXMiOltdLCJ0eXBlIjoiaG9sb2xlbiIsInVzZXJuYW1lIjoiMSIsImlhdCI6MTYxNzg2NDk3MCwiZXhwIjoxNjE3ODY1ODcwfQ.qrAclfzWFMc9zT7fa4uUVqL_KGlBPi42kOVO-mh2Jak}
2021-04-06T06:56:10.898 INFO SocketClusterServer none onAgSocketConnection 2EBRTULLhXsKuPenAANB
2021-04-06T06:56:10.899 INFO SocketClusterServer none registerRPCHandlers 2EBRTULLhXsKuPenAANB
2021-04-06T06:56:10.899 INFO SocketClusterServer none registerRPCHandler 2EBRTULLhXsKuPenAANB layout_manage_rpc
2021-04-06T06:56:10.899 INFO SocketClusterServer none registerRPCHandler 2EBRTULLhXsKuPenAANB user_manage_rpc
2021-04-06T06:56:10.899 INFO SocketClusterServer none registerRPCHandler 2EBRTULLhXsKuPenAANB transcriptRpc
2021-04-06T06:56:10.899 INFO SocketClusterServer none registerRPCHandler 2EBRTULLhXsKuPenAANB group_call_rpc
2021-04-06T06:56:10.900 INFO SocketClusterServer none registerRPCHandler 2EBRTULLhXsKuPenAANB share_screen_rpc
2021-04-06T06:56:10.900 INFO SocketClusterServer none registerRPCHandler 2EBRTULLhXsKuPenAANB webrtc_rpc
2021-04-06T06:56:10.900 INFO Authentication none checkAuthenticaion eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMwIiwicm9sZXMiOltdLCJ0eXBlIjoiaG9sb2xlbiIsInVzZXJuYW1lIjoiMSIsImlhdCI6MTYxNzg2NDk3MCwiZXhwIjoxNjE3ODY1ODcwfQ.qrAclfzWFMc9zT7fa4uUVqL_KGlBPi42kOVO-mh2Jak
2021-04-06T06:56:10.901 WARN Authentication 30 checkAuthenticaion HOLOLEN NOT CHECK AUTHENTICAION
2021-04-06T06:56:10.901 INFO UserManager 30 verifyToken {id:30,roles:[],type:hololen,username:1,iat:1617864970,exp:1617865870,token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMwIiwicm9sZXMiOltdLCJ0eXBlIjoiaG9sb2xlbiIsInVzZXJuYW1lIjoiMSIsImlhdCI6MTYxNzg2NDk3MCwiZXhwIjoxNjE3ODY1ODcwfQ.qrAclfzWFMc9zT7fa4uUVqL_KGlBPi42kOVO-mh2Jak}
2021-04-06T06:56:10.904 INFO SocketClusterServer none onAgSocketDisconnect none
2021-04-06T06:56:10.904 INFO SocketClusterServer none onAgSocketDisconnect 2EBRTULLhXsKuPenAANB
2021-04-06T06:56:11.021 INFO SocketClusterServer none onAgSocketConnection oIN6VMpjK4yaVXfeAANC
2021-04-06T06:56:11.021 INFO SocketClusterServer none registerRPCHandlers oIN6VMpjK4yaVXfeAANC
2021-04-06T06:56:11.021 INFO SocketClusterServer none registerRPCHandler oIN6VMpjK4yaVXfeAANC layout_manage_rpc
2021-04-06T06:56:11.021 INFO SocketClusterServer none registerRPCHandler oIN6VMpjK4yaVXfeAANC user_manage_rpc
2021-04-06T06:56:11.021 INFO SocketClusterServer none registerRPCHandler oIN6VMpjK4yaVXfeAANC transcriptRpc
2021-04-06T06:56:11.021 INFO SocketClusterServer none registerRPCHandler oIN6VMpjK4yaVXfeAANC group_call_rpc
2021-04-06T06:56:11.021 INFO SocketClusterServer none registerRPCHandler oIN6VMpjK4yaVXfeAANC share_screen_rpc
2021-04-06T06:56:11.022 INFO SocketClusterServer none registerRPCHandler oIN6VMpjK4yaVXfeAANC webrtc_rpc
2021-04-06T06:56:11.022 INFO Authentication none checkAuthenticaion eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMwIiwicm9sZXMiOltdLCJ0eXBlIjoiaG9sb2xlbiIsInVzZXJuYW1lIjoiMSIsImlhdCI6MTYxNzg2NDk3MCwiZXhwIjoxNjE3ODY1ODcwfQ.qrAclfzWFMc9zT7fa4uUVqL_KGlBPi42kOVO-mh2Jak
`
let stringFormat = stringTest.split('\n')

stringFormat.forEach(e => {
  fs.appendFile('./log/t1.log', `\n${e}`, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
})

stringFormat.forEach(e => {
  fs.appendFile('./log1/t1.log', `\n${e}`, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
})