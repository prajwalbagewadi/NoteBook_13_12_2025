# Create a simple Spring Boot app (Api Server)
1. google: https://start.spring.io
   	1. Project: Maven
	  2. Language: Java
	  3. Spring Boot: 4.0.1
	  4. Project Metadata:
	    1. Group: com.example
	    2. Artifact: demo
	    3. Name: demo
	    4. Description: Demo project for Spring Boot
 	    5. Package name: com.example.demo
	    6. Packaging: Jar
	    7. Configuration: Properties
	    8. Java: 21
    5. Dependencies:
	    1. Spring Boot DevTools [Developer Tools]: Provides fast application restarts, LiveReload, and configurations for enhanced development experience.
	    2. Spring Web [Web]: Build web, including RESTful, applications using Spring MVC. Uses Apache Tomcat as the default embedded container.
2. create project structure: 
  1. Controller: The entry point that receives user requests and sends back the final response.
	2. Service: The brain that handles all the logic, rules, and calculations of the application.
	3. Repository: The data access layer that handles reading from and writing to the database.
	4. Model: The blueprint that defines the structure and shape of the data being used.
