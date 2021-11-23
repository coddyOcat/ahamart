import style from '../../style/ui/brand.module.sass'
import image from '../../assets'

const brand = () => {
    return (
        <div className={style.brand}>
            <img className={style.brandLogo} src={image.brandLogo} />
            <div className={style.brandName}>ahamart</div>
        </div>
    )
}

export default brand;