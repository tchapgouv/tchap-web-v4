/*
Copyright 2022 DINUM
*/

import React from 'react';
import { _t } from 'matrix-react-sdk/src/languageHandler';
import Dropdown from "matrix-react-sdk/src/components/views/elements/Dropdown";

// todo import this
export enum TchapRoomType {
  Direct = "direct", // todo not used in this file, we haven't implemented DMs yet
  Private = "private",
  External = "external",
  Forum = "forum",
}

interface IProps {
    value: TchapRoomType;
    label: string;
    width?: number;
    onChange(value: TchapRoomType): void;
}

const TchapRoomTypeDropdown = ({
    label,
    value,
    width = 448,
    onChange,
}: IProps) => {
    const options = [
        <div key={TchapRoomType.Private}>
            { _t("Salon without externs") }
        </div>,
        <div key={TchapRoomType.External}>
            { _t("Salon with externs") }
        </div>,
        <div key={TchapRoomType.Forum}>
            { _t("Forum") }
        </div>,
    ];

    return <Dropdown
        id="mx_JoinRuleDropdown"
        className="mx_JoinRuleDropdown"
        onOptionChange={onChange}
        menuWidth={width}
        value={value}
        label={label}
    >
        { options }
    </Dropdown>;
};

export default TchapRoomTypeDropdown;
