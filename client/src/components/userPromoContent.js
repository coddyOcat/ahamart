import { Promotion } from './ui'

import style from '../style/components/userPromoContent.module.sass'

const userPromoContent = () => {
    return (
        <div className={style.userPromoContent}>
            <Promotion title="Giảm giá 20% khi mua đơn hàng tối thiểu 300000" exDate="31/12/2021" content="Khuyễn mãi này chỉ áp dụng cho những mặt hàng nằm trong danh sách giảm giá"/>
            <Promotion title="Mua 2 tặng 1" exDate="30/1/2022" content="Khuyễn mãi này chỉ áp dụng cho những mặt hàng nằm trong danh sách giảm giá"/>
            <Promotion title="Giảm giá 10%" exDate="31/12/2021" content="Khuyễn mãi này chỉ áp dụng cho những mặt hàng nằm trong danh sách giảm giá"/>
            <Promotion title="Miễn phí giao hàng" exDate="31/12/2021" content="Khuyễn mãi này chỉ áp dụng cho những mặt hàng nằm trong danh sách giảm giá"/>
        </div>
    )
}

export default userPromoContent