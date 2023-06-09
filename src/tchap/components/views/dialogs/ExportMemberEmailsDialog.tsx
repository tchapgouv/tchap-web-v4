import React, { useState, Dispatch, SetStateAction } from "react";

import { Room } from "matrix-js-sdk/src/matrix";
import { logger } from "matrix-js-sdk/src/logger";
import { _t } from "matrix-react-sdk/src/languageHandler";
import BaseDialog from "matrix-react-sdk/src/components/views/dialogs/BaseDialog";
import DialogButtons from "matrix-react-sdk/src/components/views/elements/DialogButtons";
import StyledRadioGroup from "matrix-react-sdk/src/components/views/elements/StyledRadioGroup";
import Spinner from "matrix-react-sdk/src/components/views/elements/Spinner";
import {
    ExportFormat,
    ExportFormatKey,
    ExportType,
    textForFormat,
} from "matrix-react-sdk/src/utils/exportUtils/exportUtils";
import HTMLExporter from "matrix-react-sdk/src/utils/exportUtils/HtmlExport";
import JSONExporter from "matrix-react-sdk/src/utils/exportUtils/JSONExport";
import PlainTextExporter from "matrix-react-sdk/src/utils/exportUtils/PlainTextExport";
import { useStateCallback } from "matrix-react-sdk/src/hooks/useStateCallback";
import Exporter from "matrix-react-sdk/src/utils/exportUtils/Exporter";
import ChatExport from "matrix-react-sdk/src/customisations/ChatExport";
import InfoDialog from "matrix-react-sdk/src/components/views/dialogs/InfoDialog";

interface IProps {
    members: any;
    room: Room;
    onFinished(doExport?: boolean): void;
}

interface ExportConfig {
    exportFormat: ExportFormat;
    setExportFormat?: Dispatch<SetStateAction<ExportFormat>>;
}

/**
 * Set up form state using "forceRoomExportParameters" or defaults
 * Form fields configured in ForceRoomExportParameters are not allowed to be edited
 * Only return change handlers for editable values
 */
const useExportFormState = (): ExportConfig => {
    const config = ChatExport.getForceChatExportParameters();
    const [exportFormat, setExportFormat] = useState(config.format ?? ExportFormat.Html);

    return {
        exportFormat,
        setExportFormat: !config.format ? setExportFormat : undefined,
    };
};

