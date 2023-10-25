# Software Engineering

## Design Patterns
- A design pattern is a general reusable solution to a commonly occurring problem in software design.
- It is a description for how to solve a problem that can be used in many different situations.
- Object-oriented design patterns typically show relationships and interactions between classes or objects.

## Why do we need design Patterns:
- Creating a class properly
- Instantiating an object to a particular class
- Interaction between objects
- Write loosely coupled code
- Write reusable code

## Advantages of Using Design Patterns in Software Engineering:

- **Reusability:** Design patterns offer tried and tested solutions for reusing in software development.
- **Standardized Terminology:** They establish a common language for developers to communicate and understand design concepts.
- **Higher-Level Perspective:** Design patterns provide a higher-level view of the software architecture.
- **Enhanced Modifiability:** Most patterns make software more flexible and less prone to breaking during changes.
- **Loose Coupling:** Patterns promote loosely coupled applications for better maintainability.
- **Improved Understanding:** They aid in comprehending fundamental object-oriented design principles.

## 5 Basic Components of a Design Pattern:

- **Name:** Identifies the pattern for easy reference and discussion.
- **Problem:** Describes the specific software design issue the pattern addresses.
- **Solution:** Offers a proven approach or template to solve the identified problem.
- **Consequences and Trade-offs:** Outlines the benefits, drawbacks, and considerations of applying the pattern.
- **Implementation:** Provides an architecture using a design class diagram to visualize the pattern's structure.

## Pattern Name:

- **Identification Purpose:** Identifies the specific pattern addressing a particular problem in software design.
- **Descriptive Function:** Used to articulate and define a design challenge within a system.
- **Enhanced Vocabulary:** Naming a pattern expands the design terminology, enabling higher-level conceptualization.
- **Facilitates Abstract Design:** Supports the creation of designs at a more conceptual and less detailed level.
- **Simplified Discussion:** Allows for discussions and evaluations of designs without getting bogged down in implementation specifics.
- **Recalls Problem and Solution:** A well-chosen pattern name should evoke the problems it resolves and the corresponding solution.
- **Examples:** Singleton, Factory Method, Prototype.

## Pattern Problem:

- **Application Context:** Defines the circumstances and context in which the pattern is relevant and beneficial.
- **Problem Description:** Specifies the design challenge being addressed, which may include converting algorithms into object representations.
- **Identifies Design Issues:** Pinpoints class or object configurations indicative of a rigid and less adaptable design.
- **Conditions for Application:** Occasionally outlines a set of prerequisites that must be met before applying the pattern becomes meaningful.

## The Solution
- The solution describes the elements that make up the design, their relationships, responsibilities, and collaborations.
- The solution doesn't describe a particular concrete design or implementation, because a pattern is like a template that can be applied in many different situations.
- Instead, the pattern provides an abstract description of a design problem and how a general arrangement of elements (classes and objects in our case) solves it

## The Consequences
- The consequences are the results and trade-offs of applying thepattern.
- The consequences for software often concern space and time trade-offs.
- They may address language and implementation issues as well.
- Since reuse is often a factor in object-oriented design, the consequences of a pattern include its impact on a system's flexibility, extensibility, or portability.
- Listing these consequences explicitly helps you understand and evaluate them


## Advantages of Using Patterns with Java:

- **Proven Solutions:** Patterns embody the wisdom and expertise of developers who have effectively applied them in practice.
- **Reusability:** Patterns offer pre-fabricated solutions that can be customized for various scenarios and requirements.
- **Expressiveness:** They furnish a shared language of solutions, enabling concise expression of complex solutions.
- **Built-in Support in J2EE:** Java's J2EE platform includes built-in support for various design patterns, streamlining their implementation.


## Design Patterns in Smalltalk MVC:

- **MVC in Smalltalk-80:** Utilizes the Model/View/Controller (MVC) trio of classes for constructing user interfaces in Smalltalk-80.
- **Components of MVC:**
  - **Model (M):** Represents the application object.
  - **View (V):** Deals with the screen presentation.
  - **Controller (C):** Dictates how the user interface responds to user interactions.
- **Decoupling for Flexibility and Reuse:** MVC emphasizes decoupling to enhance flexibility and promote reusability in software design.



## MVC Architectural Design Pattern:

