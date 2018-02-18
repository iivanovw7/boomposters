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

    componentDidMount(){
        const ele = document.getElementById('ipl-progress-indicator');
        if(ele){
            setTimeout(() => {
                ele.classList.add('available');
                setTimeout(() => {
                    ele.outerHTML = ''
                }, 2000)
            }, 1000)
        }
    }

    renderCategories() {
        return _.map(this.props.categories, category => {
            return (
                <div className='' key={category.id}>
                    <div key={category.id} className="wrapper">
                        <a href={"/"}><img src={`${CAT_URL}${category.image}`}/></a>
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
                        <div>
                            <NavBar/>
                        </div>
                        <div className="row">
                            <div className="logo">
                                <a href={"/"}><img className="logo" src={'../src/img/logo.png'}/></a>
                            </div>
                            <div className='separator'>
                                <img className='separator' src={'../src/img/razdelitel.png'}/>
                            </div>
                        </div>
                        <div>
                            <div className='categories'>
                                {this.renderCategories()}
                            </div>
                        </div>
                        <div className='separator'>
                            <img className='separator' src={'../src/img/razdelitel.png'}/>
                        </div>
                        <div className="actionIconsContainer">
                            <div><img src="../../src/icons/actionB/hdmovie.svg" width="100" height="100" alt="HD качество"/><br></br>
                                <h3>ОТЛИЧНОЕ КАЧЕСТВО</h3></div>
                            <div><img src="../../src/icons/actionB/upload.svg" width="100" height="100"
                                      alt="Загрузка изображений"/><br></br>
                                <h3>ВАШЕ ИЗОБРАЖЕНИЕ</h3></div>
                            <div><img src="../../src/icons/actionB/delivery.svg" width="100" height="100"
                                      alt="Доставка"/><br></br>
                                <h3>ДОСТАВКА ПО РФ</h3></div>
                            <div><img src="../../src/icons/actionB/ok.svg" width="100" height="100"
                                      alt="Легко и просто"/><br></br>
                                <h3>ЛЕГКО И ПРОСТО</h3></div>
                        </div>
                        <div className='row' style={ActionBar}>
                            <div className="col-12 col-sm-6 col-md-8 textContainer">
                                <div className={"textContainer"}>
                                    <h2>Магазин улётных постеров</h2>
                                    <ul>
                                        <li>Отличное качество печати</li>
                                        <li>Плакаты и картины с вашими изображениями</li>
                                        <li>Быстрое изготовление</li>
                                        <li>Каталог лучших постеров на стену</li>
                                        <li>Лучший арт со всей сети</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-4" >
                                <RaisedButton
                                    label="ТОП-25 ЛУЧШИХ"
                                    labelPosition="before"
                                    icon={<Whatshot />}
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
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3">
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
