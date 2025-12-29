package com.example.api.Service;

import com.example.api.Model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.UUID;
/*
UUID (Universally Unique Identifier),
you generate a unique value to identify things
like sessions, users, requests, tokens, etc.
*/

@Service
public class SessionService {

    @Autowired
    WaitQueue wq;
    @Autowired
    MessageQueue mq;

    private String sessionId;
    public String generateSessionId(){
        sessionId = UUID.randomUUID().toString();
        System.out.println("UUID:"+sessionId);
        return sessionId;
    }

    public String matchPerson(Person person1,Person person2){
        if(person1.getSessionId()==null || person2.getSessionId()==null){
            System.out.println("errorLog:no SessionId present");
        }
        person1.setPartnerId(person2.getSessionId());
        person2.setPartnerId(person1.getSessionId());
        return person1.getPartnerId()+"-matchedWith-"+person2.getPartnerId();
    }

    public String addToWaitQueue(Person inPerson){
        String res="";
        System.out.println("log:"+inPerson.getSessionId());
        if(wq.isEmpty()){
            wq.insert(inPerson);
            wq.print();
            wq.count();
            res="You are waiting in Queue";
        } else {
            int count=0;
            for(Node n = wq.ilterator();n!=null;n=n.getNext()) {
                if (inPerson.getTopic().equals(n.getPerson().getTopic())) {
                    //match first.
                    res = matchPerson(inPerson, n.getPerson());
                    System.out.println("count:" + count);
                    //delete
                    Node nq = wq.delete(count);
                    //res="matched with"+nq.getPerson().getSessionId();
                    //break loop
                    break;
                }
                count++;
            }
        }
//        if(!wq.verifyUniqueId(person)){
//            return "response: Person already WaitQueue.";
//        }
//        wq.insert(person);
//        wq.print();
//        wq.count();
//        return "response: Person added to WaitQueue.";
        return res;
    }

    public String sendMessage(Message message){
        String res="";
        message.setTimeStamp(LocalDateTime.now());
        mq.insert(message);
        res="message sent.";
        mq.print();
        System.out.println("MsgQueueCount:"+mq.count());
        return res;
    }

    public Message receiveMessage(String sessionId){
        return mq.findMsg(sessionId);
    }

}
