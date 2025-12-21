package com.example.api.Service;

import org.springframework.stereotype.Service;
import java.util.UUID;
/*
UUID (Universally Unique Identifier),
you generate a unique value to identify things
like sessions, users, requests, tokens, etc.
*/

@Service
public class SessionService {
    private String sessionId;
    public String generateSessionId(){
        sessionId = UUID.randomUUID().toString();
        System.out.println("UUID:"+sessionId);
        return sessionId;
    }
}
