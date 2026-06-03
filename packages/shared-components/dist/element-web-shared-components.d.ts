import { ChangeEventHandler } from 'react';
import { ComponentProps } from 'react';
import { Context } from 'react';
import { CSSProperties } from 'react';
import { default as default_2 } from 'react';
import { default as default_3 } from 'html-react-parser';
import { ElementType } from 'react';
import { EventEmitter } from 'events';
import { FC } from 'react';
import { FocusEvent as FocusEvent_2 } from 'react';
import { getNormalizedLanguageKeys } from 'matrix-web-i18n';
import { HTMLAttributeAnchorTarget } from 'react';
import { HTMLAttributes } from 'react';
import { HTMLProps } from 'react';
import { HTMLReactParserOptions } from 'html-react-parser';
import { I18nApi as I18nApi_2 } from '@element-hq/element-web-module-api';
import { JSX } from 'react';
import { JSXElementConstructor } from 'react';
import { KEY_SEPARATOR } from 'matrix-web-i18n';
import { KeyboardEventHandler } from 'react';
import { default as linkifyHtml } from 'linkify-html';
import * as linkifyjs from 'linkifyjs';
import { default as linkifyString } from 'linkify-string';
import { ListRange } from 'react-virtuoso';
import { MouseEvent as MouseEvent_2 } from 'react';
import { MouseEventHandler } from 'react';
import { normalizeLanguageKey } from 'matrix-web-i18n';
import { Panel } from 'react-resizable-panels';
import { PanelImperativeHandle } from 'react-resizable-panels';
import { PanelProps } from 'react-resizable-panels';
import { PanelSize } from 'react-resizable-panels';
import { PropsWithChildren } from 'react';
import { ReactElement } from 'react';
import { ReactEventHandler } from 'react';
import { ReactNode } from 'react';
import { Ref } from 'react';
import { RefCallback } from 'react';
import { RefObject } from 'react';
import { Group as ResizableGroup } from 'react-resizable-panels';
import { Separator } from 'react-resizable-panels';
import { Tags as Tags_2 } from '@element-hq/element-web-module-api';
import { Text as Text_2 } from '../../../../../../node_modules/compound-web-tchap';
import { TransitionEventHandler } from 'react';
import { Translations } from '@element-hq/element-web-module-api';
import { Variables } from '@element-hq/element-web-module-api';
import { VirtuosoMockContext } from 'react-virtuoso';
import { VirtuosoProps } from 'react-virtuoso';

/**
 * Resolved actions that `ActionBarView` can render.
 *
 * The order of actions in `ActionBarViewSnapshot.actions` defines the visual
 * order of buttons in the toolbar.
 */
export declare enum ActionBarAction {
    Cancel = "cancel",
    CopyLink = "copyLink",
    Download = "download",
    Edit = "edit",
    Expand = "expand",
    Hide = "hide",
    Options = "options",
    Pin = "pin",
    React = "react",
    Remove = "remove",
    Reply = "reply",
    ReplyInThread = "replyInThread",
    Resend = "resend",
    ViewInRoom = "viewInRoom",
    ViewSource = "viewSource"
}

/**
 * Compact toolbar for message-level actions such as reply, react, edit,
 * download, and overflow options.
 *
 * Use `className` for host-level container styling, following standard React patterns.
 *
 * @example
 * ```tsx
 * <ActionBarView vm={actionBarVm} className="mx_MessageActionBar" />
 * ```
 */
export declare function ActionBarView({ vm, className }: Readonly<ActionBarViewProps>): JSX.Element | null;

/**
 * Event handlers for toolbar actions.
 *
 * Each callback receives the triggering button so menus can be positioned from
 * the action anchor when needed.
 */
export declare interface ActionBarViewActions {
    onCancelClick?: (anchor: HTMLElement | null) => void;
    onCopyLinkClick?: (anchor: HTMLElement | null) => void;
    onDownloadClick?: (anchor: HTMLElement | null) => void;
    onEditClick?: (anchor: HTMLElement | null) => void;
    onHideClick?: (anchor: HTMLElement | null) => void;
    onOptionsClick?: (anchor: HTMLElement | null) => void;
    onPinClick?: (anchor: HTMLElement | null) => void;
    onReactionsClick?: (anchor: HTMLElement | null) => void;
    onRemoveClick?: (anchor: HTMLElement | null) => void;
    onReplyClick?: (anchor: HTMLElement | null) => void;
    onReplyInThreadClick?: (anchor: HTMLElement | null) => void;
    onResendClick?: (anchor: HTMLElement | null) => void;
    onToggleThreadExpanded?: (anchor: HTMLElement | null) => void;
    onViewInRoomClick?: (anchor: HTMLElement | null) => void;
    onViewSourceClick?: (anchor: HTMLElement | null) => void;
}

export declare type ActionBarViewModel = ViewModel<ActionBarViewSnapshot, ActionBarViewActions>;

declare interface ActionBarViewProps {
    /** The view model for the component. */
    vm: ActionBarViewModel;
    /** Optional CSS class names to apply to the component container.*/
    className?: string;
}

/**
 * Snapshot state for the message action toolbar.
 *
 * The snapshot carries the resolved actions to render plus the small amount of
 * per-action state the view needs for labels, icons, and disabled state.
 */
export declare interface ActionBarViewSnapshot {
    /** Explicitly resolved actions to render, in order. */
    actions: ActionBarAction[];
    /** Whether actions should render as icon buttons or label buttons. */
    presentation?: "icon" | "label";
    /** Whether an in-progress download should be presented as decrypting rather than downloading. */
    isDownloadEncrypted: boolean;
    /** Whether a media download or decryption is currently in progress. */
    isDownloadLoading: boolean;
    /** Whether the message is currently pinned. */
    isPinned: boolean;
    /** Whether the reply chain is currently expanded. */
    isQuoteExpanded: boolean;
    /** Whether starting or replying in a thread is allowed for this event. */
    isThreadReplyAllowed: boolean;
}

/**
 * AudioPlayer component displays an audio player with play/pause controls, seek bar, and media information.
 * The component expects a view model that provides the current state of the audio playback,
 *
 * @example
 * ```tsx
 * <AudioPlayerView vm={audioPlayerViewModel} />
 * ```
 */
export declare function AudioPlayerView({ vm }: Readonly<AudioPlayerViewProps>): JSX.Element;

declare interface AudioPlayerViewActions {
    /**
     * Handles key down events for the audio player.
     */
    onKeyDown: KeyboardEventHandler<HTMLDivElement>;
    /**
     * Toggles the play/pause state of the audio player.
     */
    togglePlay: MouseEventHandler<HTMLButtonElement>;
    /**
     * Handles changes to the seek bar.
     */
    onSeekbarChange: ChangeEventHandler<HTMLInputElement>;
}

/**
 * The view model for the audio player.
 */
export declare type AudioPlayerViewModel = ViewModel<AudioPlayerViewSnapshot, AudioPlayerViewActions>;

declare interface AudioPlayerViewProps {
    /**
     * The view model for the audio player.
     */
    vm: AudioPlayerViewModel;
}

export declare interface AudioPlayerViewSnapshot {
    /**
     * The playback state of the audio player.
     */
    playbackState: PlaybackState;
    /**
     * Name of the media being played.
     * @default Fallback to "timeline|m.audio|unnamed_audio" string if not provided.
     */
    mediaName?: string;
    /**
     * Size of the audio file in bytes.
     * Hided if not provided.
     */
    sizeBytes?: number;
    /**
     * The duration of the audio clip in seconds.
     */
    durationSeconds: number;
    /**
     * The percentage of the audio that has been played.
     * Ranges from 0 to 100.
     */
    percentComplete: number;
    /**
     * The number of seconds that have been played.
     */
    playedSeconds: number;
    /**
     * Indicates if there was an error downloading the audio.
     */
    error: boolean;
}

/**
 * A component to display an avatar with a title next to it in a grey box.
 *
 * @example
 * ```tsx
 * <AvatarWithDetails title="Room Name" details="10 participants" className="custom-class" />
 * ```
 */
export declare function AvatarWithDetails<C extends default_2.ElementType = "div">({ as, className, details, avatar, title, ...props }: PropsWithChildren<AvatarWithDetailsProps<C>>): JSX.Element;

declare type AvatarWithDetailsProps<C extends ElementType> = {
    /**
     * The HTML tag.
     * @default "div"
     */
    as?: C;
    /**
     * The CSS class name.
     */
    className?: string;
    /**
     * The title/label next to the avatar. Usually the user or room name.
     */
    title: string;
    /**
     * A label with details to display under the avatar title.
     * Commonly used to display the number of participants in a room.
     */
    details: default_2.ReactNode;
    /** The avatar to display. */
    avatar: default_2.ReactNode;
} & ComponentProps<C>;

/**
 * A banner component used for displaying user-facing information above the message composer.
 *
 * @example
 * ```tsx
 *   <Banner  onClose={onCloseHandler} />
 * ```
 */
export declare function Banner({ type, children, avatar, className, actions, onClose, ...props }: PropsWithChildren<BannerProps & HTMLAttributes<HTMLDivElement>>): ReactElement;

declare interface BannerProps {
    /**
     * The type of the status banner.
     */
    type?: "success" | "info" | "critical";
    /**
     * The banner avatar.
     */
    avatar?: default_2.ReactNode;
    /**
     * Actions presented to the user in the right-hand side of the banner alongside the dismiss button.
     */
    actions?: ReactNode;
    /**
     * Called when the user presses the "dismiss" button.
     */
    onClose?: MouseEventHandler<HTMLButtonElement>;
}

export declare abstract class BaseViewModel<T, P> implements ViewModel<T> {
    protected subs: ViewModelSubscriptions;
    protected snapshot: Snapshot<T>;
    protected props: P;
    protected disposables: Disposables;
    protected constructor(props: P, initialSnapshot: T);
    subscribe: (listener: () => void) => (() => void);
    /**
     * Returns the current snapshot of the view model.
     */
    getSnapshot: () => T;
    /**
     * Relinquish any resources held by this view-model.
     */
    dispose(): void;
    /**
     * Whether this view-model has been disposed.
     */
    get isDisposed(): boolean;
}

/**
 * A flex child helper
 */
export declare function Box({ as, flex, shrink, grow, className, children, ...props }: default_2.PropsWithChildren<BoxProps>): JSX.Element;

declare type BoxProps = {
    /**
     * The type of the HTML element
     * @default div
     */
    as?: string;
    /**
     * The CSS class name.
     */
    className?: string;
    /**
     * the on click event callback
     */
    onClick?: (e: default_2.MouseEvent) => void;
    /**
     * The flex space to use
     * @default null
     */
    flex?: string | null;
    /**
     * The flex shrink factor
     * @default null
     */
    shrink?: string | null;
    /**
     * The flex grow factor
     * @default null
     */
    grow?: string | null;
};

export declare function clamp(i: number, min: number, max: number): number;

/**
 * Clock which represents time periods rather than absolute time.
 * Simply converts seconds using formatSeconds().
 * Note that in this case hours will not be displayed, making it possible to see "82:29".
 *
 * @example
 * ```tsx
 * <Clock seconds={125} />
 * ```
 */
export declare function Clock({ seconds, className, ...rest }: Props): JSX.Element;

/**
 * Renders a timeline date separator.
 * When `jumpToEnabled` is true, wraps the separator label with a jump-to menu trigger.
 * The tooltip is disabled while the menu is open to avoid overlap.
 *
 * @example
 * ```tsx
 * <DateSeparatorView vm={vm} />
 * ```
 */
export declare function DateSeparatorView({ vm, className }: Readonly<DateSeparatorViewProps>): JSX.Element;

declare interface DateSeparatorViewActions {
    /** Optional: Jump to messages from the last week. */
    onLastWeekPicked?: () => void;
    /** Optional: Jump to messages from the last month. */
    onLastMonthPicked?: () => void;
    /** Optional: Jump to the beginning of the room history. */
    onBeginningPicked?: () => void;
    /** Optional: Jump to the picked date of the room history. */
    onDatePicked?: (date: string) => void;
}

/**
 * The view model for the component.
 */
export declare type DateSeparatorViewModel = ViewModel<DateSeparatorViewSnapshot> & DateSeparatorViewActions;

declare interface DateSeparatorViewProps {
    /**
     * The view model for the component.
     */
    vm: DateSeparatorViewModel;
    /**
     * Extra CSS classes to apply to the component.
     */
    className?: string;
}

export declare interface DateSeparatorViewSnapshot {
    /**
     * Visible date label and the separator's accessible label.
     */
    label: string;
    /**
     * Controls whether the jump-to menu is rendered.
     */
    jumpToEnabled?: boolean;
    /**
     * Reference date as input format used to prefill the jump-to-date picker value.
     */
    jumpFromDate?: string;
}

/**
 * Renders a message-body placeholder for events that could not be decrypted.
 *
 * Message copy and warning styling are derived from snapshot values:
 * - `decryptionFailureReason` selects the base text/variant.
 * - `isLocalDeviceVerified` influences historical-backup messaging.
 *
 * Use `className` for host-level container styling, following standard React patterns.
 *
 * @example
 * ```tsx
 * <DecryptionFailureBodyView vm={decryptionFailureBodyVm} className="mx_DecryptionFailureBody" />
 * ```
 */
export declare function DecryptionFailureBodyView({ vm, ref, className, }: Readonly<DecryptionFailureBodyViewProps>): JSX.Element;

/**
 * The view model for the component.
 *
 * Snapshot data is intentionally content-focused (`decryptionFailureReason`
 * plus optional `isLocalDeviceVerified`). Container styling is supplied
 * via component props.
 */
export declare type DecryptionFailureBodyViewModel = ViewModel<DecryptionFailureBodyViewSnapshot>;

declare interface DecryptionFailureBodyViewProps {
    /**
     * The view model for the component.
     */
    vm: DecryptionFailureBodyViewModel;
    /**
     * Optional CSS class names to apply to the component container.
     */
    className?: string;
    /**
     * React ref to attach to any React components returned
     */
    ref?: default_2.RefObject<HTMLDivElement>;
}

export declare interface DecryptionFailureBodyViewSnapshot {
    /**
     * The decryption failure reason of the event.
     */
    decryptionFailureReason: DecryptionFailureReason;
    /**
     * The local device verification state.
     */
    isLocalDeviceVerified?: boolean;
}

/**
 * A reason code for a failure to decrypt an event.
 */
