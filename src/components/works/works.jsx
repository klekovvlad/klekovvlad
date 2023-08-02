import Fetch from "../../fetch"
import { SetActiveClass, Sort } from "../../funtions"
import { IDs, WP } from "../../path"
import Loader from "../loader/loader"
import PageTitle from "../pageTitle/pageTitle"
import WorkItem from "../workItem/workItem"
const {useState, useEffect} = wp.element;

import './works.scss';

const settings = {
    postPerPage: 6,
}

const Works = () => {

    const [posts, setPosts] = useState([])
    const [curentCategory, setCurentCategory] = useState(false);
    let parentCategory = Fetch(WP.category, IDs.worksParentCategory)
    let categories = Fetch(`${WP.category}?parent=`, IDs.worksParentCategory)
    
    useEffect(() => {
        fetch(`${WP.posts}?per_page=${settings.postPerPage}&categories=${IDs.worksParentCategory}&page=1`)
        .then(response => response.json())
        .then(data => {
            setPosts(data);
        })
    }, [])

    const GetPost = (id, page) => {
        fetch(`${WP.posts}?per_page=${settings.postPerPage}&categories=${id}&page=${page}`)
        .then(response => response.json())
        .then(data => {
            setPosts(data);
        })

    }
   
    if(parentCategory && categories && posts) {

        
        if(!curentCategory) {
            setCurentCategory(parentCategory)
        }

        const postsItems = () => {
            if(posts.length > 0) {
                
                let array = []

                posts.forEach(post => {
                    let category = 'Без категории'
                    for(let i = 0; i < categories.length; i++) {
                        if(categories[i].id === post.categories[0]) {
                            category = categories[i].name;
                        }
                    }
                    array.push(<WorkItem title={post.title.rendered} img={post.fimg_url} link={post.link} category={category}/>)
                });
                
                return array
            } else {
                return 'Ничего не найдено'
            }
        }
        
        categories = Sort(categories, 'id');

        let categoriesButtons = categories.map(category => (
            <button 
            className="category button" 
            onClick={(e) => {
                    GetPost(category.id, 1) 
                    SetActiveClass(e.target)
                    setCurentCategory(category)
                }}>
                {category.name}
            </button>
        ))

        const GetPagination = (curentCategory) => {
            let pagesCount = Math.ceil(curentCategory.count / settings.postPerPage)

            if(pagesCount > 1) {
                let pagintation = []
                for(let i = 1; i <= pagesCount; i++) {
                    let active = '';
                    if(i === 1) {
                        active = ' active'
                    }
                    pagintation.push(<button 
                                        className={'pagination' + active} 
                                        onClick={(e) => {
                                            GetPost(curentCategory.id, i);
                                            SetActiveClass(e.target)
                                        }}>
                                            {i}
                                    </button>)
                }
    
                return <div className="paginations">{pagintation}</div>
            }else {
                return null
            }
        }
        
        return (
            <main className="workspage">
                <PageTitle title={parentCategory.name} />
                <div className="categories">
                    <button 
                    className="category button active" 
                    onClick={(e) => {
                            GetPost(IDs.worksParentCategory, 1);
                            SetActiveClass(e.target)
                            setCurentCategory(parentCategory)
                        }}>
                            Все
                        </button>
                    {categoriesButtons}
                </div>
                <div className="works-wrapper">
                    {postsItems()}
                </div>
                {GetPagination(curentCategory)}
            </main>
        )
    }else {
        return <Loader />
    }
}

export default Works