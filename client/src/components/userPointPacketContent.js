import { PointPacket } from './ui'

import style from '../style/components/userPointPacketContent.module.sass'

const userPointPacketContent = ({pointPacket}) => {
    return (
        <div className={style.userPointPacketContent}>
            {!!pointPacket && pointPacket.map(point => 
                <PointPacket key={point.PID} reDate={(new Date(point.REDATE)).toLocaleDateString("en-GB")} point={point.POINTS} />
            )}
        </div>
    )
}

export default userPointPacketContent