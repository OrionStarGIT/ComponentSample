/*
 *  Copyright (C) 2017 OrionStar Technology Project
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import React from 'react';
import {
    BaseComponent,
    BaseComponentProps,
    BaseVoice,
    NavigationComponent
} from 'orionos-eve-core';
import { observer } from 'mobx-react';
import { NavigationViewModel } from './NavigationViewModel';
import { NavigationView } from './NavigationView';

@observer
export class NavigationScreen
    extends BaseComponent<BaseComponentProps, NavigationViewModel, BaseVoice> {

    /**
     * 构造函数
     */
    public constructor(props: BaseComponentProps) {
        super(props);

        this.setViewModel(new NavigationViewModel());
    }

    /**
     * 执行
     */
    public render(): React.ReactNode {
        if (!this.viewModel) {
            return null;
        }
        return (
            <>
                {/*导航*/}
                {this.viewModel.isRunning() ? (
                    <NavigationComponent
                        param={this.viewModel.getParam()}
                        onStatusUpdate={this.viewModel && this.viewModel.onStatusUpdate}
                        onFinish={this.viewModel && this.viewModel.onFinish}/>
                ) : null}
                {/*界面*/}
                <NavigationView viewModel={this.viewModel}/>
            </>
        );
    }
}