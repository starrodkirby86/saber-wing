import React from 'react';
import _ from 'lodash';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import './styles.css';

type MultiPoolEditorSelectProps = {
    poolLength: number,
    currentValue: string,
    selectHandler: (value: string) => void,
};

const MultiPoolEditorSelect = ({ poolLength, currentValue, selectHandler }: MultiPoolEditorSelectProps) => {

    return (
        <Select.Root value={currentValue} onValueChange={selectHandler}>
            <Select.Trigger className="SelectTrigger" aria-label="Food">
                <Select.Value placeholder="Select a pool…" />
                <Select.Icon className="SelectIcon">
                    <ChevronDownIcon />
                </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
                <Select.Content position="popper" className="SelectContent" sideOffset={5}>
                    <Select.ScrollUpButton className="SelectScrollButton">
                        <ChevronUpIcon />
                    </Select.ScrollUpButton>
                    <Select.Viewport className="SelectViewport">
                        {
                            _.range(0, poolLength - 1).map((option) => (
                                <Select.Item key={`multi-pool-editor-select-item-${option}`} value={option.toString()}>
                                    <Select.ItemText>
                                        Pool {option + 1}
                                    </Select.ItemText>
                                </Select.Item>
                            ))
                        }
                    </Select.Viewport>
                    <Select.ScrollDownButton className="SelectScrollButton">
                        <ChevronDownIcon />
                    </Select.ScrollDownButton>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    );
};

export default MultiPoolEditorSelect;
