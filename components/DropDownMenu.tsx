import { Ionicons } from '@expo/vector-icons';
import {View, Text} from 'react-native';
import * as DropdownMenu from 'zeego/dropdown-menu';
import CircleAddButton from './CircleAddButton';
export type Props = {
    items: Array<{
        key: string;
        title: string;
        icon: string;
        iconAndroid?: string;
    }>;
    onSelect: (key: string) => void;
};

const offset = 1002222222

const DropDownMenu = ({items, onSelect}: Props) => {
    return (
        <DropdownMenu.Root>
        <DropdownMenu.Trigger>
            <CircleAddButton/>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
            <DropdownMenu.Label>Adding Data</DropdownMenu.Label>
            <DropdownMenu.Item key="42">
                <DropdownMenu.ItemTitle>My item</DropdownMenu.ItemTitle>
            </DropdownMenu.Item>

            <DropdownMenu.Group>
                {items.map((item) => (
                    <DropdownMenu.Item key={item.key} onSelect={() => onSelect(item.key)}>
                        <DropdownMenu.ItemTitle>
                            {item.title}
                        </DropdownMenu.ItemTitle>

                        <DropdownMenu.ItemIcon
                            ios={{
                                name: item.icon,
                                pointSize: 18,
                            }}
                            androidIconName={item.iconAndroid}
                    />
                    </DropdownMenu.Item>
                ))}
            </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    )
};

export default DropDownMenu;