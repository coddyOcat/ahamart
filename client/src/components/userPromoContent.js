import { Promotion } from './ui'

import style from '../style/components/userPromoContent.module.sass'

const userPromoContent = () => {
    return (
        <div className={style.userPromoContent}>
            <Promotion title="Mua 1 tặng 1" exDate="01/01/2022" content="Mua đi, mua đi, mua 1 tặng 1"/>
            <Promotion title="Mua 1 tặng 1" exDate="01/01/2022" content="Mua đi, mua đi, mua 1 tặng 1"/>
            <Promotion title="Mua 1 tặng 1" exDate="01/01/2022" content="Mua đi, mua đi, mua 1 tặng 1"/>
            <Promotion title="Mua 1 tặng 1" exDate="01/01/2022" content="Mua đi, mua đi, mua 1 tặng 1"/>
            <Promotion title="Mua 1 tặng 1" exDate="01/01/2022" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt ipsum justo, quis gravida lacus sodales in. "/>
            <Promotion title="Mua 1 tặng 1" exDate="01/01/2022" content="Mua đi, mua đi, mua 1 tặng 1"/>
        </div>
    )
}

export default userPromoContent