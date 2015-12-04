# Yo P2! – the Phase2 Site Generator

> Yeoman generator that weaves together multiple generators, tools, and Phase2
best practices to kick off Drupal projects in style.

This is an umbrella [Yeoman](http://yeoman.io/) generator that asks questions,
then passes the answers to multiple "child" generators that handle their own
aspect of the scaffolding. As the name implies, this generator focuses on Phase2
practices, where some of the other generators in use are focused on broader industry
best practices.

## Installation

```bash
npm install --global git+ssh://bitbucket.org/phase2tech/generator-p2.git#master
```

## Use the Tool

Make an empty folder, and initiate the generator:

```bash
yo p2
```

Once all questions are answered a complete code scaffolding will be created.
Generate a working codebase with another one-liner:

```bash
grunt
```

The backend is handled by GDT and the frontend is handled by Pattern Lab Starter.
They are integrated with each other via the
[Theme Scripts of GDT](https://github.com/phase2/grunt-drupal-tasks/blob/master/CONFIG.md#theme-scripts)
so a full site compile can happen by running the project's default build task: `grunt`.

### Command-line Options

* `--replay`: Re-run the generator against an existing project, using previously
entered answers.
* `--use-master`: Will make a point of leveraging the master version of
grunt-drupal-tasks.
* `--skip-install`: Will skip running `npm install` at the end of the
generation process. (Applied by default when you opt-in for the
Docker-based Phase2 Environment.)

## Leveraged Projects

Here are the projects that are currently integrated as part of Yo P2.
Each will need to be installed.

### Grunt Drupal Tasks

[Grunt Drupal Tasks](https://github.com/phase2/grunt-drupal-tasks) manages backend
development, continuous integration, and overall project tooling for the Drupal
application. It has its own generator which must be installed, you can find it
on Github at [Gadget](https://github.com/phase2/generator-gadget).

### Pattern Lab Starter

[Pattern Lab Starter](http://git.io/p2pls) initializes new, Pattern-lab integrated
themes and manages frontend development practices. It has its own generator which
must be installe, you can find it on Github at
[Generator PLS](https://github.com/phase2/generator-pattern-lab-starter).

### Phase2 Environment

[Phase2 Environment](https://bitbucket.org/phase2tech/generator-p2-env) initializes
support for Docker-based development with Phase2's DevTools, including Drush
configuration enabled by controlling the server environment and Grunt-Drupal-Tasks
changes needed for Docker compatibility.

## Testing Changes

If you would like to test out changes to generator-p2 or one of the above
projects, please take the following steps:

1. `git clone git@bitbucket.org:phase2tech/generator-p2.git`
2. Check out the alternate branch of generator-p2. If testing alternate
branches of one of the other generators, edit the package.json dependency entry
according to the [package.json dependency
documenation](https://docs.npmjs.com/files/package.json#git-urls-as-dependencies).
3. Run `npm link` to use this copy as the global version. (May require `sudo`)

If you would like to take it a step further and develop in the other generators
while testing with `yo p2`, clone those repositories as well and replace the
version installed in `generator-2/node_modules` with a symlink. **Note this may
not work in npm v3.x.**