const ExportMembersEmailsDialog: React.FC<IProps> = ({ members, room, onFinished }) => {
    const {
        exportFormat,
        setExportFormat,
    } = useExportFormState();
    const [isExporting, setExporting] = useState(false);
    const [exportProgressText, setExportProgressText] = useState(_t("Processing…"));
    const [displayCancel, setCancelWarning] = useState(false);
    const [exportCancelled, setExportCancelled] = useState(false);
    const [exportSuccessful, setExportSuccessful] = useState(false);
    const [exporter, setExporter] = useStateCallback<Exporter | null>(
        null,
        async (exporter: Exporter | null): Promise<void> => {
            await exporter?.export().then(() => {
                if (!exportCancelled) setExportSuccessful(true);
            });
        },
    );

    console.log('>>> members = ', members)

    const startExport = async (): Promise<void> => {
        switch (exportFormat) {
            case ExportFormat.Html:
                setExporter(new HTMLExporter(room, ExportType[exportType], {}, setExportProgressText));
                break;
            case ExportFormat.Json:
                setExporter(new JSONExporter(room, ExportType[exportType], {}, setExportProgressText));
                break;
            case ExportFormat.PlainText:
                setExporter(new PlainTextExporter(room, ExportType[exportType], {}, setExportProgressText));
                break;
            default:
                logger.error("Unknown export format");
                return;
        }
    };

    const onExportClick = async (): Promise<void> => {
        setExporting(true);
        await startExport();
    };

    const onCancel = async (): Promise<void> => {
        if (isExporting) setCancelWarning(true);
        else onFinished(false);
    };

    const confirmCancel = async (): Promise<void> => {
        await exporter?.cancelExport();
        setExportCancelled(true);
        setExporting(false);
        setExporter(null);
    };

    const exportFormatOptions = Object.values(ExportFormat).map((format) => ({
        value: format,
        label: textForFormat(format),
    }));

    if (exportCancelled) {
        // Display successful cancellation message
        return (
            <InfoDialog
                title={_t("Export Cancelled")}
                description={_t("The export was cancelled successfully")}
                hasCloseButton={true}
                onFinished={onFinished}
            />
        );
    } else if (exportSuccessful) {
        // Display successful export message
        return (
            <InfoDialog
                title={_t("Export Successful")}
                description={_t("Your export was successful. Find it in your Downloads folder.")}
                hasCloseButton={true}
                onFinished={onFinished}
            />
        );
    } else if (displayCancel) {
        // Display cancel warning
        return (
            <BaseDialog
                title={_t("Warning")}
                className="mx_ExportDialog"
                contentId="mx_Dialog_content"
                onFinished={onFinished}
                fixedWidth={true}
            >
                <p>{_t("Are you sure you want to stop exporting your data? If you do, you'll need to start over.")}</p>
                <DialogButtons
                    primaryButton={_t("Stop")}
                    primaryButtonClass="danger"
                    hasCancel={true}
                    cancelButton={_t("Continue")}
                    onCancel={() => setCancelWarning(false)}
                    onPrimaryButtonClick={confirmCancel}
                />
            </BaseDialog>
        );
    } else {
        // Display export settings
        return (
            <BaseDialog
                title={isExporting ? _t("Exporting your data") : _t("Export member list")}
                className={`mx_ExportDialog ${isExporting && "mx_ExportDialog_Exporting"}`}
                contentId="mx_Dialog_content"
                hasCancel={true}
                onFinished={onFinished}
                fixedWidth={true}
            >
                {!isExporting ? <p>{_t("Select from the options below to export the member list of this room")}</p> : null}

                <div className="mx_ExportDialog_options">
                    {!!setExportFormat && (
                        <>
                            <span className="mx_ExportDialog_subheading">{_t("Format")}</span>

                            <StyledRadioGroup
                                name="exportFormat"
                                value={exportFormat}
                                onChange={(key: ExportFormatKey) => setExportFormat(ExportFormat[key])}
                                definitions={exportFormatOptions}
                            />
                        </>
                    )}
                </div>
                {isExporting ? (
                    <div data-testid="export-progress" className="mx_ExportDialog_progress">
                        <Spinner w={24} h={24} />
                        <p>{exportProgressText}</p>
                        <DialogButtons
                            primaryButton={_t("Cancel")}
                            primaryButtonClass="danger"
                            hasCancel={false}
                            onPrimaryButtonClick={onCancel}
                        />
                    </div>
                ) : (
                    <DialogButtons
                        primaryButton={_t("Export")}
                        onPrimaryButtonClick={onExportClick}
                        onCancel={() => onFinished(false)}
                    />
                )}
            </BaseDialog>
        );
    }
};

export default ExportMembersEmailsDialog;






// import React from "react";
// import { MatrixEvent } from "matrix-js-sdk/src/models/event";
// import { Room, RoomEvent } from "matrix-js-sdk/src/models/room";
// import { RoomMember, RoomMemberEvent } from "matrix-js-sdk/src/models/room-member";
// import { RoomState, RoomStateEvent } from "matrix-js-sdk/src/models/room-state";
// import { User, UserEvent } from "matrix-js-sdk/src/models/user";
// import { throttle } from "lodash";
// import { JoinRule } from "matrix-js-sdk/src/@types/partials";
// import { ClientEvent } from "matrix-js-sdk/src/client";
// import { EventType } from "matrix-js-sdk/src/@types/event";

// import { _t } from "../../../languageHandler";
// import dis from "../../../dispatcher/dispatcher";
// import { isValid3pidInvite } from "../../../RoomInvite";
// import { MatrixClientPeg } from "../../../MatrixClientPeg";
// import BaseCard from "../right_panel/BaseCard";
// import RoomAvatar from "../avatars/RoomAvatar";
// import RoomName from "../elements/RoomName";
// import TruncatedList from "../elements/TruncatedList";
// import Spinner from "../elements/Spinner";
// import SearchBox from "../../structures/SearchBox";
// import AccessibleButton, { ButtonEvent } from "../elements/AccessibleButton";
// import EntityTile from "./EntityTile";
// import MemberTile from "./MemberTile";
// import BaseAvatar from "../avatars/BaseAvatar";
// import { shouldShowComponent } from "../../../customisations/helpers/UIComponents";
// import { UIComponent } from "../../../settings/UIFeature";
// import PosthogTrackers from "../../../PosthogTrackers";
// import { SDKContext } from "../../../contexts/SDKContext";

// const INITIAL_LOAD_NUM_MEMBERS = 30;
// const INITIAL_LOAD_NUM_INVITED = 5;
// const SHOW_MORE_INCREMENT = 100;

// interface IProps {
//     roomId: string;
//     searchQuery: string;
//     onClose(): void;
//     onSearchQueryChanged: (query: string) => void;
// }