export declare enum DecryptionFailureReason {
    /** A special case of {@link MEGOLM_KEY_WITHHELD}: the sender has told us it is withholding the key, because the current device is unverified. */
    MEGOLM_KEY_WITHHELD_FOR_UNVERIFIED_DEVICE = "MEGOLM_KEY_WITHHELD_FOR_UNVERIFIED_DEVICE",
    /**
     * Message was sent before the current device was created; there is no key backup on the server, so this
     * decryption failure is expected.
     */
    HISTORICAL_MESSAGE_NO_KEY_BACKUP = "HISTORICAL_MESSAGE_NO_KEY_BACKUP",
    /**
     * Message was sent before the current device was created; there was a key backup on the server, but we don't
     * seem to have access to the backup. (Probably we don't have the right key.)
     */
    HISTORICAL_MESSAGE_BACKUP_UNCONFIGURED = "HISTORICAL_MESSAGE_BACKUP_UNCONFIGURED",
    /**
     * Message was sent when the user was not a member of the room.
     */
    HISTORICAL_MESSAGE_USER_NOT_JOINED = "HISTORICAL_MESSAGE_USER_NOT_JOINED",
    /**
     * The sender's identity is not verified, but was previously verified.
     */
    SENDER_IDENTITY_PREVIOUSLY_VERIFIED = "SENDER_IDENTITY_PREVIOUSLY_VERIFIED",
    /**
     * The sender device is not cross-signed. This will only be used if the
     * device isolation mode is set to `OnlySignedDevicesIsolationMode`.
     */
    UNSIGNED_SENDER_DEVICE = "UNSIGNED_SENDER_DEVICE",
    /**
     * Default message for decryption failures.
     */
    UNABLE_TO_DECRYPT = "UNABLE_TO_DECRYPT"
}

/**
 * Returns the default number if the given value, i, is not a number. Otherwise
 * returns the given value.
 * @param {*} i The value to check.
 * @param {number} def The default value.
 * @returns {number} Either the value or the default value, whichever is a number.
 */
export declare function defaultNumber(i: unknown, def: number): number;

/**
 * A component to display a user's profile with optional disambiguation.
 * Shows the display name and optionally the MXID when disambiguation is needed
 * (e.g., when multiple users have the same display name).
 *
 * @example
 * ```tsx
 * <DisambiguatedProfileView vm={disambiguatedProfileViewModel} />
 * ```
 */
export declare function DisambiguatedProfileView({ vm, className }: Readonly<DisambiguatedProfileViewProps>): JSX.Element;

/**
 * Actions that can be performed on the DisambiguatedProfile.
 */
export declare interface DisambiguatedProfileViewActions {
    /**
     * Optional click handler for the profile.
     */
    onClick?: MouseEventHandler<HTMLDivElement>;
}

/**
 * The view model for DisambiguatedProfileView.
 */
export declare type DisambiguatedProfileViewModel = ViewModel<DisambiguatedProfileViewSnapshot, DisambiguatedProfileViewActions>;

declare interface DisambiguatedProfileViewProps {
    /**
     * The view model for the disambiguated profile.
     */
    vm: DisambiguatedProfileViewModel;
    /**
     * Optional CSS class name applied to the profile container.
     */
    className?: string;
}

/**
 * The snapshot representing the current state of the DisambiguatedProfile.
 */
export declare interface DisambiguatedProfileViewSnapshot {
    /**
     * The display name to show.
     */
    displayName: string;
    /**
     * The CSS class for coloring the display name (e.g., "mx_Username_color1").
     * Undefined if coloring is not enabled.
     */
    colorClass?: string;
    /**
     * The formatted user identifier to display when disambiguation is needed.
     * Undefined if disambiguation is not required.
     */
    displayIdentifier?: string;
    /**
     * The tooltip title text (pre-translated).
     * Undefined if tooltip is not enabled.
     */
    title?: string;
    /**
     * Whether to emphasize the display name with additional styling.
     */
    emphasizeDisplayName?: boolean;
}

/**
 * Something that needs to be eventually disposed. This can be:
 * - A function that does the disposing
 * - An object containing a dispose method which does the disposing
 */
export declare type DisposableItem = {
    dispose: () => void;
} | (() => void);

/**
 * This class provides a way for the view-model to track any resource
 * that it needs to eventually relinquish.
 */
export declare class Disposables {
    private readonly disposables;
    private _isDisposed;
    /**
     * Relinquish all tracked disposable values
     */
    dispose(): void;
    /**
     * Track a value that needs to be eventually relinquished
     */
    track<T extends DisposableItem>(disposable: T): T;
    /**
     * Add an event listener that will be removed on dispose
     */
    trackListener(emitter: EventEmitter, event: string | symbol, callback: (...args: unknown[]) => void): void;
    private throwIfDisposed;
    /**
     * Whether this disposable has been disposed
     */
    get isDisposed(): boolean;
}

export declare enum EncryptionEventState {
    /** Encryption settings changed while encryption stayed enabled. */
    CHANGED = "CHANGED",
    /** Someone attempted to disable encryption in an encrypted room. */
    DISABLE_ATTEMPT = "DISABLE_ATTEMPT",
    /** Encryption was enabled in a regular room. */
    ENABLED = "ENABLED",
    /** Encryption was enabled in a DM room. */
    ENABLED_DM = "ENABLED_DM",
    /** Encryption was enabled in a local room. */
    ENABLED_LOCAL = "ENABLED_LOCAL",
    /** Encryption is unavailable/unsupported for this event context. */
    UNSUPPORTED = "UNSUPPORTED"
}

/**
 * Renders a timeline bubble describing an encryption-related room event.
 *
 * Text and icon are selected from `snapshot.state` with optional context:
 * - `encryptedStateEvents` switches to state-event specific wording.
 * - `userName` is used for DM-specific subtitle text.
 * - `timestamp` renders in the bubble footer slot.
 *
 * Use `className` for host-level styling, following the default React pattern.
 *
 * @example
 * ```tsx
 * <EncryptionEventView vm={encryptionEventVm} className="mx_EncryptionEvent" />
 * ```
 */
export declare function EncryptionEventView({ vm, ref, className }: Readonly<EncryptionEventViewProps>): JSX.Element;

/**
 * ViewModel contract consumed by {@link EncryptionEventView}.
 */
export declare type EncryptionEventViewModel = ViewModel<EncryptionEventViewSnapshot>;

declare interface EncryptionEventViewProps {
    /**
     * ViewModel providing the current encryption event snapshot.
     */
    vm: ViewModel<EncryptionEventViewSnapshot>;
    /**
     * Optional CSS classes passed through to EventTileBubble.
     */
    className?: string;
    /**
     * Optional Ref forwarded to the root DOM element.
     */
    ref?: default_2.RefObject<HTMLDivElement>;
}

export declare type EncryptionEventViewSnapshot = {
    /** Which encryption event variant to render. */
    state: EncryptionEventState;
    /** Whether state-event encryption messaging should be shown. */
    encryptedStateEvents?: boolean;
    /** Display name for DM partner, used by ENABLED_DM subtitle text. */
    userName?: string;
    /** Optional timestamp element rendered in the EventTileBubble footer slot. */
    timestamp?: JSX.Element;
};

declare interface EventContentBodyBaseViewProps {
    /**
     * The ViewModel providing the snapshot data.
     */
    vm: EventContentBodyViewModel;
}

/**
 * View component for rendering Matrix event content body.
 */
export declare const EventContentBodyView: default_2.NamedExoticComponent<Readonly<EventContentBodyViewProps>>;

export declare type EventContentBodyViewModel = ViewModel<EventContentBodyViewSnapshot>;

export declare type EventContentBodyViewProps = EventContentBodyBaseViewProps & ({
    /**
     * Render the content in a span element.
     */
    as: "span";
    /**
     * Optional ref to forward to the rendered span element.
     */
    ref?: Ref<HTMLSpanElement>;
} | {
    /**
     * Render the content in a div element.
     */
    as: "div";
    /**
     * Optional ref to forward to the rendered div element.
     */
    ref?: Ref<HTMLDivElement>;
});

/**
 * Snapshot interface for the EventContentBody view.
 */
export declare interface EventContentBodyViewSnapshot {
    /**
     * The plain/emoji body content to render when no formatted body is available.
     */
    body: string | JSX.Element[];
    /**
     * The raw formatted body HTML, if available.
     */
    formattedBody?: string;
    /**
     * The text/element replacer used for pills, spoilers, code blocks, etc.
     */
    replacer?: Replacer;
    /**
     * Optional parser implementation for formatted bodies.
     * This allows callers to provide a parser that matches their replacer implementation.
     */
    parseFormattedBody?: ParseFormattedBody;
    /**
     * CSS class names to apply to the container element.
     */
    className: string;
    /**
     * The text direction attribute.
     * Always "auto" for divs, controlled by includeDir prop for spans.
     */
    dir?: "auto";
}

/**
 * EventTileBubble renders a compact event tile with an icon, title, and optional subtitle/content.
 *
 * @example
 * ```tsx
 * <EventTileBubble icon={<Icon />} title="Room created" />
 * ```
 */
export declare function EventTileBubble({ icon, title, subtitle, className, children, ref, }: EventTileBubbleProps): JSX.Element;

export declare interface EventTileBubbleProps {
    /**
     * Icon rendered at the start of the bubble.
     */
    icon: JSX.Element;
    /**
     * Main title text for the bubble.
     */
    title: string;
    /**
     * Optional subtitle rendered beneath the title.
     */
    subtitle?: ReactNode;
    /**
     * Optional extra class name for the container.
     */
    className?: string;
    /**
     * Optional children rendered between subtitle and timestamp.
     */
    children?: JSX.Element;
    /**
     * Forwarded ref for the container element.
     */
    ref?: default_2.RefObject<HTMLDivElement>;
}

/**
 * Renders the body of a file message for info, export, and download flows.
 *
 * Rendering is selected by `snapshot.state` from the view model and supports:
 * - export link (`EXPORT`)
 * - encrypted download flows (`DECRYPTION_PENDING`, `ENCRYPTED`)
 * - unencrypted download flow (`UNENCRYPTED`)
 * - invalid-file fallback (`INVALID`)
 *
 * Visibility/content for the info row and download controls are driven by snapshot fields:
 * - `showInfo`, `infoLabel`, `infoTooltip`, `infoIcon`, `infoHref`
 * - `showDownload`, `downloadLabel`, `downloadTitle`, `downloadHref`
 *
 * Common usage patterns:
 * - info-only display: set `showInfo: true`, `showDownload: false`
 * - export link (`EXPORT`)
 * - download-only display: set `showInfo: false`, `showDownload: true`
 *
 * Note on using the encrypted iframe, `ENCRYPTED`:
 * To make this rendering branch work, it is expected that a `usercontent/` target
 * is available relative to the root of the application as is described in detail here,
 * https://github.com/element-hq/element-web/blob/develop/docs/usercontent.md
 *
 * @example
 * ```tsx
 * <FileBodyView vm={fileBodyViewModel} />
 * ```
 */
export declare function FileBodyView({ vm, refIFrame, refLink, className }: Readonly<FileBodyViewProps>): JSX.Element;

export declare interface FileBodyViewActions {
    /**
     * Click handler for the info row.
     */
    onInfoClick?: () => void;
    /**
     * Click handler for a download button.
     */
    onDownloadClick?: () => void;
    /**
     * Click handler for the unencrypted download anchor.
     */
    onDownloadLinkClick?: (event: MouseEvent_2<HTMLAnchorElement>) => void;
    /**
     * Load handler for encrypted-download iframe.
     */
    onDownloadIframeLoad?: () => void;
}

/**
 * Which info icon to render.
 */
export declare enum FileBodyViewInfoIcon {
    ATTACHMENT = "ATTACHMENT",
    AUDIO = "AUDIO",
    DOWNLOAD = "DOWNLOAD",
    VIDEO = "VIDEO"
}

/**
 * The view model for the control.
 */
export declare type FileBodyViewModel = ViewModel<FileBodyViewSnapshot> & FileBodyViewActions;

declare interface FileBodyViewProps {
    /**
     * The view model for the component.
     */
    vm: FileBodyViewModel;
    /**
     * Optional CSS class for host-level styling.
     */
    className?: string;
    /**
     * Optional iframe ref for encrypted download flow
     */
    refIFrame?: default_2.RefObject<HTMLIFrameElement>;
    /**
     * Optional hidden anchor ref used for encrypted download flow
     */
    refLink?: default_2.RefObject<HTMLAnchorElement>;
}

export declare interface FileBodyViewSnapshot {
    /**
     * Primary rendering branch for the component.
     * Controls the overall state (export, encrypted, unencrypted, invalid).
     */
    state: FileBodyViewState;
    /**
     * Whether to render the info row (icon + label + tooltip).
     */
    showInfo?: boolean;
    /**
     * Optional info label (normally the file name). Defaults to 'Attachment'.
     */
    infoLabel?: string;
    /**
     * Optional tooltip for info button. Defaults to infoLabel.
     */
    infoTooltip?: string;
    /**
     * Optional icon. Defaults to `ATTACHMENT`.
     */
    infoIcon?: FileBodyViewInfoIcon;
    /**
     * Optional URL used by the info row in `EXPORT`.
     */
    infoHref?: string;
    /**
     * Whether to render download controls for the current rendering branch.
     */
    showDownload?: boolean;
    /**
     * Optional download label (normally file/action text). Defaults to 'Download'.
     */
    downloadLabel?: string;
    /**
     * Optional title for encrypted iframe download flow.
     * Defaults to `downloadLabel`.
     */
    downloadTitle?: string;
    /**
     * Optional URL used for `UNENCRYPTED` download links.
     */
    downloadHref?: string;
}

/**
 * Which visual state to render for the component.
 */
export declare enum FileBodyViewState {
    /** Export-only rendering where the info row links to the source file. */
    EXPORT = "EXPORT",
    /** Encrypted file before decryption has completed; shows the button that starts the flow. */
    DECRYPTION_PENDING = "DECRYPTION_PENDING",
    /** Encrypted file after decryption; renders the sandboxed iframe download path. */
    ENCRYPTED = "ENCRYPTED",
    /** Unencrypted file with a direct download link. */
    UNENCRYPTED = "UNENCRYPTED",
    /** Fallback for missing or unusable file metadata. */
    INVALID = "INVALID"
}

/**
 * Standard filter identifiers that can be used across implementations.
 * These are stable keys - the view layer maps them to translated labels.
 */
export declare type FilterId = "unread" | "people" | "rooms" | "favourite" | "mentions" | "invites" | "low_priority";

/**
 * Filter key type - opaque string type for filter identifiers
 */
export declare type FilterKey = string;

/**
 * Finds all links in a given string.
 *
 * @param str A string that may contain one or more strings.
 * @returns A set of all links in the string.
 */
export declare function findLinksInString(str: string): ReturnType<typeof linkifyjs.find>;

