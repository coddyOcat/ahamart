import style from '../../style/ui/promotion.module.sass'

const promotion = ({ title, exDate, content }) => {
    return (
        <div className={style.promotion}>
            <div className={style.infoTitle}>{'[KM] ' + title}</div>
            <div className={style.infoExDate}>{'THỜI GIAN: TỪ NAY ĐẾN HẾT '+ exDate}</div>
            <div className={style.infoContent}>{content}</div>
        </div>
    )
}

export default promotion