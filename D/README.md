## Dependency inversion principle

High-level modules should not depend on low-level modules; both should depend on abstractions.

#### Benefits:

1) Reducing the number of dependencies among modules is an important part of the process of creating an application. This is something that we get if we implement DIP correctly. Our classes are not tightly coupled with the lower-tier objects, and we can easily reuse the logic from the high-tier modules.

    So, the main reason why DIP is so important is the modularity and reusability of the application modules. 
2) It is also important to mention that changing already implemented modules is risky. By depending on abstraction and not on a concrete implementation, we can reduce that risk by not having to change high-level modules in our project.

3) Finally, DIP when applied correctly gives us the flexibility and stability at the level of the entire architecture of our application. Our application will be able to evolve more securely and become stable and robust.
