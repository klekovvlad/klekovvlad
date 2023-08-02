import Box from "../box/box";
import './main.scss'

const Main = (props) => {

    let boxs = props.props.boxs.map(box => <Box props={box} />)

    return (
        <main className="mainpage">
            {boxs}
        </main>
    )
}

export default Main;