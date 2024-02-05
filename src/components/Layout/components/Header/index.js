import { Fragment, useState } from 'react';
import classNames from 'classnames/bind';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCloudUpload,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignIn,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';

import Menu from '~/components/Popper/Menu';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import Search from '../Search';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Langauge',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const USER_MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@hoaa',
    },
    {
        icon: <FontAwesomeIcon icon={faTiktok} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];
function Header() {
    const [currentUser, setCurrentUser] = useState(true);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo"></img>
                </div>

                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload videos" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                            <Menu items={USER_MENU_ITEMS}>
                                <Image
                                    src=""
                                    className={cx('user-avatar')}
                                    alt="Nguyen Van A"
                                    // fallback="https://placehold.co/400x400?text=No"
                                />
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button
                                rightIcon={<FontAwesomeIcon icon={faSignIn} />}
                                primary
                                rounded
                                onClick={() => setCurrentUser(true)}
                            >
                                Login
                            </Button>
                            <Menu items={MENU_ITEMS}>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                                </button>
                            </Menu>
                        </>
                    )}
                    <Button rounded style={{ position: 'absolute', right: '20px', bottom: '20px' }}>
                        Get app
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
