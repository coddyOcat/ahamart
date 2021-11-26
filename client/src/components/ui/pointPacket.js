import style from '../../style/ui/pointPacket.module.sass'

const pointPacket = ({ reDate, point}) => {
    return (
        <div className={style.pointPacket}>
            <div className={style.infoTitle}>GÓI ĐIỂM TÍCH LŨY</div>
            <div className={style.infoReDate}>{'NGÀY TÍCH LŨY: '+reDate}</div>
            <div className={style.infoPoint}>{point}</div>
        </div>
    )
}

export default pointPacket