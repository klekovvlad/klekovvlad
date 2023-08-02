import Fetch from "../../fetch";
import { IDs, WP } from "../../path";
import Loader from "../loader/loader";
import PageParagraph from "../pageParagraph/pageParagraph";
import PageTitle from "../pageTitle/pageTitle";

const {useState, useEffect} = wp.element;


const About = () => {

    let state = Fetch(WP.page, IDs.about)

    if(state) {

        console.log(state)

        return (
            <main className="aboutpage">
                <PageTitle title={state.title.rendered} />
                <PageParagraph text={state.content.rendered} />
            </main>
        )
    }else {
        return <Loader />
    }
}

export default About;