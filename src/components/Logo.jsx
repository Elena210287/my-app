import logoSvg from '../logo.svg'

const Logo = (props) => {
    return (
        <div>
            <hr />

            <h2>{props.text}</h2>
            <h2>{props.width}</h2>

            <hr />
            <img src={logoSvg} style={{width: props.width}} alt=""/>
        </div>
    )
}
export default Logo