/**
 * A generic virtualized list component built on top of react-virtuoso.
 * Provides keyboard navigation and virtualized rendering for performance with large lists.
 *
 * @template Item - The type of data items in the list
 * @template Context - The type of additional context data passed to items
 */
export declare function FlatVirtualizedList<Item, Context>(props: FlatVirtualizedListProps<Item, Context>): default_2.ReactElement;

export declare interface FlatVirtualizedListProps<Item, Context> extends VirtualizedListProps<Item, Context> {
    /**
     * Function that renders each list item as a JSX element.
     * @param index - The index of the item in the list
     * @param item - The data item to render
     * @param context - The context object containing the focused key and any additional data
     * @param onFocus - A callback that is required to be called when the item component receives focus
     * @returns JSX element representing the rendered item
     */
    getItemComponent: (index: number, item: Item, context: VirtualizedListContext<Context>, onFocus: (item: Item, e: default_2.FocusEvent) => void) => JSX.Element;
}

/**
 * A flexbox container helper
 */
export declare function Flex<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any> = "div">({ as, display, direction, align, justify, gap, wrap, className, children, ...props }: default_2.PropsWithChildren<FlexProps<T>>): JSX.Element;

declare type FlexProps<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> = {
    /**
     * The type of the HTML element
     * @default div
     */
    as?: T;
    /**
     * The CSS class name.
     */
    className?: string;
    /**
     * The type of flex container
     * @default flex
     */
    display?: "flex" | "inline-flex";
    /**
     * The flow direction of the flex children
     * @default row
     */
    direction?: "row" | "column" | "row-reverse" | "column-reverse";
    /**
     * The alignment of the flex children
     * @default start
     */
    align?: "start" | "center" | "end" | "baseline" | "stretch" | "normal";
    /**
     * The justification of the flex children
     * @default start
     */
    justify?: "start" | "center" | "end" | "space-between";
    /**
     * The wrapping of the flex children
     * @default nowrap
     */
    wrap?: "wrap" | "nowrap" | "wrap-reverse";
    /**
     * The spacing between the flex children, expressed with the CSS unit
     * @default 0
     */
    gap?: string;
    /**
     * the on click event callback
     */
    onClick?: (e: default_2.MouseEvent) => void;
} & ComponentProps<T>;

/**
 * format a size in bytes into a human readable form
 * e.g: 1024 -> 1.00 KB
 */
export declare function formatBytes(bytes: number, decimals?: number): string;

/**
 * Formats dates to be compatible with attributes of a `<input type="date">`. Dates
 * should be formatted like "2020-06-23" (formatted according to ISO8601).
 *
 * @param date The date to format.
 * @returns The date string in ISO8601 format ready to be used with an `<input>`
 */
export declare function formatDateForInput(date: Date): string;

/**
 * Formats a number of seconds into a human-readable string.
 * @param inSeconds
 */
export declare function formatSeconds(inSeconds: number): string;

/**
 * Generates a linkifyjs options object that is reasonably paired down
 * to just the essentials required for an Element client.
 *
 * @return A `linkifyjs` `Opts` object. Used by `linkifyString` and `linkifyHtml
 * @see {@link linkifyHtml}
 * @see {@link linkifyString}
 */
export declare function generateLinkedTextOptions({ urlListener, roomAliasListener, userIdListener, urlTargetTransformer, hrefTransformer, onLinkClick, }: LinkedTextOptions): linkifyjs.Opts;

/**
 * Returns the ARIA props to spread onto the virtualized list container element.
 *
 * @param pattern - `"listbox"` — returns {@link ListboxContainerProps}.
 * @returns ARIA props for a `listbox` container.
 */
export declare function getContainerAccessibleProps(pattern: "listbox"): ListboxContainerProps;

/**
 * Returns the ARIA props to spread onto the virtualized list container element.
 *
 * @param pattern - `"treegrid"` — returns {@link TreegridContainerProps}.
 * @param size - Total number of rows in the treegrid, set as `aria-rowcount`.
 * @returns ARIA props for a `treegrid` container.
 */
export declare function getContainerAccessibleProps(pattern: "treegrid", size: number): TreegridContainerProps;

/**
 * Returns the ARIA props to spread onto a group header row element inside a `treegrid`.
 *
 * Group headers are rendered at `aria-level="1"` and act as the parent nodes for their
 * child item rows (`aria-level="2"`).
 *
 * @param index - The 0-based index of this row in the full flat treegrid row sequence (headers + items), used to compute `aria-rowindex`.
 * @param groupIndex - The 0-based index of this group among all groups, used to compute `aria-posinset`.
 * @param groupSize - The total number of items in the group, set as `aria-setsize`.
 * @returns ARIA props for a group header `row` at level 1.
 */
export declare function getGroupHeaderAccessibleProps(index: number, groupIndex: number, groupSize: number): TreegridGroupHeaderProps;

/**
 * Returns the ARIA props to spread onto a virtualized list item element.
 *
 * @param pattern - `"listbox"` — returns {@link ListboxItemProps}.
 * @param index - The 0-based index of the item in the full flat list.
 * @param listSize - The total number of items across the entire list.
 * @returns ARIA props for a `listbox` option.
 */
export declare function getItemAccessibleProps(pattern: "listbox", index: number, listSize: number): ListboxItemProps;

/**
 * Returns the ARIA props to spread onto a virtualized list item element.
 *
 * @param pattern - `"treegrid"` — returns {@link TreegridItemProps}.
 * @param index - The 0-based index of this row in the full flat treegrid row sequence (headers + items).
 * @param indexInGroup - The 0-based index of this item within its group, used to compute `aria-posinset`.
 * @returns ARIA props for a `treegrid` row at level 2.
 */
export declare function getItemAccessibleProps(pattern: "treegrid", index: number, indexInGroup: number): TreegridItemProps;

export declare function getLangsJson(): Promise<Languages>;

export declare function getLocale(): string;

export { getNormalizedLanguageKeys }

/**
 * A group of items for the grouped virtualized list.
 * The `header` uses a dedicated `Header` type, separate from the `Item` type
 * used for the group's child items.
 */
export declare interface Group<Header, Item> {
    /** The data representing this group's header. */
    header: Header;
    /** The items belonging to this group. */
    items: Item[];
}

/**
 * A generic grouped virtualized list component built on top of react-virtuoso's Virtuoso.
 * Provides keyboard navigation (including group headers) and virtualized rendering for
 * performance with large lists.
 *
 * Group headers use a dedicated `Header` type, while child items use `Item`.
 * Internally, a unified flat array interleaving headers and items is built using
 * `flatMap` so that the keyboard-navigation hook can treat every focusable element
 * uniformly.
 *
 * @template Header - The type of group header data
 * @template Item - The type of data items in the list
 * @template Context - The type of additional context data passed to items
 */
export declare function GroupedVirtualizedList<Header, Item, Context>(props: GroupedVirtualizedListProps<Header, Item, Context>): default_2.ReactElement;

export declare interface GroupedVirtualizedListProps<Header, Item, Context> extends Omit<VirtualizedListProps<Item, Context>, "items" | "isItemFocusable" | "getItemKey"> {
    /**
     * The groups to display in the virtualized list.
     * Each group has a header and an array of child items.
     */
    groups: Group<Header, Item>[];
    /**
     * Function to get a unique key for an item.
     * @param item - The item to get the key for
     * @returns A unique key string
     */
    getItemKey: (item: Item) => string;
    /**
     * Function to get a unique key for a group header.
     * @param header - The header to get the key for
     * @returns A unique key string
     */
    getHeaderKey: (header: Header) => string;
    /**
     * Function to determine if an item can receive focus during keyboard navigation.
     * @param item - The item to check
     * @returns true if the item can be focused
     */
    isItemFocusable: (item: Item) => boolean;
    /**
     * Function to determine if a group header can receive focus during keyboard navigation.
     * @param header - The header to check
     * @returns true if the header can be focused
     */
    isGroupHeaderFocusable: (header: Header) => boolean;
    /**
     * Function that renders the group header as a JSX element.
     * @param groupIndex - The index of the group in the list
     * @param header - The header data for this group
     * @param context - The context object containing the focused key and any additional data
     * @param onFocus - A callback that must be called when the group header component receives
     *   focus. Should be invoked as `onFocus(header, e)`.
     * @returns JSX element representing the rendered group header
     */
    getGroupHeaderComponent: (groupIndex: number, header: Header, context: VirtualizedListContext<Context>, onFocus: (header: Header, e: default_2.FocusEvent) => void) => JSX.Element;
    /**
     * Function that renders each list item as a JSX element.
     * @param index - The index of the item in the list (relative to the entire list, not the group)
     * @param item - The data item to render
     * @param context - The context object containing the focused key and any additional data
     * @param onFocus - A callback that is required to be called when the item component receives focus
     * @param groupIndex - The index of the group this item belongs to
     * @returns JSX element representing the rendered item
     */
    getItemComponent: (index: number, item: Item, context: VirtualizedListContext<Context>, onFocus: (item: Item, e: default_2.FocusEvent) => void, groupIndex: number) => JSX.Element;
}

/**
 * This the root component for collapsible left panel. Based on {@link Group} from react-resizable-panels.
 */
export declare function GroupView({ vm, children }: PropsWithChildren<Props_5>): default_2.ReactNode;

export declare interface GroupViewActions {
    /**
     * Indicates to the view-model that the left panel was resized.
     * @param newSize The new size of the left panel
     */
    onLeftPanelResized: (newSize: number) => void;
}

/** A badge showing the history visibility of a room. */
export declare function HistoryVisibilityBadge({ historyVisibility }: Props_3): JSX.Element | null;

export declare function humanizeRelativeTime(i18nApi?: I18nApi_2): Intl.RelativeTimeFormat;

/**
 * Converts a timestamp into human-readable, translated, text.
 * @param {number} timeMillis The time in millis to compare against.
 * @returns {string} The humanized time.
 */
export declare function humanizeTime(timeMillis: number, i18nApi?: I18nApi_2): string;

export declare class I18nApi implements I18nApi_2 {
    /**
     * Read the current language of the user in IETF Language Tag format
     */
    get language(): string;
    /**
     * Register translations for the module, may override app's existing translations
     */
    register(this: void, translations: Partial<Translations>): void;
    /**
     * Perform a translation, with optional variables
     * @param key - The key to translate
     * @param variables - Optional variables to interpolate into the translation
     * @param tags - Optional tags to interpolate into the translation
     */
    translate(this: void, key: TranslationKey, variables?: Variables): string;
    translate(this: void, key: TranslationKey, variables: Variables | undefined, tags: Tags_2): React.ReactNode;
    humanizeTime: (timeMillis: number) => string;
}

export declare const I18nContext: Context<any>;

/**
 * Renders the body of an image message with ready, hidden, and error states.
 *
 * The media frame supports thumbnail fallbacks, optional loading placeholders,
 * animated-content preview on hover/focus, and optional tooltip/banner labels.
 * Supplemental content such as a file body row can be rendered after the image
 * through `children`.
 *
 * @example
 * ```tsx
 * <ImageBodyView vm={imageBodyViewModel}>
 *     <div>File body slot</div>
 * </ImageBodyView>
 * ```
 */
export declare function ImageBodyView({ vm, className, children }: Readonly<ImageBodyViewProps>): JSX.Element;

export declare interface ImageBodyViewActions {
    /**
     * Invoked when the linked image is activated.
     */
    onLinkClick?: MouseEventHandler<HTMLAnchorElement>;
    /**
     * Invoked when the user chooses to reveal hidden media.
     */
    onHiddenButtonClick?: MouseEventHandler<HTMLButtonElement>;
    /**
     * Invoked when the visible image loads.
     */
    onImageLoad?: ReactEventHandler<HTMLImageElement>;
    /**
     * Invoked when the visible image fails to load.
     */
    onImageError?: ReactEventHandler<HTMLImageElement>;
}

export declare type ImageBodyViewModel = ViewModel<ImageBodyViewSnapshot, ImageBodyViewActions>;

/**
 * Placeholder variant shown over the media frame while the image is still settling.
 */
export declare const enum ImageBodyViewPlaceholder {
    NONE = "NONE",
    SPINNER = "SPINNER",
    BLURHASH = "BLURHASH"
}

declare interface ImageBodyViewProps {
    /**
     * The view model for the component.
     */
    vm: ImageBodyViewModel;
    /**
     * Optional host CSS class.
     */
    className?: string;
    /**
     * Optional supplemental content rendered after the media frame.
     */
    children?: PropsWithChildren["children"];
}

export declare interface ImageBodyViewSnapshot {
    /**
     * Controls whether the component renders an error state, a hidden-preview state,
     * or a visible image frame.
     */
    state: ImageBodyViewState;
    /**
     * Image alt text.
     */
    alt?: string;
    /**
     * Label shown when media processing fails.
     */
    errorLabel?: string;
    /**
     * Label used by the hidden-media reveal button.
     */
    hiddenButtonLabel?: string;
    /**
     * Full-resolution image source.
     */
    src?: string;
    /**
     * Thumbnail/static preview image source.
     * Falls back to `src` when omitted.
     */
    thumbnailSrc?: string;
    /**
     * Whether hovering or focusing the link should swap to the full-resolution image.
     */
    showAnimatedContentOnHover?: boolean;
    /**
     * Which placeholder to render over the image frame.
     */
    placeholder?: ImageBodyViewPlaceholder;
    /**
     * Blurhash string used when `placeholder` is `BLURHASH`.
     */
    blurhash?: string;
    /**
     * Maximum rendered width for the media frame.
     */
    maxWidth?: number;
    /**
     * Maximum rendered height for the media frame.
     */
    maxHeight?: number;
    /**
     * Aspect ratio reserved for the media frame.
     */
    aspectRatio?: CSSProperties["aspectRatio"];
    /**
     * Whether the displayed image is an SVG and should therefore use explicit width sizing.
     */
    isSvg?: boolean;
    /**
     * Optional badge shown for animated images when not hovered/focused.
     */
    gifLabel?: string;
    /**
     * Optional overlay banner shown while hovered/focused.
     */
    bannerLabel?: string;
    /**
     * Optional tooltip shown on the media frame.
     */
    tooltipLabel?: string;
    /**
     * Optional link target for the media frame.
     */
    linkUrl?: string;
    /**
     * Optional anchor target applied when `linkUrl` is provided.
     */
    linkTarget?: HTMLAttributeAnchorTarget;
}

/**
 * High-level rendering state for the shared image body view.
 */
export declare const enum ImageBodyViewState {
    ERROR = "ERROR",
    HIDDEN = "HIDDEN",
    READY = "READY"
}

