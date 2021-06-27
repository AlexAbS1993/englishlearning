import { FC } from "react"
import { animated, useTransition } from "react-spring"
import { ErrorInnerType } from "./Types/notification.reducer.types"
import classes from './notify.module.css'

export const ErrorInner:FC<ErrorInnerType>= ({isError, errorText}) => {
    const transition = useTransition(isError, {
        from:{opacity: 0, transform: "translateY(-100%)"},
        enter:{opacity: 1, transform: "translateY(0%)"},
        leave: {opacity: 0, transform: "translateY(-100%)"}
    })
    return (
        <>
        {
          transition((style, item) => item && <animated.div style={style} className={`${classes.notifyErrorWrapper} ${classes.errorWrapper}`}>
          <p>{errorText}</p>
          </animated.div>
          )  
        }
        </>
    )
}