// interface IState {
//     loading: boolean;
//     filteredJoinedMembers: Array<RoomMember>;
//     filteredInvitedMembers: Array<RoomMember | MatrixEvent>;
//     canInvite: boolean;
//     truncateAtJoined: number;
//     truncateAtInvited: number;
// }

// export default class ExportMemberEmailsDialog extends React.Component<IProps, IState> {
//     private readonly showPresence: boolean;
//     private mounted = false;

//     public static contextType = SDKContext;
//     public context!: React.ContextType<typeof SDKContext>;

//     public constructor(props: IProps, context: React.ContextType<typeof SDKContext>) {
//         super(props);
//         this.state = this.getMembersState([], []);
//         this.showPresence = context?.memberListStore.isPresenceEnabled() ?? true;
//         this.mounted = true;
//         this.listenForMembersChanges();
//     }

//     private listenForMembersChanges(): void {
//         const cli = MatrixClientPeg.get();
//         cli.on(RoomStateEvent.Update, this.onRoomStateUpdate);
//         cli.on(RoomMemberEvent.Name, this.onRoomMemberName);
//         cli.on(RoomStateEvent.Events, this.onRoomStateEvent);
//         // We listen for changes to the lastPresenceTs which is essentially
//         // listening for all presence events (we display most of not all of
//         // the information contained in presence events).
//         cli.on(UserEvent.LastPresenceTs, this.onUserPresenceChange);
//         cli.on(UserEvent.Presence, this.onUserPresenceChange);
//         cli.on(UserEvent.CurrentlyActive, this.onUserPresenceChange);
//         cli.on(ClientEvent.Room, this.onRoom); // invites & joining after peek
//         cli.on(RoomEvent.MyMembership, this.onMyMembership);
//     }

//     public componentDidMount(): void {
//         this.updateListNow(true);
//     }

//     public componentWillUnmount(): void {
//         this.mounted = false;
//         const cli = MatrixClientPeg.get();
//         if (cli) {
//             cli.removeListener(RoomStateEvent.Update, this.onRoomStateUpdate);
//             cli.removeListener(RoomMemberEvent.Name, this.onRoomMemberName);
//             cli.removeListener(RoomEvent.MyMembership, this.onMyMembership);
//             cli.removeListener(RoomStateEvent.Events, this.onRoomStateEvent);
//             cli.removeListener(ClientEvent.Room, this.onRoom);
//             cli.removeListener(UserEvent.LastPresenceTs, this.onUserPresenceChange);
//             cli.removeListener(UserEvent.Presence, this.onUserPresenceChange);
//             cli.removeListener(UserEvent.CurrentlyActive, this.onUserPresenceChange);
//         }

//         // cancel any pending calls to the rate_limited_funcs
//         this.updateList.cancel();
//     }

//     private get canInvite(): boolean {
//         const cli = MatrixClientPeg.get();
//         const room = cli.getRoom(this.props.roomId);

//         return (
//             !!room?.canInvite(cli.getSafeUserId()) || !!(room?.isSpaceRoom() && room.getJoinRule() === JoinRule.Public)
//         );
//     }

//     private getMembersState(invitedMembers: Array<RoomMember>, joinedMembers: Array<RoomMember>): IState {
//         return {
//             loading: false,
//             filteredJoinedMembers: joinedMembers,
//             filteredInvitedMembers: invitedMembers,
//             canInvite: this.canInvite,

//             // ideally we'd size this to the page height, but
//             // in practice I find that a little constraining
//             truncateAtJoined: INITIAL_LOAD_NUM_MEMBERS,
//             truncateAtInvited: INITIAL_LOAD_NUM_INVITED,
//         };
//     }

//     private onUserPresenceChange = (event: MatrixEvent, user: User): void => {
//         // Attach a SINGLE listener for global presence changes then locate the
//         // member tile and re-render it. This is more efficient than every tile
//         // ever attaching their own listener.
//         const tile = this.refs[user.userId];
//         if (tile) {
//             this.updateList(); // reorder the membership list
//         }
//     };

//     private onRoom = (room: Room): void => {
//         if (room.roomId !== this.props.roomId) {
//             return;
//         }
//         // We listen for room events because when we accept an invite
//         // we need to wait till the room is fully populated with state
//         // before refreshing the member list else we get a stale list.
//         this.updateListNow(true);
//     };

//     private onMyMembership = (room: Room, membership: string, oldMembership: string): void => {
//         if (room.roomId === this.props.roomId && membership === "join" && oldMembership !== "join") {
//             // we just joined the room, load the member list
//             this.updateListNow(true);
//         }
//     };

