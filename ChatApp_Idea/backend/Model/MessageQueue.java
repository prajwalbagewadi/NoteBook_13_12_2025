package com.example.api.Model;

import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class MessageQueue {
    MessageNode head;

    public void insert(Message message){
        MessageNode newNode = new MessageNode(message);

        if(head==null){
            head=newNode;
            return; // <--- ADD THIS: Stop here if it's the first node!
        }

        MessageNode currentNode=head;
        while(currentNode.next!=null){
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

    public Message findMsg(String sessionId){
        System.out.println("in findMsg");
        MessageNode currentNode=head;

        while(currentNode!=null){
            if(currentNode.message!=null && currentNode.message.getSessionId().equals(sessionId)){
                System.out.println("findMsg:"+currentNode.message.toString());
                return currentNode.getMessage(); //stop once found
            }
            currentNode=currentNode.next; // move forward
        }
        return new Message("noId","noData", LocalDateTime.now());
    }
}
