## Design Patterns in NODE.js , Javascript & Typescript  

this is a proyect to help anyone who needs it to refresh the most common patterns from Gang of four, you can find javascript, typescript and javascript on node
the idea was give the person who wants to explore the project an idea of different escenarios on different sintaxis.

## Core design pattern

### Singleton 

Singleton are objects that can only can have one single instance, a only source of thruth, with a single point of access 
  The node module system provides a basic fwk for implementing a rudimentary singleton. modules are cached when they're accessed using require or import and consequent calls or that import will use the cache,this behaviour is dependent on filename consitency (case sensitive)
    - When working with classes, instantiating a class before exporting it out of a module will result in a singleton 
    - it's used for logger, and some many other applications, almost all the fwks in different technologies apply this pattern to create objects for stateless aplications. 
   
### Factory
  Define an interface for creating complex objects, but let subclasses decide which class to intantiate. Evmoreen if you work with cnstructor with some many parameters it could be a good practice to encapsulate that creation in a factory to avoid repeat that complex code all over an app, making the code prone to bugs 
  - provides an interface for contructing preconfigured objects
  - your code is cleaner and resilient
  - this pattern is extremely useful when writing NPM packages for public use
  - allows you to offer an easy to understand interface to you package's functions 
  
 -  abstract factory pattern makes the process even easier by offering a generic interface to build a family of related objects
 -  we created an iphoneFactory class that can create three models of iphones easily 
 
### Builder 
  it understands the requirements in the easist of expression and transaltes that into the outcome, using several complex internal process. The idea is separate a complex consturction of an object for its representation, so the same consturction process can create different representations 
  - enables the creation of an easy to use interface to a complex process
  - by introducing a step-by-step workflow, NPM packages can be made easy to understand and consume 
  - we create a singupbuilder class that implemented the builder pattern to simplify the process of singing up a new user and configuring its preferences
  
## Control flow patterns

 I leave you an exmaple how to convert code using SOLID patterns and the concepts of 
  - Callback hell 
  - promises 
  - asycn/await  
  - generators 

## Module design pattern
  ## Revealing module pattern for javascript not typescript 
  Javascript does not provide  a private scope like java or typescript , it offers just the function scope which is private unles specically exposed.In the browser you can use a global variable or using inmediately invoked functions expression IFFE, node module system implements the revealing module natively, using export you can make public whichever functions you want. 
    When usign ES6 classes, we can use Symbol to implement private methods
    
  ## Dependency Injection 
  The problem with tightly coupled  modules
  - hardwiring multiple dependencies
  - hardwired dependencies make ir difficult to change a dependency later
  - we might to refactor a lot of code 
  - never write higly cohesive and tightly coupled modules 
  Benefits 
  - we may end up refactoring large bits of code
  - tightly coupled modules can pose serious problems when a dependency needs to be changed or replaced.
      
 ## Estructural Design pattern
   ### Proxy 
   Provides a wrapper for another object  to control the access to it, we are using the interface https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy . REACT.JS uses this pattern to have a proxy which generates an observer on an objects to contol the changes of state or props , and then trigger updates automatically optimized re-renders on the UI. 
   -  allows us external access control to the object
   -  implements the same interface as the original object
   -  the proxy API (ES2015, nodejs6+) enables the creation proxy wrappers for objects
   -  proxy implements traps for various kinds of access augmentation 
   - great for implementing middleware mechanism  for caching, logging, encryption, and other kind of augmented functionality as a virtualized proxy 
   
  ### Adapater 
   Converts the interface of an class into another interface the client expects. Its common usage could be for migration from one implementaiton to another without changing the contract interface facing to the clients 
   -  it is used to create a bridge between two different interfaces
   -  removes incompatibilities between the interfaces 
   -  prevents or minimizes refactoring client application code 
   -  let you build packages with an opinionated API, with custom adapters for maximun compatiblity 
   
  ### Decorator
  the idea is add new functionality, attach it dinamically, provides flexibility for subclasses for extending functionlity. it is used for REACT.js in the high order component HOC , giving to the component extra abilities.
  - ingest a function a return another function
  - decorator can be used to add features and function to exiting objects dynamically 
  - implemented as higher order function   -- decoratorSignature for typescript but it can be used for JS as well (tagetClass: any, propertyKey:string, descriptor:  PropertyDescriptor)
  - TC39 has proposed the decorator sintax @decorator for use classes and class method . In typescript we need to uncomment the #experimentalDecorator :true in the tsconfig.json  
  - In node there is another alernative we can use babel compiler https://babeljs.io/docs/babel-plugin-proposal-decorators  and  parcel bundle https://github.com/parcel-bundler 
    
    
  ### Composite
  compose objects intro three structures to represent hierarchies. composite lets clients treat individual objects and composition of objects uniformly 
  - component (base)
  - leaf (instance of the base) => indivual objects, cannot contain child leaves 
  - composite (instance of the base) => collection of leaves, collection of composites
  - a leaf or a single entity like a product or person
  - a composite that contains collections of entities
  - composites can also be collection of composites
    
    
## Messaging pattern 
  ### Request-reply  
It is for one way communication using standars such as https, websockets, main & child processes , it uses an identifier for each request the correlation id, it should sent it back within the reply . it could be sent as a header X-Correlation-ID or in the message payload. It is a way to differenciate clients 
  - it is a one-way messaging pattern
  - in the example the client sends a "request" message to the server, which reponse back with a "reply".
  - this pattern involves the use of a unique correlation id for every request 
  - the correlation identifier is sent back to the client in the reply and is used to correlate the request and reply 
  - a return address may also incorporated if multiple clients are involved 
  - can be used with message brokers such as rabbitMQ to enable multiple apps to comunicate with each other effectively 
    
 ###  Publisher-subscriber  
 in this example I will use a mesaage broker as RabbitMQ https://rabbitmq.com/ ..based on https://www.rabbitmq.com/tutorials/tutorial-three-javascript.html  you need it installed in your box as a precondition to run the example. I will define a basic publisher and a subscriber to comunicate to eachother trought the channel of the broker 
  - Useful when you work with microservices or Serverless arqutectures 
  - Message deliverability may post issues if the broker goes down, missconfigured or crashed. 
  
  
   
