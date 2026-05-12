/**
 * Copyright DINUM 2023
 */

import React from "react";

import { FileDownloader } from "~tchap-web/src/utils/FileDownloader";
import { ButtonEvent } from "~tchap-web/src/components/views/elements/AccessibleButton";
import { _t } from "~tchap-web/src/languageHandler";
import { UserExportIcon }  from "@vector-im/compound-design-tokens/assets/web/icons";

import { MemberWithSeparator, SEPARATOR } from "~tchap-web/src/components/viewmodels/memberlist/MemberListViewModel";
import { Button, Tooltip } from "@vector-im/compound-web";

interface IProps {
  roomMembers: MemberWithSeparator[];
}

interface IState {
}

export default class MemberList extends React.Component<IProps, IState> {
  private downloader = new FileDownloader();

  public constructor(props: IProps) {
    super(props);
  }

  private membersWithSeparatorToJoinedMember = () => {
    const arrayMembersId = [];
    for (let member of this.props.roomMembers) {
      if (member == SEPARATOR) break;
      arrayMembersId.push(member.member?.userId)
    }
    
    return arrayMembersId;
  }

  private getFirstMember() {
    const roomMember = this.props.roomMembers[0];
    if (!roomMember || roomMember == SEPARATOR) return null;
    return roomMember.member;
  }

  private getFilename = () => {
    const ts = (new Date()).getTime();
    const roomName = this.getFirstMember()?.roomId ?? "roomId";
    return `export_${roomName}_${ts}.csv`
  }

  private onExportButtonClick = (ev: ButtonEvent): void => {
    const blob = new Blob([this.membersWithSeparatorToJoinedMember().join()], { type : 'plain/text' })

    const filename = this.getFilename();

    this.downloader.download({
        blob: blob,
        name: filename,
    });

    return;
  };

  public render(): React.ReactNode {
    if (!this.props.roomMembers.length) return null;

    return (
      <Tooltip data-testid="tc_exportRoomMembersButton" description={_t("Download the list of all this room's members, in a text file. Useful for adding them all to another room.")}>
            <Button
                kind="secondary"
                size="sm"
                Icon={UserExportIcon}
                className="mx_MemberListHeaderView_invite_large tc_MemberList_export"
                onClick={this.onExportButtonClick}
            >
                {_t("Export room members")}
            </Button>
      </Tooltip>
    );
  }
}