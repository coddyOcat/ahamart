import Map from 'google-map-react'

import "bootstrap-icons/font/bootstrap-icons.css";
import style from '../../style/ui/branchsAdd.module.sass'

const branchsAdd = () => {
    return (
        <div className={style.branchsAdd}>
            <div className={style.branchsAddTitle}>Địa chỉ</div>
            <div className={style.mapBorder}>
                <div className={style.branchAdd}>
                    <i class="bi-geo-alt"></i>
                    <div>Thủ Đức, TP.Hồ Chí Minh</div>
                </div> 
                <Map
                    defaultZoom={8}
                    defaultCenter={{ lat: 10.762622, lng: 106.660172 }}
                    options={{controlSize: 20}}
                />
            </div>
        </div>
    )
}

export default branchsAdd;