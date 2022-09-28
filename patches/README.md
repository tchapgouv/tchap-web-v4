Commands to make the patches
--

Keep track of the commands used to make the patches, to make sure we keep the same files in them.
Todo : automate the making and updating of patches

### better-help-settings
yarn patch-package --patch-dir patches/better-help-settings --include src/components/views/settings/tabs/user/HelpUserSettingsTab.tsx  matrix-react-sdk

### better-help-settings-2

### disable-access-options

### disable-cross-signing

### forgot-password
yarn patch-package --patch-dir patches/forgot-password --include src/components/structures/auth/ForgotPassword.tsx  matrix-react-sdk

### hide-cross-signing-actions

### hide-room-alias-settings

### hide-secure-storage

### hide-secure-storage-2

### login
yarn patch-package --patch-dir patches/login --include src/components/.*/auth/.*Login.*  matrix-react-sdk
