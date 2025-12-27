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
    //delete node at pos
    public Node delete(int pos){
        Node temp=null;
        //Check if list is empty
        if(head==null){
            return null;
        }
        //If position is 0
        if(pos==0){
            temp=head;
            head=head.next;
            return temp;
        }
        //Initialize
        int index=0;
        Node currentNode=head;
        //Traverse to node before target
        while(currentNode.next!=null && index<pos-1){
            currentNode=currentNode.next;
            index++;
        }
        //Check position validity
        if(currentNode.next==null){
            return null;
        }
        temp=currentNode.next;
        currentNode.next=temp.next;
        return temp;
    }
    //prints the list
    public void print(){
        System.out.println("Printing Queue:");
        Node currentNode = head;
        while(currentNode!=null){
            System.out.println("person:"+currentNode.person.toString());
            currentNode=currentNode.next;
        }
    }
    //prints the count of elements in list
    public void count(){
        int count=0;
        Node currentNode = head;
        while(currentNode!=null){
            count++;
            currentNode=currentNode.next;
        }
        System.out.println("count:"+count);
    }
    //verify if a person is already in list
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
    //check if list is empty
    public boolean isEmpty(){
        if(this.head==null){
            return true;
        }
        return false;
    }
    //ilterator
    public Node ilterator(){
        return head; // Return the head to manually traverse outside.
    }
}
