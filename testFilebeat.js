const fs = require('fs');

let stringTest = `2021-04-05T11:56:21.207 INFO JanusGatewaySfu - create wss://webrtc-sfu.mirabo.tech:8989
2021-04-05T11:56:21.224 INFO SocketClusterServer - start starting...
2021-04-05T11:56:21.225 INFO TypeOrmDbContext - connectMysql
2021-04-05T11:56:21.228 INFO SocketClusterServer - listening on port: 3000
2021-04-05T11:56:21.724 INFO TypeOrmDbContext - connectMysql connected
2021-04-05T11:56:21.972 INFO MotBackEnd - onServerUp
2021-04-05T11:56:21.972 INFO MotBackEnd - registerRpcHandlers
2021-04-05T11:56:21.977 INFO InterServiceTransceiver - initInterServiceComm init sockets
2021-04-05T11:56:21.979 INFO TranscribeManager - subscribeAppEvent  'group_call_events' 
2021-04-05T11:56:21.979 INFO InterServiceTransceiver - subscribeTopic group_call_events
2021-04-05T11:56:21.980 INFO InterServiceTransceiver - subscribeTopic zmqSubSock subscribe to topic group_call_events
2021-04-05T11:56:21.980 INFO InterServiceTransceiver - saveTopicConsFunc group_call_events
2021-04-05T11:56:21.980 INFO GroupCallHandler - subscribeAppEvent  'user_manage_events' 
2021-04-05T11:56:21.980 INFO InterServiceTransceiver - subscribeTopic user_manage_events
2021-04-05T11:56:21.980 INFO InterServiceTransceiver - subscribeTopic zmqSubSock subscribe to topic user_manage_events
2021-04-05T11:56:21.980 INFO InterServiceTransceiver - saveTopicConsFunc user_manage_events
2021-04-05T11:56:21.981 INFO ShareScreenHandler - subscribeAppEvent  'user_manage_events' 
2021-04-05T11:56:21.981 INFO InterServiceTransceiver - subscribeTopic user_manage_events
2021-04-05T11:56:21.981 INFO InterServiceTransceiver - saveTopicConsFunc user_manage_events
2021-04-05T11:56:21.981 INFO InterServiceTransceiver - startConsumeMessage
2021-04-05T11:56:30.285 INFO SocketClusterServer - onAgSocketConnection 4ZSeYokIT7eKgFmNAAAA
2021-04-05T11:56:30.286 INFO SocketClusterServer - registerRPCHandlers 4ZSeYokIT7eKgFmNAAAA
2021-04-05T11:56:30.286 INFO SocketClusterServer - registerRPCHandler 4ZSeYokIT7eKgFmNAAAA layout_manage_rpc
2021-04-05T11:56:30.286 INFO SocketClusterServer - registerRPCHandler 4ZSeYokIT7eKgFmNAAAA user_manage_rpc
2021-04-05T11:56:30.286 INFO SocketClusterServer - registerRPCHandler 4ZSeYokIT7eKgFmNAAAA transcriptRpc
2021-04-05T11:56:30.286 INFO SocketClusterServer - registerRPCHandler 4ZSeYokIT7eKgFmNAAAA group_call_rpc
2021-04-05T11:56:30.286 INFO SocketClusterServer - registerRPCHandler 4ZSeYokIT7eKgFmNAAAA share_screen_rpc
2021-04-05T11:56:30.287 INFO SocketClusterServer - registerRPCHandler 4ZSeYokIT7eKgFmNAAAA webrtc_rpc
2021-04-05T11:56:33.484 DEBUG SocketClusterServer - on RPC user_manage_rpc {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE5Iiwicm9sZXMiOltdLCJ0eXBlIjoiaG9sb2xlbiIsInVzZXJuYW1lIjoianVzdGluZG8iLCJpYXQiOjE2MTc1OTc4NjYsImV4cCI6MTYxNzU5ODc2Nn0.JJGUgso8761gT0WMBTcH7mbI38h-5jv3JyBpcmAJSU8',
  jsonrpc: '2.0',
  id: 1,
  method: 'deleteGroup',
  params: { groupId: 3 }
}
2021-04-05T11:56:33.484 DEBUG SocketClusterServer - parseJsonRpcData {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE5Iiwicm9sZXMiOltdLCJ0eXBlIjoiaG9sb2xlbiIsInVzZXJuYW1lIjoianVzdGluZG8iLCJpYXQiOjE2MTc1OTc4NjYsImV4cCI6MTYxNzU5ODc2Nn0.JJGUgso8761gT0WMBTcH7mbI38h-5jv3JyBpcmAJSU8',
  jsonrpc: '2.0',
  id: 1,
  method: 'deleteGroup',
  params: { groupId: 3 }
}
2021-04-05T11:56:33.485 INFO Authentication - checkAuthenticaion eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE5Iiwicm9sZXMiOltdLCJ0eXBlIjoiaG9sb2xlbiIsInVzZXJuYW1lIjoianVzdGluZG8iLCJpYXQiOjE2MTc1OTc4NjYsImV4cCI6MTYxNzU5ODc2Nn0.JJGUgso8761gT0WMBTcH7mbI38h-5jv3JyBpcmAJSU8
2021-04-05T11:56:33.486 WARN Authentication - checkAuthenticaion HOLOLEN NOT CHECK AUTHENTICAION
2021-04-05T11:56:33.486 DEBUG UserManageApp - handleRpc { requestId: 1, method: 'deleteGroup', params: { groupId: 3 } }
2021-04-05T11:56:33.486 INFO GroupManager - deleteGroups 3
2021-04-05T11:56:33.492 ERROR GroupManager - deleteGroups not found
2021-04-05T11:56:48.834 INFO SocketClusterServer - onAgSocketDisconnect 4ZSeYokIT7eKgFmNAAAA
2021-04-05T11:56:48.834 INFO MotBackEnd - onUserDisconnected 19
2021-04-05T11:56:48.834 DEBUG UserManageApp - handleRpc { method: 'disconnect', params: {} }
2021-04-05T11:56:48.834 INFO UserManager - disconnect {} {
  id: '19',
  roles: ,
  type: 'hololen',
  username: 'justindo',
  iat: 1617597866,
  exp: 1617598766
}
2021-04-05T11:56:48.835 INFO InterServiceTransceiver - initInterServiceComm user_manage_events {"jsonrpc":"2.0","method":"user_leave","params":{"userId":"19"}}
2021-04-05T11:56:48.838 DEBUG InterServiceTransceiver - startConsumeMessage interServiceMess user_manage_events {"jsonrpc":"2.0","method":"user_leave","params":{"userId":"19"}}
2021-04-05T11:56:48.838 INFO GroupCallHandler - onInterServiceMessage {
  topic: 'user_manage_events',
  message: '{"jsonrpc":"2.0","method":"user_leave","params":{"userId":"19"}}'
}
2021-04-05T11:56:48.838 DEBUG GroupCallHandler - onInterServiceMessage {
  topic: 'user_manage_events',
  reqObj: NotificationObject {
    jsonrpc: '2.0',
    method: 'user_leave',
    params: { userId: '19' }
  }
}
2021-04-05T11:56:48.838 INFO ShareScreenHandler - onInterServiceMessage {
  topic: 'user_manage_events',
  message: '{"jsonrpc":"2.0","method":"user_leave","params":{"userId":"19"}}'
}
2021-04-05T11:56:48.839 DEBUG ShareScreenHandler - onInterServiceMessage {
  topic: 'user_manage_events',
  reqObj: NotificationObject {
    jsonrpc: '2.0',
    method: 'user_leave',
    params: { userId: '19' }
  }
}`
let stringFormat = stringTest.split('\n')

stringFormat.forEach(e => {
  fs.appendFile('./log/t1.log', `\n${e}`, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
})