package com.example.api.Controller;

import com.example.api.Service.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
public class HomeController {
    @Autowired
    SessionService ss;

    @GetMapping("/")
    public String home(){
        return "Spring boot dev tools running.";
    }

    @GetMapping("/createSessionId")
    public HashMap<String,String> createSessionId(){
        HashMap<String,String> resp = new HashMap<>();
        resp.put("sessionId",ss.generateSessionId());
        return resp;
    }
}
