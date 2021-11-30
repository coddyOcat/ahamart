import { Gift } from './ui'

import style from '../style/components/userGiftContent.module.sass'

const userGiftContent = ({giftStatus, setGiftStatus}) => {
    return (
        <div className={style.userGiftContent}>
            <Gift title="Chảo chống dính" point={300} index={0} isChange={giftStatus} setGiftStatus={setGiftStatus}/>
            <Gift title="Chảo chống dính" point={300} index={1} isChange={giftStatus} setGiftStatus={setGiftStatus}/>
        </div>
    )
}

export default userGiftContent