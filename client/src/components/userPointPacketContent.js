import { PointPacket } from './ui'

import style from '../style/components/userPointPacketContent.module.sass'

const userPointPacketContent = () => {
    return (
        <div className={style.userPointPacketContent}>
            <PointPacket reDate="01/01/2021" point={100} />
            <PointPacket reDate="01/01/2021" point={100} />
            <PointPacket reDate="01/01/2021" point={100} />
            <PointPacket reDate="01/01/2021" point={100} />
            <PointPacket reDate="01/01/2021" point={100} />
            <PointPacket reDate="01/01/2021" point={100} />
            <PointPacket reDate="01/01/2021" point={100} />
            <PointPacket reDate="01/01/2021" point={100} />
            <PointPacket reDate="01/01/2021" point={100} />
            <PointPacket reDate="01/01/2021" point={100} />
            <PointPacket reDate="01/01/2021" point={100} />
            <PointPacket reDate="01/01/2021" point={100} />
        </div>
    )
}

export default userPointPacketContent