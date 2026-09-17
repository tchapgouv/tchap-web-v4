import { ChangeEventHandler } from 'react';
import { ComponentProps } from 'react';
import { ComponentPropsWithoutRef } from 'react';
import { ComponentType } from 'react';
import { Context } from 'react';
import { CSSProperties } from 'react';
import { default as default_2 } from 'react';
import { default as default_3 } from 'html-react-parser';
import { Dispatch } from 'react';
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
import { IconButton } from '@vector-im/compound-web';
import { IndicatorIcon } from '@vector-im/compound-web';
import { JSX } from 'react';
import { JSXElementConstructor } from 'react';
import { KEY_SEPARATOR } from 'matrix-web-i18n';
import { KeyboardEvent as KeyboardEvent_2 } from 'react';
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
import { Provider } from 'react';
import { ReactElement } from 'react';
import { ReactEventHandler } from 'react';
import { ReactNode } from 'react';
import { Ref } from 'react';
import { RefCallback } from 'react';
import { RefObject } from 'react';
import { Group as ResizableGroup } from 'react-resizable-panels';
import { Separator } from 'react-resizable-panels';
import { StringVariables as StringVariables_2 } from '@element-hq/element-web-module-api';
import { SVGAttributes } from 'react';
import { Tags as Tags_2 } from '@element-hq/element-web-module-api';
import { Text as Text_2 } from '@vector-im/compound-web';
import { TransitionEventHandler } from 'react';
import { Translations } from '@element-hq/element-web-module-api';
import { Variables } from '@element-hq/element-web-module-api';
import { VirtuosoHandle } from 'react-virtuoso';
import { VirtuosoMockContext } from 'react-virtuoso';
import { VirtuosoProps } from 'react-virtuoso';
import { WheelEvent as WheelEvent_2 } from 'react';

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
    downloadScanState: "scanning" | "done" | "error" | "unsafe";
}

/** Where in the viewport to place the target when scrolling to an anchor. */
export declare type AnchorAlign = "start" | "center" | "end";

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
 * Scroll container that hides native scrollbars until hovered.
 * Any overflow-x is hidden by default.
 */
export declare function AutoHideScrollbar<T extends keyof JSX.IntrinsicElements = "div">(props: AutoHideScrollbarProps<T>): default_2.ReactNode;

/**
 * Props for `AutoHideScrollbar`.
 */
export declare type AutoHideScrollbarProps<T extends keyof JSX.IntrinsicElements = "div"> = Omit<DynamicHtmlElementProps<T>, "onScroll"> & {
    /** The type of the HTML element. @default div*/
    as?: T;
    /** Additional class names to append to the scrollbar root. */
    className?: string;
    /** Inline styles applied to the root element. */
    style?: default_2.CSSProperties;
    /** Tab index override; defaults to `-1`. */
    tabIndex?: number;
    /** Receives the mounted scroll container element. */
    wrappedRef?: (ref: HTMLDivElement | null) => void;
    /** Native scroll handler attached with a passive listener. */
    onScroll?: (event: Event) => void;
    /** Optional wheel handler forwarded to the root element. */
    onWheel?: (event: WheelEvent_2) => void;
    /** Scrollable content rendered inside the container. */
    children: ReactNode;
};

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
 * Stable keys for the edge loading spinners. The ViewModel assigns one of these as the
 * `key` of a `kind:"loading"` item; the View matches them to keep scroll anchoring off a
 * spinner (whose key vanishes when the loaded batch replaces it). Shared here so the two
 * sides can't drift.
 */
export declare const BACKWARD_LOADING_KEY = "backward-loading";

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

/**
 * Whether the call is incoming or outgoing.
 */
export declare const enum CallDirection {
    Incoming = "Incoming",
    Outgoing = "Outgoing"
}

export declare type CallStartedTileFooViewModel = ViewModel<CommonOngoingCallTileViewSnapshot>;

export declare interface CallStartedTileViewProps {
    vm: RoomTombstoneCallTileViewModel;
    /**
     * Additional class names for this component.
     */
    className?: string;
}

/**
 * Represents whether a call is a voice call or video call.
 */
export declare const enum CallType {
    /**
     * This is a voice call.
     */
    Voice = "voice",
    /**
     * This is a video call.
     */
    Video = "video"
}

/**
 * Returns whether an element should keep native arrow-key behaviour instead of
 * being intercepted by roving focus navigation.
 *
 * This excludes radio buttons and checkboxes, which commonly participate in
 * directional navigation patterns.
 *
 * @param el - The element being evaluated for native input behaviour.
 * @returns `true` when the element should keep its own arrow-key handling.
 */
export declare function checkInputableElement(el: EventTarget): boolean;

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
export declare function Clock({ seconds, className, minutesMaxLength, hoursMaxLength, ...rest }: Props): JSX.Element;

/**
 * The available options for collapsing sections in the room list.
 */
export declare type CollapseSectionsOption = "collapse" | "expand";

export declare interface CommonOngoingCallTileViewAction {
    /**
     * Join this call
     */
    join: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * This snapshot type contains state used by both RoomOngoingCallTileView and
 * DmOngoingCallTileView.
 */
export declare interface CommonOngoingCallTileViewSnapshot {
    /**
     * The display name of whoever started this call.
     */
    startedByDisplayName: string;
    /**
     * Vm for rendering the duration of this call.
     */
    durationViewModel?: DurationViewModel;
    /**
     * Avatar vm for the user who started this call.
     */
    memberAvatarViewModel: MemberAvatarViewModel;
    /**
     * Face pile view-model for the participants on this call.
     */
    facePileViewModel: FacePileViewModel;
    /**
     * Whether this is an incoming or outgoing call.
     */
    callDirection: CallDirection;
    /**
     * Whether our user has joined this call.
     */
    isJoined: boolean;
    /**
     * Whether our user can join this call or not.
     */
    isJoinable: boolean;
    /**
     * Whether this call has participants other than who started the call.
     */
    callHasOtherParticipants: boolean;
}

declare interface DateSeparatorTimelineItem {
    key: string;
    kind: "date-separator";
    label: string;
}

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

/** Default event presentation used when no provider is present. */
export declare const DEFAULT_EVENT_PRESENTATION: EventPresentation;

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
    /**
     * User status message
     */
    userStatus?: {
        emoji: string;
        text: string;
    };
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

/**
 * View that renders the tile content for an ongoing call in a DM.
 */
export declare function DmOngoingCallTileView(props: Props_6): default_2.ReactNode;

export declare type DmOngoingCallTileViewModel = ViewModel<DmOngoingCallTileViewSnapshot> & CommonOngoingCallTileViewAction;

export declare interface DmOngoingCallTileViewSnapshot extends CommonOngoingCallTileViewSnapshot {
    callType: CallType;
}

/**
 * Renders the tombstone content for a tile in a DM.
 */
export declare function DmTombstoneCallTileView({ vm, className }: DmTombstoneCallTileViewProps): default_2.ReactNode;

export declare type DmTombstoneCallTileViewModel = ViewModel<DmTombstoneCallTileViewSnapshot>;

export declare interface DmTombstoneCallTileViewProps {
    vm: DmTombstoneCallTileViewModel;
    /**
     * Additional class names for this component.
     */
    className?: string;
}

export declare interface DmTombstoneCallTileViewSnapshot extends RoomTombstoneCallTileViewSnapshot {
    /**
     * What type of call this tile needs to render for.
     */
    type: CallType;
    /**
     * Whether this is an incoming or outgoing call.
     */
    callDirection: CallDirection;
    /**
     * Whether this call was declined.
     */
    isCallDeclined: boolean;
}

/**
 * View to show the duration of the call.
 */
export declare function DurationView(props: Props_5): default_2.ReactNode;

export declare type DurationViewModel = ViewModel<DurationViewSnapshot>;

export declare interface DurationViewSnapshot {
    /**
     * The number of seconds that this call has been ongoing for.
     */
    duration: number;
}

declare type DynamicElementProps<T extends keyof JSX.IntrinsicElements> = Partial<Omit<JSX.IntrinsicElements[T], "ref">>;

declare type DynamicHtmlElementProps<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T] extends HTMLAttributes<object> ? DynamicElementProps<T> : DynamicElementProps<"div">;

/**
 * Renders the end-to-end encryption icon used for messages whose keys were
 * shared by another room member.
 */
export declare function E2eMessageSharedIconView({ vm, className }: Readonly<E2eMessageSharedIconViewProps>): JSX.Element;

export declare type E2eMessageSharedIconViewModel = ViewModel<E2eMessageSharedIconViewSnapshot>;

declare interface E2eMessageSharedIconViewProps {
    /**
     * ViewModel providing the localized tooltip.
     */
    vm: E2eMessageSharedIconViewModel;
    /**
     * Optional CSS class name applied to the icon container.
     */
    className?: string;
}

export declare interface E2eMessageSharedIconViewSnapshot {
    /**
     * Display name for the user who shared keys for the message.
     */
    displayName: string;
    /**
     * User ID for the user who shared keys for the message.
     */
    userId: string;
}

/**
 * A small icon with tooltip, used in the left margin of an event tile to
 * indicate a problem with an encrypted event.
 *
 * The icon is rendered with `data-testid="e2e-padlock"`.
 */
export declare function E2ePadlock({ icon, title, className }: Readonly<E2ePadlockProps>): JSX.Element;

/**
 * The icon to display in an {@link E2ePadlock}.
 */
export declare enum E2ePadlockIcon {
    /** Compound Info icon in grey */
    Normal = "normal",
    /** Compound ErrorSolid icon in red */
    Warning = "warning",
    /** Compound ErrorSolid icon in grey */
    DecryptionFailure = "decryption_failure"
}

export declare interface E2ePadlockProps {
    /** The icon to display. */
    icon: E2ePadlockIcon;
    /** The tooltip for the icon, displayed on hover. */
    title: string;
    /** Optional CSS class name applied to the icon container. */
    className?: string;
}

/**
 * A searchable emoji picker with categories, quick reactions and keyboard
 * (roving grid) navigation.
 */
export declare function EmojiPicker({ selectedEmojis, onChoose, onFinished, isEmojiDisabled, recentEmojis, onRecordRecent, getAction, showQuickReactions, }: EmojiPickerProps): default_2.ReactNode;

/**
 * Props for {@link EmojiPicker}.
 */
