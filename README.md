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

If you're using macOS or Linux (Doesn't work on Windows¹), you can use the tool to quickly create and configure a new module; run this command in the root of the project:

```sh
bash cli/module_creator.bash
```

To change the logic of module operation and check the result of its work in the application, you need to recompile the module. This can be done using the build_modules script; execute this command in the root of the project:

```sh
npm run build-modules
```

If something went wrong, you can compile the modules yourself. To compile a module yourself, go to the module folder and execute the compile command:

```sh
npm run compile
```

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

#### Controllers & Modules compositions

Controllers combine the necessary modules to solve business problems and export ready-made methods to solve business problems.

Compositions modules are modules consisting of UI and controllers linked by a single business task.

UI and business logic are placed in a single module for convenient work on a specific business task and do not have any dependencies with other business tasks. Composition module exports external business task methods and UI components with ready business logic for rendering in the application

A similar move can be observed in the book «From Monolith to Microservices» by Sam Newman, but this approach was called there as «ui modules»

<br />

### Installation and start dev server.

To install the repository, paste this command into your terminal:

```sh
git clone https://github.com/hschhhwwwo0o/b64sc.git
```

If you are a macOS or Linux user, (Doesn't work on Windows¹) the project installation is done in 1 line of code in the terminal; to install application and module dependencies, copy this command and run it in the project root:

```sh
bash cli/project_installer.bash
```

_If the install script gives an error (Doesn't work on Windows¹), you must install the module dependencies yourself, compile the modules, install the application dependencies, and install husky to install it._

Start the dev server using the command in the root of the project:

```sh
npm run dev
```

<br />
<br />
<br />
<br />

## Dictionary of Terms.

> _«A dictionary of terms defines all the specialized terms that the reader needs to know in order to properly understand the software requirements specification»_.
>
> <ins>«Development of software requirements», Third Edition. Carl Vigers, Jay Beatty</ins>

The term dictionary is intended to ensure that the same terms are used throughout the code base. For example, to eliminate the use of synonym words.

| Term            | Meaning                                                                                                           |
| :-------------- | :---------------------------------------------------------------------------------------------------------------- |
| base64          | A standard for encoding binary data using only 64 ASCII characters.                                               |
| Image previewer | This window will display the image after inserting the base64 string into the corresponding field.                |
| HIG             | A set of guidelines for designers.                                                                                |
| WCAG            | A set of guidelines on how to create an interface and how to check its accessibility for users with disabilities. |
| Open Graph      | Micro markup for SEO.                                                                                             |
| Lighthouse      | Automated tool for measuring the quality of web pages.                                                            |

<br />
<br />
<br />
<br />

## Software requirements.

> _«Requirements are a specification of what needs to be implemented. They describe the behavior of the system, the properties of the system or its attributes. They can serve as constraints in the system development process.»_
>
> <ins>Ian Sommerville, Pete Sawyer, 1997</ins>

### Quality Attributes.

> _«Quality attributes describe the characteristics observed during software execution. They strongly influence the perception of the system by users and the opinion that users have about its quality.»_
>
> <ins>«Development of software requirements», Third Edition. Carl Vigers, Jay Beatty</ins>

| Attribute                          | ID                       | Description / Why it's necessary                                                 | Done |
| :--------------------------------- | :----------------------- | :------------------------------------------------------------------------------- | :--: |
| UI is based on HIG.                | QA/UI/HIG                | HIG is essential for a better UX.                                                |  ❌  |
| Interface adaptation.              | QA/UX/ADAPTIVE-INTERFACE | An adapative interface is needed to better display the app on different devices. |  ❌  |
| WCAG compliance.                   | QA/UX/WCAG               | WCAG is needed for a better UX for people with disabilities.                     |  ❌  |
| Error output.                      | QA/UX/ERRORS-LOG         | Necessary for a better UX.                                                       |  ❌  |
| High Lighthouse testing results.   | QA/SEO/LIGHTHOUSE        | Necessary to improve search engine rankings.                                     |  ❌  |
| Open Graph support.                | QA/SEO/OPEN-GRAPH        | Necessary to improve search engine rankings.                                     |  ❌  |
| Description of standard meta tags. | QA/SEO/META              | Necessary to improve search engine rankings.                                     |  ❌  |
| Twitter meta tags.                 | QA/SEO/TWITTER-META      | Necessary to improve search engine rankings.                                     |  ❌  |

### Functional requirements.

> _«Functional requirements can be written in terms of what the system does or what the user does.»_
>
> <ins>«Development of software requirements», Third Edition. Carl Vigers, Jay Beatty</ins>

| Functional requirement                | ID                      | Responsible element          | Done |
| :------------------------------------ | :---------------------- | :--------------------------- | :--: |
| Sending feedback.                     | UF/FEEDBACK/CREATE      | @feedback-service            |  ✅  |
| Generating daturl from base64 string. | UF/FINAL-IMAGE/DATA-URL | @base64-to-dataurl-generator |  ✅  |
| Clear base64 string.                  | UF/CLEAR-INPUT-BASE64   | @app                         |  ❌  |
| Input base64 string.                  | UF/INPUT-BASE64         | @app                         |  ✅  |
| Displaying an image.                  | UF/FINAL-IMAGE/PREVIEW  | @app                         |  ✅  |
| Downloading a image.                  | UF/FINAL-IMAGE/DOWNLOAD | @html-image-controller       |  ✅  |
| Copying an image to the clipboard.    | UF/FINAL-IMAGE/COPY     | @html-image-controller       |  ✅  |

## Literature.

The development process was strongly influenced by the books:

- «Development of software requirements» Carl Vigers, Jay Beatty;
- «Clean Architecture» Robert Martin;
- «Envisioning Information» Edward R. Tufte;
- «A Description of the Model-View-Controller User Interface Paradigm in the Smalltalk-80 System» Glenn E. Krasner and Stephen T. Pope;
- «From monoliths to microservices» Sam Newman
