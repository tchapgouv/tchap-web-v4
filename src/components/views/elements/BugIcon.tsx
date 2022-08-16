/*
 * Copyright 2022 New Vector Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import "../../../../res/css/views/elements/BugIcon.scss";

import React from "react";
import classNames from 'classnames';

interface BugIconProps {
    className: string;
}

export const BugIcon: React.FC<BugIconProps> = (props: BugIconProps) => {
    return <div className={classNames("mx_BugIcon", props.className)} />;
};
