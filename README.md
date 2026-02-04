<p align="center">
  <a href="https://github.com/tchapgouv">
    <img alt="tchap-logo" src="./res/themes/tchap/img/logos/tchap-logo.svg" width="300" />
  </a>
</p>

<p align="center">
  Bienvenue sur Tchap! Le système de messagerie instantanée du secteur public français
</p>

<p align="center">
  <a href="https://tchap.numerique.gouv.fr">
    Site web de présentation
  </a> - 
  <a href="contact@tchap.beta.gouv.fr">
    Contactez-nous
  </a>
</p>

Tchap is a web app that allows you to chat through the matrix protocol for the French public service. It is a soft fork of [Element web](https://github.com/vector-im/element-web), we diverge only for specific requirements.

## Config variables

- tchap_features : Object containing the feature that can be activated by homeserver
    - "feature_email_notification": Email notification
    - "feature_space": Creation of spaces
    - "feature_thread": Activate thread on messages
    - "feature_audio_call": Activate 1 to 1 voice call
    - "feature_video_call": Activate 1 to 1 video call
    - "feature_video_group_call": Activate group call on rooms, for this feature to work, the values of `UIFeature.widgets` and `feature_group_calls` needs to be true
    - "feature_screenshare_call": Activate 1 to 1 screenshare
- "tchap_sso_flow"
    - "isActive": Activate ProConnect SSO flow

## File structures

- modules -> used for translation
- yarn-linked-dependencies -> legacy dependencies used for matrix-js-sdk
- patches_legacy -> legacy patches directory in which code for the patches where put
- patches -> used for matrix-js-sdk patches
- src -> code containing ex matrix-react-sdk lib and element-web code

## Local dev installation

```
yarn install
yarn start
```

## Dev guidelines

### Making a change

- In Element code (everything outside of tchap folders) :
  You need to add around your code those comments

```
// :TCHAP: NAME_OF_THE_PATCH
...code
// end :TCHAP:
```

Then also update the `tchap-modifications.json` file. We continue to keep track of the changes we make to the sdk. It will also be easier to separate different functionnality that tchap added to the code

### Compound Web tchap

We use our own compound-web and compound-design-token packages. When upgrading the version, do not forget to also upgrade compoound-web-tchap npm package.
The reference to `@vector-im/compound-web` are still present, but it is only an alias to our package `compound-design-tchap` defined in webpack. The only direct reference to this package is in the css import of `_common.pcss`, because the pcss loader doesnt manage aliases.

### Tests

<<<<<<< HEAD
- Now that `matrix-react-sdk` is merged inside tchap-web, we only target the `test/tchap` folder in order to run our tests on only the files that tchap has modified.
- For every modification, we need to copy the existing test (if there is one) of the component, move it to tchap folder and modify it accordingly.
- This project is tested with BrowserStack.
=======
1. Install or update `node.js` so that your `node` is at least the current recommended LTS.
1. Install `yarn` if not present already.
1. Clone the repo: `git clone https://github.com/element-hq/element-web.git`.
1. Switch to the element-web directory: `cd element-web`.
1. Install the prerequisites: `yarn install`.
    - If you're using the `develop` branch, then it is recommended to set up a
      proper development environment (see [Setting up a dev
      environment](./developer_guide.md#setting-up-a-dev-environment) below). Alternatively, you
      can use <https://develop.element.io> - the continuous integration release of
      the develop branch.
1. Configure the app by copying `config.sample.json` to `config.json` and
   modifying it. See the [configuration docs](docs/config.md) for details.
1. `yarn dist` to build a tarball to deploy. Untaring this file will give
   a version-specific directory containing all the files that need to go on your
   web server.

Note that `yarn dist` is not supported on Windows, so Windows users can run `yarn build`,
which will build all the necessary files into the `webapp` directory. The version of Element
will not appear in Settings without using the dist script. You can then mount the
`webapp` directory on your web server to actually serve up the app, which is
entirely static content.

# Running as a Desktop app

Element can also be run as a desktop app, wrapped in Electron. You can download a
pre-built version from <https://element.io/get-started> or, if you prefer,
build it yourself.

To build it yourself, follow the instructions at <https://github.com/element-hq/element-desktop>.

Many thanks to @aviraldg for the initial work on the Electron integration.

The [configuration docs](docs/config.md#desktop-app-configuration) show how to override the desktop app's default settings if desired.

# config.json

Element supports a variety of settings to configure default servers, behaviour, themes, etc.
See the [configuration docs](docs/config.md) for more details.

# Labs Features

Some features of Element may be enabled by flags in the `Labs` section of the settings.
Some of these features are described in [labs.md](https://github.com/element-hq/element-web/blob/develop/docs/labs.md).

# Caching requirements

Element requires the following URLs not to be cached, when/if you are serving Element from your own webserver:

```
/config.*.json
/i18n
/home
/sites
/index.html
```

We also recommend that you force browsers to re-validate any cached copy of Element on page load by configuring your
webserver to return `Cache-Control: no-cache` for `/`. This ensures the browser will fetch a new version of Element on
the next page load after it's been deployed. Note that this is already configured for you in the nginx config of our
Dockerfile.

# Development

Please read through the following:

1. [Developer guide](./developer_guide.md)
2. [Code style](./code_style.md)
3. [Contribution guide](./CONTRIBUTING.md)

# Translations

To add a new translation, head to the [translating doc](docs/translating.md).

For a developer guide, see the [translating dev doc](docs/translating-dev.md).

# Extending Element Web with Modules

Element Web supports a module system that allows you to extend or modify functionality at runtime. Modules are loaded dynamically and provide a safe, predictable API for customization.

## What are modules?

Modules are extensions that can add or modify Element Web's functionality. They are:

- Built using the [`@element-hq/element-web-module-api`](https://github.com/element-hq/element-modules/tree/main/packages/element-web-module-api)
- Loaded in EW via [config.json](docs/config.md#modules)

# Triaging issues

Issues are triaged by community members and the Web App Team, following the [triage process](https://github.com/element-hq/element-meta/wiki/Triage-process).

We use [issue labels](https://github.com/element-hq/element-meta/wiki/Issue-labelling) to sort all incoming issues.
>>>>>>> v1.12.9

## Copyright & License

Copyright (c) 2014-2017 OpenMarket Ltd
Copyright (c) 2017 Vector Creations Ltd
Copyright (c) 2017-2025 New Vector Ltd
2024-2025, Direction interministérielle du numérique

This software is multi licensed by New Vector Ltd (Element). It can be used either:

(1) for free under the terms of the GNU Affero General Public License (as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version); OR

(2) for free under the terms of the GNU General Public License (as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version);
