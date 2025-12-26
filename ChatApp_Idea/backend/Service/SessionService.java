package com.example.api.Service;

import com.example.api.Model.Person;
import com.example.api.Model.WaitQueue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
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

    private String sessionId;
    public String generateSessionId(){
        sessionId = UUID.randomUUID().toString();
        System.out.println("UUID:"+sessionId);
        return sessionId;
    }

    public String addToWaitQueue(Person person){
        if(!wq.verifyUniqueId(person)){
            return "response: Person already WaitQueue.";
        }
        wq.insert(person);
        wq.print();
        wq.count();
        return "response: Person added to WaitQueue.";
    }
}
