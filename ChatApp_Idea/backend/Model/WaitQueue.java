package com.example.api.Model;

import org.springframework.stereotype.Component;

@Component // @Component tells Spring to automatically create and manage this class as a bean

public class WaitQueue {
    Node head; //reference to first node in the list initially empty.

    //method to insert node at end of the list.
    public void insert(Person person){
        //create a new node.
        Node newNode = new Node(person);

        //if the linkedlist is empty, add node to head.
        if(this.head==null){
            head=newNode;
            return;
        }

        //if not empty traverse to the last node.
        Node currentNode = head;
        while(currentNode.next!=null){
            currentNode=currentNode.next;
        }

        //link the newNode to the end of the list.
        currentNode.next=newNode;
    }
    public void print(){
        System.out.println("Printing Queue:");
        Node currentNode = head;
        while(currentNode!=null){
            System.out.println("person:"+currentNode.person.toString());
            currentNode=currentNode.next;
        }
    }
    public void count(){
        int count=0;
        Node currentNode = head;
        while(currentNode!=null){
            count++;
            currentNode=currentNode.next;
        }
        System.out.println("count:"+count);
    }
    public boolean verifyUniqueId(Person person){
        Node currentNode = head;
        while(currentNode!=null){
            if(person.getSessionId().equals(currentNode.person.getSessionId())){
               return false; // NOT unique
            }
            currentNode=currentNode.next;
        }
        return true; // unique
    }
}
