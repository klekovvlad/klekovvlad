const PageParagraph = (props) => {
    return <div className="content" dangerouslySetInnerHTML={{__html: props.text}}/>
}

export default PageParagraph