/**
 * Is the provided value something that would be converted to a clickable
 * link.
 *
 * E.g. 'https://matrix.org', `matrix.org` or 'example@matrix.org'
 *
 * @param str A string value to be tested if the entire value is linkable.
 * @returns Whether or not the `str` value is a link.
 * @see `PERMITTED_URL_SCHEMES` for permitted links.
 * @see {@link linkifyjs.test}
 */
export declare function isLinkable(str: string): boolean;

/** ARIA props for a virtualized list item, either in a `listbox` or `treegrid`. */
export declare type ItemAccessibleProps = ListboxItemProps | TreegridItemProps;

export declare interface IVariables {
    count?: number;
    [key: string]: SubstitutionValue;
}

export { KEY_SEPARATOR }

declare type Languages = {
    [lang: string]: string;
};

/**
 * This is the id given to the resizable container that holds
 * the left panel contents.
 */
export declare const LEFT_PANEL_ID = "left-panel";

/**
 * This is a custom panel component for the left-panel. It is used along with SeparatorView, Group and Panel to render
 * collapsible room list.
 */
export declare function LeftResizablePanelView({ vm, className, children, ...props }: PropsWithChildren<Props_7>): default_2.ReactNode;

export declare interface LeftResizablePanelViewActions {
    /**
     * Indicates to the view-model that the left panel is being resized.
     * @param panelSize The new panel size.
     */
    onLeftPanelResize: (panelSize: PanelSize) => void;
    /**
     * Pass the vm the object containing the API to interact with this panel.
     * @param handle Object that can be used to access the imperative methods of the panel.
     */
    setPanelHandle: (handle: PanelImperativeHandle) => void;
}

/**
 * A component that renders URLs as clickable links inside some plain text.
 *
 * Requires a `<LinkedTextContext.Provider>`
 *
 * @example
 * ```tsx
 * <LinkedTextContext.Provider value={...}>
 *     <LinkedText>
 *         I love working on https://matrix.org
 *     </LinkedText>
 * </LinkedTextContext.Provider>
 * ```
 */
export declare function LinkedText({ children, className, onLinkClick, ...textProps }: LinkedTextProps): default_2.ReactNode;

declare interface LinkedTextConfiguration {
    /**
     * Event handlers for URL links.
     */
    urlListener?: (href: string) => LinkEventListener;
    /**
     * Event handlers for room alias links.
     */
    roomAliasListener?: (href: string) => LinkEventListener;
    /**
     * Event handlers for user ID links.
     */
    userIdListener?: (href: string) => LinkEventListener;
    /**
     * Function that can be used to transform the `target` attribute on links, depending on the `href`.
     */
    urlTargetTransformer?: (href: string) => string;
    /**
     * Function that can be used to transform the `href` attribute on links, depending on the current href and target type.
     */
    hrefTransformer?: (href: string, target: LinkifyMatrixOpaqueIdType) => string;
}

export declare const LinkedTextContext: Context<LinkedTextConfiguration | null>;

export declare interface LinkedTextOptions {
    /**
     * Event handlers for URL links.
     */
    urlListener?: (href: string) => LinkEventListener;
    /**
     * Event handlers for room alias links.
     */
    roomAliasListener?: (href: string) => LinkEventListener;
    /**
     * Event handlers for user ID links.
     */
    userIdListener?: (href: string) => LinkEventListener;
    /**
     * Function that can be used to transform the `target` attribute on links, depending on the `href`.
     */
    urlTargetTransformer?: (href: string) => string;
    /**
     * Function that can be used to transform the `href` attribute on links, depending on the current href and target type.
     */
    hrefTransformer?: (href: string, target: LinkifyMatrixOpaqueIdType) => string;
    /**
     * Function called before all listeners when a link is clicked.
     */
    onLinkClick?: (ev: MouseEvent) => void;
}

export declare type LinkedTextProps = ComponentProps<typeof Text_2> & {
    /**
     * Handler for when a link within the component is clicked. This will run
     * *before* any LinkedTextContext handlers are run.
     * @param ev The event raised by the click.
     */
    onLinkClick?: (ev: MouseEvent) => void;
};

export declare type LinkEventListener = linkifyjs.EventListeners;

/**
 * `data-linkified` is applied to all links generated by the linkifaction functions and `<LinkedText>`.
 */
export declare const LINKIFIED_DATA_ATTRIBUTE = "linkified";

export { linkifyHtml }

export declare enum LinkifyMatrixOpaqueIdType {
    URL = "url",
    UserId = "userid",
    RoomAlias = "roomalias"
}

/**
 * Protocols that do not require a slash in the URL.
 */
export declare const LinkifyOptionalSlashProtocols: string[];

export { linkifyString }

/**
 * List of supported protocols natively by linkify. Kept in sync with upstreanm.
 * @see https://github.com/nfrasser/linkifyjs/blob/main/packages/linkifyjs/src/scanner.mjs#L171-L177
 */
export declare const LinkifySupportedProtocols: string[];

/** ARIA props for a `listbox` container element. */
export declare type ListboxContainerProps = {
    role: "listbox";
};

/** ARIA props for an item rendered inside a `listbox`. */
export declare type ListboxItemProps = {
    /** Identifies the element as a selectable option within the listbox. */
    "role": "option";
    /** The 1-based position of this option within the full set, used for virtual lists where not all DOM nodes are mounted. */
    "aria-posinset": number;
    /** The total number of options in the set. */
    "aria-setsize": number;
};

/**
 * Utility function to look up a string by its translation key without resolving variables & tags
 * @param key - the translation key to return the value for
 */
export declare function lookupString(key: TranslationKey): string;

/**
 * The interface for a generic View Model passed to the shared components.
 * The snapshot is of type T which is a type specifying a snapshot for the view in question.
 */
declare type MapToVoidThis<T> = {
    [K in keyof T]: T[K] extends (...args: infer A) => infer R ? (this: void, ...args: A) => R : T[K];
};

/**
 * A component to display the body of a media message.
 *
 * @example
 * ```tsx
 * <MediaBody as="p" className="custom-class">Media body content</MediaBody>
 * ```
 */
export declare function MediaBody<C extends default_2.ElementType = "div">({ as, className, children, ...props }: PropsWithChildren<MediaBodyProps<C>>): JSX.Element;

declare type MediaBodyProps<C extends ElementType> = {
    /**
     * The HTML tag.
     * @default "div"
     */
    as?: C;
    /**
     * The CSS class name.
     */
    className?: string;
} & ComponentProps<C>;

/**
 * Displays a message timestamp with optional tooltip details.
 *
 * The view model provides the timestamp values and display options. The component
 * can render as a link when `href` is set, and can show both sent-at and received-at
 * times in the tooltip when `tsReceivedAt` is provided. Use `className` for
 * host-level styling.
 *
 * @example
 * ```tsx
 * <MessageTimestampView vm={messageTimestampViewModel} className="mx_MessageTimestamp" />
 * ```
 */
export declare function MessageTimestampView({ vm, className }: Readonly<MessageTimestampViewProps>): JSX.Element;

export declare interface MessageTimestampViewActions {
    /**
     * Optional onClick handler to attach to the DOM element
     */
    onClick?: MouseEventHandler<HTMLElement>;
    /**
     * Optional onContextMenu handler to attach to the DOM element
     */
    onContextMenu?: MouseEventHandler<HTMLElement>;
}

/**
 * The view model for the message timestamp.
 *
 * Snapshot data describes timestamp content and rendering behavior, while
 * container styling is supplied via component props.
 */
export declare type MessageTimestampViewModel = ViewModel<MessageTimestampViewSnapshot> & MessageTimestampViewActions;

declare interface MessageTimestampViewProps {
    /**
     * The view model for the message timestamp.
     */
    vm: MessageTimestampViewModel;
    /**
     * Optional CSS class name to apply to the component.
     */
    className?: string;
}

export declare interface MessageTimestampViewSnapshot {
    /**
     * The localized timestamp to render in the component
     */
    ts: string;
    /**
     * The localized sent timestamp formatted as full date
     */
    tsSentAt: string;
    /**
     * The localized received timestamp formatted as full date
     * If specified will render both the sent-at and received-at timestamps in the tooltip
     */
    tsReceivedAt?: string;
    /**
     * If set to true then no tooltip will be shown
     */
    inhibitTooltip?: boolean;
    /**
     * If specified, will be rendered as an anchor bearing the href, a `span` element will be used otherwise
     */
    href?: string;
}

/**
 * A mock view model that returns a static snapshot passed in the constructor, with no updates.
 */
export declare class MockViewModel<T> implements ViewModel<T> {
    private snapshot;
    constructor(snapshot: T);
    getSnapshot: () => T;
    subscribe(listener: () => void): () => void;
}

export declare function MoreOptionContent({ vm }: MoreOptionContentProps): JSX.Element;

declare interface MoreOptionContentProps {
    vm: RoomListItemViewModel_3;
}

export { normalizeLanguageKey }

/**
 * Renders notification badges and indicators for rooms/items
 */
export declare const NotificationDecoration: default_2.FC<NotificationDecorationProps>;

/**
 * Data representing the notification state for a room or item.
 * Used in snapshots and passed to the NotificationDecoration component.
 */
export declare interface NotificationDecorationData {
    /** Whether there is any notification or activity to display */
    hasAnyNotificationOrActivity: boolean;
    /** Whether there's an unsent message */
    isUnsentMessage: boolean;
    /** Whether the user is invited to the room */
    invited: boolean;
    /** Whether the notification is a mention */
    isMention: boolean;
    /** Whether there's activity (not a full notification) */
    isActivityNotification: boolean;
    /** Whether there's a notification (not just activity) */
    isNotification: boolean;
    /** Whether there are unread messages with a count */
    hasUnreadCount: boolean;
    /** Notification count */
    count: number;
    /** Whether notifications are muted */
    muted: boolean;
    /** Optional call type indicator */
    callType?: "video" | "voice";
}

/**
 * Props for the NotificationDecoration component.
 */
export declare interface NotificationDecorationProps extends NotificationDecorationData {
}

export { Panel }

export { PanelImperativeHandle }

export { PanelSize }

declare type ParseFormattedBody = (formattedBody: string, replacer?: Replacer) => ReturnType<typeof default_3>;

/** The ARIA pattern used to make the virtualized list accessible. */
export declare type Pattern = "listbox" | "treegrid";

export declare function percentageOf(val: number, min: number, max: number): number;

export declare function percentageWithin(pct: number, min: number, max: number): number;

/**
 * URL schemes that are safe to be resolved by the app consuming the library.
 */
export declare const PERMITTED_URL_SCHEMES: string[];

/**
 * A pill component that can display a label and an optional close button.
 * The badge can also contain child elements, such as icons or avatars.
 *
 * @example
 * ```tsx
 * <Pill label="New" onClick={() => console.log("Closed")}>
 *     <SomeIcon />
 * </Pill>
 * ```
 */
export declare function Pill({ className, children, label, onClick, ...props }: PropsWithChildren<PillProps>): JSX.Element;

/**
 * An input component that can contain multiple child elements and an input field.
 *
 * @example
 * ```tsx
 * <PillInput>
 *   <div>Child 1</div>
 *   <div>Child 2</div>
 * </PillInput>
 * ```
 */
export declare function PillInput({ className, children, onRemoveChildren, inputProps, ...props }: PropsWithChildren<PillInputProps>): JSX.Element;

declare interface PillInputProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Callback for when the user presses backspace on an empty input.
     */
    onRemoveChildren?: KeyboardEventHandler;
    /**
     * Props to pass to the input element.
     */
    inputProps?: HTMLProps<HTMLInputElement> & {
        "data-testid"?: string;
    };
}

declare interface PillProps extends Omit<HTMLAttributes<HTMLDivElement>, "onClick"> {
    /**
     * The text label to display inside the pill.
     */
    label: string;
    /**
     * Optional click handler for a close button.
     * If provided, a close button will be rendered.
     */
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

/**
 * A badge indicating that a message is pinned.
 */
export declare function PinnedMessageBadge({ className, children, ...props }: Readonly<PinnedMessageBadgeProps>): JSX.Element;

export declare type PinnedMessageBadgeProps = HTMLAttributes<HTMLDivElement>;

/**
 * Represents the possible states of playback.
 * - "preparing": The audio is being prepared for playback (e.g., loading or buffering).
 * - "decoding": The audio is being decoded and is not ready for playback.
 * - "stopped": The playback has been stopped, with no progress on the timeline.
 * - "paused": The playback is paused, with some progress on the timeline.
 * - "playing": The playback is actively progressing through the timeline.
 */
declare type PlaybackState = "decoding" | "stopped" | "paused" | "playing" | "preparing";

/**
 * A button component that toggles between play and pause states for audio playback.
 *
 * @example
 * ```tsx
 * <PlayPauseButton playing={true} togglePlay={() => {}} />
 * ```
 */
export declare function PlayPauseButton({ disabled, playing, togglePlay, ...rest }: Readonly<PlayPauseButtonProps>): JSX.Element;

declare interface PlayPauseButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /**
     * Whether the button is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * Whether the audio is currently playing.
     * @default false
     */
    playing?: boolean;
    /**
     * Function to toggle play/pause state.
     */
    togglePlay: MouseEventHandler<HTMLButtonElement>;
}

declare interface Props extends Pick<HTMLProps<HTMLSpanElement>, "aria-live" | "role" | "className"> {
    /**
     * The number of seconds to display.
     */
    seconds: number;
}

declare type Props_2 = {
    /**
     * The emoji to render
     */
    emoji: [SasEmoji_2, SasEmoji_2, SasEmoji_2, SasEmoji_2, SasEmoji_2, SasEmoji_2, SasEmoji_2];
    /**
     * Optional className to apply to the container
     */
    className?: string;
};

declare interface Props_3 {
    /** The history visibility of the room, according to the room state. */
    historyVisibility: "invited" | "joined" | "shared" | "world_readable";
}

declare interface Props_4 {
    vm: ViewModel<TextualEventViewSnapshot>;
}

declare interface Props_5 {
    vm: ViewModel<unknown, GroupViewActions>;
}

declare interface Props_6 {
    vm: ViewModel<ResizerViewSnapshot, SeparatorViewActions>;
    className?: string;
}

declare type Props_7 = {
    vm: ViewModel<ResizerViewSnapshot, LeftResizablePanelViewActions>;
    className?: string;
} & Pick<PanelProps, "minSize" | "maxSize" | "defaultSize">;

/**
 * Type alias for the ReactionsRowButtonTooltip view model.
 */
export declare function ReactionsRowButtonTooltipView({ vm, children, }: Readonly<ReactionsRowButtonTooltipViewProps>): JSX.Element;

export declare type ReactionsRowButtonTooltipViewModel = ViewModel<ReactionsRowButtonTooltipViewSnapshot>;

