![enter image description here](https://github.com/joelcoxokc/aurelia-interface/blob/master/aurelia-interface.png)

# aurelia-interface

[![Join the chat at https://gitter.im/joelcoxokc/aurelia-interface](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/joelcoxokc/aurelia-interface?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

UI Library for [Aurelia](http://www.aurelia.io/) platform.


[![Join the chat at https://gitter.im/joelcoxokc/ui-aurelia](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/joelcoxokc/ui-aurelia?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


> To keep up to date on [Aurelia](http://www.aurelia.io/), please visit and subscribe to [the official blog](http://blog.durandal.io/). If you have questions, we invite you to join us on [our Gitter Channel](https://gitter.im/aurelia/discuss).


##CONTRIBUTERS

**Plugins** are found in the `./plugins` directory.

**Demo Application** found in the `./src` directory

**Stylus && CSS** found in the `./styles` directory


**HTML** We are using HTML for our views, However, You are able to use jade
**NOTE** We Recommend the usage of HTML over Jade.

**Flex-Box**We are using Flex-Box to build this Library.

**Components**We are implementing any possible component from a multitude of other Frameworks & Libraries.

Please Contact me via Email before beginning work on a plugin, as many are already building some plugins.



### TODO
Create a curated list of plugins we can begin developing on.


####COMPONENTS:

> Current contains the following

 - Buttons
 - Actions
 - Tabs
 - Collections
 - Collapsible
 - Select
 - Typehead
 - Dropdown
 - Modal
 - Dialog
 - Progress
 - Card
 - DataGrid
 - Table
 - Shadows
 - Grid
 - Color
 - Draggable

####LAYOUT:

 - ui-main
 - ui-body
 - ui-section
 - ui-nav
 - ui-aside
 - ui-header
 - ui-footer
 - ui-view
 - ui-grid
 - ui-custom

####Plugins:

 - uiLayoutService
 - uiToggle
 - uiAnimate
 - uiWaves
 - uiText
 - uiBg


###Currently Developing

####Layout:

 - ui-nav
 - ui-aside
 - ui-body
 - ui-main
 - ui-view


Most plugins will be placed into separate repos eventually.

The overall architecture is currently being designed.

Please Note that any changes made to the Dev environment may be over written.



## Running The App

To run the app, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g jspm
  ```
  > **Note:** jspm queries GitHub to install semver packages, but GitHub has a rate limit on anonymous API requests. It is advised that you configure jspm with your GitHub credentials in order to avoid problems. You can do this by executing `jspm endpoint config github` and following the prompts.
5. Install the client-side dependencies with jspm:

  ```shell
  jspm install -y
  ```
  >**Note:** Windows users, if you experience an error of "unknown command unzip" you can solve this problem by doing `npm install -g unzip` and then re-running `jspm install`.
6. To run the app, execute the following command:

  ```shell
  gulp watch
  ```
7. Browse to [http://localhost:9000](http://localhost:9000) to see the app. You can make changes in the code found under `src` and the browser should auto-refresh itself as you save files.

> Note: At present there is a bug in the HTMLImports polyfill which only occurs on IE. We have submitted a pull request to the team with the fix. In the mean time, if you want to test on IE, you can work around the issue by explicitly adding a script tag before you load system.js. The script tag should look something like this (be sure to confirm the version number):

```html
<script src="jspm_packages/github/webcomponents/webcomponentsjs@0.5.2/HTMLImports.js"></script>
```

## Running The Unit Tests

To run the unit tests, first ensure that you have followed the steps above in order to install all dependencies and successfully build the library. Once you have done that, proceed with these additional steps:

1. Ensure that the [Karma](http://karma-runner.github.io/) CLI is installed. If you need to install it, use the following command:

  ```shell
  npm install -g karma-cli
  ```
2. Install Aurelia libs for test visibility:

```shell
jspm install aurelia-framework
jspm install aurelia-http-client
jspm install aurelia-router
```
3. You can now run the tests with this command:

  ```shell
  karma start
  ```

## Running The E2E Tests
Integration tests are performed with [Protractor](http://angular.github.io/protractor/#/).

1. Place your E2E-Tests into the folder ```test/e2e/src```
2. Install the necessary webdriver

  ```shell
  gulp webdriver_update
  ```

3. Configure the path to the webdriver by opening the file ```protractor.conf.js``` and adjusting the ```seleniumServerJar``` property. Typically its only needed to adjust the version number.

4. Run the E2E-Tests

  ```shell
  gulp e2e
  ```
