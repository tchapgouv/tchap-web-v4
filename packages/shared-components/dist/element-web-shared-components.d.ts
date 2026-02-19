import { ChangeEventHandler } from "react";
import { ComponentProps } from "react";
import { Context } from "react";
import { default as default_2 } from "react";
import { ElementType } from "react";
import { EventEmitter } from "events";
import { getNormalizedLanguageKeys } from "matrix-web-i18n";
import { HTMLAttributes } from "react";
import { HTMLProps } from "react";
import { I18nApi as I18nApi_2 } from "@element-hq/element-web-module-api";
import { JSX } from "react";
import { JSXElementConstructor } from "react";
import { KEY_SEPARATOR } from "matrix-web-i18n";
import { KeyboardEventHandler } from "react";
import { MouseEventHandler } from "react";
import { normalizeLanguageKey } from "matrix-web-i18n";
import { PropsWithChildren } from "react";
import { ReactElement } from "react";
import { ReactNode } from "react";
import { Translations } from "@element-hq/element-web-module-api";
import { Variables } from "@element-hq/element-web-module-api";

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
export declare type AudioPlayerViewModel = ViewModel<AudioPlayerViewSnapshot> & AudioPlayerViewActions;

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
export declare function AvatarWithDetails<C extends default_2.ElementType = "div">({
    as,
    className,
    details,
    avatar,
    title,
    ...props
}: PropsWithChildren<AvatarWithDetailsProps<C>>): JSX.Element;

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
export declare function Banner({
    type,
    children,
    avatar,
    className,
    actions,
    onClose,
    ...props
}: PropsWithChildren<BannerProps & HTMLAttributes<HTMLDivElement>>): ReactElement;

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
    subscribe: (listener: () => void) => () => void;
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
export declare function Box({
    as,
    flex,
    shrink,
    grow,
    className,
    children,
    ...props
}: default_2.PropsWithChildren<BoxProps>): JSX.Element;

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
 */
export declare class Clock extends default_2.Component<Props> {
    shouldComponentUpdate(nextProps: Readonly<Props>): boolean;
    private calculateDuration;
    render(): default_2.ReactNode;
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
 * Something that needs to be eventually disposed. This can be:
 * - A function that does the disposing
 * - An object containing a dispose method which does the disposing
 */
export declare type DisposableItem =
    | {
          dispose: () => void;
      }
    | (() => void);

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
    trackListener(emitter: EventEmitter, event: string, callback: (...args: unknown[]) => void): void;
    private throwIfDisposed;
    /**
     * Whether this disposable has been disposed
     */
    get isDisposed(): boolean;
}

/**
 * A flexbox container helper
 */
export declare function Flex<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any> = "div">({
    as,
    display,
    direction,
    align,
    justify,
    gap,
    wrap,
    className,
    children,
    ...props
}: default_2.PropsWithChildren<FlexProps<T>>): JSX.Element;

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
 * Formats a number of seconds into a human-readable string.
 * @param inSeconds
 */
export declare function formatSeconds(inSeconds: number): string;

export declare function getLangsJson(): Promise<Languages>;

export declare function getLocale(): string;

export { getNormalizedLanguageKeys };

/**
 * A component to alert that history is shared to new members of the room.
 *
 * @example
 * ```tsx
 * <HistoryVisibleBannerView vm={historyVisibleBannerViewModel} />
 * ```
 */
export declare function HistoryVisibleBannerView({ vm }: Readonly<HistoryVisibleBannerViewProps>): JSX.Element;

export declare interface HistoryVisibleBannerViewActions {
    /**
     * Called when the user dismisses the banner.
     */
    onClose: () => void;
}

/**
 * The view model for the banner.
 */
export declare type HistoryVisibleBannerViewModel = ViewModel<HistoryVisibleBannerViewSnapshot> &
    HistoryVisibleBannerViewActions;

declare interface HistoryVisibleBannerViewProps {
    /**
     * The view model for the banner.
     */
    vm: HistoryVisibleBannerViewModel;
}

export declare interface HistoryVisibleBannerViewSnapshot {
    /**
     * Whether the banner is currently visible.
     */
    visible: boolean;
}

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
    register(translations: Partial<Translations>): void;
    /**
     * Perform a translation, with optional variables
     * @param key - The key to translate
     * @param variables - Optional variables to interpolate into the translation
     */
    translate(key: TranslationKey, variables?: Variables): string;
    humanizeTime(timeMillis: number): string;
}

export declare const I18nContext: Context<I18nApi_2 | null>;

