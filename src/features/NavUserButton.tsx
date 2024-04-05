import { useAppStoreKey } from "@/stores/main";
import { Menu, Button, rem, Avatar, Text, Group, Paper } from "@mantine/core";
import {
  IconChevronDown,
  IconSettings
} from "@tabler/icons-react";
import { IconLogout } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export function NavUserButton() {
  const userName = useAppStoreKey('name');
  const userEmail = useAppStoreKey('email');

  const initials = userName.substring(0, 2)?.toUpperCase();

  return (
    <Menu
      shadow='md'
      styles={{ dropdown: { minWidth: 200 } }}
      position='bottom-end'
      offset={0}
    >
      <Menu.Target>
        <Button
          variant='subtle'
          color='purple'
          h='100%'
          px='sm'
          rightSection={<IconChevronDown />}
        >
          <Avatar color='purple' radius='xl'>
            {initials}
          </Avatar>
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>
          <Avatar color='purple' size={80} radius={120} mx='auto'>
            {initials}
          </Avatar>
          <Text ta='center' fz='lg' fw={500} mt='sm'>
            {userName}
          </Text>
          <Text ta='center' c='dimmed' fz='sm'>
            {userEmail}
          </Text>
        </Menu.Item>
        <Menu.Divider />

        <Menu.Label>Account</Menu.Label>
        <Menu.Item
          color='red'
          component={Link}
          to='/logout'
          leftSection={
            <IconLogout style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
