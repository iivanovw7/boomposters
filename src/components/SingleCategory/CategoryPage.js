import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavBar from "../Navigation/NavBar";
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Whatshot from 'material-ui/svg-icons/social/whatshot';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import Upload from 'material-ui/svg-icons/action/backup';
import MobileSidebar from '../Navigation/MobilePanel';
import Categories from '../Categories';
import {bindActionCreators} from 'redux';
import {selectCategory, pageSelector} from "../../actions/index";
import ScrollToTop from 'react-scroll-up';
import UpArrow from 'material-ui/svg-icons/file/file-upload';
import CategoryWrapper from '../CategoryWrapper.js';


class CategoryPage extends Component {

    constructor(props) {
        super(props);
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
                <div className={'row'}>
                    <span className={'separatorMobile'}><h2>BOOMPOSTERS.RU</h2></span>
                </div>
                <div>
                    <img className='separator' src={'../src/img/razdelitel.png'}/>
                    <span className={'separatorMobile'}><h2>BOOMPOSTERS.RU</h2></span>
                </div>
                <div className="actionIconsContainer flexWrapper">
                    <div><img src="../../../src/icons/actionB/hdmovie.svg" alt="HD качество"/><br></br>
                        <h2>ОТЛИЧНОЕ КАЧЕСТВО</h2></div>
                    <div><img src="../../../src/icons/actionB/upload.svg" alt="Загрузка изображений"/><br></br>
                        <h2>ВАШЕ ИЗОБРАЖЕНИЕ</h2></div>
                    <div><img src="../../../src/icons/actionB/delivery.svg" alt="Доставка"/><br></br>
                        <h2>ДОСТАВКА ПО РФ</h2></div>
                    <div><img src="../../../src/icons/actionB/ok.svg" alt="Легко и просто"/><br></br>
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
                                <img src="../../../src/icons/vk.svg" width="40" height="40" alt="vk"/>
                            </IconButton>
                            <IconButton style={iconStyle}>
                                <img src="../../../src/icons/inst.svg" width="38" height="38" alt="instagram"/>
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


        )
    }
}