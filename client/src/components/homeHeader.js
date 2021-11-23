import style from '../style/components/homeHeader.module.sass'

const homeHeader = ({children}) => {
    return (
        <div className={style.homeHeader}>
            {children}
        </div>
    )
}

export default homeHeader