/*
Copyright 2022 DINUM
*/

import React from 'react';
import classNames from "classnames";
import { _t } from 'matrix-react-sdk/src/languageHandler';
import StyledRadioButton from "matrix-react-sdk/src/components/views/elements/StyledRadioButton";

import { TchapRoomType } from "../../../@types/tchap";

interface IProps {
    value: TchapRoomType;
    label: string;
    width?: number;
    onChange(value: TchapRoomType): void;
}

interface IState {
  roomType: TchapRoomType;
}

// todo rename, not a dropdown anymore
export default class TchapRoomTypeSelector extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            roomType: TchapRoomType.Private,
        };
    }

    private onRoomTypeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const roomType = e.target.value as TchapRoomType;

        this.setState({ roomType: roomType });
        this.props.onChange(roomType);
    };

    public render(): JSX.Element {
        const ircClasses = classNames("mx_LayoutSwitcher_RadioButton", {
            mx_LayoutSwitcher_RadioButton_selected: this.state.roomType == TchapRoomType.Private,
        });
        const groupClasses = classNames("mx_LayoutSwitcher_RadioButton", {
            mx_LayoutSwitcher_RadioButton_selected: this.state.roomType == TchapRoomType.External,
        });
        const bubbleClasses = classNames("mx_LayoutSwitcher_RadioButton", {
            mx_LayoutSwitcher_RadioButton_selected: this.state.roomType === TchapRoomType.Forum,
        });

        return <div className="mx_LayoutSwitcher_RadioButtons">
            <label className={ircClasses}>
                <StyledRadioButton
                    name="roomType"
                    value={TchapRoomType.Private}
                    checked={this.state.roomType === TchapRoomType.Private}
                    onChange={this.onRoomTypeChange}
                >
                    <div>
                        { _t("Private room") }
                    </div>
                    <div>
                        { _t("Accessible to all users by invitation from an administrator.") }
                    </div>
                </StyledRadioButton>
            </label>
            <label className={groupClasses}>
                <StyledRadioButton
                    name="roomType"
                    value={TchapRoomType.External}
                    checked={this.state.roomType == TchapRoomType.External}
                    onChange={this.onRoomTypeChange}
                >
                    <div>
                        { _t("Private room open to external users") }
                    </div>
                    <div>
                        { _t("Accessible to all users and to external guests by invitation of an administrator.") }
                    </div>
                </StyledRadioButton>
            </label>
            <label className={bubbleClasses}>
                <StyledRadioButton
                    name="roomType"
                    value={TchapRoomType.Forum}
                    checked={this.state.roomType == TchapRoomType.Forum}
                    onChange={this.onRoomTypeChange}
                >
                    <div>
                        { _t("Forum room") }
                    </div>
                    <div>
                        { _t("Accessible to all users from the forum directory or from a shared link.") }
                    </div>
                </StyledRadioButton>
            </label>
        </div>
        ;
    }
}
