import { UserInfo } from './ui'

import style from '../style/components/userInfoContent.module.sass'

const userInfoContent = () => {
    return (
        <div className={style.userInfoContent}>
            <UserInfo title="Họ và tên" content="Đặng Hoài Bão"/>
            <UserInfo title="Giới tính" content="Nam"/>
            <UserInfo title="Ngày sinh" content="21/11/2001 "/>
            <UserInfo title="Địa chỉ" content="Diêm Trường, Xuân Lộc, Sông Cầu, Phú Yên"/>
            <UserInfo title="Số điện thoại" content="0969189947"/>
            <UserInfo title="Email" content="hoaibaobtx@gmail.com"/>
            <UserInfo title="Tên đăng nhập" content="coddy"/>
            <UserInfo title="Mật khẩu" content="**********"/>
            <div className={style.navEnd}>Chỉnh sửa</div>
        </div>
    )
}

export default userInfoContent