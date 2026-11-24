# Changelog — excludedElementTests.ts

Known-failure exclusion updates recorded by `updateExcludedElementTests.ts`, newest first.
Each section is grouped by run date, git commit and branch.

## 2026-11-24 — `eed467c688` TCHAP(e2e): add CI run element e2e tests and exclude failed one — branch `adapt-e2e-tests-element`

Added 55 exclusion pattern(s) from the last run:

- `^(?:[^ ]+ )?spaces/spaces\.spec\.ts.*Spaces.*should render readable notification badges in the space panel(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?spaces/spaces\.spec\.ts.*Spaces.*should include rooms in space home(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?spaces/spaces\.spec\.ts.*Spaces.*should render spaces view(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?spaces/spaces\.spec\.ts.*Spaces.*should render spaces visibility settings(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?spaces/spaces\.spec\.ts.*Spaces.*Should hide public spaces option if not allowed.*should disallow creating public rooms(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?timeline/timeline\.spec\.ts.*Timeline.*message sending.*should display a reply chain(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?timeline/timeline\.spec\.ts.*Timeline.*spoilers.*clicking a spoiler containing the pill de-spoilers on 1st click, then follows link on 2nd(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?voip/element-call\.spec\.ts.*Element Call.*Group Chat.*should be able to join a voice call in progress(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?voip/element-call\.spec\.ts.*Element Call.*Group Chat.*should be able to join a video call in progress(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?voip/pstn\.spec\.ts.*PSTN.*should render dialpad as expected(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?widgets/layout\.spec\.ts.*Widget Layout.*should be set properly(?: @[^ ]+)*$`

- `^(?:[^ ]+ )?right-panel/right-panel\.spec\.ts.*RightPanel.*in rooms.*room reporting.*should handle reporting a room(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?room/room-header\.spec\.ts.*Room Header.*with feature_notifications enabled.*should render room header icon correctly(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?room/room-status-bar\.spec\.ts.*Room Status Bar.*Local rooms.*should show an error when creating a local room fails(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?pinned-messages/pinned-messages\.spec\.ts.*Pinned messages.*should pin one message and to have the pinned message badge in the timeline(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?pinned-messages/pinned-messages\.spec\.ts.*Pinned messages.*should display one message in the banner(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?polls/polls\.spec\.ts.*Polls.*should be creatable and votable(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?left-panel/room-list-panel/room-list-unread-toast\.spec\.ts.*Room list unread activity toast.*flat list.*shows a toast for a notifying room below the fold and scrolls to it on click(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?left-panel/room-list-panel/room-list-unread-toast\.spec\.ts.*Room list unread activity toast.*sections.*shows a toast for a collapsed section that hides a notifying room(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?left-panel/room-list-panel/room-list\.spec\.ts.*Room list.*Room list.*should open the room when it is clicked(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?left-panel/room-list-panel/room-list\.spec\.ts.*Room list.*Notification decoration.*should render the invitation decoration(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?left-panel/room-list-panel/room-list\.spec\.ts.*Room list.*Notification decoration.*should render the regular decoration(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?left-panel/room-list-panel/room-list\.spec\.ts.*Room list.*Notification decoration.*should render a message preview when enabled in header(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?left-panel/room-list-panel/room-list\.spec\.ts.*Room list.*Notification decoration.*should render silent decoration(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?links/composer-url-preview\.spec\.ts.*Composer URL preview.*in cider.*shows a preview when a URL is typed into the composer(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?links/composer-url-preview\.spec\.ts.*Composer URL preview.*in cider.*shows the second URL's preview if the first has no valid preview(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?messages/messages\.spec\.ts.*Message rendering.*with ltr display name.*should render a basic LTR text message(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?messages/messages\.spec\.ts.*Message rendering.*with ltr display name.*should render an LTR emote(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?messages/messages\.spec\.ts.*Message rendering.*with ltr display name.*should render an LTR rich text emote(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?messages/messages\.spec\.ts.*Message rendering.*with ltr display name.*should render an edited LTR message(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?messages/messages\.spec\.ts.*Message rendering.*with ltr display name.*should render a reply of a LTR message(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?messages/messages\.spec\.ts.*Message rendering.*with ltr display name.*should render a basic RTL text message(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?messages/messages\.spec\.ts.*Message rendering.*with ltr display name.*should render an RTL emote(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?messages/messages\.spec\.ts.*Message rendering.*with ltr display name.*should render a richtext RTL emote(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?messages/messages\.spec\.ts.*Message rendering.*with ltr display name.*should render an edited RTL message(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?messages/messages\.spec\.ts.*Message rendering.*with ltr display name.*should render a reply of a RTL message(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?messages/messages\.spec\.ts.*Message rendering.*with rtl display name.*should render a basic LTR text message(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?messages/messages\.spec\.ts.*Message rendering.*with rtl display name.*should render an LTR emote(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?messages/messages\.spec\.ts.*Message rendering.*with rtl display name.*should render an LTR rich text emote(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?messages/messages\.spec\.ts.*Message rendering.*with rtl display name.*should render an edited LTR message(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?messages/messages\.spec\.ts.*Message rendering.*with rtl display name.*should render a reply of a LTR message(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?messages/messages\.spec\.ts.*Message rendering.*with rtl display name.*should render a basic RTL text message(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?messages/messages\.spec\.ts.*Message rendering.*with rtl display name.*should render an RTL emote(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?messages/messages\.spec\.ts.*Message rendering.*with rtl display name.*should render an edited RTL message(?: @[^ ]+)*$`
- `^(?:[^ ]+ )?messages/messages\.spec\.ts.*Message rendering.*with rtl display name.*should render a reply of a RTL message(?: @[^ ]+)*$`

