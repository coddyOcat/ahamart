import style from '../style/components/userCreditCardContent.module.sass'
import { CreditCard } from './ui'

const userCreditCardContent = () => {
    return (
        <div className={style.userCreditCardContent}>
            <CreditCard title="Credit Card 1" content="0001 **** **** 0002" active={1}/>
            <CreditCard title="Credit Card 1" content="0001 **** **** 0002" active={0}/>
            <CreditCard title="Credit Card 1" content="0001 **** **** 0002" active={0}/>
            <CreditCard title="Credit Card 1" content="0001 **** **** 0002" active={0}/>
            <CreditCard title="Credit Card 1" content="0001 **** **** 0002" active={0}/>
            <div className={style.navEnd}>+</div>
        </div>
    )
}

export default userCreditCardContent