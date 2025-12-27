package com.example.api.Model;

public class Node {
    Person person; //data stored in node.
    Node next; //reference to next node.

    //Constructor to create a node with data
    public Node(Person person){
        this.person=person;
        this.next=null; //Next is null by default for a new last node
    }

    public Person getPerson(){
        return this.person;
    }

    public Node getNext(){
        return this.next;
    }
}

