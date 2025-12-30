package com.example.api.Controller;

import com.example.api.Model.Message;
import com.example.api.Model.Person;
import com.example.api.Model.SessionId;
import com.example.api.Service.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@CrossOrigin(origins = "*")
public class HomeController {
    @Autowired
    SessionService ss;
    Person person;

    @GetMapping("/")
    public String home(){
        return "Spring boot dev tools running.";
    }

    @GetMapping("/createSessionId")
    public HashMap<String,String> createSessionId(){
        HashMap<String,String> resp = new HashMap<>();
        String sessionId=ss.generateSessionId();
        person = new Person();
        person.setSessionId(sessionId);
        resp.put("sessionId",sessionId);
        return resp;
    }

    @PostMapping("/findPerson")
    public HashMap<String,String> addPersonQueue(@RequestBody Person person){
        HashMap<String,String> resp = new HashMap<>();
        System.out.println(person.toString());
        resp.put("queueStatus",ss.addToWaitQueue(person));
        resp.put("serverStatus","response: Server successfully received the response.");
        return resp;
    }

    @PostMapping("/sendMessage")
    public HashMap<String,String> sendMessage(@RequestBody Message message){
        HashMap<String,String> resp = new HashMap<>();
        resp.put("status",ss.sendMessage(message));
        return resp;
    }

    @PostMapping("/receiveMessage")
    public Message receiveMessage(@RequestBody SessionId sessionId){
        HashMap<String,String> resp = new HashMap<>();
        System.out.println("sessionId:"+sessionId);
        Message message = ss.receiveMessage(sessionId.getSessionId());
        if(message==null){
            //resp.put("status","no messages");
            return null;
        }
        //System.out.println("receiveMessage:"+ss.receiveMessage(sessionId).toString());
        //resp.put("status",message.toString());
        return message;
    }
}
