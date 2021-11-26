import { Gift } from './ui'

import style from '../style/components/userGiftContent.module.sass'

const userGiftContent = () => {
    return (
        <div className={style.userGiftContent}>
            <Gift title="Chảo" point={300} isChange={false}/>
            <Gift title="Chảo" point={300} isChange={true}/>
            <Gift title="Chảo" point={300} isChange={false}/>
            <Gift title="Chảo" point={300} isChange={true}/>
            <Gift title="Chảo" point={300} isChange={false}/>
            <Gift title="Chảo" point={300} isChange={true}/>
            <Gift title="Chảo" point={300} isChange={false}/>
            <Gift title="Chảo" point={300} isChange={true}/>
            <Gift title="Chảo" point={300} isChange={false}/>
            <Gift title="Chảo" point={300} isChange={true}/>
            <Gift title="Chảo" point={300} isChange={false}/>
            <Gift title="Chảo" point={300} isChange={true}/>
        </div>
    )
}

export default userGiftContent