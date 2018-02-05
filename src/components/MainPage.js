import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import NavBar from "./NavBar";
import BodyImages from 'react-body-images';
import './MainPage.css';
import RaisedButton from 'material-ui/RaisedButton';
import './NavBar.css';
import IconButton from 'material-ui/IconButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import SvgIcon from 'material-ui/SvgIcon';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import FlatButton from 'material-ui/FlatButton';

const VkIcon = (props) => (
    <SvgIcon {...props}>

    </SvgIcon>
);

const iconStyles = {
    marginRight: 24,
};

const style = {
    marginTop: 10,
};

const topChart = {
    marginTop: 20,
};

const iconStyle = {
    padding: 0,
    borderRadius: 5,
};

const footer =  {
    margin: 10,
};

const CAT_URL = '../src/img/categories/';


class CategoriesList extends Component {





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
        return { muiTheme: getMuiTheme(darkBaseTheme) };
    }

    render() {

        const backgroundImages = ["../src/img/background2.jpg"];


        return (

            <BodyImages className='home' bgImageArray={backgroundImages}>
                <div style={style}>
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
                        <div><img src={'../src/img/star.png'}/><br></br>
                            <h3>HD качество печати</h3></div>
                        <div><img src={'../src/img/cloud-computing.png'}/><br></br>
                            <h3>Ваше изображение</h3></div>
                        <div><img src={'../src/img/delivery-truck.png'}/><br></br>
                            <h3>Все регионы РФ</h3></div>
                        <div><img src={'../src/img/thumbs-up-hand-symbol.png'}/><br></br>
                            <h3>Легко и просто</h3></div>
                    </div>
                    <div  className='row' style={style}>
                        <div className="col-12 col-sm-6 col-md-8 textContainer">
                            <div className={"textContainer"}>
                                <h2>Магазин улётных постеров</h2>
                                <ul>
                                    <li>Отличное качество печати</li>
                                    <li>Плакаты и картины с вашими изображениями</li>
                                    <li>Быстрое изготовление</li>
                                    <li>Каталог лучших постеров на стену</li>
                                    <li>Лучшый арт со всей сети</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6 col-md-4">
                            <RaisedButton label="ТОП-25 НАШИХ ЛУЧШИХ ПОСТЕРОВ" style={topChart} />
                        </div>
                    </div>
                    <div style={footer}>
                        <div className={'socialPane'}>
                            <div>
                                <IconButton style={iconStyle}>
                                    <img src="../../src/icons/vk.svg" width="40" height="40" alt="vk" />
                                </IconButton>
                                <IconButton style={iconStyle}>
                                    <img src="../../src/icons/inst.svg" width="40" height="40" alt="instagram" />
                                </IconButton>
                            </div>
                        </div>
                        <div>
                            <p style={style}>© 2018 BOOMPOSTERS.RU ALL RIGHTS RESERVED</p>
                        </div>
                    </div>
                </div>
            </BodyImages>
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
