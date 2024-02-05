import { forwardRef, useState } from 'react';
import styles from './Image.module.scss';
import classNames from 'classnames';

const Image = forwardRef(
    ({ src, className, fallback: CustomFallback = 'https://placehold.co/400x400?text=No\r\nImage', ...props }, ref) => {
        const [fallback, setFallback] = useState('');

        const handleError = () => {
            setFallback(CustomFallback);
        };
        return (
            <img
                className={classNames(styles.wrapper, className)}
                ref={ref}
                src={fallback || src}
                {...props}
                onError={handleError}
            />
        );
    },
);

export default Image;
