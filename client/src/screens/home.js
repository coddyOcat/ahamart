import { Link } from 'react-router-dom'

import { HomeContent, HomeHeader, NavRegister } from '../components'
import { Brand } from '../components/ui'

import style from '../style/screens/home.module.sass'
import image from '../assets'

const HomeScreen = () => {
    return (
        <div className={style.homeScreen}>
            <HomeHeader>
                <Brand />
                <img className={style.headerImg} src={image.supermarket}/>
            </HomeHeader>
            <HomeContent>
                <div className={style.welcome}>Hãy đăng ký <strong>thẻ thành viên</strong> để nhanh tay sở hữu nhiều quà tặng và ưu đãi của chuỗi siêu thị chúng tôi!!</div>
                <div className={style.devMember}>
                    <div className={style.tilte}>Nhóm phát triển</div>
                    <div className={style.members}>
                        <div className={style.member}>
                            <img className={style.avatar} src={image.bao} />
                            <div className={style.memberName}>Đặng Hoài Bão - 1912697</div>
                        </div>
                        <div className={style.member}>
                            <img className={style.avatar} src={image.phong} />
                            <div className={style.memberName}>Chung Đông Phong- 1911837</div>
                        </div>
                        <div className={style.member}>
                            <img className={style.avatar} src={image.huy} />
                            <div className={style.memberName}>Nguyễn Quang Huy - 1916081</div>
                        </div>
                        <div className={style.member}>
                            <img className={style.avatar} src={image.tri} />
                            <div className={style.memberName}>Hồ Đức Trí - 1912288</div>
                        </div>
                    </div>
                </div>
            </HomeContent>
            <NavRegister />
            <Link to="/branch" className={style.rightNav}/>
        </div>
    )
}

export default HomeScreen