![image](https://github.com/hunterz-killer/S4-Notes/assets/82221655/62bc85b1-1281-4153-a1f2-b2aa1606c5d0)


- **User Interface Construction:** Used as a framework for building user interfaces.
- **Components of MVC:**
   - **Model:**
     - Contains only pure application data, devoid of presentation logic.
     - Responds to requests from views and instructions from controllers.
   - **View:**
     - Presents the model's data to the user.
     - Multiple views can be associated with a single model for different purposes.
     - Must update its presentation if the model's data changes.
   - **Controller:**
     - Receives user input and triggers responses by invoking appropriate model operations.
     - Accepts user input, instructs the model to perform actions accordingly.
     - Translates user interactions with its associated view into actions for the model.
     - Can create new views based on user demands.


## Pros and Cons of SmallTalk MVC:

**Pros:**

- **Effective Division of Responsibilities:** SmallTalk MVC effectively divides responsibilities, ensuring clear advantages.
- **Isolation of Domain and Presentation Logic:** Allows developers to alter domain models without impacting presentation logic, and vice versa.
- **Individualized Development Environments:** Developers can work in their preferred view, enhancing productivity.
- **Diverse User Interface Creation:** Permits the creation of various user interfaces (GUI, command-line, etc.) without affecting application logic.

**Cons:**

- **Increased Abstraction Complexity:** The use of multiple abstractions can lead to increased complexity in the framework.
- **Necessity for Broad Technological Knowledge:** Developers need to be well-versed in a variety of technologies due to the pattern's complexity.

## Advantages of Documentation
- The presence of documentation helps in keeping the track of all aspects of an application and also improves the quality of the software product.
- The main focus is based on the development, maintenance, and knowledge transfer to other developers.
- Helps development teams during development.
- Helps end-users in using the product.
- Improves overall quality of software product
- It cuts down duplicative work.
- Makes easier to understand code.
- Helps in establishing internal coordination in work.

## Disadvantages of software documentation
- The documenting code is time-consuming.
- The software development process often takes place under time pressure, due to which many times the documentation updates don‟t match the updated code.
- The documentation has no influence on the performance of an application.
- Documenting is not so fun, it‟s sometimes boring to a certain extent.


## Elements of design pattern
The 13 elements used to describe a design pattern are typically:

1. **Pattern Name:** Provides a unique identifier for the design pattern.
2. **Problem:** Describes the specific software design issue or scenario the pattern addresses.
3. **Solution:** Presents the design structure, components, and interactions to resolve the identified problem.
4. **Intent:** Outlines the overarching goal or purpose of the pattern.
5. **Motivation:** Provides a detailed scenario or example to illustrate when and why the pattern is useful.
6. **Applicability:** Specifies the circumstances in which the pattern is most applicable and effective.
7. **Structure:** Illustrates the components and their relationships within the pattern.
8. **Participants (or Classes/Objects):** Identifies the key elements involved in the pattern and their roles.
9. **Collaborations:** Describes how the participants work together to fulfill the pattern's intent.
10. **Consequences:** Discusses the advantages, disadvantages, trade-offs, and considerations of using the pattern.
11. **Implementation:** Offers guidance on how to implement the pattern in code, including language-specific details.
12. **Sample Code (if applicable):** Provides an example code snippet to demonstrate the pattern's implementation.
13. **Known Uses:** Presents real-world examples or instances where the pattern has been successfully applied.

These elements collectively form a comprehensive description of a design pattern, enabling developers to understand, apply, and adapt it in their own software designs.



## Expectations from User Interface Design:

- The User Interface should align with the skills, experience, and expectations of its anticipated users.
- Users tend to evaluate a product based on its interface rather than just its functionality.
- A poorly designed interface can lead to significant user errors.
- Many software products go unused due to subpar user interfaces.

## Importance of Interface:

- The interface is often the most crucial aspect of a system, as it represents the system for most users.
- Its significance is continuously growing in the software development process.
- Graphical User Interfaces (GUIs) represent a substantial improvement over earlier approaches.
- Major platforms like Mac and Microsoft provide style guides for interface design.
- Approximately 50% of code is devoted to handling the interface.

## Benefits of Good Design:

- Even small interface improvements can yield significant financial gains.
- Interface problems are treated with the same urgency as software bugs.
- Substantial improvements can lead to the creation of entirely new products.
- Revolutionary ideas like the browser's user interface transformed how we access information online.
- Companies like Google have thrived with simple yet effective user interfaces.

## Interface Design: Typical Errors:

- Lack of consistency in design elements.
- Requiring excessive memorization from the user.
- Insufficient guidance or help for users navigating the interface.
- Lack of context sensitivity, making it challenging to understand the current state.
- Poor responsiveness, leading to frustration and delays.
- The interface being unnecessarily complex or unfriendly to users.


## Golden Rules of User Interface Design:

- **Place the User in Control:** Empower the user to take charge of their interactions with the interface, providing clear and intuitive navigation and controls.

- **Reduce the User's Memory Load:** Minimize the need for users to remember information or learn complex procedures by presenting information and options clearly and accessibly.

- **Make the Interface Consistent:** Ensure that elements, layouts, and interactions are uniform throughout the interface, establishing predictability and familiarity for the user.


## User interface design principles

| Principle           | Description                                                                             |
|---------------------|-----------------------------------------------------------------------------------------|
| User familiarity    | The interface should use terms and concepts which are drawn from the experience of the people who will make most use of the system. |
| Consistency         | The interface should be consistent in that, wherever possible, comparable operations should be activated in the same way. |
| Minimal surprise    | Users should never be surprised by the behavior of a system.                            |
| Recoverability      | The interface should include mechanisms to allow users to recover from errors.         |
| User guidance       | The interface should provide meaningful feedback when errors occur and provide context-sensitive user help facilities. |
| User diversity      | The interface should provide appropriate interaction facilities for different types of system user. |

## Interaction styles

| Interaction Style      | Main Advantage                          | Main Disadvantage                        | Application Examples                                       |
|-----------------------|----------------------------------------|----------------------------------------|------------------------------------------------------------|
| Direct Manipulation   | Fast and Intuitive interaction. Easy to learn | May be hard to implement. Only suitable where there is a visual metaphor for tasks and objects | Video games, CAD systems                                   |
| Menu Selection        | Avoid user error, Little typing required        | Slow for experienced users. Can become complex when there are many menu options          | General purpose systems                                 |
| Form Fill-in          | Simple data entry, Easy to learn              | Takes up a lot of screen space          | Stock control, Banking systems                            |
| Command Language      | Powerful and flexible                         | Hard to learn, poor error management   | Operating systems, Library information retrieval systems, data analytics |



