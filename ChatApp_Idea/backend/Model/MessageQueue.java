package com.example.api.Model;

import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class MessageQueue {
    MessageNode head;

    public void insert(Message message){
        System.out.println("MQ insert() called");
        MessageNode newNode = new MessageNode(message);

        if(head==null){
            head=newNode;
            return; // <--- ADD THIS: Stop here if it's the first node!
        }

        MessageNode currentNode=head;
        while(currentNode.next!=null){ //traverse till the end and add node
            currentNode=currentNode.next;
        }

        currentNode.next=newNode; 
    }

    public void print(){
        MessageNode currentNode=head;
        while(currentNode!=null){
            System.out.println(currentNode.message.toString());
            currentNode=currentNode.next;
        }
    }

    public int count(){
        int count=0;
        MessageNode currentNode=head;
        while(currentNode!=null){
            System.out.println(currentNode.message.toString());
            count++;
            currentNode=currentNode.next;
        }
        return count;
    }

    public Message delete(String sessionId){
        System.out.println("MQ delete() called");
        if(head==null){
            return null;
        }
        //Case 1: head needs to be deleted
        if(head.message!=null && head.message.getReceiverId().equals(sessionId)){
            Message msg=head.getMessage();
            head=head.next; // move head
            return msg;
        }
        //Case 2: delete from middle or end
        MessageNode previousNode=head;
        MessageNode currentNode=head.next;
        while(currentNode!=null){
            if(currentNode.message!=null && currentNode.message.getReceiverId().equals(sessionId)){
                previousNode.next=currentNode.next; //bypass node
                return currentNode.getMessage();
            }
            previousNode=currentNode;
            currentNode=currentNode.next;
        }
//        if(temp==null){
//            return null;
//        }
//        assert temp != null;
//        return temp.message; //not found
        // No message for this receiver
        return null;
    }

//    public Message findMsg(String sessionId){
//        System.out.println("in findMsg");
//
//        MessageNode currentNode=head;
//
//        while(currentNode!=null){
//            if(currentNode.message!=null && currentNode.message.getSessionId().equals(sessionId)){
//                System.out.println("findMsg data:"+currentNode.message.toString());
//                return currentNode.getMessage(); //stop once found
//            }
//            currentNode=currentNode.next; // move forward
//        }
//        return new Message("noId","noData", LocalDateTime.now());
//    }
}