declare interface ReactionsRowButtonTooltipViewProps {
    /**
     * The view model for the reactions row button tooltip.
     */
    vm: ReactionsRowButtonTooltipViewModel;
    /**
     * The children to wrap with the tooltip.
     */
    children?: PropsWithChildren["children"];
}

/**
 * Snapshot interface for the ReactionsRowButtonTooltip view.
 */
export declare interface ReactionsRowButtonTooltipViewSnapshot {
    /**
     * The formatted list of sender names who reacted.
     */
    formattedSenders?: string;
    /**
     * The caption to display (e.g., the shortcode of the reaction).
     */
    caption?: string;
    /**
     * Whether the tooltip should be forced open.
     */
    tooltipOpen?: boolean;
}

/**
 * Renders a single reaction button within a reactions row.
 *
 * The button supports text or image reactions, selected and disabled
 * styling, and wraps its content in the reactions tooltip view.
 */
export declare function ReactionsRowButtonView({ vm }: Readonly<ReactionsRowButtonViewProps>): JSX.Element;

export declare interface ReactionsRowButtonViewActions {
    /**
     * Called when the user activates the reaction button.
     */
    onClick: () => void;
}

export declare type ReactionsRowButtonViewModel = ViewModel<ReactionsRowButtonViewSnapshot> & ReactionsRowButtonViewActions;

declare interface ReactionsRowButtonViewProps {
    /**
     * The view model for the reactions row button.
     */
    vm: ReactionsRowButtonViewModel;
}

export declare interface ReactionsRowButtonViewSnapshot extends Pick<HTMLAttributes<HTMLButtonElement>, "className" | "aria-label"> {
    /**
     * The reaction content to display when not using a custom image.
     */
    content?: string;
    /**
     * The total number of reactions for this content.
     */
    count: number;
    /**
     * Whether the reaction button is selected by the current user.
     */
    isSelected: boolean;
    /**
     * Whether the reaction button is disabled.
     * @default false
     */
    isDisabled?: boolean;
    /**
     * The image URL to render when using a custom reaction image.
     */
    imageSrc?: string;
    /**
     * The alt text for the custom reaction image.
     */
    imageAlt?: string;
    /**
     * View model for the tooltip wrapper.
     */
    tooltipVm: ReactionsRowButtonTooltipViewModel;
}

/**
 * Renders the reactions toolbar for an event tile.
 *
 * The row can show individual reaction buttons, an optional "show all"
 * control, and the add-reaction affordance.
 */
export declare function ReactionsRowView({ vm, className, children }: Readonly<ReactionsRowViewProps>): JSX.Element;

export declare interface ReactionsRowViewActions {
    /**
     * Invoked when the user clicks the "show all" button.
     */
    onShowAllClick?: () => void;
    /**
     * Invoked when the user clicks the add-reaction button.
     */
    onAddReactionClick?: MouseEventHandler<HTMLButtonElement>;
    /**
     * Invoked on right-click/context-menu for the add-reaction button.
     */
    onAddReactionContextMenu?: MouseEventHandler<HTMLButtonElement>;
}

export declare type ReactionsRowViewModel = ViewModel<ReactionsRowViewSnapshot, ReactionsRowViewActions>;

declare interface ReactionsRowViewProps {
    vm: ReactionsRowViewModel;
    /**
     * Optional CSS className for the row container.
     */
    className?: string;
    /**
     * Reaction button elements to render in the row.
     */
    children?: PropsWithChildren["children"];
}

export declare interface ReactionsRowViewSnapshot {
    /**
     * Toolbar label announced by assistive technologies.
     */
    ariaLabel: string;
    /**
     * Controls whether the row should render at all.
     */
    isVisible: boolean;
    /**
     * Whether to render the "show all" button.
     */
    showAllButtonVisible?: boolean;
    /**
     * Label shown for the "show all" button.
     */
    showAllButtonLabel?: string;
    /**
     * Whether to render the add-reaction button.
     */
    showAddReactionButton?: boolean;
    /**
     * Accessible label for the add-reaction button.
     */
    addReactionButtonLabel: string;
    /**
     * Force the add-reaction button to be visible.
     */
    addReactionButtonVisible?: boolean;
    /**
     * Marks the add-reaction button as active.
     */
    addReactionButtonActive?: boolean;
    /**
     * Disables the add-reaction button.
     */
    addReactionButtonDisabled?: boolean;
}

export declare function ReadMarker({ eventId, kind, showLine, onCurrentMarkerRef, onGhostLineRef, onGhostTransitionEnd, className, }: Readonly<ReadMarkerProps>): JSX.Element;

export declare type ReadMarkerKind = "current" | "ghost";

export declare interface ReadMarkerProps {
    /**
     * The event ID this marker is associated with.
     */
    eventId: string;
    /**
     * Whether this is the active read marker or a ghost marker transitioning out.
     */
    kind: ReadMarkerKind;
    /**
     * Whether the visible line should be rendered for the active marker.
     * Hidden active markers still render the host `<li>` to preserve layout calculations.
     */
    showLine?: boolean;
    /**
     * Ref callback for the active read marker `<li>`.
     */
    onCurrentMarkerRef?: RefCallback<HTMLLIElement>;
    /**
     * Ref callback for the ghost marker `<hr>`.
     */
    onGhostLineRef?: RefCallback<HTMLHRElement>;
    /**
     * Transition-end handler for the ghost marker `<hr>`.
     */
    onGhostTransitionEnd?: TransitionEventHandler<HTMLHRElement>;
    /**
     * Optional CSS className for the outer list item.
     */
    className?: string;
}

/**
 * Renders the body for a redacted event.
 *
 * The view shows the delete icon with localized redaction text and can
 * optionally wrap the content in a tooltip for extra context.
 */
export declare function RedactedBodyView({ vm, className, ref }: Readonly<RedactedBodyViewProps>): JSX.Element;

export declare type RedactedBodyViewModel = ViewModel<RedactedBodyViewSnapshot>;

declare interface RedactedBodyViewProps {
    /**
     * ViewModel providing the rendered text and tooltip.
     */
    vm: RedactedBodyViewModel;
    /**
     * Optional CSS class name applied to the root span.
     */
    className?: string;
    /**
     * Optional ref forwarded to the root span.
     */
    ref?: Ref<HTMLSpanElement>;
}

export declare interface RedactedBodyViewSnapshot {
    /**
     * Localized redaction message content.
     */
    text: string;
    /**
     * Optional localized tooltip shown with the redaction timestamp.
     */
    tooltip?: string;
}

export declare function registerTranslations(locale: string, data: object): void;

/**
 * Replace parts of a text using regular expressions
 * @param text - The text on which to perform substitutions
 * @param mapping - A mapping from regular expressions in string form to replacement string or a
 * function which will receive as the argument the capture groups defined in the regexp. E.g.
 * { 'Hello (.?) World': (sub) => sub.toUpperCase() }
 *
 * @return a React <span> component if any non-strings were used in substitutions, otherwise a string
 */
export declare function replaceByRegexes(text: string, mapping: IVariables): string;

export declare function replaceByRegexes(text: string, mapping: Tags): default_2.ReactNode;

declare type Replacer = HTMLReactParserOptions["replace"];

export { ResizableGroup }

/**
 * Common snapshot for GroupView, SeparatorView and LeftResizablePanelView.
 */
export declare interface ResizerViewSnapshot {
    /**
     * Whether the left panel is collapsed or not.
     */
    isCollapsed: boolean;
    /**
     * This is the initial size of the panel if available; should be interpreted as percentage.
     */
    initialSize?: number;
    /**
     * Whether the separator is currently focused by navigating
     * to it using keyboard input.
     */
    isFocusedViaKeyboard: boolean;
}

/**
 * A rich item to display in a list, with an avatar, title, description and optional timestamp.
 * If selected, the avatar is replaced with a checkmark.
 * A separator is added between items in a list.
 *
 * @example
 * ```tsx
 *   <RichItem
 *     avatar={<AvatarComponent />}
 *     title="Rich Item Title"
 *     description="This is a description of the rich item."
 *     timestamp={Date.now() - 5 * 60 * 1000} // 5 minutes ago
 *     selected={true}
 *     onClick={() => console.log("Item clicked")}
 *   />
 * ```
 */
export declare const RichItem: default_2.NamedExoticComponent<RichItemProps>;

declare interface RichItemProps extends HTMLAttributes<HTMLLIElement> {
    /**
     * Avatar to display at the start of the item
     */
    avatar: default_2.ReactNode;
    /**
     * Title to display at the top of the item
     */
    title: string;
    /**
     * Description to display below the title
     */
    description: string;
    /**
     * Timestamp to display at the end of the item
     * The value is humanized (e.g. "5 minutes ago")
     */
    timestamp?: number;
    /**
     * Whether the item is selected
     * This will replace the avatar with a checkmark
     * @default false
     */
    selected?: boolean;
}

/**
 * A list component with a title and children.
 *
 * @example
 * ```tsx
 * <RichList title="My List">
 *   <RichItem ... />
 *   <RichItem ... />
 * </RichList>
 * ```
 */
export declare function RichList({ children, title, className, titleAttributes, isEmpty, ...props }: PropsWithChildren<RichListProps>): JSX.Element;

declare interface RichListProps extends HTMLProps<HTMLDivElement> {
    /**
     * Title to display at the top of the list
     */
    title: string;
    /**
     * Attributes to pass to the title element
     * This can be used to set accessibility attributes like `aria-level` or `role`
     * @example
     * ```tsx
     * <RichList title="My List" titleAttributes={{ role: "heading", "aria-level": 2 }}>
     * ```
     */
    titleAttributes?: HTMLProps<HTMLSpanElement>;
    /**
     * Indicates if the list should show an empty state.
     * The list renders its children in a span instead of an ul.
     */
    isEmpty?: boolean;
}

/**
 * Opaque type representing a Room object from the parent application
 */
export declare type Room = unknown;

/**
 * Empty state component for the room list.
 * Displays appropriate message and actions based on the active filter.
 */
export declare const RoomListEmptyStateView: default_2.FC<RoomListEmptyStateViewProps>;

/**
 * Props for RoomListEmptyStateView component
 */
export declare interface RoomListEmptyStateViewProps {
    /** The view model containing all data and callbacks */
    vm: RoomListViewModel;
}

/**
 * The header view for the room list
 * The space name is displayed and a compose menu is shown if the user can create rooms
 *
 * @example
 * ```tsx
 * <RoomListHeaderView vm={roomListHeaderViewModel} />
 * ```
 */
export declare function RoomListHeaderView({ vm }: Readonly<RoomListHeaderViewProps>): JSX.Element;

export declare interface RoomListHeaderViewActions {
    /**
     * Create a chat room
     */
    createChatRoom: (e: Event) => void;
    /**
     * Create a room
     */
    createRoom: (e: Event) => void;
    /**
     * Create a video room
     */
    createVideoRoom: () => void;
    /**
     * Open the active space home
     */
    openSpaceHome: () => void;
    /**
     * Display the space invite dialog
     */
    inviteInSpace: () => void;
    /**
     * Open the space preferences
     */
    openSpacePreferences: () => void;
    /**
     * Open the space settings
     */
    openSpaceSettings: () => void;
    /**
     * Change the sort order of the room-list.
     */
    sort: (option: SortOption) => void;
    /**
     * Toggle message preview display in the room list.
     */
    toggleMessagePreview: () => void;
    /**
     * Create a new section in the room list.
     */
    createSection: () => void;
}

/**
 * The view model for the room list header component.
 */
export declare type RoomListHeaderViewModel = ViewModel<RoomListHeaderViewSnapshot, RoomListHeaderViewActions>;

declare interface RoomListHeaderViewProps {
    /**
     * The view model for the room list header component.
     */
    vm: RoomListHeaderViewModel;
}

export declare interface RoomListHeaderViewSnapshot {
    /**
     * The title of the room list
     */
    title: string;
    /**
     * Whether to display the compose menu
     * True if the user can create rooms
     */
    displayComposeMenu: boolean;
    /**
     * Whether to display the space menu
     * True if there is an active space
     */
    displaySpaceMenu: boolean;
    /**
     * Whether the user can create rooms
     */
    canCreateRoom: boolean;
    /**
     * Whether the user can create video rooms
     */
    canCreateVideoRoom: boolean;
    /**
     * Whether the user can invite in the active space
     */
    canInviteInSpace: boolean;
    /**
     * Whether the user can access space settings
     */
    canAccessSpaceSettings: boolean;
    /**
     * The currently active sort option.
     */
    activeSortOption: SortOption;
    /**
     * Whether message previews are enabled in the room list.
     */
    isMessagePreviewEnabled: boolean;
    /**
     * Whether the user can create sections in the room list.
     */
    canCreateSection: boolean;
    /**
     * Whether to use the compose icon instead of the create icon.
     */
    useComposeIcon: boolean;
}

/**
 * Wrapper around RoomListItemView that adds accessibility props based on the room's position in the list and whether the list is flat or grouped.
 * In a flat list, each item gets listbox item props. In a grouped list, each item gets treegrid cell props.
 *
 * @example
 * ``
 * <RoomListItemAccessibilityWrapper
 *   roomIndex={0}
 *   roomIndexInSection={0}
 *   roomCount={10}
 *   isInFlatList={true}
 *   {...otherRoomListItemViewProps}
 * />
 * ```
 */
export declare const RoomListItemAccessibilityWrapper: default_2.NamedExoticComponent<RoomListItemAccessibilityWrapperPros>;

declare interface RoomListItemAccessibilityWrapperPros extends RoomListItemViewProps {
    /** Index of this room in the list */
    roomIndex: number;
    /** Index of this room in its section */
    roomIndexInSection: number;
    /** Total number of rooms in the list */
    roomCount: number;
    /** Whether the room list is displayed as a flat list */
    isInFlatList: boolean;
}

/**
 * The context menu for room list items.
 * Wraps the trigger element with a right-click context menu displaying room options.
 */
export declare const RoomListItemContextMenu: default_2.FC<PropsWithChildren<RoomListItemContextMenuProps>>;

/**
 * Props for RoomListItemContextMenu component
 */
export declare interface RoomListItemContextMenuProps {
    /** The room item view model */
    vm: RoomListItemViewModel_3;
}

/**
 * The hover menu for room list items.
 * Displays more options and notification settings menus.
 */
export declare const RoomListItemHoverMenu: default_2.FC<RoomListItemHoverMenuProps>;

/**
 * Props for RoomListItemHoverMenu component
 */
export declare interface RoomListItemHoverMenuProps {
    /** Whether the more options menu should be shown */
    showMoreOptionsMenu: boolean;
    /** Whether the notification menu should be shown */
    showNotificationMenu: boolean;
    /** The room item view model */
    vm: RoomListItemViewModel_3;
}

