import style from '../style/components/homeContent.module.sass'

const homeContent = ({children}) => {
    return (
        <div className={style.homeContent}>
            {children}
        </div>
    )
}

export default homeContent