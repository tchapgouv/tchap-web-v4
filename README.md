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

- Now that `matrix-react-sdk` is merged inside tchap-web, we only target the `test/tchap` folder in order to run our tests on only the files that tchap has modified.
- For every modification, we need to copy the existing test (if there is one) of the component, move it to tchap folder and modify it accordingly.
- This project is tested with BrowserStack.

## Copyright & License

Copyright (c) 2014-2017 OpenMarket Ltd
Copyright (c) 2017 Vector Creations Ltd
Copyright (c) 2017-2025 New Vector Ltd
2024-2025, Direction interministérielle du numérique

This software is multi licensed by New Vector Ltd (Element). It can be used either:

(1) for free under the terms of the GNU Affero General Public License (as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version); OR

(2) for free under the terms of the GNU General Public License (as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version);