export declare interface EmojiPickerProps {
    /**
     * Set of which emojis are already selected and should be decorated as such.
     * If specified, emoji will use a checkbox role with aria-checked set appropriately.
     */
    selectedEmojis?: Set<string>;
    /**
     * Called when the user chooses an emoji.
     *
     * Return `false` to prevent the emoji being recorded as recently used.
     */
    onChoose: (unicode: string) => boolean;
    /**
     * Called when the picker is done, e.g. an emoji was chosen with Enter.
     */
    onFinished: () => void;
    /**
     * Returns whether the emoji with the given unicode should be disabled.
     */
    isEmojiDisabled?: (unicode: string) => boolean;
    /**
     * Recently used emoji (unicode strings, most relevant first) to show in the
     * "Frequently Used" category. The category is hidden when empty or omitted.
     */
    recentEmojis?: string[];
    /**
     * Called with the chosen emoji unicode when it should be recorded as
     * recently used, i.e. when {@link onChoose} did not return `false`.
     */
    onRecordRecent?: (unicode: string) => void;
    /**
     * Optional action resolver used to map keyboard events to roving actions,
     * e.g. to apply app-level custom keybindings.
     *
     * When omitted, a default mapping based on `KeyboardEvent.key` is used.
     */
    getAction?: RovingTabIndexProviderProps["getAction"];
    /**
     * Whether to show the quick reactions at the bottom of the picker. Defaults to true.
     * Previews of emoji are displayed in the same bar as will also be hidden when this is false.
     */
    showQuickReactions?: boolean;
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
export declare const EventContentBodyView: default_2.MemoExoticComponent<({ vm, as, ref, }: Readonly<EventContentBodyViewProps>) => JSX.Element>;

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

/** Density variant applied within an event layout. */
export declare type EventDensity = "default" | "compact";

/** Event tile layout selected by the host surface. */
export declare type EventLayout = "group" | "bubble" | "irc";

/** Presentation settings that shared event/timeline components can adapt to. */
export declare interface EventPresentation {
    /** Layout family used for event rendering. */
    layout: EventLayout;
    /** Spacing density used within the layout. */
    density: EventDensity;
}

/** Provides event presentation settings to shared event/timeline components. */
export declare const EventPresentationProvider: Provider<EventPresentation>;

/**
 * Renders a compact preview of an event.
 */
export declare function EventPreviewView({ vm, className, ...props }: Readonly<EventPreviewViewProps>): JSX.Element;

export declare type EventPreviewViewModel = ViewModel<EventPreviewViewSnapshot>;

declare type EventPreviewViewProps = Omit<ComponentPropsWithoutRef<"span">, "children" | "title"> & {
    /**
     * The view model for the event preview.
     */
    vm: EventPreviewViewModel;
};

export declare interface EventPreviewViewSnapshot {
    /**
     * Controls whether the preview should render.
     */
    isVisible: boolean;
    /**
     * Rendered preview content.
     */
    previewContent?: ReactNode;
    /**
     * Optional styled tooltip text for the preview content.
     */
    previewTooltip?: string;
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

/** Timeline rendering modes supported by the EventTile shell. */
export declare type EventTileRenderingMode = "Room" | "Thread" | "ThreadsList" | "File" | "Notification" | "Search" | "Pinned";

/**
 * Renders the common EventTile root and event-line structure.
 *
 * Rendering-mode branches own the timeline-specific slot placement. The
 * application supplies render-ready content; this component owns the shared
 * structure, slot boundaries, placement classes, and root behavior.
 */
export declare function EventTileView({ root, slots, classNames: classNameOverrides, refs, onMouseEnter, onMouseLeave, onFocus, onBlur, onClick, onContextMenu, onPermalinkClick, onPermalinkContextMenu, }: Readonly<EventTileViewProps>): JSX.Element;

/** Optional application CSS class overrides for shell-owned structural elements and slot boundaries. */
export declare interface EventTileViewClassNames {
    root?: string;
    line?: string;
    details?: string;
    senderDetails?: string;
    senderDetailsLink?: string;
    slotActionBar?: string;
    slotAvatar?: string;
    slotBody?: string;
    slotContextMenu?: string;
    slotFooter?: string;
    slotNotificationRoomLabel?: string;
    slotNotificationBadge?: string;
    slotPadlock?: string;
    slotReceipt?: string;
    slotReplyChain?: string;
    slotSender?: string;
    slotThreadInfo?: string;
    slotTimestamp?: string;
}

/** DOM handlers supplied by the application integration layer. */
export declare interface EventTileViewHandlers {
    /** Root hover start. */
    onMouseEnter?: default_2.MouseEventHandler<HTMLElement>;
    /** Root hover end. */
    onMouseLeave?: default_2.MouseEventHandler<HTMLElement>;
    /** Root focus entry. */
    onFocus?: default_2.FocusEventHandler<HTMLElement>;
    /** Root focus exit. */
    onBlur?: default_2.FocusEventHandler<HTMLElement>;
    /** Event click. */
    onClick?: default_2.MouseEventHandler<HTMLElement>;
    /** Event context menu. */
    onContextMenu?: default_2.MouseEventHandler<HTMLElement>;
    /** Permalink click. */
    onPermalinkClick?: default_2.MouseEventHandler<HTMLAnchorElement>;
    /** Permalink context menu. */
    onPermalinkContextMenu?: default_2.MouseEventHandler<HTMLElement>;
}

/** Props for the shared EventTile shell. */
export declare interface EventTileViewProps extends EventTileViewHandlers {
    /** Pure root render state. */
    root: EventTileViewRoot;
    /** Optional application CSS class overrides for shell-owned elements. */
    classNames?: EventTileViewClassNames;
    /** Render-ready children supplied by the application layer. Each slot is rendered inside a named shell boundary. */
    slots: EventTileViewSlots;
    /** DOM refs supplied by the application layer. */
    refs?: EventTileViewRefs;
}

/** DOM refs supplied by the application integration layer. */
export declare interface EventTileViewRefs {
    /** Ref attached to the root element. */
    root?: default_2.Ref<HTMLElement>;
}

/** Complete root state consumed by EventTileView. */
export declare interface EventTileViewRoot {
    /** Stable unique id for the component instance. */
    id: string;
    /** Element used for the EventTile root. Defaults to `li`. */
    as?: default_2.ElementType;
    /** Optional aria-live value for the root element. */
    ariaLive?: "off";
    /** Stable event scroll token. */
    scrollToken?: string;
    /** Optional permalink used by sender details. */
    permalink?: string;
    /** Optional event identifier exposed through `data-event-id`. */
    eventId?: string;
    /** Configured tile layout. */
    layout: EventLayout;
    /** Timeline rendering mode. */
    shape: EventTileRenderingMode;
    /** Conditional state classes and styling state. */
    state: EventTileViewRootState;
}

/** Conditional state used to derive EventTile root classes. */
export declare interface EventTileViewRootState {
    /** Whether the event belongs to the current user. */
    isOwnEvent: boolean;
    /** Whether EventTile renders a reply chain. */
    hasReply: boolean;
    /** Whether the event is highlighted by search or navigation. */
    highlighted?: boolean;
    /** Whether the event is selected. */
    selected?: boolean;
    /** Whether the event is currently being edited. */
    editing?: boolean;
    /** Whether the event continues the previous event block. */
    continuation?: boolean;
    /** Whether this is the last event in a section. */
    lastInSection?: boolean;
}

/** Render-ready children supplied by the application integration layer. */
export declare interface EventTileViewSlots {
    /** Sender avatar for the current rendering mode. */
    avatar?: default_2.ReactNode;
    /** Sender profile/details. */
    sender?: default_2.ReactNode;
    /** Main event body. */
    body: default_2.ReactNode;
    /** Timestamp rendered by the shell according to the current layout. */
    timestamp?: default_2.ReactNode;
    /** Padlock rendered by the shell according to the current layout. */
    padlock?: default_2.ReactNode;
    /** Reply chain rendered above the event body. */
    replyChain?: default_2.ReactNode;
    /** Action bar rendered by the shell according to the current rendering mode. */
    actionBar?: default_2.ReactNode;
    /** Event footer rendered by the shell according to the current layout. */
    footer?: default_2.ReactNode;
    /** Thread information rendered by the shell according to the current layout. */
    threadInfo?: default_2.ReactNode;
    /** Read receipt or send-state indicator. */
    receipt?: default_2.ReactNode;
    /** Room avatar used by notification tiles. */
    roomAvatar?: default_2.ReactNode;
    /** Notification room-name label. */
    notificationRoomLabel?: default_2.ReactNode;
    /** Unread notification badge. */
    notificationBadge?: default_2.ReactNode;
    /** Context menu rendered inside the event line. */
    contextMenu?: default_2.ReactNode;
}

declare interface EventTimelineItem {
    key: string;
    kind: "event";
    /** Whether this event continues unbroken from the previous sender (suppresses avatar/name). */
    continuation: boolean;
    /**
     * Whether this event closes its continuation group (next event has a different
     * sender / a gap / a separator, or it is the last). Rounds the group's closing
     * corner — border-radius only, so it is recomputed every build, never cached.
     */
    lastInSection: boolean;
}

/**
 * View that renders a face pile view.
 */
export declare function FacePileView(props: FacePileViewProps): default_2.ReactNode;

export declare type FacePileViewModel = ViewModel<FacePileViewSnapshot>;

export declare interface FacePileViewProps {
    vm: FacePileViewModel;
    /**
     * Additional class names for this component.
     */
    classNames?: string;
}

export declare interface FacePileViewSnapshot {
    /**
     * The sub vms for the member avatars.
     */
    memberAvatarViewModels: MemberAvatarViewModel[];
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
    scanningState?: "scanning" | "unsafe" | "error" | "done";
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
 * Finds the next visible sibling element starting from a given index.
 *
 * @param nodes - Registered roving nodes in DOM order.
 * @param startIndex - The index to begin searching from.
 * @param loop - Whether to wrap around when no visible sibling is found.
 * @returns The next visible sibling element, if one exists.
 */
export declare const findNextSiblingElement: (nodes: HTMLElement[], startIndex: number, loop?: boolean) => HTMLElement | undefined;

/**
 * Finds the previous visible sibling element starting from a given index.
 *
 * @param nodes - Registered roving nodes in DOM order.
 * @param startIndex - The index to begin searching from.
 * @param loop - Whether to wrap around when no visible sibling is found.
 * @returns The previous visible sibling element, if one exists.
 */
export declare const findPreviousSiblingElement: (nodes: HTMLElement[], startIndex: number, loop?: boolean) => HTMLElement | undefined;

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
     * Optional ref to the underlying Virtuoso handle, for imperative scrolling.
     */
    scrollHandleRef?: default_2.RefCallback<VirtuosoHandle>;
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
export declare function formatSeconds(inSeconds: number, opts?: {
    hoursMaxLength?: number;
    minutesMaxLength?: number;
}): string;

export declare const FORWARD_LOADING_KEY = "forward-loading";

declare interface GapTimelineItem {
    key: string;
    kind: "gap";
}

/**
 * Generates a linkifyjs options object that is reasonably paired down
 * to just the essentials required for an Element client.
 *
 * @returns A `linkifyjs` `Opts` object. Used by `linkifyString` and `linkifyHtml
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

export declare interface GroupedVirtualizedListProps<Header, Item, Context> extends Omit<VirtualizedListProps<Item, Context>, "items" | "isItemFocusable" | "getItemKey" | "itemsRendered" | "onScroll" | "scrollPaddingTop"> {
    /**
     * Optional ref to the underlying Virtuoso handle, for imperative scrolling.
     */
    scrollHandleRef?: default_2.RefCallback<VirtuosoHandle>;
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
    /**
     * Optional renderer for a "pinned" header that stays fixed at the top of the scroll
     * viewport, reflecting the group the user is currently scrolled within.
     *
     * List rows — including real group headers — are virtualized and unmount once scrolled out
     * of the render window, so a CSS `position: sticky` header would disappear partway through a
     * tall group. This header is rendered OUTSIDE the virtualized stream, so it never unmounts.
     *
     * The real header rows remain the focusable, accessible elements driving keyboard navigation
     * and screen-reader output; this overlay must therefore be purely presentational and is
     * hidden from assistive technology by the caller.
     *
     * @param groupIndex - The index of the group currently pinned at the top
     * @param header - The header data for that group
     * @param context - The list context, including any additional context data
     * @returns The presentational pinned header, or `null`/`undefined` to render nothing
     */
    renderStickyHeader?: (groupIndex: number, header: Header, context: VirtualizedListContext<Context>) => ReactNode;
}

/**
 * This the root component for collapsible left panel. Based on {@link Group} from react-resizable-panels.
 */
export declare function GroupView({ vm, children }: PropsWithChildren<Props_9>): default_2.ReactNode;

export declare interface GroupViewActions {
    /**
     * Indicates to the view-model that the left panel was resized.
     * @param newSize The new size of the left panel
     */
    onLeftPanelResized: (newSize: number) => void;
}

/**
 * Renders a message-body placeholder for messages hidden pending moderation.
 */
export declare function HiddenBodyView({ vm, className, ref }: Readonly<HiddenBodyViewProps>): JSX.Element;

export declare type HiddenBodyViewModel = ViewModel<HiddenBodyViewSnapshot>;

declare interface HiddenBodyViewProps {
    /**
     * ViewModel providing the hidden message details.
     */
    vm: HiddenBodyViewModel;
    /**
     * Optional CSS class name applied to the root span.
     */
    className?: string;
    /**
     * Optional ref forwarded to the root span.
     */
    ref?: Ref<HTMLSpanElement>;
}

export declare interface HiddenBodyViewSnapshot {
    /**
     * Optional moderation reason supplied by the homeserver.
     */
    reason?: string;
}

/**
 * Renders a full-frame button used to reveal hidden media previews.
 */
export declare function HiddenMediaPlaceholder({ className, onClick, children, }: Readonly<HiddenMediaPlaceholderProps>): JSX.Element;

export declare type HiddenMediaPlaceholderProps = PropsWithChildren<{
    /**
     * CSS class names applied to the root button.
     */
    className?: string;
    /**
     * Invoked when the user chooses to reveal the hidden media.
     */
    onClick: MouseEventHandler<HTMLButtonElement>;
}>;

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
    translate(this: void, key: TranslationKey, variables?: StringVariables_2): string;
    translate(this: void, key: TranslationKey, variables: Variables | undefined, tags: Tags_2): React.ReactNode;
    humanizeTime: (timeMillis: number) => string;
}

export declare const I18nContext: Context<I18nApi_2 | null>;

/**
 * An action dispatched to the roving tabindex reducer for node registration and
 * focus updates.
 */
export declare interface IAction {
    /**
     * The reducer action kind.
     */
    type: Exclude<RovingStateActionType, RovingStateActionType.Update>;
    /**
     * Action payload carrying the target node.
     */
    payload: {
        /**
         * The DOM node affected by the action.
         */
        node: HTMLElement;
    };
}

/**
 * The value exposed by {@link RovingTabIndexContext}.
 */
export declare interface IContext {
    state: IState;
    dispatch: Dispatch<IAction>;
}

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
export declare function ImageBodyView({ vm, className, containerClassName, imageClassName, imageRef, children, }: Readonly<ImageBodyViewProps>): JSX.Element;

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
     * Optional CSS class applied to the media frame container.
     */
    containerClassName?: string;
    /**
     * Optional CSS class applied to the rendered image element.
     */
    imageClassName?: string;
    /**
     * Optional ref to the rendered image element.
     */
    imageRef?: Ref<HTMLImageElement>;
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
 * Presentational wrapper for the compact image preview used inside reply tiles.
 */
export declare function ImageReplyBodyView({ className, imageRef, src, thumbnailSrc, alt, maxWidth, maxHeight, aspectRatio, isSvg, placeholder, blurhash, showAnimatedContentOnHover, showImage, gifLabel, bannerLabel, onImageLoad, onImageError, }: Readonly<ImageReplyBodyViewProps>): JSX.Element;

export declare const enum ImageReplyBodyViewPlaceholder {
    NONE = "NONE",
    SPINNER = "SPINNER",
    BLURHASH = "BLURHASH"
}

export declare interface ImageReplyBodyViewProps {
    /**
     * CSS class names applied to the root element.
     */
    className?: string;
    /**
     * Ref to the rendered image element.
     */
    imageRef?: Ref<HTMLImageElement>;
    /**
     * Full-resolution image source.
     */
    src?: string;
    /**
     * Thumbnail/static preview image source.
     */
    thumbnailSrc?: string;
    /**
     * Image alt text.
     */
    alt?: string;
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
     * Which placeholder to render over the image frame.
     */
    placeholder?: ImageReplyBodyViewPlaceholder;
    /**
     * Blurhash string used when `placeholder` is `BLURHASH`.
     */
    blurhash?: string;
    /**
     * Whether hovering the preview should swap to the full-resolution image.
     */
    showAnimatedContentOnHover?: boolean;
    /**
     * Whether the image element should be rendered inside the reserved media frame.
     */
    showImage?: boolean;
    /**
     * Optional badge shown for animated images when not hovered.
     */
    gifLabel?: string;
    /**
     * Optional overlay banner shown while hovered.
     */
    bannerLabel?: string;
    /**
     * Invoked when the rendered image loads.
     */
    onImageLoad?: ReactEventHandler<HTMLImageElement>;
    /**
     * Invoked when the rendered image fails to load.
     */
    onImageError?: ReactEventHandler<HTMLImageElement>;
}

/**
 * Imperative scroll-to-anchor handle the View hands to ViewModel actions, to scroll
 * without waiting for a data update. The VM invokes it only when the target is already
 * in the loaded window; otherwise it sets `pendingAnchor` and lets a load() drive the
 * scroll. Must be called synchronously inside the action — the View's closure captures
 * the current items snapshot to resolve the target.
 */
export declare type ImmediateScroll = (anchor: NavigationAnchor) => void;

declare interface IProps {
    inputRef?: RefObject<HTMLElement | null>;
    children(this: void, renderProps: {
        onFocus: () => void;
        isActive: boolean;
        ref: RefCallback<HTMLElement>;
    }): ReactElement;
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

/**
 * The current state of a roving tabindex group.
 */
export declare interface IState {
    /**
     * The element that currently owns the active tab stop.
     */
    activeNode?: HTMLElement;
    /**
     * Registered elements in DOM order.
     */
    nodes: HTMLElement[];
}

/** ARIA props for a virtualized list item, either in a `listbox` or `treegrid`. */
export declare type ItemAccessibleProps = ListboxItemProps | TreegridItemProps;

export declare type IVariables = StringVariables | RichVariables;

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
export declare function LeftResizablePanelView({ vm, className, children, ...props }: PropsWithChildren<Props_11>): default_2.ReactNode;

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

declare interface LoadingTimelineItem {
    key: string;
    kind: "loading";
}

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
 * View for rendering the avatar for a given member.
 */
export declare function MemberAvatarView(props: MemberAvatarViewProps): default_2.ReactNode;

export declare type MemberAvatarViewModel = ViewModel<MemberAvatarViewSnapshot>;

declare interface MemberAvatarViewProps {
    vm: MemberAvatarViewModel;
    /**
     * Additional class names for this component.
     */
    classNames?: string;
}

export declare interface MemberAvatarViewSnapshot {
    /**
     * The display name of this member.
     */
    name: string;
    /**
     * The mxid of this member.
     */
    id: string;
    /**
     * The avatar url.
     */
    url?: string;
    /**
     * Size of the avatar.
     */
    size: string;
    /**
     * Title passed to the avatar container (button or span).
     */
    title?: string;
}

/** Props for MessageComposerUrlPreviewView. */
export declare interface MessageComposerUrlPreviewProps {
    /**
     * The view model for the component.
     */
    vm: ViewModel<MessageComposerUrlPreviewSnapshot>;
    /**
     * Extra CSS classes to apply to the component.
     */
    className?: string;
}

/** Snapshot data for rendering a URL preview attached to the composer. */
export declare interface MessageComposerUrlPreviewSnapshot {
    /** URL preview to render. */
    previews: UrlPreview[];
    /** Content of the composer when the snapshot is computed */
    content: string;
}

/**
 * MessageComposerUrlPreviewView renders a preview of all previewable URLs above the messasge composer.
 */
export declare function MessageComposerUrlPreviewView({ vm, className }: MessageComposerUrlPreviewProps): JSX.Element | null;

/**
 * Displays a message timestamp with optional tooltip details.
 *
 * The view model provides the timestamp values and display options. The component
 * can render as a link when `href` is set, and can show both sent-at and received-at
 * times in the tooltip when `tsReceivedAt` is provided. Use `className` for
 * host-level layout and placement styling.
 *
 * @example
 * ```tsx
 * <MessageTimestampView vm={messageTimestampViewModel} />
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
 * host layout and placement styling is supplied via component props.
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
 * Renders a timeline bubble describing a Jitsi widget state event.
 */
export declare function MJitsiWidgetEventView({ vm, className, ref, }: Readonly<MJitsiWidgetEventViewProps>): JSX.Element | null;

export declare type MJitsiWidgetEventViewModel = ViewModel<MJitsiWidgetEventViewSnapshot>;

export declare interface MJitsiWidgetEventViewProps {
    /**
     * ViewModel providing the current Jitsi widget event snapshot.
     */
    vm: MJitsiWidgetEventViewModel;
    /**
     * Optional CSS classes passed through to EventTileBubble.
     */
    className?: string;
    /**
     * Optional Ref forwarded to the root DOM element.
     */
    ref?: default_2.RefObject<HTMLDivElement>;
}

export declare interface MJitsiWidgetEventViewSnapshot {
    /**
     * Whether the event has enough context to render.
     */
    isVisible: boolean;
    /**
     * Main title text for the Jitsi widget event.
     */
    title: string;
    /**
     * Optional join prompt shown below the title.
     */
    subtitle: string | null;
    /**
     * Optional timestamp element rendered in the EventTileBubble footer slot.
     */
    timestamp?: JSX.Element;
}

/**
 * Renders the placeholder shown when a message is hidden because its sender is ignored.
 */
export declare function MjolnirBodyView({ vm, className, ref }: Readonly<MjolnirBodyViewProps>): JSX.Element;

export declare interface MjolnirBodyViewActions {
    /**
     * Invoked when the user chooses to show the hidden message.
     */
    onAllow: () => void;
}

export declare type MjolnirBodyViewModel = ViewModel<MjolnirBodyViewSnapshot, MjolnirBodyViewActions>;

declare interface MjolnirBodyViewProps {
    /**
     * ViewModel providing the action handler.
     */
    vm: MjolnirBodyViewModel;
    /**
     * Optional CSS class names applied to the root element.
     */
    className?: string;
    /**
     * Optional ref forwarded to the root element.
     */
    ref?: Ref<HTMLDivElement>;
}

export declare type MjolnirBodyViewSnapshot = Record<never, never>;

/**
 * Renders a timeline bubble describing a key verification request message.
 */
export declare function MKeyVerificationRequestView({ vm, className, ref, }: Readonly<MKeyVerificationRequestViewProps>): JSX.Element;

export declare type MKeyVerificationRequestViewModel = ViewModel<MKeyVerificationRequestViewSnapshot>;

export declare interface MKeyVerificationRequestViewProps {
    /**
     * ViewModel providing the current verification request snapshot.
     */
    vm: MKeyVerificationRequestViewModel;
    /**
     * Optional CSS classes passed through to EventTileBubble.
     */
    className?: string;
    /**
     * Optional Ref forwarded to the root DOM element.
     */
    ref?: default_2.RefObject<HTMLDivElement>;
}

export declare interface MKeyVerificationRequestViewSnapshot {
    /**
     * Main title text for the verification request.
     */
    title: string;
    /**
     * Label for the other user involved in the request.
     */
    subtitle: string;
    /**
     * Optional timestamp element rendered in the EventTileBubble footer slot.
     */
    timestamp?: JSX.Element;
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

export declare interface NavigationAnchor {
    /** The `TimelineItem.key` to scroll to. */
    targetKey: string;
    /** Where in the viewport to place the target. */
    align: AnchorAlign;
}

export { normalizeLanguageKey }

export declare type NotificationBadgeType = "dot" | "badge_2char" | "badge_3char";

export declare function NotificationBadgeView({ vm, className }: Readonly<NotificationBadgeViewProps>): JSX.Element;

export declare interface NotificationBadgeViewActions {
    /**
     * Called when an interactive badge is activated.
     */
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export declare type NotificationBadgeViewModel = ViewModel<NotificationBadgeViewSnapshot> & NotificationBadgeViewActions;

declare interface NotificationBadgeViewProps {
    vm: NotificationBadgeViewModel;
    className?: string;
}

export declare interface NotificationBadgeViewSnapshot {
    /**
     * Controls whether the badge root should render.
     */
    shouldRender: boolean;
    /**
     * Controls whether the badge receives the visible styling class.
     */
    isVisible: boolean;
    /**
     * Marks the badge as a regular notification.
     */
    isNotification: boolean;
    /**
     * Marks the badge as a highlight notification.
     */
    isHighlight: boolean;
    /**
     * Marks the badge as representing a knock request.
     */
    isKnocked: boolean;
    /**
     * Controls the visual badge shape.
     */
    badgeType: NotificationBadgeType;
    /**
     * Display text for non-knock badges.
     */
    symbol: string | null;
    /**
     * Whether to render the badge as an interactive control.
     */
    isClickable: boolean;
    /**
     * Accessible label for clickable badges.
     */
    ariaLabel?: string;
    /**
     * Tab index for clickable badges.
     */
    tabIndex?: number;
    /**
     * Whether to show the unsent-message tooltip.
     */
    showUnsentTooltip: boolean;
}

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
export declare function PlayPauseButton({ disabled, playing, togglePlay, className, ...rest }: Readonly<PlayPauseButtonProps>): JSX.Element;

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
    /**
     * The number of positions to pad the minutes part.
     *
     * @example
     * If minutesMaxLength = 1, the clock will show 5:31 instead of 05:31.
     */
    minutesMaxLength?: number;
    /**
     * The number of positions to pad the hour part.
     *
     * @example
     * If hoursMaxLength = 1, the clock will show 1:05:31 instead of 01:05:31.
     */
    hoursMaxLength?: number;
}

declare interface Props_10 {
    vm: ViewModel<ResizerViewSnapshot, SeparatorViewActions>;
    className?: string;
}

declare type Props_11 = {
    vm: ViewModel<ResizerViewSnapshot, LeftResizablePanelViewActions>;
    className?: string;
} & Pick<PanelProps, "minSize" | "maxSize" | "defaultSize">;

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
    vm: RoomCallStartedTileViewModel;
}

declare interface Props_5 {
    vm: DurationViewModel;
    /**
     * Additional class names for this component.
     */
    classNames?: string;
}

declare interface Props_6 {
    vm: DmOngoingCallTileViewModel;
}

declare interface Props_7 {
    vm: RootCallTileViewModel;
}

declare interface Props_8 {
    /** The view model for the tile error fallback. */
    vm: ViewModel<TextualEventViewSnapshot>;
    /** Optional host-level class names. */
    className?: string;
}

declare interface Props_9 {
    vm: ViewModel<unknown, GroupViewActions>;
}

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

declare interface ReadMarkerTimelineItem {
    key: string;
    kind: "read-marker";
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

declare type RemoveCallback = () => void;

/**
 * Replace parts of a text using regular expressions
 * @param text - The text on which to perform substitutions
 * @param mapping - A mapping from regular expressions in string form to replacement string or a
 * function which will receive as the argument the capture groups defined in the regexp. E.g.
 * { 'Hello (.?) World': (sub) => sub.toUpperCase() }
 *
 * @returns a React <span> component if any non-strings were used in substitutions, otherwise a string
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
export declare const RichItem: default_2.MemoExoticComponent<({ avatar, title, description, timestamp, selected, ...props }: RichItemProps) => JSX.Element>;

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

export declare interface RichVariables {
    count?: number;
    [key: string]: SubstitutionValue;
}

/**
 * Opaque type representing a Room object from the parent application
 */
export declare type Room = unknown;

/**
 * Renders a room avatar state event.
 */
export declare function RoomAvatarEventView({ vm, renderAvatar, className, ref, }: Readonly<RoomAvatarEventViewProps>): JSX.Element;

export declare interface RoomAvatarEventViewActions {
    /**
     * Invoked when the user opens the avatar image.
     */
    onAvatarClick(this: void): void;
}

export declare type RoomAvatarEventViewModel = ViewModel<RoomAvatarEventViewSnapshot, RoomAvatarEventViewActions>;

export declare interface RoomAvatarEventViewProps {
    /**
     * ViewModel providing room avatar event state and actions.
     */
    vm: RoomAvatarEventViewModel;
    /**
     * Renders the avatar thumbnail using the host application's avatar implementation.
     */
    renderAvatar(snapshot: RoomAvatarEventViewSnapshot): ReactNode;
    /**
     * Optional CSS class names applied to the root element.
     */
    className?: string;
    /**
     * Optional ref forwarded to the root element.
     */
    ref?: Ref<HTMLElement>;
}

export declare interface RoomAvatarEventViewSnapshot {
    /**
     * Display name for the event sender.
     */
    senderDisplayName: string;
    /**
     * Room name at the time the avatar event is rendered.
     */
    roomName: string;
    /**
     * MXC URL from the avatar event content.
     */
    avatarUrl?: string;
    /**
     * Accessible label for opening the avatar preview.
     */
    lightboxLabel: string;
    /**
     * Whether this event removed the room avatar.
     */
    isRemoved: boolean;
}

export declare type RoomCallStartedTileViewModel = ViewModel<RoomOngoingCallTileViewSnapshot> & CommonOngoingCallTileViewAction;

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
    /**
     * Collapse or expand all sections in the room list depending on the current state.
     */
    collapseOrExpandSections: () => void;
    /**
     * Close the section release announcement
     */
    closeSectionReleaseAnnouncement: () => void;
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
     * Whether sections are enabled in the room list.
     */
    areSectionsEnabled: boolean;
    /**
     * If "collapse", an icon to collapse all sections is shown.
     * If "expand", an icon to expand all sections is shown.
     * If undefined, no  icon are shown.
     */
    collapseSections?: CollapseSectionsOption;
    /**
     *  Whether to display the section release announcement
     */
    displaySectionReleaseAnnouncement: boolean;
}

/**
 * The inner content of a room list item: avatar, room name, message preview,
 * hover menu and notification decoration. Used both inside the full
 * {@link RoomListItemView} and inside the drag overlay.
 */
export declare const RoomListItemContent: default_2.MemoExoticComponent<({ vm, renderAvatar, isDragging, }: RoomListItemContentProps) => JSX.Element>;

/**
 * Props for {@link RoomListItemContent}.
 */
export declare interface RoomListItemContentProps {
    /** The room item view model */
    vm: RoomListItemViewModel;
    /** Function to render the room avatar */
    renderAvatar: (room: Room) => ReactNode;
    /** Whether the item is being dragged */
    isDragging?: boolean;
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
 * Visual clone of a room list item rendered inside the dnd drag overlay.
 *
 * Reuses {@link RoomListItemContent} for the inner layout and adds the outer
 * wrapper styles that the live list item normally provides (height, width,
 * typography), so the floating clone matches a real item.
 */
export declare const RoomListItemDragOverlayView: default_2.MemoExoticComponent<({ vm, renderAvatar, }: RoomListItemDragOverlayViewProps) => JSX.Element>;

/**
 * Props for {@link RoomListItemDragOverlayView}.
 */
export declare interface RoomListItemDragOverlayViewProps {
    /** The room item view model — same one used by the real list item */
    vm: RoomListItemViewModel;
    /** Function to render the room avatar */
    renderAvatar: (room: Room) => ReactNode;
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
export declare const RoomListItemView: default_2.MemoExoticComponent<({ vm, isSelected, isFocused, onFocus, isFirstItem, isLastItem, renderAvatar, isDragSource, ref, ...props }: RoomListItemViewProps) => JSX.Element>;

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
    /** Called when toggling a room's membership in a section */
    onToggleSection: (tag: string) => void;
    /** Called when removing the room from a section */
    onRemoveFromSection: () => void;
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
    /** Whether this item is the source of an active drag operation */
    isDragSource?: boolean;
    ref?: Ref<Element>;
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
    /** The MSC4426 user status of the other user in a DM room, if any */
    userStatus?: UserStatus;
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
    /** Available sections the room can be assigned to */
    sections: Section[];
    /** Whether sections are enabled in the room list */
    areSectionsEnabled: boolean;
}

/**
 * Wraps RoomListItemView with the correct accessibility and drag-and-drop props
 * based on whether the list is flat (listbox) or grouped (treegrid).
 */
export declare const RoomListItemWrapper: default_2.MemoExoticComponent<({ roomIndex, roomCount, roomIndexInSection, isInFlatList, ...rest }: RoomListItemWrapperProps) => JSX.Element>;

declare interface RoomListItemWrapperProps extends RoomListItemViewProps {
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
 * Loading skeleton component for the room list.
 * Displays a repeating skeleton pattern while rooms are being fetched.
 */
export declare const RoomListLoadingSkeleton: default_2.FC;

/**
 * The primary filters component for the room list.
 * Displays a collapsible list of filters with expand/collapse functionality.
 */
export declare const RoomListPrimaryFilters: default_2.MemoExoticComponent<({ filterIds, activeFilterId, onToggleFilter, }: RoomListPrimaryFiltersProps) => JSX.Element | null>;

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
    /** Handler invoked when the section header is clicked or keyboard-toggled (toggles expand/collapse). */
    onClick: () => void;
    /** Handler invoked when the edit section button is clicked  */
    editSection: () => void;
    /** Handler invoked when the remove section button is clicked  */
    removeSection: () => void;
}

/**
 * The inner content of a section header: chevron, title, and menu (or static menu icon when dragging).
 * Used both inside the full {@link RoomListSectionHeaderView} and inside the drag overlay.
 */
export declare const RoomListSectionHeaderContent: default_2.MemoExoticComponent<({ vm, isDragging, }: RoomListSectionHeaderContentProps) => JSX.Element>;

/**
 * Props for {@link RoomListSectionHeaderContent}.
 */
export declare interface RoomListSectionHeaderContentProps {
    /** The section header view model */
    vm: RoomListSectionHeaderViewModel;
    /** Whether the section header is being dragged — hides the interactive menu when true */
    isDragging?: boolean;
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
export declare const RoomListSectionHeaderView: default_2.MemoExoticComponent<({ vm, isFocused, onFocus, indexInList, sectionIndex, sectionCount, roomCountInSection, }: Readonly<RoomListSectionHeaderViewProps>) => JSX.Element>;

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
    /** The merged notification decoration aggregating the notifications of the rooms in the section */
    notification?: NotificationDecorationData;
    /** Wether to display the section menu  */
    displaySectionMenu: boolean;
    /** Whether the section can be reordered via drag-and-drop  */
    canBeReordered: boolean;
}

/**
 * A clone of {@link RoomListSectionHeaderView} used as the pinned "current section" overlay at the
 * top of the virtualized room list.
 *
 * It is mouse-interactive — clicking toggles the section and hovering highlights it — but it is
 * hidden from assistive technology (`aria-hidden`) and removed from the tab order (`tabIndex={-1}`).
 * The real header rows inside the list remain the focusable, keyboard-navigable, screen-reader
 * elements, so the overlay is a mouse convenience that never duplicates anything for AT. It reuses
 * {@link RoomListSectionHeaderContent} so the chevron, title, notification decoration and section
 * menu stay identical to the real header; it only omits the real header's drag-and-drop wiring.
 */
export declare const RoomListStickySectionHeaderView: default_2.MemoExoticComponent<({ vm, isFirst, }: Readonly<RoomListStickySectionHeaderViewProps>) => JSX.Element>;

/**
 * Props for {@link RoomListStickySectionHeaderView}.
 */
export declare interface RoomListStickySectionHeaderViewProps {
    /** The view model for the section currently pinned at the top of the list. */
    vm: RoomListSectionHeaderViewModel;
    /** Whether this is the first section, so it can sit flush with the top edge like the real header. */
    isFirst: boolean;
}

/**
 * A toast component used for displaying messages in the room list view.
 *
 * The room list shows at most one toast at a time; which one (and the precedence between
 * transient event toasts and the persistent unread-activity toast) is decided by the view
 * model, so the view simply renders whichever {@link ToastType} it is given:
 *
 * - "section_created" / "chat_moved": transient event notifications with a close button.
 * - "unread_activity": a persistent, clickable toast that jumps to the next unread room
 *   below the visible area of the list.
 *
 * @example
 * ```tsx
 *   <RoomListToast type="section_created" onClose={onCloseHandler} onClick={onClickHandler} />
 * ```
 */
export declare function RoomListToast({ type, onClose, onClick }: Readonly<RoomListToastProps>): JSX.Element;

declare interface RoomListToastProps {
    /** The type of toast to display */
    type: ToastType;
    /** Callback when the close button is clicked (event toasts: "section_created", "chat_moved") */
    onClose: MouseEventHandler<HTMLButtonElement>;
    /** Callback when the toast itself is clicked ("unread_activity") */
    onClick: MouseEventHandler<HTMLButtonElement>;
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
    /**
     * Called when the rendered range changes (virtualization API). Indices are in room-index
     * space (section header entries excluded): startIndex is inclusive, endIndex exclusive.
     */
    updateVisibleRooms: (startIndex: number, endIndex: number) => void;
    /**
     * Called when the last genuinely-visible item index changes (excluding the rendered
     * overscan buffer), used to decide whether unread activity is below the fold.
     */
    updateVisibleFold: (visibleEndIndex: number) => void;
    /** Get view model for a specific section header (virtualization API) */
    getSectionHeaderViewModel: (sectionId: string) => RoomListSectionHeaderViewModel;
    /** Called to close the toast message */
    closeToast: () => void;
    /** Called to scroll the next unread room below the visible area of the list into view */
    scrollToUnreadActivity: () => void;
    /**
     * Registers (or, with `undefined`, clears) the imperative scroll handler the view model
     * uses to scroll a virtualized item index into view. The view owns the scroll handle, so
     * it provides this on mount; the view model calls it in response to user actions such as
     * clicking the "unread activity" toast.
     */
    setScrollToIndex: (scrollToIndex: ((index: number) => void) | undefined) => void;
    /** Called to change the section of a room */
    changeRoomSection: (roomId: string, tag: string) => void;
    /** Called to change the order of sections */
    changeSectionOrder: (sourceTag: string, targetTag: string) => void;
    /** Called when a section drag starts — collapses all sections */
    onSectionDragStart: () => void;
    /** Called when a section drag ends (drop or cancel) — restores expansion states */
    onSectionDragEnd: () => void;
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
    /**
     * The single toast to display (if any). The view model owns which toast wins when more
     * than one applies (e.g. a transient "chat_moved" event toast takes precedence over the
     * persistent "unread_activity" toast), so the view just renders whatever it is given.
     */
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
    /** Tag of a newly created section header to scroll into view */
    scrollToSectionTag?: string;
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

/**
 * View that renders the tile content for an ongoing call in a room.
 */
export declare function RoomOngoingCallTileView(props: Props_4): default_2.ReactNode;

export declare interface RoomOngoingCallTileViewSnapshot extends CommonOngoingCallTileViewSnapshot {
    /**
     * The total number of participants in this call.
     */
    totalParticipants: number;
    /**
     * Whether the user ignored this call.
     */
    isCallIgnored?: boolean;
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
 * Renders the tombstone content for a call in a room.
 */
export declare function RoomTombstoneCallTileView({ vm, className }: CallStartedTileViewProps): default_2.ReactNode;

export declare type RoomTombstoneCallTileViewModel = ViewModel<RoomTombstoneCallTileViewSnapshot>;

export declare type RoomTombstoneCallTileViewSnapshot = {
    /**
     * Time when this call was started.
     */
    timestamp: string;
};

/**
 * Root view for a call tile in the timeline.
 */
export declare function RootCallTileView({ vm }: Props_7): default_2.ReactNode;

export declare type RootCallTileViewModel = ViewModel<RootCallTileViewSnapshot>;

export declare interface RootCallTileViewSnapshot<Type extends keyof TileTypeToViewModelMap = keyof TileTypeToViewModelMap> {
    tileType: Type;
    tileViewModel: TileTypeToViewModelMap[Type];
}

/**
 * Normalized navigation intents understood by the shared roving provider.
 */
export declare enum RovingAction {
    Home = "HOME",
    End = "END",
    ArrowLeft = "ARROW_LEFT",
    ArrowUp = "ARROW_UP",
    ArrowRight = "ARROW_RIGHT",
    ArrowDown = "ARROW_DOWN",
    Tab = "TAB"
}

/**
 * Resolves the grid cell element that contains a registered roving node.
 *
 * The default expects the roving node to be a direct child of a `role="gridcell"`
 * element.
 */
export declare type RovingGridCellResolver = (this: void, rovingNode: Element) => Element | undefined;

/**
 * Provides two-dimensional arrow-key navigation for roving tabindex grids.
 *
 * `RovingGridIndexProvider` reuses the same registration state as
 * {@link RovingTabIndexProvider}. Descendants should still call
 * {@link useRovingTabIndex}; this provider only changes how arrow keys resolve
 * the next active node.
 *
 * By default, the provider expects each registered roving node to be rendered as
 * the first child of a `role="gridcell"` element, and each grid cell to be a
 * direct child of a row element. Override `getGridCell`, `getRow`, and
 * `getRovingNode` for different markup.
 */
export declare const RovingGridIndexProvider: default_2.FC<RovingGridIndexProviderProps>;

/**
 * Props for {@link RovingGridIndexProvider}.
 */
export declare interface RovingGridIndexProviderProps extends Omit<RovingTabIndexProviderProps, "handleUpDown" | "handleLeftRight" | "onKeyDown"> {
    /**
     * Optional callback invoked before grid handling and before the wrapped
     * roving provider performs its own keyboard handling.
     *
     * Call `preventDefault()` on the event to suppress grid and fallback
     * roving behaviour.
     */
    onKeyDown?(this: void, ev: KeyboardEvent_2, state: IState, dispatch: Dispatch<IAction>): void;
    /**
     * Whether arrow-key grid navigation should move DOM focus.
     *
     * Defaults to `true`. When `false`, the provider still updates the active
     * roving node and tab stop.
     */
    moveFocus?: RovingGridMoveFocus;
    /**
     * Called after grid navigation resolves a target and updates roving state.
     */
    onGridNavigation?(this: void, event: KeyboardEvent_2, target: HTMLElement, state: IState, dispatch: Dispatch<IAction>): void;
    /**
     * Resolves the grid cell element for a registered roving node.
     *
     * Override this when the roving node is not a direct child of the grid cell.
     */
    getGridCell?: RovingGridCellResolver;
    /**
     * Resolves the row element for a registered roving node.
     *
     * Override this when grid rows are not direct parents of grid cells.
     */
    getRow?: RovingGridRowResolver;
    /**
     * Resolves the registered roving node inside a grid cell.
     *
     * Override this when the focusable element is not the grid cell's first
     * child.
     */
    getRovingNode?: RovingGridNodeResolver;
}

/**
 * Controls whether grid navigation moves DOM focus to the active cell.
 *
 * Pass `false` for composite widgets that keep DOM focus elsewhere and expose
 * the active grid item through `aria-activedescendant`.
 */
export declare type RovingGridMoveFocus = boolean | ((this: void, target: HTMLElement, event: KeyboardEvent_2, state: IState) => boolean);

/**
 * Resolves the registered roving node contained within a grid cell.
 *
 * The default expects the roving node to be the first child of the grid cell.
 */
export declare type RovingGridNodeResolver = (this: void, gridCell: Element) => HTMLElement | undefined;

/**
 * Resolves the row element that contains a registered roving node.
 *
 * The default expects `rovingNode -> gridcell -> row`, where the row element is
 * the grid cell's parent.
 */
export declare type RovingGridRowResolver = (this: void, rovingNode: Element) => Element | undefined;

/**
 * Internal reducer action kinds used by the roving tabindex state machine.
 */
export declare enum RovingStateActionType {
    Register = "REGISTER",
    Unregister = "UNREGISTER",
    SetFocus = "SET_FOCUS",
    Update = "UPDATE"
}

/**
 * React context used by roving tabindex participants to register themselves and
 * update the active item.
 */
export declare const RovingTabIndexContext: default_2.Context<IContext>;

/**
 * Provides shared roving tabindex state and keyboard handling for a group of
 * focusable descendants.
 */
export declare const RovingTabIndexProvider: default_2.FC<RovingTabIndexProviderProps>;

/**
 * Props for {@link RovingTabIndexProvider}.
 */
export declare interface RovingTabIndexProviderProps {
    /**
     * Whether directional navigation should wrap from the last item to the first
     * and vice versa.
     */
    handleLoop?: boolean;
    /**
     * Whether `Home` and `End` should move focus to the first and last item.
     */
    handleHomeEnd?: boolean;
    /**
     * Whether vertical arrow keys should move focus within the group.
     */
    handleUpDown?: boolean;
    /**
     * Whether horizontal arrow keys should move focus within the group.
     */
    handleLeftRight?: boolean;
    /**
     * Whether text inputs and similar controls should participate in roving
     * keyboard handling instead of keeping their native arrow-key behaviour.
     */
    handleInputFields?: boolean;
    /**
     * Whether newly focused items should be scrolled into view.
     *
     * Pass `true` to use the browser default, or a scroll options object to
     * control alignment and behaviour.
     */
    scrollIntoView?: boolean | ScrollIntoViewOptions;
    /**
     * Render prop receiving keyboard and drag-end handlers for the roving
     * container.
     */
    children(this: void, renderProps: {
        /**
         * Handles keyboard navigation for the roving container.
         */
        onKeyDownHandler(this: void, ev: KeyboardEvent_2): void;
        /**
         * Re-sorts registered elements after DOM reordering, such as drag and
         * drop.
         */
        onDragEndHandler(this: void): void;
    }): ReactNode;
    /**
     * Optional callback invoked before the provider performs its own keyboard
     * handling.
     *
     * Call `preventDefault()` on the event to suppress the built-in behaviour.
     */
    onKeyDown?(this: void, ev: KeyboardEvent_2, state: IState, dispatch: Dispatch<IAction>): void;
    /**
     * Optional action resolver used to map keyboard events to
     * {@link RovingAction} values.
     *
     * When omitted, a default mapping based on `KeyboardEvent.key` is used.
     */
    getAction?(this: void, ev: KeyboardEvent_2): RovingAction | undefined;
}

/**
 * Render-prop wrapper around {@link useRovingTabIndex} for class components and
 * other places where hooks cannot be called directly.
 */
export declare const RovingTabIndexWrapper: default_2.FC<IProps>;

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
 * Describes a section that a room can be assigned to.
 * Used to render toggle items in the "Move to section" submenu.
 */
export declare interface Section {
    /** The tag that identifies this section (e.g. `m.favourite`, custom tag) */
    tag: string;
    /** The human-readable display name of the section */
    name: string;
    /** Whether the room currently belongs to this section */
    isSelected: boolean;
}

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
export declare function SeparatorView({ vm, className }: Props_10): default_2.ReactNode;

export declare interface SeparatorViewActions {
    /**
     * onPointerUp handler for separator.
     */
    onPointerUp: () => void;
    /**
     * onPointerMove handler for separator. Takes the event so that how far the pointer has travelled
     * since it went down can be measured.
     */
    onPointerMove: (event: default_2.PointerEvent) => void;
    /**
     * onPointerDown handler for separator. Takes the event so that where the pointer went down can be
     * measured from.
     */
    onPointerDown: (event: default_2.PointerEvent) => void;
    /**
     * onDoubleClick handler for the separator.
     */
    onDoubleClick: () => void;
}

/**
 * Sets the language for the application.
 * In Element web,`languageHandler.setLanguage` should be used instead.
 * @param language
 */
export declare function setLanguage(language: string): Promise<void>;

export declare function setLocale(value: string): string;

export declare function setMissingEntryGenerator(callback: (value: string) => void): void;

export declare function SetStatusView({ vm }: SetStatusViewProps): JSX.Element;

export declare interface SetStatusViewActions {
    /**
     * Called when the user clicks to start setting a status.
     *
     * If falsy, the default dropdown will open for the user to choose a status.
     */
    onSetStatusClick?: () => void;
    /**
     * Called when the user selects a preset status from the dropdown.
     */
    setStatus: (status: UserStatus) => void;
    /**
     * Called when the user clears their current status.
     */
    clearStatus: () => void;
}

export declare type SetStatusViewModel = ViewModel<SetStatusViewSnapshot, SetStatusViewActions>;

export declare type SetStatusViewProps = {
    vm: SetStatusViewModel;
};

export declare interface SetStatusViewSnapshot {
    /**
     * The current user status, or undefined if no status is set.
     */
    userStatus?: UserStatus;
}

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

/**
 * Displays a user's status message and emoji in simple text format
 */
export declare const StatusTextView: FC<{
    status: UserStatus;
    ref?: default_2.Ref<HTMLDivElement>;
} & default_2.HTMLAttributes<HTMLDivElement>>;

export declare interface StringVariables {
    count?: number;
    [key: string]: number | string | null | undefined;
}

export declare function substitute(text: string, variables?: StringVariables): string;

export declare function substitute(text: string, variables?: RichVariables): default_2.ReactNode;

export declare function substitute(text: string, variables: RichVariables | undefined, tags: Tags | undefined): string;

/**
 * The value a variable or tag can take for a translation interpolation.
 */
declare type SubstitutionValue = number | string | default_2.ReactNode | ((sub: string) => default_2.ReactNode);

export declare function sum(...i: number[]): number;

export declare function _t(text: TranslationKey, variables?: StringVariables): string;

export declare function _t(text: TranslationKey, variables: RichVariables): default_2.ReactNode;

export declare function _t(text: TranslationKey, variables: RichVariables | undefined, tags: Tags): default_2.ReactNode;

export declare type Tags = Record<string, SubstitutionValue>;

export declare function _td(s: TranslationKey): TranslationKey;

export declare function _tDom(text: TranslationKey, variables?: StringVariables): string;

export declare function _tDom(text: TranslationKey, variables: RichVariables): default_2.ReactNode;

export declare function _tDom(text: TranslationKey, variables: RichVariables, tags: Tags): default_2.ReactNode;

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
    onBodyActionClick?: MouseEventHandler<HTMLButtonElement>;
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
     * Accessible label announced for the edited marker action.
     */
    editedMarkerAriaLabel?: string;
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
export declare function TextualEventView({ vm, className }: Readonly<Props_8>): JSX.Element;

export declare type TextualEventViewSnapshot = {
    content: string | ReactNode;
};

export declare interface ThreadMessagePreviewAvatar {
    /**
     * Optional class name supplied by the app for integration styling.
     */
    className?: string;
    /**
     * Stable id used for avatar colour hashing.
     */
    id: string;
    /**
     * Name used by the avatar fallback.
     */
    name: string;
    /**
     * Optional avatar image URL.
     */
    src?: string;
    /**
     * Accessible label for the avatar.
     */
    label: string;
    /**
     * Optional tooltip/title text for the avatar image.
     */
    title?: string;
}

export declare function ThreadMessagePreviewView({ vm }: Readonly<ThreadMessagePreviewViewProps>): JSX.Element;

export declare type ThreadMessagePreviewViewModel = ViewModel<ThreadMessagePreviewViewSnapshot>;

declare interface ThreadMessagePreviewViewProps {
    /**
     * The view model for the thread message preview.
     */
    vm: ThreadMessagePreviewViewModel;
}

export declare interface ThreadMessagePreviewViewSnapshot {
    /**
     * Controls whether the preview should render.
     */
    isVisible: boolean;
    /**
     * Sender avatar data.
     */
    avatar?: ThreadMessagePreviewAvatar;
    /**
     * Whether to render the sender display name.
     */
    showDisplayName: boolean;
    /**
     * Sender display name.
     */
    senderName?: string;
    /**
     * Rendered preview content.
     */
    previewContent?: ReactNode;
    /**
     * Optional styled tooltip text for the preview content.
     */
    previewTooltip?: string;
}

export declare type ThreadSummaryNotificationIndicator = ComponentPropsWithoutRef<typeof IndicatorIcon>["indicator"];

export declare function ThreadSummaryView({ vm, className, type, ...props }: Readonly<ThreadSummaryViewProps>): JSX.Element;

export declare interface ThreadSummaryViewActions {
    /**
     * Invoked when the user opens the thread.
     */
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export declare type ThreadSummaryViewModel = ViewModel<ThreadSummaryViewSnapshot, ThreadSummaryViewActions>;

declare type ThreadSummaryViewProps = Omit<ComponentPropsWithoutRef<"button">, "aria-label" | "onClick"> & {
    /**
     * The view model for the thread summary.
     */
    vm: ThreadSummaryViewModel;
};

export declare interface ThreadSummaryViewSnapshot {
    /**
     * Controls whether the summary should render.
     */
    isVisible: boolean;
    /**
     * Text for the reply count section.
     */
    replyCountLabel: string;
    /**
     * Accessible label for opening the thread.
     */
    openThreadLabel: string;
    /**
     * Notification indicator shown on the thread icon.
     */
    notificationIndicator?: ThreadSummaryNotificationIndicator;
    /**
     * Whether the summary is being rendered in the narrow timeline layout.
     */
    narrow: boolean;
    /**
     * View model for the last-message preview.
     */
    previewVm: ThreadMessagePreviewViewModel;
}

/**
 * Renders a timeline tile fallback when message content cannot be displayed.
 *
 * The component shows the fallback error message from the view model, optionally
 * appends the event type in parentheses, and can render bug-report and view-source
 * actions when their labels are provided.
 */
export declare function TileErrorView({ vm, className }: Readonly<TileErrorViewProps>): JSX.Element;

/** User actions emitted by the tile error fallback. */
export declare interface TileErrorViewActions {
    /** Invoked when the bug-report button is clicked. */
    onBugReportClick?: MouseEventHandler<HTMLButtonElement>;
    /** Invoked when the view-source action is clicked. */
    onViewSourceClick?: MouseEventHandler<HTMLButtonElement>;
}

/** View model contract for the tile error fallback. */
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

/** Snapshot data for rendering an event tile error fallback. */
export declare interface TileErrorViewSnapshot {
    /** Primary fallback text shown when a tile fails to render. */
    message: string;
    /** Optional event type appended to the fallback text. */
    eventType?: string;
    /** Optional label for the bug-report action button. */
    bugReportCtaLabel?: string;
    /** Optional label for the view-source action. */
    viewSourceCtaLabel?: string;
}

/**
 * Map from tile type to view model.
 */
declare interface TileTypeToViewModelMap {
    "ongoing-call-room": RoomCallStartedTileViewModel;
    "ongoing-call-dm": DmOngoingCallTileViewModel;
    "tombstone-call-room": RoomTombstoneCallTileViewModel;
    "tombstone-call-dm": DmTombstoneCallTileViewModel;
}

export declare type TimelineItem = EventTimelineItem | DateSeparatorTimelineItem | ReadMarkerTimelineItem | LoadingTimelineItem | GapTimelineItem;

/** Discriminated union of every row kind the timeline can render. */
export declare type TimelineItemKind = "event" | "date-separator" | "read-marker" | "loading" | "gap";

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

export declare function TimelineView({ vm, renderItem }: TimelineViewProps): JSX.Element;

export declare interface TimelineViewActions {
    /** Called when the view reaches the start; VM decides whether to paginate. */
    onStartReached(): void;
    /** Called when the view reaches the end; VM decides whether to paginate. */
    onEndReached(): void;
    /**
     * Report that the anchor placement has settled (the target has stabilised in
     * the visible range). The VM clears `pendingAnchor`, re-enabling
     * follow-on-append and normal scroll-position tracking.
     */
    onAnchorReached(): void;
    /**
     * Called on every visible-range change; the VM tracks the bottommost visible event
     * for scroll-position persistence. Indices are 0-based into the items array.
     */
    onVisibleRangeChanged(startIndex: number, endIndex: number): void;
    /** Called when the at-bottom state changes; VM uses this to decide whether to clear the saved scroll position on dispose. */
    onAtBottomStateChange(atBottom: boolean): void;
    /**
     * Scroll to the read-marker item (jump to unread messages).
     *
     * `scrollNow` is invoked synchronously when the marker is already in the
     * loaded window (no data update needed). Otherwise the VM triggers a load
     * at the marker and the scroll happens via `pendingAnchor` after the load.
     */
    onJumpToReadMarker(scrollNow: ImmediateScroll): void;
    /** Mark all currently-visible messages as read, clearing the read marker. */
    onMarkAllAsRead(): void;
    /**
     * Navigate to the live end of the timeline.
     *
     * `scrollNow` is invoked synchronously when the window already reaches
     * the live end (no data update needed). Otherwise the VM reloads the
     * timeline window at the live end and the scroll happens via
     * `pendingAnchor` after the load.
     */
    onJumpToLive(scrollNow: ImmediateScroll): void;
}

export declare type TimelineViewModel = ViewModel<TimelineViewSnapshot, TimelineViewActions>;

export declare interface TimelineViewProps {
    vm: TimelineViewModel;
    /**
     * Render callback for each timeline item.
     * The shared container calls this for every visible item.
     */
    renderItem: (item: TimelineItem) => ReactNode;
}

export declare interface TimelineViewSnapshot {
    /** The ordered list of items to render. */
    items: TimelineItem[];
    /**
     * True when the timeline window has reached the live end — i.e. there are
     * no more forward events to paginate to. Used to gate follow-on-append so
     * that the view only auto-scrolls to the bottom when we are actually
     * viewing the live end of the room.
     */
    atLiveEnd: boolean;
    /**
     * Placement target for the current load. The View scrolls it into place on mount
     * and re-asserts it on later loads without remounting. While set, follow-on-append
     * is disabled (this also keeps a cold-loading list pinned to the anchor rather than
     * snapping to the bottom). Cleared when the View reports {@link TimelineViewActions.onAnchorReached}.
     */
    pendingAnchor: NavigationAnchor | null;
    /**
     * The event ID that should be visually highlighted (e.g. permalink target).
     * Unlike `pendingAnchor`, this is not cleared after scrolling — it persists
     * so the event tile stays highlighted.
     */
    highlightedEventId: string | null;
    /** True when the list is scrolled to the bottom (within a 4px threshold). */
    isAtBottom: boolean;
    /**
     * Whether a read-marker is visible above (`"above"`) or below (`"below"`) the
     * current viewport, or not reachable/applicable (`false`).
     * - `"above"` — marker is above the viewport (or above the loaded window).
     * - `"below"` — marker is below the viewport but within the loaded window.
     * Controls visibility and direction of the "Jump to unread" / "Mark as read" bar.
     */
    canJumpToReadMarker: "above" | "below" | false;
    /**
     * Number of new messages that have arrived since the user last scrolled
     * to the live bottom. Reset to zero when the user reaches the live bottom.
     * Used as the badge count on the "Jump to bottom" button.
     */
    numUnreadMessages: number;
    /**
     * True when at least one of the new-since-leaving-bottom messages is a
     * highlight (mention / keyword). Drives the highlight style on the
     * "Jump to bottom" button.
     */
    hasHighlights: boolean;
}

/**
 * A ToastContext helps components display any kind of toast message and can be provided
 * by a parent component such that their children can display toasts, eg. a settings dialog
 * can provide a ToastContext such that controls within it can display toasts at the bottom
 * of the dialog.
 *
 * It is not (at time of writing) used by the *other* toasts that appear in the top right
 * corner of the app, however the name 'toast' as used in this class refers to the component
 * of the same name in compound that it is written to manage.
 */
export declare const ToastContext: Context<ToastRack | null>;

export declare class ToastRack {
    private currentToast;
    private updateCallback?;
    private idSeq;
    setCallback(cb: () => void): void;
    displayToast(contents: ReactNode): RemoveCallback;
    getActiveToast(): ReactNode | undefined;
}

export declare type ToastType = "section_created" | "chat_moved" | "unread_activity";

/**
 * This component implements the Toolbar design pattern from the WAI-ARIA Authoring Practices guidelines.
 * https://www.w3.org/TR/wai-aria-practices-1.1/#toolbar
 * All buttons passed in children must use RovingTabIndex to set `onFocus`, `isActive`, `ref`.
 */
export declare const Toolbar: ({ children, ref, getAction, ...props }: ToolbarProps) => JSX.Element;

/**
 * Props for {@link Toolbar}.
 */
export declare interface ToolbarProps extends Omit<default_2.HTMLProps<HTMLDivElement>, "onKeyDown"> {
    ref?: Ref<HTMLDivElement>;
    /**
     * Optional action resolver used to map keyboard events to
     * {@link RovingAction} values, e.g. to apply app-level custom keybindings.
     *
     * When omitted, a default mapping based on `KeyboardEvent.key` is used.
     */
    getAction?: RovingTabIndexProviderProps["getAction"];
}

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

/**
 * Renders fallback body content for unsupported message types.
 */
export declare function UnknownBodyView({ text, className, ref }: Readonly<UnknownBodyViewProps>): JSX.Element;

export declare interface UnknownBodyViewProps {
    /**
     * Fallback message body content.
     */
    text?: ReactNode;
    /**
     * Optional CSS class names applied to the root element.
     */
    className?: string;
    /**
     * Optional ref forwarded to the root element.
     */
    ref?: Ref<HTMLDivElement>;
}

/**
 * A composer button to initiate uploading files. The button may also be
 * Ctrl+Clicked to pick the first option automatically.
 *
 * @example
 * ```tsx
 *   <UploadButton vm={} />
 * ```
 */
export declare function UploadButton({ vm, defaultOpen, ...rootButtonProps }: PropsWithChildren<{
    vm: ViewModel<UploadButtonViewSnapshot, UploadButtonViewActions>;
    defaultOpen?: boolean;
} & ComponentProps<typeof IconButton>>): ReactElement;

export declare interface UploadButtonViewActions {
    onUploadOptionSelected(this: void, type: string): void;
}

export declare interface UploadButtonViewSnapshot {
    options: {
        type: string;
        label: string;
        icon?: ComponentType<SVGAttributes<SVGElement>>;
    }[];
}

export declare interface UrlPreview {
    /**
     * The URL for the preview.
     */
    link: string;
    /**
     * Should the link have a tooltip. Should be `true` if the platform does not provide a tooltip.
     */
    showTooltipOnLink: boolean;
    /**
     * The title of the page being previewed.
     */
    title: string;
    /**
     * The site name to be displayed alongside the title.
     */
    siteName: string;
    /**
     * The og:url value of the page, could be different from link
     */
    ogUrl?: string;
    /**
     * The HTTP URI of the the sites icon.
     */
    siteIcon?: string;
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
         * The mxc:// URI of the full image.
         */
        mxcImageFull: string;
        /**
         * The type/subtype of the image format
         */
        imageType?: string;
        /**
         * File size in bytes.
         */
        fileSize?: number;
        /**
         * The width of the thumbnail.
         */
        width?: number;
        /**
         * The height of the thumbnail.
         */
        height?: number;
        /**
         * Alt text for the image
         */
        alt?: string;
        /**
         * Is the media playable.
         */
        playable: boolean;
    };
    /**
     * Author of the content, if specified.
     */
    author?: string;
}

/**
 * Renders the URL preview group attached to a single event.
 *
 * The view lays out one or more link previews, can collapse or expand
 * overflowed previews, and exposes a control to hide the group.
 */
export declare function UrlPreviewGroupView({ vm, className }: UrlPreviewGroupViewProps): JSX.Element | null;

/** User actions emitted by the URL preview group view. */
export declare interface UrlPreviewGroupViewActions {
    /** Invoked when the preview limit toggle is clicked. */
    onTogglePreviewLimit: () => void;
    /** Invoked when the hide-preview action is clicked. */
    onHideClick: () => Promise<void>;
    /** Invoked when a preview image is clicked. */
    onImageClick: (preview: UrlPreview) => void;
}

/** View model contract for the URL preview group view. */
export declare type UrlPreviewGroupViewModel = ViewModel<UrlPreviewGroupViewSnapshot, UrlPreviewGroupViewActions>;

/** Props for the URL preview group view. */
export declare interface UrlPreviewGroupViewProps {
    /**
     * The view model for the component.
     */
    vm: ViewModel<UrlPreviewGroupViewSnapshot> & UrlPreviewGroupViewActions;
    /**
     * Extra CSS classes to apply to the component.
     */
    className?: string;
}

/** Snapshot data for rendering URL previews attached to an event. */
export declare interface UrlPreviewGroupViewSnapshot {
    /** URL previews to render. */
    previews: Array<UrlPreview>;
    /** Total number of previews available before limiting. */
    totalPreviewCount: number;
    /** Whether the preview list is currently limited. */
    previewsLimited: boolean;
    /** Whether more previews exist than are currently rendered. */
    overPreviewLimit: boolean;
}

/**
 * For components that wish to display toasts, return the currently active toast and
 * the ToastRack object that should be provided to the context
 */
export declare function useActiveToast(): [ReactNode | undefined, ToastRack];

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

/** Returns the current event presentation settings. */
export declare function useEventPresentation(): EventPresentation;

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

export declare function UserMenu({ vm, className }: UserMenuViewProps): JSX.Element;

export declare interface UserMenuSnapshot {
    /**
     * Is the menu open or closed.
     */
    open: boolean;
    /**
     * Is the menu toggle expanded (avatar + displayname) or collapsed (avatar).
     */
    expanded: boolean;
    /**
     * Avatar URL for the user, if one is set.
     */
    avatarUrl?: string;
    /**
     * Should the avatar be visible.
     */
    showAvatar?: boolean;
    /**
     * Display name for the user.
     */
    displayName: string;
    /**
     * Matrix user ID for the user.
     */
    userId: string;
    /**
     * Account management URL if the user is using OIDC.
     */
    manageAccountHref?: string;
    /**
     * The user status to display, or undefined for no icon / status.
     */
    userStatus?: UserStatus;
    /**
     * Whether to show UI for user status.
     * Temporary while user status is in labs.
     * Default: true
     */
    showUserStatus?: boolean;
    /**
     * ViewModel for the set status view.
     */
    setStatusViewModel: SetStatusViewModel;
    /**
     * A set of actions that the user can perform from the menu.
     */
    actions: Partial<{
        createAccount: boolean;
        signIn: boolean;
        openHomePage: boolean;
        linkNewDevice: boolean;
        openSecurity: boolean;
        openFeedback: boolean;
        openSettings: boolean;
    }>;
}

export declare interface UserMenuViewActions {
    /**
     * Called when the menu is opened or closed.
     */
    setOpen: (open: boolean) => void;
    /**
     * Called to open the create new account view.
     */
    createAccount: () => void;
    /**
     * Called to open the sign in view.
     */
    signIn: () => void;
    /**
     * Called to change the view to the configured home page.
     */
    openHomePage: () => void;
    /**
     * Called to open the link new device flow.
     */
    linkNewDevice: () => void;
    /**
     * Called to open the security tab of the settings dialog.
     */
    openSecurity: () => void;
    /**
     * Called to open the feedback dialog.
     */
    openFeedback: () => void;
    /**
     * Called to open the settings dialog.
     */
    openSettings: () => void;
    /**
     * Called when the user clicks the button to clear their status.
     */
    clearStatus: () => void;
}

export declare type UserMenuViewProps = {
    vm: ViewModel<UserMenuSnapshot, UserMenuViewActions>;
    /**
     * Class name for the wrapper
     */
    className?: string;
};

/**
 * Registers a focusable element with the nearest
 * {@link RovingTabIndexContext}.
 *
 * @param inputRef - Optional ref to reuse for the registered DOM node.
 * @returns A tuple containing:
 * `onFocus` to mark the item active,
 * `isActive` to drive `tabIndex`,
 * `ref` to register the DOM node,
 * and `nodeRef` pointing at the registered node.
 */
export declare const useRovingTabIndex: <T extends HTMLElement>(inputRef?: RefObject<T | null>) => [() => void, boolean, RefCallback<T>, RefObject<T | null>];

/**
 * A tuple of an emoji and string representing a user's MSC4426 status.
 * The emoji should be a single grapheme cluster.
 */
export declare interface UserStatus {
    /**
     * The emoji representing the user's status. This must be a single grapheme cluster.
     */
    emoji: string;
    /**
     * The text representing the user's status.
     */
    text: string;
}

/**
 * Displays the MSC4426 status emoji for a user, e.g. after their display name
 * in the user mention autocomplete. Renders nothing if the user has no status.
 */
export declare function UserStatusIconView({ vm }: Readonly<UserStatusIconViewProps>): JSX.Element | null;

/**
 * The view model for UserStatusIconView.
 */
export declare type UserStatusIconViewModel = ViewModel<UserStatusIconViewSnapshot>;

declare interface UserStatusIconViewProps {
    /**
     * The view model for the user status icon.
     */
    vm: UserStatusIconViewModel;
}

/**
 * Snapshot for the UserStatusIconView.
 */
export declare interface UserStatusIconViewSnapshot {
    /**
     * The user's status, or undefined if not available.
     */
    status?: UserStatus;
}

/**
 * Returns the ToastRack in context in order to display toasts
 */
export declare function useToastContext(): ToastRack;

/**
 * A small wrapper around useSyncExternalStore to use a view model in a shared component view
 * @param vm The view model to use
 * @returns The current snapshot
 */
export declare function useViewModel<T>(vm: ViewModel<T>): T;

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
 * Renders a collapsible event source preview for hidden timeline events.
 */
export declare function ViewSourceEventView({ vm, className, expandedClassName, ref, }: Readonly<ViewSourceEventViewProps>): JSX.Element;

export declare interface ViewSourceEventViewActions {
    /**
     * Invoked when the user expands or collapses the event source.
     */
    onToggle: MouseEventHandler<HTMLButtonElement>;
}

export declare type ViewSourceEventViewModel = ViewModel<ViewSourceEventViewSnapshot, ViewSourceEventViewActions>;

declare interface ViewSourceEventViewProps {
    /**
     * ViewModel providing the event source snapshot and actions.
     */
    vm: ViewSourceEventViewModel;
    /**
     * Optional CSS class names applied to the root element.
     */
    className?: string;
    /**
     * Optional CSS class name applied to the root element while expanded.
     */
    expandedClassName?: string;
    /**
     * Optional ref forwarded to the root element.
     */
    ref?: Ref<HTMLSpanElement>;
}

export declare interface ViewSourceEventViewSnapshot {
    /**
     * Whether the full event source is visible.
     */
    expanded: boolean;
    /**
     * Collapsed one-line event summary.
     */
    preview: string;
    /**
     * Pretty-printed event source.
     */
    source: string;
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
     * @returns The key to use for focusing the item
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
     * When true, keyboard navigation (Arrow keys, Home, End, Page Up/Down) is disabled.
     * All key events are forwarded directly to `onKeyDown` instead.
     * Use this to prevent the list from scrolling while an item is being dragged via keyboard.
     */
    disableKeyboardNavigation?: boolean;
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
    /**
     * Optional space, in pixels, reserved at the top of the scroll viewport — e.g. for a pinned
     * sticky header that overlays the top of the list. When set, keyboard navigation scrolls
     * focused items to just below this offset rather than flush to the top, so the focused item
     * (and its focus ring / hover affordances) is never hidden behind the pinned header.
     *
     * Pass a function to vary the reserved space per item index — e.g. return 0 for an item that is
     * itself the pinned header (so it lands flush at the top) and the header height for the rest.
     */
    scrollPaddingTop?: number | ((index: number) => number);
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
    onBackClick: (ev: default_2.MouseEvent) => void;
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
    onStartMoving: (ev: default_2.MouseEvent) => void;
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