/**
 * The more options menu for room list items.
 * Displays additional room actions like mark as read/unread, favorite, invite, etc.
 */
export declare function RoomListItemMoreOptionsMenu({ vm }: RoomListItemMoreOptionsMenuProps): JSX.Element;

/**
 * Props for RoomListItemMoreOptionsMenu component
 */
export declare interface RoomListItemMoreOptionsMenuProps {
    /** The room item view model */
    vm: RoomListItemViewModel_3;
}

/**
 * The notification settings menu for room list items.
 * Displays options to change notification settings.
 */
export declare function RoomListItemNotificationMenu({ vm }: RoomListItemNotificationMenuProps): JSX.Element;

/**
 * Props for RoomListItemNotificationMenu component
 */
export declare interface RoomListItemNotificationMenuProps {
    /** The room item view model */
    vm: RoomListItemViewModel_2;
}

/**
 * A presentational room list item component.
 * Displays room name, avatar, message preview, and notifications.
 */
export declare const RoomListItemView: default_2.NamedExoticComponent<RoomListItemViewProps>;

/**
 * Actions interface for room list item operations.
 * Implemented by the room item view model.
 */
export declare interface RoomListItemViewActions {
    /** Called when the room should be opened */
    onOpenRoom: () => void;
    /** Called when the room should be marked as read */
    onMarkAsRead: () => void;
    /** Called when the room should be marked as unread */
    onMarkAsUnread: () => void;
    /** Called when the room's favorite status should be toggled */
    onToggleFavorite: () => void;
    /** Called when the room's low priority status should be toggled */
    onToggleLowPriority: () => void;
    /** Called when inviting users to the room */
    onInvite: () => void;
    /** Called when copying the room link */
    onCopyRoomLink: () => void;
    /** Called when leaving the room */
    onLeaveRoom: () => void;
    /** Called when setting the room notification state */
    onSetRoomNotifState: (state: RoomNotifState) => void;
    /** Called when creating a new section */
    onCreateSection: () => void;
}

/**
 * The view model type for a room list item
 */
export declare type RoomListItemViewModel = ViewModel<RoomListItemViewSnapshot, RoomListItemViewActions>;

/**
 * View model type for room list item
 */
declare type RoomListItemViewModel_2 = ViewModel<RoomListItemViewSnapshot, RoomListItemViewActions>;

/**
 * View model type for room list item
 */
declare type RoomListItemViewModel_3 = ViewModel<RoomListItemViewSnapshot, RoomListItemViewActions>;

/**
 * Props for RoomListItemView component
 */
export declare interface RoomListItemViewProps extends Omit<default_2.HTMLAttributes<HTMLButtonElement>, "onFocus"> {
    /** The room item view model */
    vm: RoomListItemViewModel;
    /** Whether the room is selected */
    isSelected: boolean;
    /** Whether the room should be focused */
    isFocused: boolean;
    /** Callback when item receives focus */
    onFocus: (roomId: string, e: default_2.FocusEvent) => void;
    /** Whether this is the first item in the list */
    isFirstItem: boolean;
    /** Whether this is the last item in the list */
    isLastItem: boolean;
    /** Function to render the room avatar */
    renderAvatar: (room: Room) => ReactNode;
}

/**
 * Snapshot for a room list item.
 * Contains all the data needed to render a room in the list.
 */
export declare interface RoomListItemViewSnapshot {
    /** Unique identifier for the room (used for list keying) */
    id: string;
    /** The opaque Room object from the client (e.g., matrix-js-sdk Room) */
    room: Room;
    /** The name of the room */
    name: string;
    /** Whether the room name should be bolded (has unread/activity) */
    isBold: boolean;
    /** Optional message preview text */
    messagePreview?: string;
    /** Notification decoration data */
    notification: NotificationDecorationData;
    /** Whether the more options menu should be shown */
    showMoreOptionsMenu: boolean;
    /** Whether the notification menu should be shown */
    showNotificationMenu: boolean;
    /** Whether the room is a favourite room */
    isFavourite: boolean;
    /** Whether the room is a low priority room */
    isLowPriority: boolean;
    /** Can invite other users in the room */
    canInvite: boolean;
    /** Can copy the room link */
    canCopyRoomLink: boolean;
    /** Can mark the room as read */
    canMarkAsRead: boolean;
    /** Can mark the room as unread */
    canMarkAsUnread: boolean;
    /** The room's notification state */
    roomNotifState: RoomNotifState;
    /** Whether the room can be moved to a section */
    canMoveToSection: boolean;
}

/**
 * Loading skeleton component for the room list.
 * Displays a repeating skeleton pattern while rooms are being fetched.
 */
export declare const RoomListLoadingSkeleton: default_2.FC;

/**
 * The primary filters component for the room list.
 * Displays a collapsible list of filters with expand/collapse functionality.
 */
export declare const RoomListPrimaryFilters: default_2.NamedExoticComponent<RoomListPrimaryFiltersProps>;

/**
 * Props for RoomListPrimaryFilters component
 */
export declare interface RoomListPrimaryFiltersProps {
    /** Array of filter IDs to display */
    filterIds: FilterId[];
    /** Currently active filter ID (if any) */
    activeFilterId?: FilterId;
    /** Callback when a filter is toggled */
    onToggleFilter: (filterId: FilterId) => void;
}

/**
 * A search component to be displayed at the top of the room list.
 * The component provides search functionality, optional dial pad access, and optional room exploration.
 *
 * @example
 * ```tsx
 * <RoomListSearchView vm={roomListSearchViewModel} />
 * ```
 */
export declare function RoomListSearchView({ vm }: Readonly<RoomListSearchViewProps>): JSX.Element;

declare interface RoomListSearchViewActions {
    /**
     * Handles the click event on the search button.
     */
    onSearchClick: MouseEventHandler<HTMLButtonElement>;
    /**
     * Handles the click event on the dial pad button.
     */
    onDialPadClick: MouseEventHandler<HTMLButtonElement>;
    /**
     * Handles the click event on the explore button.
     */
    onExploreClick: MouseEventHandler<HTMLButtonElement>;
}

/**
 * The view model for the room list search component.
 */
export declare type RoomListSearchViewModel = ViewModel<RoomListSearchViewSnapshot, RoomListSearchViewActions>;

declare interface RoomListSearchViewProps {
    /**
     * The view model for the room list search component.
     */
    vm: RoomListSearchViewModel;
}

export declare interface RoomListSearchViewSnapshot {
    /**
     * Whether to display the explore button.
     */
    displayExploreButton: boolean;
    /**
     * Whether to display the dial pad button.
     */
    displayDialButton: boolean;
    /**
     * The keyboard shortcut text to display for the search action.
     * For example: "⌘ K" on macOS or "Ctrl K" on other platforms.
     */
    searchShortcut: string;
}

export declare type RoomListSection = {
    /** Unique identifier for the section */
    id: string;
    /** Array of room IDs that belong to this section */
    roomIds: string[];
};

/**
 * Actions that can be performed on a room list section header.
 */
export declare interface RoomListSectionHeaderActions {
    /** Handler invoked when the section header is clicked (toggles expand/collapse). */
    onClick: MouseEventHandler<HTMLButtonElement>;
}

/**
 * A collapsible section header in the room list.
 *
 * Renders a button that displays the section title alongside a chevron icon
 * indicating the current expand/collapse state. Clicking the header toggles
 * the section's expanded state via the view model.
 *
 * @example
 * ```tsx
 * <RoomListSectionHeaderView
 *   vm={sectionHeaderViewModel}
 *   isFocused={isHeaderFocused}
 *   onFocus={() => setFocusedHeader(sectionId)}
 *   sectionIndex={index}
 *   sectionCount={totalSections}
 *   roomCountInSection={roomCount}
 * />
 * ```
 */
export declare const RoomListSectionHeaderView: default_2.NamedExoticComponent<Readonly<RoomListSectionHeaderViewProps>>;

/**
 * The view model type for the room list section header, combining its snapshot and actions.
 */
export declare type RoomListSectionHeaderViewModel = ViewModel<RoomListSectionHeaderViewSnapshot, RoomListSectionHeaderActions>;

/**
 * Props for {@link RoomListSectionHeaderView}.
 */
declare interface RoomListSectionHeaderViewProps {
    /** The view model driving the section header's state and actions. */
    vm: RoomListSectionHeaderViewModel;
    /** Whether this header currently has focus within the roving tab index. */
    isFocused: boolean;
    /** Callback invoked when the header receives focus. */
    onFocus: (headerId: string, e: FocusEvent_2) => void;
    /** Index of this section in the list, sections and rooms included */
    indexInList: number;
    /** Index of this section in the list related to the others sections */
    sectionIndex: number;
    /** Total number of sections in the list */
    sectionCount: number;
    /** Number of rooms in this section */
    roomCountInSection: number;
}

/**
 * The observable state snapshot for a room list section header.
 */
export declare interface RoomListSectionHeaderViewSnapshot {
    /** Unique identifier for the section header (used for list keying) */
    id: string;
    /** The display title of the section header. */
    title: string;
    /** Whether the section is currently expanded. */
    isExpanded: boolean;
    /** Whether the section is unread (has any unread rooms) */
    isUnread: boolean;
}

/**
 * Room list view component that manages filters, loading states, empty states, and the room list.
 */
export declare const RoomListView: default_2.FC<RoomListViewProps>;

/**
 * Actions interface for room list operations
 */
export declare interface RoomListViewActions {
    /** Called when a filter is toggled */
    onToggleFilter: (filterId: FilterId) => void;
    /** Called to create a new chat room */
    createChatRoom: () => void;
    /** Called to create a new room */
    createRoom: () => void;
    /**
     * Get view model for a specific room (virtualization API)
     * Allow undefined to be returned if we don't have a view model for the room. In this case the room will not be rendered.
     */
    getRoomItemViewModel: (roomId: string) => RoomListItemViewModel | undefined;
    /** Called when the visible range changes (virtualization API) */
    updateVisibleRooms: (startIndex: number, endIndex: number) => void;
    /** Get view model for a specific section header (virtualization API) */
    getSectionHeaderViewModel: (sectionId: string) => RoomListSectionHeaderViewModel;
    /** Called to close the toast message */
    closeToast: () => void;
}

/**
 * The view model type for the room list view
 */
export declare type RoomListViewModel = ViewModel<RoomListViewSnapshot, RoomListViewActions>;

/**
 * Props for RoomListView component
 */
export declare interface RoomListViewProps {
    /** The view model containing all data and callbacks */
    vm: RoomListViewModel;
    /** Render function for room avatar */
    renderAvatar: (room: Room) => ReactNode;
    /** Optional callback for keyboard events on the room list */
    onKeyDown?: (e: default_2.KeyboardEvent<HTMLDivElement>) => void;
}

/**
 * Snapshot for the room list view
 */
export declare type RoomListViewSnapshot = {
    /** Whether the rooms are currently loading */
    isLoadingRooms: boolean;
    /** Whether the room list is empty */
    isRoomListEmpty: boolean;
    /** Array of filter IDs */
    filterIds: FilterId[];
    /** Currently active filter ID (if any) */
    activeFilterId?: FilterId;
    /** Room list state */
    roomListState: RoomListViewState;
    /** Array of sections in the room list */
    sections: RoomListSection[];
    /** Optional description for the empty state */
    emptyStateDescription?: string;
    /** Optional action element for the empty state */
    emptyStateAction?: ReactNode;
    /** Whether the user can create rooms */
    canCreateRoom?: boolean;
    /** Whether the room list is displayed as a flat list */
    isFlatList: boolean;
    /** Optional toast to display */
    toast?: ToastType;
};

/**
 * State for the room list data (nested within RoomListViewSnapshot)
 */
export declare interface RoomListViewState {
    /** Optional active room index for keyboard navigation */
    activeRoomIndex?: number;
    /** Space ID for context tracking */
    spaceId?: string;
    /** Active filter keys for context tracking */
    filterKeys?: FilterKey[];
}

/**
 * Notification state for a room.
 */
export declare enum RoomNotifState {
    /** All messages (default) */
    AllMessages = "all_messages",
    /** All messages with sound */
    AllMessagesLoud = "all_messages_loud",
    /** Only mentions and keywords */
    MentionsOnly = "mentions_only",
    /** Muted */
    Mute = "mute"
}

export declare interface RoomStatusBarConsentState {
    state: "NeedsConsent";
    consentUri: string;
}

export declare interface RoomStatusBarLocalRoomError {
    state: "LocalRoomFailed";
}

export declare interface RoomStatusBarNoConnection {
    state: "ConnectionLost";
}

export declare interface RoomStatusBarNotVisible {
    state: null;
}

export declare interface RoomStatusBarResourceLimitedState {
    state: "ResourceLimited";
    resourceLimit: "monthly_active_user" | "hs_disabled" | string;
    adminContactHref?: string;
}

export declare const RoomStatusBarState: {
    /**
     * Connectivity to the homeserver has been lost. The user can not take any actions
     * until the connection is restored.
     */
    readonly ConnectionLost: "ConnectionLost";
    /**
     * The homeserver has indiciated the user needs to consent to the Terms and Conditions
     * before they can send a message.
     */
    readonly NeedsConsent: "NeedsConsent";
    /**
     * The homeserver has indiciated that messages can not be sent due to a resource limit
     * being reached. The user may use the given admin contact details.
     */
    readonly ResourceLimited: "ResourceLimited";
    /**
     * There are messages stored locally that previously failed to send that the user
     * may now retry or delete.
     */
    readonly UnsentMessages: "UnsentMessages";
    /**
     * There was an error creating a room. The user may retry creation.
     */
    readonly LocalRoomFailed: "LocalRoomFailed";
};

export declare interface RoomStatusBarUnsentMessagesState {
    state: "UnsentMessages";
    isResending: boolean;
}

/**
 * A component to alert to a failure in the context of a room.
 *
 * @example
 * ```tsx
 * <RoomStatusBarView vm={RoomStatusBarViewModel} />
 * ```
 * ```
 */
export declare function RoomStatusBarView({ vm }: Readonly<RoomStatusBarViewProps>): JSX.Element | null;

export declare interface RoomStatusBarViewActions {
    /**
     * Called when the user clicks on the 'resend all' button in the 'unsent messages' bar.
     */
    onResendAllClick?: () => Promise<void>;
    /**
     * Called when the user clicks on the 'cancel all' button in the 'unsent messages' bar.
     */
    onDeleteAllClick?: () => void;
    /**
     * Called when the user clicks on the 'Retry' button in the 'failed to start chat' bar.
     */
    onRetryRoomCreationClick?: () => void;
    /**
     * Called when the user clicks on the 'Review Terms and Conditions' button.
     */
    onTermsAndConditionsClicked?: () => void;
}