export declare interface IVariables {
    count?: number;
    [key: string]: SubstitutionValue;
}

export { KEY_SEPARATOR };

declare type Languages = {
    [lang: string]: string;
};

/**
 * Utility function to look up a string by its translation key without resolving variables & tags
 * @param key - the translation key to return the value for
 */
export declare function lookupString(key: TranslationKey): string;

/**
 * A component to display the body of a media message.
 *
 * @example
 * ```tsx
 * <MediaBody as="p" className="custom-class">Media body content</MediaBody>
 * ```
 */
export declare function MediaBody<C extends default_2.ElementType = "div">({
    as,
    className,
    children,
    ...props
}: PropsWithChildren<MediaBodyProps<C>>): JSX.Element;

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
 * A mock view model that returns a static snapshot passed in the constructor, with no updates.
 */
export declare class MockViewModel<T> implements ViewModel<T> {
    private snapshot;
    constructor(snapshot: T);
    getSnapshot: () => T;
    subscribe(listener: () => void): () => void;
}

export { normalizeLanguageKey };

export declare function percentageOf(val: number, min: number, max: number): number;

export declare function percentageWithin(pct: number, min: number, max: number): number;

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
export declare function Pill({
    className,
    children,
    label,
    onClick,
    ...props
}: PropsWithChildren<PillProps>): JSX.Element;

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
export declare function PillInput({
    className,
    children,
    onRemoveChildren,
    inputProps,
    ...props
}: PropsWithChildren<PillInputProps>): JSX.Element;

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
export declare function PlayPauseButton({
    disabled,
    playing,
    togglePlay,
    ...rest
}: Readonly<PlayPauseButtonProps>): JSX.Element;

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
    seconds: number;
}

declare interface Props_2 {
    vm: ViewModel<TextualEventViewSnapshot>;
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
export declare function RichList({
    children,
    title,
    className,
    titleAttributes,
    isEmpty,
    ...props
}: PropsWithChildren<RichListProps>): JSX.Element;

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
export declare type RoomListSearchViewModel = ViewModel<RoomListSearchViewSnapshot> & RoomListSearchViewActions;

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
export declare type RoomStatusBarViewModel = ViewModel<RoomStatusBarViewSnapshot> & RoomStatusBarViewActions;

declare interface RoomStatusBarViewProps {
    /**
     * The view model for the banner.
     */
    vm: RoomStatusBarViewModel;
}

export declare type RoomStatusBarViewSnapshot =
    | RoomStatusBarNoConnection
    | RoomStatusBarConsentState
    | RoomStatusBarResourceLimitedState
    | RoomStatusBarUnsentMessagesState
    | RoomStatusBarLocalRoomError
    | RoomStatusBarNotVisible;

/**
 * Sanitizes unsafe text for the sanitizer, ensuring references to variables will not be considered
 * replaceable by the translation functions.
 * @param {string} text The text to sanitize.
 * @returns {string} The sanitized text.
 */
export declare function sanitizeForTranslation(text: string): string;

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
     * @param snapshot A subset of the snapshot to merge into the current snapshot.
     */
    merge(snapshot: Partial<T>): void;
    /**
     * The current value of the snapshot.
     */
    get current(): T;
}

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

export declare function TextualEventView({ vm }: Props_2): JSX.Element;

export declare type TextualEventViewSnapshot = {
    content: string | ReactNode;
};

export declare type TranslatedString = string | default_2.ReactNode;

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
export declare function useCreateAutoDisposedViewModel<B extends BaseViewModel<unknown, unknown>>(
    vmCreator: VmCreator<B>,
): B;

/**
 * A hook to get the i18n API from the context. Will throw if no i18n context is found.
 * @throws If no i18n context is found
 * @returns The i18n API from the context
 */
export declare function useI18n(): I18nApi_2;

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
export declare function useViewModel<T>(vm: ViewModel<T>): T;

/**
 * The interface for a generic View Model passed to the shared components.
 * The snapshot is of type T which is a type specifying a snapshot for the view in question.
 */
export declare interface ViewModel<T> {
    /**
     * The current snapshot of the view model.
     */
    getSnapshot: () => T;
    /**
     * Subscribes to changes in the view model.
     * The listener will be called whenever the snapshot changes.
     */
    subscribe: (listener: () => void) => () => void;
}

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
    add: (listener: () => void) => () => void;
    /**
     * Emit an update to all subscribed listeners.
     */
    emit: () => void;
}

declare type VmCreator<B extends BaseViewModel<unknown, unknown>> = () => B;

export {};
