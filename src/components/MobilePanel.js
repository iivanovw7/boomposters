import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import './MobilePanel.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';


const iconStyles = {
    color: 'white',
    textColor: 'white',
    margin: 'auto',
    align: 'right'
};


const barStyle = {
    background: '#373a3c',
};

const muiTheme = getMuiTheme({
    palette: {
        background: '#373a3c',
        textColor: Colors.darkBlack,
        primary1Color: '#373a3c',
    },
    appBar: {
        background: '#373a3c',
        height: 50,
    },
});


export default class MobilePanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});


    render() {
        return (

            <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                <AppBar className={'navBarStyle'}
                        style={barStyle}
                        onClick={this.handleToggle}>
                    <FlatButton
                        style={iconStyles}
                        icon={<ShoppingCart/>}
                    />
                </AppBar>

                <Drawer open={this.state.open}>
                    <MenuItem primaryText="Комиксы" />
                    <MenuItem primaryText="Иллюстрации" />
                    <MenuItem primaryText="Сериалы" />
                    <MenuItem primaryText="Аниме" />
                    <MenuItem primaryText="Винтаж" />
                    <MenuItem primaryText="Ч/Б" />
                    <MenuItem primaryText="Музыкальные" />
                    <MenuItem primaryText="Лоу-Арт" />
                </Drawer>

            </div>
            </MuiThemeProvider>
        );
    }
}