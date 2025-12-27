# WhatsApp:
1. Sender encrypts the message.
2. The sender sends the message to the Server.
3. Server: checks if the Receiver is online.
    If ( Receiver is online ) {  
     // Deliver the message to the Receiver.
    } else { 
    // add message to a queue or the Waiting Area of waiting messages to be delivered 
  }
4. The receiver receives the message, decrypts it, and displays it.


# Message Ticks (Status of Delivery):
1. Sent to Server. Single tick.
2. Delivered. The receiver receives the message. Double tick.
3. Receiver reads the message. Blue tick.


# Message deleted from WhatsApp Server:
1. After delivery. WhatsApp deletes the message from the Server.
2. Only the Receiver Device stores the message in its local DB.

# Omegle:
1. Omegle connects two strangers randomly for:
2. text chat.
3. video call.
4. No profile.
5. No login.
6. No friends.
7. Steps:
  1. The user client creates a temporary sessionId.
  2. User chooses chat type: text or video. And Interests tags, eg: coding, music
  3. All Users wait in the waiting queue.
  4. If ( Interests given ) {
     // Match with someone who has at least 1 common interest.
     } else {
     // Match with the first available user.
     }
     ## Note: Queue + HashMap System.
  5. Once matched, the server links UserA <-> UserB, and both strangers get connected.


# What session means Omegle:
1. Session represents a temporary chat connection between two users.

# Session Flow in Omegle:
1. User A opens app.
2. User B opens app.
3. Omegle creates temporary session IDs for users A, B.
      1. Get/sessionId.
      2. sessionId = randomUUID. (Universally Unique Identifier).
       3. Stored In server memory (not DB).
       4. Sent back to the client.
       5. Used for every message request.
4. Server pairs user A and user B.
     1. Server maintains a waitingQueue.
          [Session1, Session2, Session3]
     2. When two sessions (users) are available.
          pair(Session1, Session2)
     3. Now both sessions point to each other.
          Session1.partner = Session2
          Session2.partner = Session1
5. Chat session starts messages are exchanged.
     1. Client sends :
          {
               "sessionId":"a123",
               "message":"hi"  
           }  
      2. Server logic:
           sessionSender=sessionMap.get("a123")
           sessionReciever=sessionSender.partner
           sendMessage(sessionReciever,"hi")

6. One user disconnects 
     1. 
7. Server ends the session (discards data).

# Core idea of how chat works (simple):
1. Chat = Send → Store/Route → Receive
2. User A types a message
3. The message is sent to a server
4. Server finds who should receive it
5. Server delivers it to User B
6. User B’s UI displays it. That’s it.

