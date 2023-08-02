import { NavLink } from "react-router-dom";
import './box.scss';

const Box = (props) => {

    const BoxEl = (el) => {
        if(props.props[el]) {
            return <div className={'box-' + el}>{props.props[el]}</div>
        }else{
            return null
        }
    }

    const BoxImg = () => {
        
        if(props.props.imgs) {
            let imgs = []
            props.props.imgs.map(img => {
                imgs.push(<img src={img.url} alt={img.alt}/>)
            })
            return (
                <div className="box-content-imgs">
                    {imgs}
                </div>
            )
        }else {
            return null
        }
    }

    const BoxHTML = () => {
        if(props.props.content) {
            let content = []
            props.props.content.map(item => {
                content.push(<div className="box-content-inner" dangerouslySetInnerHTML={{__html: item.item}}/>)
            })
            return content
        } else {
            return null
        }
    }

    const BoxClass = () => {
        let classes = ''
        if(props.props.desc || props.props.imgs.length > 1 || props.props.content.length > 1) {
            classes = classes + ' box-wide'
        }
        if(props.props.desc) {
            classes = classes + ' box-row'
        }

        return classes
    }

    console.log(props.props)

    const BoxInner = () => {
        if(BoxEl('subtitle') || BoxEl('title') || BoxEl('desc')) {
            return (
                <div className="box-content-text">
                    {BoxEl('subtitle')}
                    {BoxEl('title')}
                    {BoxEl('desc')}
                </div>
            )
        }else {
            return null
        }
    }

    const BoxContent = () => {
        return (
            <div className="box-content">
                {BoxHTML()}
                {BoxImg()}
                {BoxInner()}
            </div>
        )
    }

    
    if(props.props.url) {
        return (
            <NavLink to={props.props.url} className={'box' + BoxClass()}>
                {BoxContent()}
            </NavLink>
        )
    }else {
        return (
            <div className={'box ' + BoxClass()}>
                {BoxContent()}
            </div>
        )
    }
}

export default Box;