package com.example.api.Model;

import java.time.LocalDateTime;

public class Message {
    private String sessionId;
    private String message;
    private LocalDateTime timeStamp;

    public Message(){}

    public Message(String sessionId, String message, LocalDateTime timeStamp) {
        this.sessionId = sessionId;
        this.message = message;
        this.timeStamp = timeStamp;
    }

    public String getSessionId() {
        return sessionId;
    }

    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
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
                "sessionId:" + sessionId + "\n" +
                "message:" + message + "\n" +
                "timeStamp:" + timeStamp + "\n" +
                "}";
    }
}
