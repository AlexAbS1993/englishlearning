import { FC } from "react";
import { useTransition, animated } from "react-spring";
import { NotificationInnerType } from "./Types/notification.reducer.types";
import classes from './notify.module.css'

export const NofificationInner:FC<NotificationInnerType> = ({isNotify, text}) => {
    const transition = useTransition(isNotify, {
        from:{opacity: 0, transform: "translateY(-100%)"},
        enter:{opacity: 1, transform: "translateY(0%)"},
        leave: {opacity: 0, transform: "translateY(-100%)"}
    })
    return (
        <>
        {
            transition((style, item) => item && <animated.div style={style} className={classes.notifyWrapper}>
            <p>{text}</p>
            </animated.div>
            )
        }
        </>
    )
}