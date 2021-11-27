import "bootstrap-icons/font/bootstrap-icons.css"
import style from '../../style/ui/branchsContact.module.sass'

const branchsContact = () => {
    return (
        <div className={style.branchsContact}>
            <div className={style.branchsContactTitle}>Liên lạc</div>
            <div className={style.branchPhones}>
                <div className={`${style.phone} ${style.phone1}`}>
                    <i className="bi bi-telephone-forward-fill"></i>
                    <div>0969189947</div>
                </div>
                <div className={`${style.phone} ${style.phone2}`}>
                    <i className="bi bi-telephone-forward-fill"></i>
                    <div>0969189947</div>
                </div>
            </div>
        </div>
    )
}

export default branchsContact