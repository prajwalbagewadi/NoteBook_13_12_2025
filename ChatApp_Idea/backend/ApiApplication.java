package com.example.api;

import org.springframework.boot.CommandLineRunner;
import com.example.api.Model.Person;
import com.example.api.Model.WaitQueue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
//public class ApiApplication implements CommandLineRunner {
public class ApiApplication {
//    @Autowired // @Autowired tells Spring to automatically inject the required bean into this field
//    private WaitQueue wq;
//
//    @Override
//    public void run(String... args) {
//        Person p1 = new Person("100", "java");
//        wq.insert(p1);
//        wq.print();
//        Person p2 = new Person("200", "java");
//        wq.insert(p2);
//        Person p3 = new Person("300", "java");
//        wq.insert(p3);
//        wq.print();
//    }

	public static void main(String[] args) {
        SpringApplication.run(ApiApplication.class, args);
	}

}