//     private onRoomStateUpdate = (state: RoomState): void => {
//         if (state.roomId !== this.props.roomId) return;
//         this.updateList();
//     };

//     private onRoomMemberName = (ev: MatrixEvent, member: RoomMember): void => {
//         if (member.roomId !== this.props.roomId) {
//             return;
//         }
//         this.updateList();
//     };

//     private onRoomStateEvent = (event: MatrixEvent): void => {
//         if (event.getRoomId() === this.props.roomId && event.getType() === EventType.RoomThirdPartyInvite) {
//             this.updateList();
//         }

//         if (this.canInvite !== this.state.canInvite) this.setState({ canInvite: this.canInvite });
//     };

//     private updateList = throttle(
//         () => {
//             this.updateListNow(false);
//         },
//         500,
//         { leading: true, trailing: true },
//     );

//     // XXX: exported for tests
//     public async updateListNow(showLoadingSpinner?: boolean): Promise<void> {
//         if (!this.mounted) {
//             return;
//         }
//         if (showLoadingSpinner) {
//             this.setState({ loading: true });
//         }
//         const { joined, invited } = await this.context.memberListStore.loadMemberList(
//             this.props.roomId,
//             this.props.searchQuery,
//         );
//         if (!this.mounted) {
//             return;
//         }
//         this.setState({
//             loading: false,
//             filteredJoinedMembers: joined,
//             filteredInvitedMembers: invited,
//         });
//     }

//     private createOverflowTileJoined = (overflowCount: number, totalCount: number): JSX.Element => {
//         return this.createOverflowTile(overflowCount, totalCount, this.showMoreJoinedMemberList);
//     };

//     private createOverflowTileInvited = (overflowCount: number, totalCount: number): JSX.Element => {
//         return this.createOverflowTile(overflowCount, totalCount, this.showMoreInvitedMemberList);
//     };

//     private createOverflowTile = (overflowCount: number, totalCount: number, onClick: () => void): JSX.Element => {
//         // For now we'll pretend this is any entity. It should probably be a separate tile.
//         const text = _t("and %(count)s others...", { count: overflowCount });
//         return (
//             <EntityTile
//                 className="mx_EntityTile_ellipsis"
//                 avatarJsx={
//                     <BaseAvatar
//                         url={require("../../../../res/img/ellipsis.svg").default}
//                         name="..."
//                         width={36}
//                         height={36}
//                     />
//                 }
//                 name={text}
//                 presenceState="online"
//                 suppressOnHover={true}
//                 onClick={onClick}
//             />
//         );
//     };

//     private showMoreJoinedMemberList = (): void => {
//         this.setState({
//             truncateAtJoined: this.state.truncateAtJoined + SHOW_MORE_INCREMENT,
//         });
//     };

//     private showMoreInvitedMemberList = (): void => {
//         this.setState({
//             truncateAtInvited: this.state.truncateAtInvited + SHOW_MORE_INCREMENT,
//         });
//     };

//     public componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any): void {
//         if (prevProps.searchQuery !== this.props.searchQuery) {
//             this.updateListNow(false);
//         }
//     }

//     private onSearchQueryChanged = (searchQuery: string): void => {
//         this.props.onSearchQueryChanged(searchQuery);
//     };

//     private onPending3pidInviteClick = (inviteEvent: MatrixEvent): void => {
//         dis.dispatch({
//             action: "view_3pid_invite",
//             event: inviteEvent,
//         });
//     };

//     private getPending3PidInvites(): MatrixEvent[] {
//         // include 3pid invites (m.room.third_party_invite) state events.
//         // The HS may have already converted these into m.room.member invites so
//         // we shouldn't add them if the 3pid invite state key (token) is in the
//         // member invite (content.third_party_invite.signed.token)
//         const room = MatrixClientPeg.get().getRoom(this.props.roomId);

//         if (room) {
//             return room.currentState.getStateEvents("m.room.third_party_invite").filter(function (e) {
//                 if (!isValid3pidInvite(e)) return false;

//                 // discard all invites which have a m.room.member event since we've
//                 // already added them.
//                 const memberEvent = room.currentState.getInviteForThreePidToken(e.getStateKey()!);
//                 if (memberEvent) return false;
//                 return true;
//             });
//         }

//         return [];
//     }

