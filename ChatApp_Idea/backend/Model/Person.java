package com.example.api.Model;

public class Person {
    private String sessionId;
    private String topic;

    public Person(){}

    public Person(String sessionid,String topic){
        this.sessionId=sessionid;
        this.topic=topic;
    }

    public String getSessionId() {
        return sessionId;
    }

    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    @Override
    public String toString(){
        return "{"+
                "sessionId:"+sessionId+"\n"+
                "topic:"+topic+"\n"+
                "}";
    }
}
