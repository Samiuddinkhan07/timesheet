import { Autocomplete, Group, Burger, rem,Menu,UnstyledButton,Text,Avatar,useMantineTheme } from '@mantine/core';
import cx from 'clsx';
import { useDisclosure } from '@mantine/hooks';
import {useState} from "react";
import { IconSearch } from '@tabler/icons-react';
import Logo from '../assets/images/logo.png'
import classes from './HeaderTabs.module.css';
import {NavLink} from "react-router-dom";
import {
    IconLogout,
    IconHeart,
    IconStar,
    IconMessage,
    IconSettings,
    IconPlayerPause,
    IconTrash,
    IconSwitchHorizontal,
    IconChevronDown,
    IconHome,
    IconCalendar,
    IconNotification,
    IconChartBar
} from '@tabler/icons-react';

const links = [
    { link: '/about', label: <IconHome/> },
    { link: '/pricing', label: <IconCalendar/> },
    { link: '/learn', label: <IconNotification/> },
    { link: '/community', label: <IconChartBar/> },
];

export function Header() {
    const [opened, { toggle }] = useDisclosure(false);
    const [userMenuOpened, setUserMenuOpened] = useState(false);
    const theme = useMantineTheme();
    const items = links.map((link) => (
        <NavLink
            key={link.label}
            href={link.link}
            className={classes.link}
            to={link.link}
        >
            {link.label}
        </NavLink>
    ));

    const user = {
        name: 'Jane Spoonfighter',
        email: 'janspoon@fighter.dev',
        image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
    };

    return (
        <header className={classes.header}>
            <div className={classes.inner}>
                <Group>
                    <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                    <Avatar src={Logo} alt="logo" size={50} />
                    <Text fw="600">Minutes Matter</Text>
                </Group>
                <Group>
                    <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
                        {items}
                    </Group>
                    <Menu
                        width={260}
                        position="bottom-end"
                        transitionProps={{ transition: 'pop-top-right' }}
                        onClose={() => setUserMenuOpened(false)}
                        onOpen={() => setUserMenuOpened(true)}
                        withinPortal
                    >
                        <Menu.Target>
                            <UnstyledButton
                                className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
                            >
                                <Group gap={7}>
                                    <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
                                    <Text fw={500} size="sm" lh={1} mr={3}>
                                        {user.name}
                                    </Text>
                                    <IconChevronDown style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                                </Group>
                            </UnstyledButton>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item
                                leftSection={
                                    <IconHeart
                                        style={{ width: rem(16), height: rem(16) }}
                                        color={theme.colors.red[6]}
                                        stroke={1.5}
                                    />
                                }
                            >
                                Liked posts
                            </Menu.Item>
                            <Menu.Item
                                leftSection={
                                    <IconStar
                                        style={{ width: rem(16), height: rem(16) }}
                                        color={theme.colors.yellow[6]}
                                        stroke={1.5}
                                    />
                                }
                            >
                                Saved posts
                            </Menu.Item>
                            <Menu.Item
                                leftSection={
                                    <IconMessage
                                        style={{ width: rem(16), height: rem(16) }}
                                        color={theme.colors.blue[6]}
                                        stroke={1.5}
                                    />
                                }
                            >
                                Your comments
                            </Menu.Item>

                            <Menu.Label>Settings</Menu.Label>
                            <Menu.Item
                                leftSection={
                                    <IconSettings style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                                }
                            >
                                Account settings
                            </Menu.Item>
                            <Menu.Item
                                leftSection={
                                    <IconSwitchHorizontal style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                                }
                            >
                                Change account
                            </Menu.Item>
                            <Menu.Item
                                leftSection={
                                    <IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                                }
                            >
                                Logout
                            </Menu.Item>

                            <Menu.Divider />

                            <Menu.Label>Danger zone</Menu.Label>
                            <Menu.Item
                                leftSection={
                                    <IconPlayerPause style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                                }
                            >
                                Pause subscription
                            </Menu.Item>
                            <Menu.Item
                                color="red"
                                leftSection={<IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                            >
                                Delete account
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Group>
            </div>
        </header>
    );
}