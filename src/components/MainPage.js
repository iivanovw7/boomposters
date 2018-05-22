import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavBar from "./Navigation/NavBar";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MobileSidebar from './Navigation/MobilePanel';
import Categories from './Categories';
import {bindActionCreators} from 'redux';
import {selectCategory, pageSelector} from "../actions/index";
import ScrollUp from './Functions/ScrollUp';
import Footer from './Footer/MainFooter';
import axios from 'axios'




import './Navigation/NavBar.css';
import './MainPage.css';


const style = {
    marginTop: 10,
};


class MainPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            boomPosters: []
        }
    }


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

        {
            this.props.selectPage('MainPage');


            /*

            let self = this;
            axios.get(`http://localhost:8181/posters`)
                .then(function (response) {
                    console.log(response);
                    self.setState({boomPosters : response.data})
                })
                .catch(function (error) {
                    console.log(error)
                });

            console.log(this.state.boomPosters)

             */

        }


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
                <div>
                    <Categories/>
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
                <Footer/>
                <ScrollUp/>
            </div>

        );
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

MainPage.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {


    return bindActionCreators({

        selectCategory: selectCategory,
        selectPage: pageSelector

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

