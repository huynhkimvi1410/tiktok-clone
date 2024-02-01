import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.6435-1/46691870_10157950267511982_7732922710451290112_n.jpg?stp=dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=K-ui3HdAqgIAX8V8CBr&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfB_AJarb-MTbf2XwJ5JLmlNwYiAnwmc2VjSsB8wp70HjA&oe=65E34A29"
                alt=""
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>nguyen van a</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>nguyen.van.a</span>
            </div>
        </div>
    );
}

export default AccountItem;
