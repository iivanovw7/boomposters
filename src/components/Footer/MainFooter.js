import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import Whatshot from 'material-ui/svg-icons/social/whatshot';
import Upload from 'material-ui/svg-icons/action/backup';
import {bindActionCreators} from 'redux';
import {pageSelector} from "../../actions/index";
import {connect} from 'react-redux';



import '../MainPage.css';

const ActionBar = {
    marginTop: 30,
};

const style = {
    marginTop: 10,
};

const iconStyle = {
    padding: 0,
    borderRadius: 5,
};

const footer = {
    margin: 30,
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

export class MainFooter extends Component {

    render() {
        return (
            <div>
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
                            onClick={() => {
                                window.scrollTo(0, 0);
                                this.props.selectPage('Uploader')
                            }}
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

function mapStateToProps(state) {
    return {
        categories: state.categories,
        vintage: state.vintage,
        selected: state.activeCategory,
        page: state.activePage
    };
}


function mapDispatchToProps(dispatch) {


    return bindActionCreators({

        selectPage: pageSelector

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainFooter);