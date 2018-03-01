import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import NavBar from "./NavBar";
import './MainPage.css';
import RaisedButton from 'material-ui/RaisedButton';
import './NavBar.css';
import IconButton from 'material-ui/IconButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Whatshot from 'material-ui/svg-icons/social/whatshot';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import Upload from 'material-ui/svg-icons/action/backup';
import MobileSidebar from './MobilePanel';




const style = {
    marginTop: 10,
};


const styles = {
    button: {
        margin: 12,
    },
    exampleImageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
    },
};

const ActionBar = {
    marginTop: 30,
};

const topChart = {
    marginTop: 20,
};

const iconStyle = {
    padding: 0,
    borderRadius: 5,
};

const footer = {
    margin: 30,
};

const CAT_URL = '../src/img/categories/';


class CategoriesList extends Component {

    componentDidMount() {
        const ele = document.getElementById('ipl-progress-indicator');
        if (ele) {
            setTimeout(() => {
                ele.classList.add('available');
                setTimeout(() => {
                    ele.outerHTML = ''
                }, 3000)
            }, 2000)
        }
    }

    renderCategories() {

        let images = [];

        function getRandomArray(min,max){
            let A= [];
            while(max>= min) A.push(max--);
            A.sort(function(){return .5- Math.random()});
            return A;
        }

        function getRandomArbitrary(min, max) {
            return Math.round(Math.random() * (max - min) + min);
        }

        images = getRandomArray(1,4);

        return _.map(this.props.categories, category => {
            return (
                <div className='' key={category.id}>
                    <div key={category.id} className="wrapper">
                        <a href={"/"}><img className={'hover01'}  src={`${CAT_URL}${category.image_pref}${getRandomArbitrary(1,4)}${category.image_post}`}/></a>
                        {category.title}
                    </div>
                </div>
            );

        });

    }

    getChildContext() {
        return {muiTheme: getMuiTheme(darkBaseTheme)};
    }

    render() {

        const backgroundImages = ["../src/img/background2.jpg"];


        return (


            <div style={style} className={"mainContainer"}>
                <div className={'mobileNavigation'}>
                    <MobileSidebar/>
                </div>
                <div className={'navigation'}>
                    <NavBar/>
                </div>
                <div className="row">
                    <section>
                        <div className="logo">
                            <a href={"/"}><img className="logo" src={'../src/img/logo.png'}/></a>
                        </div>
                    </section>
                    <div>
                        <img className='separator' src={'../src/img/razdelitel.png'}/>
                        <span className={'separatorMobile'}><h2>BOOMPOSTERS.RU</h2></span>
                    </div>
                </div>
                <div>
                    <div className='categories'>
                        {this.renderCategories()}
                    </div>
                </div>
                <div>
                    <img className='separator' src={'../src/img/razdelitel.png'}/>
                    <span className={'separatorMobile'}><h2>BOOMPOSTERS.RU</h2></span>
                </div>
                <div className="actionIconsContainer flexWrapper">
                    <div><img src="../../src/icons/actionB/hdmovie.svg" alt="HD качество"/><br></br>
                        <h2>ОТЛИЧНОЕ КАЧЕСТВО</h2></div>
                    <div><img src="../../src/icons/actionB/upload.svg" alt="Загрузка изображений"/><br></br>
                        <h2>ВАШЕ ИЗОБРАЖЕНИЕ</h2></div>
                    <div><img src="../../src/icons/actionB/delivery.svg" alt="Доставка"/><br></br>
                        <h2>ДОСТАВКА ПО РФ</h2></div>
                    <div><img src="../../src/icons/actionB/ok.svg" alt="Легко и просто"/><br></br>
                        <h2>ЛЕГКО И ПРОСТО</h2></div>
                </div>
                <div className='flexWrapper' style={ActionBar}>
                    <div>
                        <div className={"textContainer"}>
                            <h2>Магазин улётных постеров BOOMPOSTERS.RU</h2>
                            <ul className={'textContainerLine'}>
                                <li>Отличное качество печати</li>
                                <li>Плакаты и картины с вашими изображениями</li>
                                <li>Быстрое изготовление</li>
                                <li>Каталог лучших постеров на стену</li>
                                <li>Лучший арт со всей сети</li>
                            </ul>
                        </div>
                    </div>
                    <div className={"flexColumn"}>
                        <RaisedButton
                            className={'actionButton'}
                            label="ТОП 25 ЛУЧШИХ ПОСТЕРОВ"
                            labelPosition="before"
                            icon={<Whatshot/>}
                            style={styles.button}
                        />
                        <RaisedButton
                            className={'actionButton'}
                            label="ЗАКАЗАТЬ НАШИ ПОСТЕРЫ"
                            labelPosition="before"
                            icon={<ShoppingCart/>}
                            style={styles.button}
                        />
                        <RaisedButton
                            className={'actionButton'}
                            label="ЗАГРУЗИТЬ ИЗОБРАЖЕНИЕ"
                            labelPosition="before"
                            icon={<Upload/>}
                            style={styles.button}
                        />
                    </div>
                </div>
                <div style={footer}>
                    <div className={'socialPane'}>
                        <div>
                            <IconButton style={iconStyle}>
                                <img src="../../src/icons/vk.svg" width="40" height="40" alt="vk"/>
                            </IconButton>
                            <IconButton style={iconStyle}>
                                <img src="../../src/icons/inst.svg" width="38" height="38" alt="instagram"/>
                            </IconButton>
                        </div>
                    </div>
                    <div className="flexColumn">
                        <div className="Copyright">
                            <div style={style}>© 2018 BOOMPOSTERS.RU ALL RIGHTS RESERVED</div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }

}

function mapStateToProps(state) {
    return {
        categories: state.categories
    };
}

CategoriesList.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(CategoriesList);

/*



 <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>



 */
