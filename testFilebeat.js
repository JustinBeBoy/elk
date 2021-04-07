const fs = require('fs');

let stringTest = `
2021-04-07T04:35:57.245 INFO SocketClusterServer registerRPCHandler 8sL1Dr7eH5c7P7nkAAFN share_screen_rpc
2021-04-07T04:35:57.245 INFO SocketClusterServer registerRPCHandler 8sL1Dr7eH5c7P7nkAAFN webrtc_rpc
2021-04-07T04:36:58.223 INFO SocketClusterServer onAgSocketDisconnect null
2021-04-07T04:36:58.223 INFO SocketClusterServer onAgSocketDisconnect 8sL1Dr7eH5c7P7nkAAFN
2021-04-07T04:38:23.668 INFO Speech2Text none Restarting
2021-04-07T04:38:25.424 ERROR Speech2Text API error:  8 RESOURCE_EXHAUSTED: Too many pending audio packets. Audio should be streamed at a rate that approximates real time, and performance is best with larger, less-frequent audio packets. For example, 32 KB packets at a rate of 2 packets per-second.
2021-04-07T04:38:25.424 INFO Transcriber Stop 27 61 ja-JP
2021-04-07T04:38:25.424 INFO JanusAudioListener none stop
2021-04-07T04:38:25.424 INFO WebRTC none Stop webrtc listener
2021-04-07T04:38:25.426 INFO Speech2Text none Stop
2021-04-07T04:38:25.428 INFO WebRTC Change connection state closed
2021-04-07T04:39:19.074 INFO SocketClusterServer onAgSocketConnection tCJi9VgalMqTIfJoAAFO
2021-04-07T04:39:19.074 INFO SocketClusterServer registerRPCHandlers tCJi9VgalMqTIfJoAAFO
2021-04-07T04:39:19.074 INFO SocketClusterServer registerRPCHandler tCJi9VgalMqTIfJoAAFO layout_manage_rpc
2021-04-07T04:39:19.074 INFO SocketClusterServer registerRPCHandler tCJi9VgalMqTIfJoAAFO user_manage_rpc
2021-04-07T04:39:19.074 INFO SocketClusterServer registerRPCHandler tCJi9VgalMqTIfJoAAFO transcriptRpc
2021-04-07T04:39:19.074 INFO SocketClusterServer registerRPCHandler tCJi9VgalMqTIfJoAAFO group_call_rpc
2021-04-07T04:39:19.075 INFO SocketClusterServer registerRPCHandler tCJi9VgalMqTIfJoAAFO share_screen_rpc
2021-04-07T04:39:19.075 INFO SocketClusterServer registerRPCHandler tCJi9VgalMqTIfJoAAFO webrtc_rpc
2021-04-07T04:39:31.485 INFO Authentication none checkAuthenticaion eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ1Iiwicm9sZXMiOltdLCJ0eXBlIjoiaG9sb2xlbiIsInVzZXJuYW1lIjoiVGFuaSIsImlhdCI6MTYxNzc2NzkwMSwiZXhwIjoxNjE3NzY4ODAxfQ.aOOoa9_K7y90OmAayhbqRP8oZEu90d21CSHzKuo1WQ0
2021-04-07T04:39:31.485 WARN Authentication 45 checkAuthenticaion HOLOLEN NOT CHECK AUTHENTICAION
2021-04-07T04:39:31.485 INFO FolderManager 45 getFoldersTree
2021-04-07T04:39:50.179 INFO SocketClusterServer onAgSocketDisconnect null
2021-04-07T04:39:50.179 INFO SocketClusterServer onAgSocketDisconnect tCJi9VgalMqTIfJoAAFO
`
let stringFormat = stringTest.split('\n')

stringFormat.forEach(e => {
  fs.appendFile('./log/t1.log', `\n${e}`, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
})