//     private makeMemberTiles(members: Array<RoomMember | MatrixEvent>): JSX.Element[] {
//         return members.map((m) => {
//             if (m instanceof RoomMember) {
//                 // Is a Matrix invite
//                 return <MemberTile key={m.userId} member={m} ref={m.userId} showPresence={this.showPresence} />;
//             } else {
//                 // Is a 3pid invite
//                 return (
//                     <EntityTile
//                         key={m.getStateKey()}
//                         name={m.getContent().display_name}
//                         suppressOnHover={true}
//                         onClick={() => this.onPending3pidInviteClick(m)}
//                     />
//                 );
//             }
//         });
//     }

//     private getChildrenJoined = (start: number, end: number): Array<JSX.Element> => {
//         return this.makeMemberTiles(this.state.filteredJoinedMembers.slice(start, end));
//     };

//     private getChildCountJoined = (): number => this.state.filteredJoinedMembers.length;

//     private getChildrenInvited = (start: number, end: number): Array<JSX.Element> => {
//         let targets = this.state.filteredInvitedMembers;
//         if (end > this.state.filteredInvitedMembers.length) {
//             targets = targets.concat(this.getPending3PidInvites());
//         }

//         return this.makeMemberTiles(targets.slice(start, end));
//     };

//     private getChildCountInvited = (): number => {
//         return this.state.filteredInvitedMembers.length + (this.getPending3PidInvites() || []).length;
//     };

//     public render(): React.ReactNode {
//         if (this.state.loading) {
//             return (
//                 <BaseCard className="mx_MemberList" onClose={this.props.onClose}>
//                     <Spinner />
//                 </BaseCard>
//             );
//         }

//         const cli = MatrixClientPeg.get();
//         const room = cli.getRoom(this.props.roomId);
//         let inviteButton;

//         if (room?.getMyMembership() === "join" && shouldShowComponent(UIComponent.InviteUsers)) {
//             let inviteButtonText = _t("Invite to this room");
//             if (room.isSpaceRoom()) {
//                 inviteButtonText = _t("Invite to this space");
//             }

//             inviteButton = (
//                 <AccessibleButton
//                     className="mx_MemberList_invite"
//                     onClick={this.onInviteButtonClick}
//                     disabled={!this.state.canInvite}
//                 >
//                     <span>{inviteButtonText}</span>
//                 </AccessibleButton>
//             );
//         }

//         let invitedHeader;
//         let invitedSection;
//         if (this.getChildCountInvited() > 0) {
//             invitedHeader = <h2>{_t("Invited")}</h2>;
//             invitedSection = (
//                 <TruncatedList
//                     className="mx_MemberList_section mx_MemberList_invited"
//                     truncateAt={this.state.truncateAtInvited}
//                     createOverflowElement={this.createOverflowTileInvited}
//                     getChildren={this.getChildrenInvited}
//                     getChildCount={this.getChildCountInvited}
//                 />
//             );
//         }

//         const footer = (
//             <SearchBox
//                 className="mx_MemberList_query mx_textinput_icon mx_textinput_search"
//                 placeholder={_t("Filter room members")}
//                 onSearch={this.onSearchQueryChanged}
//                 initialValue={this.props.searchQuery}
//             />
//         );

//         let scopeHeader;
//         if (room?.isSpaceRoom()) {
//             scopeHeader = (
//                 <div className="mx_RightPanel_scopeHeader">
//                     <RoomAvatar room={room} height={32} width={32} />
//                     <RoomName room={room} />
//                 </div>
//             );
//         }

//         console.log('>>>>> filteredJoinedMembers = ', this.state.filteredJoinedMembers)

//         return (
//             <BaseCard
//                 className="mx_MemberList"
//                 header={
//                     <React.Fragment>
//                         {scopeHeader}
//                         {inviteButton}
//                     </React.Fragment>
//                 }
//                 footer={footer}
//                 onClose={this.props.onClose}
//             >
//                 <div className="mx_MemberList_wrapper">
//                     <TruncatedList
//                         className="mx_MemberList_section mx_MemberList_joined"
//                         truncateAt={this.state.truncateAtJoined}
//                         createOverflowElement={this.createOverflowTileJoined}
//                         getChildren={this.getChildrenJoined}
//                         getChildCount={this.getChildCountJoined}
//                     />
//                     {invitedHeader}
//                     {invitedSection}
//                 </div>
//             </BaseCard>
//         );
//     }

//     private onInviteButtonClick = (ev: ButtonEvent): void => {
//         PosthogTrackers.trackInteraction("WebRightPanelMemberListInviteButton", ev);

//         if (MatrixClientPeg.get().isGuest()) {
//             dis.dispatch({ action: "require_registration" });
//             return;
//         }

//         // open the room inviter
//         dis.dispatch({
//             action: "view_invite",
//             roomId: this.props.roomId,
//         });
//     };
// }