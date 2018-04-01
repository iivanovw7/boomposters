import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import _ from 'lodash';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {connect} from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import SvgIcon from 'material-ui/SvgIcon';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {bindActionCreators} from 'redux';
import {selectCategory, pageSelector} from "../../actions/index";


import './NavBar.css';

const iconStyles = {
    marginRight: 24,
};

const HomeIcon = (props) => (
    <SvgIcon {...props}>
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </SvgIcon>
);

const CartIcon = (props) => (
    <SvgIcon {...props}>
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
    </SvgIcon>
);

const style = {};
const texture = {
    backgroundColor: '#645f5b'
};



class NavBar extends React.Component {



    getCategories() {
        return _.map(this.props.categories, category => {
            return (
                <MenuItem className='' key={category.id} primaryText={category.title}
                          onClick={() => {
                              this.props.selectCategory(category);
                }}>
                </MenuItem>
            );

        });
    }



    render() {
        return (

            <Toolbar className="navBar" style={texture}>
                <ToolbarGroup firstChild={true}>
                    <IconMenu
                        iconButtonElement={
                            <IconButton touch={true}>
                                <NavigationExpandMoreIcon />
                            </IconButton>
                        }
                    >
                        { this.getCategories() }
                    </IconMenu>
                    <RaisedButton label="Главная" style={style} onClick={() =>  this.props.selectPage('MainPage') }  />
                    <RaisedButton label="Свой постер" style={style} onClick={() =>  this.props.selectPage('Uploader') }  />
                </ToolbarGroup>
                <ToolbarGroup>
                    <IconButton> <HomeIcon style={iconStyles} /> </IconButton>
                    <TextField
                        hintText="ИСКАТЬ ПОСТЕРЫ"
                        //floatingLabelText="Поиск по тэгам"
                        floatingLabelFixed={true}
                    /><br />
                    <ToolbarSeparator />
                    <RaisedButton label="Войти" style={style} />
                    <RaisedButton label="Регистрация" style={style} />
                    <IconButton> <CartIcon style={iconStyles} /> </IconButton>
                </ToolbarGroup>
            </Toolbar>

        );
    }
}


NavBar.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        categories: state.categories,
        vintage: state.vintage,
        selected: state.activeCategory,
        page: state.activePage
    };
}

NavBar.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {


    return bindActionCreators({

        selectCategory: selectCategory,
        selectPage: pageSelector

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);