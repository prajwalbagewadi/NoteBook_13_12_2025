package com.example.api.Model;

import java.time.LocalDateTime;

public class Message {
    private String senderId;
    private String receiverId;
    private String message;
    private LocalDateTime timeStamp;

    public Message(){}

    public Message(String senderId,String receiverId, String message, LocalDateTime timeStamp) {
        this.senderId = senderId;
        this.receiverId = receiverId;
        this.message = message;
        this.timeStamp = timeStamp;
    }

    public String getSenderId() {
        return senderId;
    }

    public void setSenderId(String senderId) {
        this.senderId = senderId;
    }

    public String getReceiverId() {
        return receiverId;
    }

    public void setReceiverId(String receiverId) {
        this.receiverId = receiverId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public LocalDateTime getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(LocalDateTime timeStamp) {
        this.timeStamp = LocalDateTime.now();
    }

    @Override
    public String toString() {
        return "{"+"\n"+
                "senderId:" + senderId + "\n" +
                "receiverId:" + receiverId + "\n" +
                "message:" + message + "\n" +
                "timeStamp:" + timeStamp + "\n" +
                "}";
    }
}