/**
 * The view model for RoomStatusBarView.
 */
export declare type RoomStatusBarViewModel = ViewModel<RoomStatusBarViewSnapshot, RoomStatusBarViewActions>;

declare interface RoomStatusBarViewProps {
    /**
     * The view model for the banner.
     */
    vm: RoomStatusBarViewModel;
}

export declare type RoomStatusBarViewSnapshot = RoomStatusBarNoConnection | RoomStatusBarConsentState | RoomStatusBarResourceLimitedState | RoomStatusBarUnsentMessagesState | RoomStatusBarLocalRoomError | RoomStatusBarNotVisible;

/**
 * Sanitizes unsafe text for the sanitizer, ensuring references to variables will not be considered
 * replaceable by the translation functions.
 * @param {string} text The text to sanitize.
 * @returns {string} The sanitized text.
 */
export declare function sanitizeForTranslation(text: string): string;

/**
 * Renders the 7 emoji used for SAS verification.
 * The component is responsive so can be rendered in any context, dialog, side panel.
 */
export declare function SasEmoji({ emoji, className }: Props_2): JSX.Element;

declare type SasEmoji_2 = "🐶" | "🐱" | "🦁" | "🐎" | "🦄" | "🐷" | "🐘" | "🐰" | "🐼" | "🐓" | "🐧" | "🐢" | "🐟" | "🐙" | "🦋" | "🌷" | "🌳" | "🌵" | "🍄" | "🌏" | "🌙" | "☁" | "🔥" | "🍌" | "🍎" | "🍓" | "🌽" | "🍕" | "🎂" | "❤" | "😀" | "🤖" | "🎩" | "👓" | "🔧" | "🎅" | "👍" | "☂" | "⌛" | "⏰" | "🎁" | "💡" | "📕" | "✏" | "📎" | "✂" | "🔒" | "🔑" | "🔨" | "☎" | "🏁" | "🚂" | "🚲" | "✈" | "🚀" | "🏆" | "⚽" | "🎸" | "🎺" | "🔔" | "⚓" | "🎧" | "📁" | "📌";

/**
 * Utility type for the prop scrollIntoViewOnChange allowing it to be memoised by a caller without repeating types
 */
export declare type ScrollIntoViewOnChange<Item, Context> = NonNullable<VirtuosoProps<Item, VirtualizedListContext<Context>>["scrollIntoViewOnChange"]>;

/**
 * A seek bar component for audio playback.
 *
 * @example
 * ```tsx
 * <SeekBar value={50} onChange={(e) => console.log("New value", e.target.value)} />
 * ```
 */
export declare function SeekBar({ value, className, ...rest }: Readonly<SeekBarProps>): JSX.Element;

declare interface SeekBarProps extends default_2.InputHTMLAttributes<HTMLInputElement> {
    /**
     * The current value of the seek bar, between 0 and 100.
     * @default 0
     */
    value?: number;
}

export { Separator }

/**
 * Custom separator for collapsible left-panel based on {@link Separator}.
 */
export declare function SeparatorView({ vm, className }: Props_6): default_2.ReactNode;

export declare interface SeparatorViewActions {
    /**
     * onClick handler for the separator.
     */
    onSeparatorClick: () => void;
    /**
     * onFocus handler for the separator.
     */
    onFocus: () => void;
    /**
     * onBlur handler for the separator.
     */
    onBlur: () => void;
}

/**
 * Sets the language for the application.
 * In Element web,`languageHandler.setLanguage` should be used instead.
 * @param language
 */
export declare function setLanguage(language: string): Promise<void>;

export declare function setLocale(value: string): string;

export declare function setMissingEntryGenerator(callback: (value: string) => void): void;

/**
 * This is the output of the viewmodel that the view consumes.
 * Updating snapshot through this object will make react re-render
 * components.
 */
export declare class Snapshot<T> {
    private snapshot;
    private emit;
    constructor(snapshot: T, emit: () => void);
    /**
     * Replace current snapshot with a new snapshot value.
     * @param snapshot New snapshot value
     */
    set(snapshot: T): void;
    /**
     * Update a part of the current snapshot by merging into the existing snapshot.
     * Only emits if at least one of the merged fields has a different reference than the current value.
     * @param snapshot A subset of the snapshot to merge into the current snapshot.
     */
    merge(snapshot: Partial<T>): void;
    /**
     * The current value of the snapshot.
     */
    get current(): T;
}

/**
 * The available sorting options for the room list.
 */
export declare type SortOption = "recent" | "alphabetical" | "unread-first";

export declare function substitute(text: string, variables?: IVariables): string;

export declare function substitute(text: string, variables: IVariables | undefined, tags: Tags | undefined): string;

/**
 * The value a variable or tag can take for a translation interpolation.
 */
declare type SubstitutionValue = number | string | default_2.ReactNode | ((sub: string) => default_2.ReactNode);

export declare function sum(...i: number[]): number;

export declare function _t(text: TranslationKey, variables?: IVariables): string;

export declare function _t(text: TranslationKey, variables: IVariables | undefined, tags: Tags): default_2.ReactNode;

export declare type Tags = Record<string, SubstitutionValue>;

export declare function _td(s: TranslationKey): TranslationKey;

export declare function _tDom(text: TranslationKey, variables?: IVariables): TranslatedString;

export declare function _tDom(text: TranslationKey, variables: IVariables, tags: Tags): default_2.ReactNode;

export declare type TextualBodyContentElement = HTMLDivElement | HTMLSpanElement;

export declare type TextualBodyContentRef = Ref<TextualBodyContentElement>;

/**
 * Renders a textual message body for timeline events.
 *
 * The view supports text, notice, emote, and caption layouts, optional
 * link or action wrappers, edited and moderation markers, and appended
 * URL previews.
 */
export declare function TextualBodyView({ vm, body, bodyRef, urlPreviews, className, }: Readonly<TextualBodyViewProps>): JSX.Element;

export declare interface TextualBodyViewActions {
    /**
     * Capture-phase click handler attached to the root message-body container.
     */
    onRootClick?: MouseEventHandler<HTMLDivElement>;
    /**
     * Activation handler used when `bodyWrapper` is `ACTION`.
     */
    onBodyActionClick?: MouseEventHandler<HTMLElement>;
    /**
     * Click handler for the edited marker.
     */
    onEditedMarkerClick?: MouseEventHandler<HTMLButtonElement>;
    /**
     * Click handler for the emote sender.
     */
    onEmoteSenderClick?: MouseEventHandler<HTMLButtonElement>;
}

export declare const enum TextualBodyViewBodyWrapperKind {
    NONE = "NONE",
    LINK = "LINK",
    ACTION = "ACTION"
}

export declare const enum TextualBodyViewKind {
    TEXT = "TEXT",
    NOTICE = "NOTICE",
    EMOTE = "EMOTE",
    CAPTION = "CAPTION"
}

export declare type TextualBodyViewModel = ViewModel<TextualBodyViewSnapshot, TextualBodyViewActions>;

declare interface TextualBodyViewProps {
    /**
     * The view model providing the layout state and event handlers.
     */
    vm: TextualBodyViewModel;
    /**
     * The message body element, typically `EventContentBodyView`.
     */
    body: ReactElement;
    /**
     * Optional ref to attach to the message body element.
     */
    bodyRef?: TextualBodyContentRef;
    /**
     * Optional URL preview subtree rendered after the body.
     */
    urlPreviews?: ReactNode;
    /**
     * Optional host-level class names.
     */
    className?: string;
}

export declare interface TextualBodyViewSnapshot {
    /**
     * Optional id passed to the root message-body element.
     */
    id?: string;
    /**
     * Controls the layout and styling branch for the body.
     */
    kind: TextualBodyViewKind;
    /**
     * Optional outer wrapper applied around the rendered body content.
     */
    bodyWrapper?: TextualBodyViewBodyWrapperKind;
    /**
     * Href used when `bodyWrapper` is `LINK`.
     */
    bodyLinkHref?: string;
    /**
     * Accessible label used when `bodyWrapper` is `ACTION`.
     */
    bodyActionAriaLabel?: string;
    /**
     * Whether to render the edited marker.
     */
    showEditedMarker?: boolean;
    /**
     * Visible label for the edited marker.
     */
    editedMarkerText?: string;
    /**
     * Tooltip description for the edited marker.
     */
    editedMarkerTooltip?: string;
    /**
     * Optional tooltip caption for the edited marker.
     */
    editedMarkerCaption?: string;
    /**
     * Whether to render the pending-moderation marker.
     */
    showPendingModerationMarker?: boolean;
    /**
     * Visible label for the pending-moderation marker.
     */
    pendingModerationText?: string;
    /**
     * Sender label rendered for emote events.
     */
    emoteSenderName?: string;
}

/**
 * Renders a plain textual timeline event without message-body decorations.
 *
 * This view is used for simple informational timeline entries where the
 * content is already prepared by the view model.
 */
export declare function TextualEventView({ vm }: Props_4): JSX.Element;

export declare type TextualEventViewSnapshot = {
    content: string | ReactNode;
};

/**
 * Renders a timeline tile fallback when message content cannot be displayed.
 *
 * The component shows the fallback error message from the view model, optionally
 * appends the event type in parentheses, and can render bug-report and view-source
 * actions when their labels are provided. The layout in the view-model snapshot
 * selects the timeline presentation variant.
 */
export declare function TileErrorView({ vm, className }: Readonly<TileErrorViewProps>): JSX.Element;

export declare interface TileErrorViewActions {
    /**
     * Invoked when the bug-report button is clicked.
     */
    onBugReportClick?: MouseEventHandler<HTMLButtonElement>;
    /**
     * Invoked when the view-source action is clicked.
     */
    onViewSourceClick?: MouseEventHandler<HTMLButtonElement>;
}

export declare type TileErrorViewLayout = "bubble" | "group" | "irc";

export declare type TileErrorViewModel = ViewModel<TileErrorViewSnapshot, TileErrorViewActions>;

declare interface TileErrorViewProps {
    /**
     * The view model for the tile error fallback.
     */
    vm: TileErrorViewModel;
    /**
     * Optional host-level class names.
     */
    className?: string;
}

export declare interface TileErrorViewSnapshot {
    /**
     * Layout variant used by the host timeline.
     */
    layout?: TileErrorViewLayout;
    /**
     * Primary fallback text shown when a tile fails to render.
     */
    message: string;
    /**
     * Optional event type appended to the fallback text.
     */
    eventType?: string;
    /**
     * Optional label for the bug-report action button.
     */
    bugReportCtaLabel?: string;
    /**
     * Optional label for the view-source action.
     */
    viewSourceCtaLabel?: string;
}

/**
 * Generic timeline separator component to render within a MessagePanel
 *
 * @param label the accessible label string describing the separator
 * @param children the children to draw within the timeline separator
 */
export declare const TimelineSeparator: default_2.FC<TimelineSeparatorProps>;

/**
 * Timeline separator props
 */
export declare interface TimelineSeparatorProps {
    /**
     * Accessible label for the separator (for example: "Today", "Yesterday", or a date).
     */
    label: string;
    /**
     * The CSS class name.
     */
    className?: string;
    /**
     * Optional children to render inside the timeline separator
     */
    children?: PropsWithChildren["children"];
    /**
     * ARIA role for the separator container.
     * Use "none" when the separator contains interactive controls.
     * @default "separator"
     */
    role?: "separator" | "none";
}

declare type ToastType = "section_created";

export declare type TranslatedString = string | default_2.ReactNode;

/** ARIA props for a `treegrid` container element, including the total row count. */
export declare type TreegridContainerProps = {
    /** The ARIA role identifying this element as a treegrid. */
    "role": "treegrid";
    /** The total number of rows in the treegrid, used by assistive technologies to announce list size. */
    "aria-rowcount": number;
};

/** ARIA props for a group header row rendered inside a `treegrid` at depth level 1. */
export declare type TreegridGroupHeaderProps = {
    /** Identifies the element as a row within the treegrid. */
    "role": "row";
    /** The depth of this row in the tree hierarchy. Group headers are always at the root level (1). */
    "aria-level": 1;
    /** The 1-based position of this group among all groups. */
    "aria-posinset": number;
    /** The 1-based index of this row within the full treegrid row sequence (headers + items). */
    "aria-rowindex": number;
    /** The total number of groups in the treegrid. */
    "aria-setsize": number;
};

/** ARIA props for an item rendered inside a `treegrid` at depth level 2 (i.e. a child row within a group). */
export declare type TreegridItemProps = {
    /** Identifies the element as a row within the treegrid. */
    "role": "row";
    /** The depth of this row in the tree hierarchy. Items are always at level 2 (inside a group). */
    "aria-level": 2;
    /** The 1-based index of this row within the full treegrid row sequence (headers + items). */
    "aria-rowindex": number;
    /** The 1-based position of this item within its group, used by assistive technologies to announce position. */
    "aria-posinset": number;
};

/** Represents a URL preview. */
export declare interface UrlPreview {
    /**
     * The URL for the preview.
     */
    link: string;
    /**
     * Should the link have a tooltip. Should be `true` if the platform does not provide a tooltip.
     */
    showTooltipOnLink?: boolean;
    /**
     * The title of the page being previewed.
     */
    title: string;
    /**
     * The site name to be displayed alongside the title.
     */
    siteName?: string;
    /**
     * Description of the site. May contain links.
     */
    description?: string;
    /**
     * Preview image to display.
     */
    image?: {
        /**
         * The HTTP URI of the the thumbnail.
         */
        imageThumb: string;
        /**
         * The HTTP URI of the full image.
         */
        imageFull: string;
        /**
         * File size in bytes.
         */
        fileSize?: number;
        /**
         * The width of the thumbnail. Must not exceed 100px.
         */
        width?: number;
        /**
         * The height of the thumbnail. Must not exceed 100px.
         */
        height?: number;
    };
}

/**
 * Renders the URL preview group attached to a single event.
 *
 * The view lays out one or more link previews, can collapse or expand
 * overflowed previews, and exposes a control to hide the group.
 */
export declare function UrlPreviewGroupView({ vm }: UrlPreviewGroupViewProps): JSX.Element | null;

export declare interface UrlPreviewGroupViewActions {
    onTogglePreviewLimit: () => void;
    onHideClick: () => Promise<void>;
    onImageClick: (preview: UrlPreview) => void;
}

export declare type UrlPreviewGroupViewModel = ViewModel<UrlPreviewGroupViewSnapshot, UrlPreviewGroupViewActions>;

export declare interface UrlPreviewGroupViewProps {
    vm: ViewModel<UrlPreviewGroupViewSnapshot> & UrlPreviewGroupViewActions;
}

