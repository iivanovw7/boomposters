import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import CategoryWrapper from './SingleCategory/CategoryWrapper.js';
import RaisedButton from 'material-ui/RaisedButton';
import {bindActionCreators} from 'redux';
import {selectCategory, pageSelector} from "../actions/index";
import { Uploader } from './UploadPoster.js'
import Whatshot from 'material-ui/svg-icons/social/whatshot';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import Upload from 'material-ui/svg-icons/action/backup';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';



import './Navigation/NavBar.css';
import './MainPage.css';
import './Categories.css';

const CAT_URL = '../src/img/categories/';

const style = {
    marginTop: 20,
};


export class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showLogo: true,
        };

    }

    componentDidMount() {
        {this.props.selectCategory(null);}
    }


    handleHideLogo = () => this.setState({showLogo: false});
    handleShowLogo = () => this.setState({showLogo: true});

    logoWrapper() {
        if (this.props.page === 'Uploader') {
            return (
                <Uploader/>
            )
        }
        if (this.props.page !== 'MainPage' || this.showLogo === false) {
            return (
                <div>
                    <CategoryWrapper/>
                </div>
            )
        }
        else {
            return (
                <section>
                    <div className="logo fade-in-element">
                        <a href={"/"}><img className="logo" src={'../src/img/logo.png'}/></a>
                    </div>
                    <img className='separator' src={'../src/img/razdelitel.png'}/>
                </section>
            )
        }
    }

    mainWrapper() {


        if (this.props.selected === null) {
            return (
                null
            )}
        else {
                return (
                    <div>
                        <CategoryWrapper/>
                        <p>{this.props.selected.name}</p>
                    </div>
                )
            }

    }

    renderCategories() {

        let images = [];

        function getRandomArray(min, max) {
            let A = [];
            while (max >= min) A.push(max--);
            A.sort(function () {
                return .5 - Math.random()
            });
            return A;
        }

        function getRandomArbitrary(min, max) {
            return Math.round(Math.random() * (max - min) + min);
        }


        images = getRandomArray(1, 4);

        return _.map(this.props.categories, category => {
            return (
                <div key={category.id}>
                    <div key={category.id} className="wrapper">
                        <a><img
                                src={`${CAT_URL}${category.image_pref}${getRandomArbitrary(1, 4)}${category.image_post}`}
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                    this.props.selectCategory(category);
                                    this.handleHideLogo()
                                }}
                        /></a>
                        <div className={'hover01'}
                             onClick={() => {
                                 window.scrollTo(0, 0);
                                 this.props.selectCategory(category);
                                 this.handleHideLogo()
                             }}>{category.title}</div>
                    </div>
                </div>
            );

        });
    }

    render() {

        return (
            <div className="row">
                    {this.logoWrapper()}
                <span className={'separatorMobile'}><h2>BOOMPOSTERS.RU</h2></span>
                <div className='categories'>
                    {this.renderCategories()}
                </div>
            </div>
        );

    }

}


function mapStateToProps(state) {
    return {
        categories: state.categories,
        selected: state.activeCategory,
        page: state.activePage
    };
}

function mapDispatchToProps(dispatch) {


    return bindActionCreators({

        selectCategory: selectCategory,
        selectPage: pageSelector

    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Categories);

