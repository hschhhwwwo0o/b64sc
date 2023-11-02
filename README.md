Converter base64 strings to high quality images for further image download/copying.

<a href="https://github.com/hschhhwwwo0o/b64sc/discussions">Recommendations, questions, opinions, feedback.</a>

<br />
<br />
<br />
<br />

## Development.

Tracking of tasks was done using GitHub Projects.

The development of the project was divided into several stages:

1. Development of software requirements.
2. Design development.
3. Module development.
4. Application development.

### 1. Development of software requirements.

Before starting to develop the code base, the requirements to the software product were thought over. Functional and user requirements, quality attributes were formulated; a data dictionary and a dictionary of terms were compiled. Read more about the requirements for vital software in the chapter «Software requirements».

A unique identifier is created for each requirement. At the stage of code writing, the identifier of the implemented requirement is noted in the comment, which makes it easier to find the implementation of a particular requirement in the code base. For example:

```ts
/**
 * @requirement REQUIREMENT/ID
 */
async function sameName(): Promise<void> {
  ...
}
```

In the book «Software Requirements Engineering» by Carl Wiegers and Jay Beatty, this approach is called _requirement tracking_. To find anything related to a particular requirement use the codebase search (⇧⌘F in VSC on macOS) and enter the requirement ID. For example:

### 2. Design development.

The design of the application was developed in Figma/Photoshop. The design was developed in accordance with the previously developed software requirements.

### 3. Module development.

The application implements a «modular monolith» architecture. The project is separated into modules and application; modules are responsible for implementing the business logic; application is responsible for rendering the UI and executing the business logic through the modules. Thus, the application (in this case, the NextJS framework) is responsible only for displaying the UI, while the modules contain all the business logic. _Each module performs only one task and should not interact with other modules in any way_. Not all modules implement the subject area - general purpose modules are allowed.

The purpose of this separation is to separate business logic from fickle and windy frameworks and libraries that have nothing to do with business logic. The modules are designed in such a way that they can be used independently of the framework; this makes it very easy to migrate from ReactJS to VueJS, for example.

### 4. Application development.

> _«When building interactive applications, as with other programs, modularity of components has enormous benefits. Isolating functional units from each other as much as possible makes it easier for the application designer to understand and modify each particular unit, without having to know everything about the other units._
>
> _Model-View-Controller metaphor and its application structuring paradigm for thinking about (and implementing) interactive application components was developed. Models are those components of the system application that actually do the work (simulation of the application domain). They are kept quite distinct from views, which display aspects of the models. Controllers are used to send messages to the model, and provide the interface between the model with its associated views»_.
>
> <ins>«A Description of the Model-View-Controller User Interface Paradigm in the Smalltalk-80 System» Glenn E. Krasner and Stephen T. Pope</ins>

An architecture is developed where modules play the role of MVC models. Controllers use module methods; one controller can be linked to several modules; controller serves as a link between modules and view; controllers are not linked to the framework and are just classes, so they can be reused with any other framework to render the view. View calls controller methods and knows nothing about business logic.

The structure of the project is a modular monolith.

> _«The modular monolith is a variation as a subset of the single-process monolith: a single process consists of separate modules, each of which can be worked on independently, but all of which must still be combined»_.
>
> <ins>«From monoliths to microservices» by Sam Newman</ins>

<br />

### Installation and start dev server.

To install the repository, paste this command into your terminal:

```sh
git clone https://github.com/hschhhwwwo0o/b64sc.git
```
