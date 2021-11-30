import style from '../style/components/userSupportContent.module.sass'
import { SupStaff } from './ui'

const userSupportContent = ({supports}) => {
    return (
        <div className={style.userSupportContent}>
            {!!supports && supports.map( support => 
                <SupStaff support={support} key={support.STAFFID} name={support.SNAME+" "+support.GNAME} phone={support.PHONENO} email={support.EMAIL} active={true} />
            )}
        </div>
    )
}

export default userSupportContent