export declare interface UrlPreviewGroupViewSnapshot {
    previews: Array<UrlPreview>;
    totalPreviewCount: number;
    previewsLimited: boolean;
    overPreviewLimit: boolean;
    compactLayout: boolean;
}

/**
 * A hook to manage the wrapping of filters in the room list.
 * It observes the filter list and hides filters that are wrapping when the list is not expanded.
 * @param isExpanded
 * @param wrappingClassName - the CSS class to apply to wrapping filters
 * @returns an object containing:
 * - `ref`: a ref to put on the filter list element
 * - `isWrapping`: a boolean indicating if the filters are wrapping
 * - `wrappingIndex`: the index of the first filter that is wrapping
 */
export declare function useCollapseFilters<T extends HTMLElement>(isExpanded: boolean, wrappingClassName: string): {
    ref: RefObject<T | null>;
    isWrapping: boolean;
    wrappingIndex: number;
};

/**
 * Instantiate a view-model that gets disposed when the calling react component unmounts.
 * In other words, this hook ties the lifecycle of a view-model to the lifecycle of a
 * react component.
 *
 * @param vmCreator A function that returns a view-model instance
 * @returns view-model instance from vmCreator
 * @example
 * const vm = useCreateAutoDisposedViewModel(() => new FooViewModel({prop1, prop2, ...});
 */
export declare function useCreateAutoDisposedViewModel<B extends BaseViewModel<unknown, unknown>>(vmCreator: VmCreator<B>): B;

/**
 * A hook to get the i18n API from the context. Will throw if no i18n context is found.
 * @throws If no i18n context is found
 * @returns The i18n API from the context
 */
export declare function useI18n(): I18nApi_2;

/**
 * A hook to get the linked text configuration from the context. Will throw if no LinkedTextContext is found.
 * @throws If no LinkedTextContext context is found
 * @returns The linked text configuration from the context
 */
export declare function useLinkedTextContext(): LinkedTextConfiguration;

/**
 * Hook helper to return a mocked view model created with the given snapshot and actions.
 * This is useful for testing components in isolation with a mocked view model and allows to use primitive types in stories.
 *
 * @param snapshot
 * @param actions
 */
export declare function useMockedViewModel<S, A>(snapshot: S, actions: A): ViewModel<S> & A;

/**
 * A small wrapper around useSyncExternalStore to use a view model in a shared component view
 * @param vm The view model to use
 * @returns The current snapshot
 */
export declare function useViewModel<T>(vm: ViewModel<T, unknown>): T;

/**
 * A hook to sort the filter IDs by active state.
 * The list is sorted if the active filter index is greater than or equal to the wrapping index.
 * If the wrapping index is -1, the filters are not sorted.
 *
 * @param filterIds - the list of filter IDs to sort.
 * @param activeFilterId - the currently active filter ID (if any).
 * @param wrappingIndex - the index of the first filter that is wrapping.
 */
export declare function useVisibleFilters(filterIds: FilterId[], activeFilterId: FilterId | undefined, wrappingIndex: number): FilterId[];

/**
 * Renders the body of a video message with ready, hidden, loading, and error states.
 *
 * The media frame preserves layout while loading and can render
 * supplemental content such as a file body row after the video.
 */
export declare function VideoBodyView({ vm, className, containerClassName, videoRef, children, }: Readonly<VideoBodyViewProps>): JSX.Element;

export declare interface VideoBodyViewActions {
    /**
     * Invoked when the user chooses to reveal hidden media.
     */
    onPreviewClick?: MouseEventHandler<HTMLButtonElement>;
    /**
     * Invoked when the video starts playing.
     */
    onPlay?: ReactEventHandler<HTMLVideoElement>;
}

export declare type VideoBodyViewModel = ViewModel<VideoBodyViewSnapshot, VideoBodyViewActions>;

declare interface VideoBodyViewProps {
    /**
     * View model providing render state and actions.
     */
    vm: VideoBodyViewModel;
    /**
     * Optional host CSS class.
     */
    className?: string;
    /**
     * Optional CSS class applied to the media frame container.
     */
    containerClassName?: string;
    /**
     * Optional ref to the rendered video element.
     */
    videoRef?: Ref<HTMLVideoElement>;
    /**
     * Optional supplemental content rendered after the video frame.
     */
    children?: PropsWithChildren["children"];
}

export declare interface VideoBodyViewSnapshot {
    /**
     * The current render state of the component.
     */
    state: VideoBodyViewState;
    /**
     * Accessible label applied to the video element.
     */
    videoLabel?: string;
    /**
     * Title applied to the video element.
     */
    videoTitle?: string;
    /**
     * Label shown in the hidden-preview placeholder.
     */
    hiddenButtonLabel?: string;
    /**
     * Label rendered when media cannot be processed.
     */
    errorLabel?: string;
    /**
     * Optional width constraint for the media frame.
     */
    maxWidth?: number;
    /**
     * Optional height constraint for the media frame.
     */
    maxHeight?: number;
    /**
     * Optional aspect ratio for the media frame.
     */
    aspectRatio?: CSSProperties["aspectRatio"];
    /**
     * Video source URL.
     */
    src?: string;
    /**
     * Poster image URL.
     */
    poster?: string;
    /**
     * Preload mode for the video.
     */
    preload?: "none" | "metadata" | "auto";
    /**
     * Whether native controls are visible.
     */
    controls?: boolean;
    /**
     * Whether the video is muted.
     */
    muted?: boolean;
    /**
     * Whether the video should autoplay.
     */
    autoPlay?: boolean;
}

/**
 * Render states for the shared video body view.
 */
export declare const VideoBodyViewState: {
    readonly ERROR: "ERROR";
    readonly HIDDEN: "HIDDEN";
    readonly LOADING: "LOADING";
    readonly READY: "READY";
};

export declare type VideoBodyViewState = (typeof VideoBodyViewState)[keyof typeof VideoBodyViewState];

export declare type ViewModel<Snapshot, Actions = unknown> = {
    /**
     * The current snapshot of the view model.
     */
    getSnapshot: () => Snapshot;
    /**
     * Subscribes to changes in the view model.
     * The listener will be called whenever the snapshot changes.
     */
    subscribe: (listener: () => void) => () => void;
} & MapToVoidThis<Actions>;

/**
 * Utility class for view models to manage subscriptions to their updates
 */
export declare class ViewModelSubscriptions {
    private listeners;
    /**
     * Subscribe to changes in the view model.
     * @param listener Will be called whenever the snapshot changes.
     * @returns A function to unsubscribe from the view model updates.
     */
    add: (listener: () => void) => (() => void);
    /**
     * Emit an update to all subscribed listeners.
     */
    emit: () => void;
}

/**
 * Context object passed to each list item containing the currently focused key
 * and any additional context data from the parent component.
 */
export declare type VirtualizedListContext<Context> = {
    /** The key of item that should have tabIndex == 0 */
    tabIndexKey?: string;
    /** Whether an item in the list is currently focused */
    focused: boolean;
    /** Additional context data passed from the parent component */
    context: Context;
};

declare interface VirtualizedListProps<Item, Context> extends Omit<VirtuosoProps<Item, VirtualizedListContext<Context>>, "data" | "itemContent" | "context"> {
    /**
     * The array of items to display in the virtualized list.
     * Each item will be passed to getItemComponent for rendering.
     */
    items: Item[];
    /**
     * Optional additional context data to pass to each rendered item.
     * This will be available in the VirtualizedListContext passed to getItemComponent.
     */
    context?: Context;
    /**
     * Function to determine if an item can receive focus during keyboard navigation.
     * @param item - The item to check for focusability
     * @returns true if the item can be focused, false otherwise
     */
    isItemFocusable: (item: Item) => boolean;
    /**
     * Function to get the key to use for focusing an item.
     * @param item - The item to get the key for
     * @return The key to use for focusing the item
     */
    getItemKey: (item: Item) => string;
    /**
     * Callback function to handle key down events on the list container.
     * List handles keyboard navigation for focus(up, down, home, end, pageUp, pageDown)
     * and stops propagation otherwise the event bubbles and this callback is called for the use of the parent.
     * @param e - The keyboard event
     * @returns
     */
    onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
    /**
     * Optional total count of items (for virtualization with partial data loading).
     * If provided, this will be used instead of items.length for the total count.
     */
    totalCount?: number;
    /**
     * Optional callback when the visible range of items changes.
     * Useful for loading data on-demand as the user scrolls.
     * @param range - The new visible range with startIndex and endIndex
     */
    rangeChanged?: (range: ListRange) => void;
    /**
     * Optional function to map from the items array index to the scroll index
     * used by virtuoso's scrollIntoView. This is needed when the items array
     * contains entries (such as group headers) that don't have a direct 1:1
     * mapping with virtuoso's own item indices.
     *
     * @param itemsIndex - The index in the items array
     * @returns The index to pass to virtuoso's scrollIntoView
     */
    mapScrollIndex?: (itemsIndex: number) => number;
    /**
     * Optional function to map from virtuoso's reported visible-range indices
     * back to the items array indices. This is needed when virtuoso reports
     * ranges in a different index space than the items array (e.g., in
     * GroupedVirtuoso where group headers are not counted in the range).
     *
     * @param virtuosoIndex - The index reported by virtuoso's rangeChanged
     * @returns The corresponding index in the items array
     */
    mapRangeIndex?: (virtuosoIndex: number) => number;
}

/**
 * A virtualized list of rooms.
 * This component provides efficient rendering of large room lists using virtualization,
 * and renders RoomListItemView components for each room.
 *
 * @example
 * ```tsx
 * <VirtualizedRoomListView vm={roomListViewModel} renderAvatar={(room) => <Avatar room={room} />} />
 * ```
 */
export declare function VirtualizedRoomListView({ vm, renderAvatar, onKeyDown }: VirtualizedRoomListViewProps): JSX.Element;

/**
 * Props for the VirtualizedRoomListView component
 */
export declare interface VirtualizedRoomListViewProps {
    /**
     * The view model containing all room list data and callbacks
     */
    vm: RoomListViewModel;
    /**
     * Render function for room avatar
     * @param room - The opaque Room object from the client
     */
    renderAvatar: (room: Room) => ReactNode;
    /**
     * Optional callback for keyboard key down events
     */
    onKeyDown?: (e: default_2.KeyboardEvent<HTMLDivElement>) => void;
}

export { VirtuosoMockContext }

declare type VmCreator<B extends BaseViewModel<unknown, unknown>> = () => B;

/**
 * A context menu component used to display the correct items that needs to be displayed for a widget item menu
 */
export declare const WidgetContextMenuView: default_2.FC<WidgetContextMenuViewProps>;

declare interface WidgetContextMenuViewActions {
    /**
     * Function triggered when stream audio is clicked
     */
    onStreamAudioClick: () => Promise<void>;
    /**
     * Function triggered when edit button is clicked
     */
    onEditClick: () => void;
    /**
     * Function triggered when snapshot button is clicked
     */
    onSnapshotClick: () => void;
    /**
     * Function triggered when delete button is clicked
     */
    onDeleteClick: () => void;
    /**
     * Function triggered when revoke button is clicked
     */
    onRevokeClick: () => void;
    /**
     * Called when the action is finished, to close the menu
     */
    onFinished: () => void;
    /**
     * Button used to move up or down in the list the widget position
     * @param direction 1 or -1
     */
    onMoveButton: (direction: number) => void;
}

export declare type WidgetContextMenuViewModel = ViewModel<WidgetContextMenuViewSnapshot, WidgetContextMenuViewActions>;

declare interface WidgetContextMenuViewProps {
    vm: WidgetContextMenuViewModel;
}

export declare interface WidgetContextMenuViewSnapshot {
    /**
     * Indicates if the audio stream button needs to be shown or not
     * depending on the config value audio_stream_url and widget type jitsi
     */
    showStreamAudioStreamButton: boolean;
    /**
     * Indicates if the edit button is shown depending the user permission to modify
     */
    showEditButton: boolean;
    /**
     * Indicates if revoke widget button needs to be shown or not
     */
    showRevokeButton: boolean;
    /**
     * Indicates if delete widget button needs to be shown or not
     */
    showDeleteButton: boolean;
    /**
     * Show take screenshot button or not dependning on config value enableWidgetScreenshots
     */
    showSnapshotButton: boolean;
    /**
     * show move widget position button
     */
    showMoveButtons: [boolean, boolean];
    /**
     * Indicates if user can modify the widget settings
     */
    canModify: boolean;
    /**
     * Indicates if the widget menu is opened or not
     */
    isMenuOpened: boolean;
    /**
     * A component that is displayed which trigger the menu to open or close
     */
    trigger: ReactNode;
    /**
     * If it's an instance of a user widget
     */
    userWidget: boolean;
}

/**
 * A picture-in-picture view for a widget. Additional controls are shown if the
 * widget represents a call.
 */
export declare const WidgetPipView: FC<WidgetPipViewProps>;

export declare interface WidgetPipViewActions {
    /**
     * Call this once the back button is clicked in the pip view.
     * The view model will handle navigating back to the associated room.
     * @param ev The mouse event that triggered the back click.
     */
    onBackClick: (ev: default_2.MouseEvent<Element, MouseEvent>) => void;
    /**
     * The view model exposes the `<PersistentApp />` component via this action.
     * `PersistentApp` is not available in shared components.
     * It can be any React component that renders a widget.
     * It will be mounted inside the PipView.
     */
    persistentAppComponent: default_2.FC<{
        persistentWidgetId: string;
        persistentRoomId: string;
    }>;
    /**
     * Action that needs to be called when the pip view starts to get dragged.
     * @param ev The mouse event that triggered the drag start.
     */
    onStartMoving: (ev: default_2.MouseEvent<Element, MouseEvent>) => void;
}

/**
 * The view model for the widget PiP view.
 */
export declare type WidgetPipViewModel = ViewModel<WidgetPipViewSnapshot> & WidgetPipViewActions;

export declare interface WidgetPipViewProps {
    /**
     * The WidgetPipViewModel to expose the WidgetPipViewSnapshot and to:
     *  - handling the back button callback.
     *  - exposing the persistentApp react component to the view.
     */
    vm: WidgetPipViewModel;
    /**
     * The avatar is passed as a React component.
     * This allows any avatar implementation to be used in this view (like RoomAvatar).
     */
    RoomAvatar: default_2.FC<{
        size: string;
    }>;
}

export declare interface WidgetPipViewSnapshot {
    /**
     * The widget ID this view is rendering.
     */
    widgetId: string;
    /**
     * The room name the Pip View should use in the header.
     */
    roomName: string;
    /**
     * The room ID this PiP view’s widget is associated with.
     */
    roomId: string;
}

export { }
