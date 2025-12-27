package com.example.api.Model;

public class Person {
    private String sessionId;
    private String topic;
    private String partnerId;

    public Person(){}

    public Person(String sessionid,String topic,String partner){
        this.sessionId=sessionid;
        this.topic=topic;
        this.partnerId=partner;
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

    public String getPartnerId() {
        return partnerId;
    }

    public void setPartnerId(String partnerId) {
        this.partnerId = partnerId;
    }

    @Override
    public String toString(){
        return "{"+"\n"+
                "sessionId:"+sessionId+"\n"+
                "topic:"+topic+"\n"+
                "partnerId:"+partnerId+"\n"+
                "}";
    }
}