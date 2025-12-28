package com.example.api.Model;

public class MessageNode {
    Message message;
    MessageNode next;

    public MessageNode(Message message) {
        this.message = message;
        this.next = null;
    }

    public Message getMessage() {
        return message;
    }

    public MessageNode getNext() {
        return this.next;
    }
}


