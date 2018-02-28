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
import TextField from 'material-ui/TextField';
import Menu from 'material-ui/svg-icons/navigation/menu';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import Search from 'material-ui/svg-icons/action/search';
import ActionHome from 'material-ui/svg-icons/action/home';
import CartIcon from 'material-ui/svg-icons/action/shopping-cart';
import Dialog from 'material-ui/Dialog';

const HomeIcon = (props) => (
    <SvgIcon {...props}>
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </SvgIcon>
);

const CartStyle = {
    marginRight: 24,
};


const styles = {

    iconStyles: {
        color: 'rgba(100, 95, 90, 1)',
        textColor: 'rgba(100, 95, 90, 1)',
        margin: 'auto',
        align: 'left'
    },

    barStyle: {
        background: 'rgba(100, 95, 90, 1)',
        color: 'white',
        textColor: 'white',
        hintColor: Colors.white,
        hintStyle: Colors.white,
        hintText: Colors.white,
    },
};

const muiTheme = getMuiTheme({
    palette: {
        background: '#020209',
        textColor: Colors.darkBlack,
        primary1Color: '#020209',
    },
    appBar: {
        background: '#020209',
        height: 50,
    },
});


export default class MobilePanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
        this.state = {openSearch: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    handleChange = (event, index, value) => this.setState({value});

    handleOpenSearch = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            openSearch: true,
            anchorEl: event.currentTarget,
        });
    };

    handleCloseSearch = () => {
        this.setState({
            openSearch: false,
        });
    };





    render() {

        const actions = [
            <FlatButton
                label="ОТМЕНА"
                primary={true}
                onClick={this.handleCloseSearch}
            />,
            <FlatButton
                label="ИСКАТЬ!"
                primary={true}
                onClick={this.handleCloseSearch}
            />,
        ];

        return (

            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <div className={'navBarStyle_2'} style={{ position: 'fixed' }}>
                        <IconButton className={'mobileMenuStyle'} style={styles.iconStyles}>
                            <Menu onClick={this.handleToggle}/>
                        </IconButton>
                        <IconButton onClick={this.handleOpenSearch}>
                            <Search style={CartStyle} />
                        </IconButton>
                        <Dialog
                            title="ПОИСК"
                            actions={actions}
                            modal={false}
                            open={this.state.openSearch}
                            onRequestClose={this.handleCloseSearch}
                        >
                            <TextField
                                hintText="Введите название или имя тэга"
                                //floatingLabelText="Поиск по тэгам"
                                floatingLabelFixed={true}
                            />
                        </Dialog>
                        <IconButton>
                            <CartIcon style={CartStyle} />
                        </IconButton>
                    </div>

                    <Drawer
                        docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}
                    >
                        <h3>Категории</h3>
                        <MenuItem primaryText="Комиксы" />
                        <MenuItem primaryText="Иллюстрации" />
                        <MenuItem primaryText="Сериалы" />
                        <MenuItem primaryText="Аниме" />
                        <MenuItem primaryText="Винтаж" />
                        <MenuItem primaryText="Ч/Б" />
                        <MenuItem primaryText="Музыкальные" />
                        <MenuItem primaryText="Лоу-Арт" />
                        <br/>
                        <h3>Личный кабинет</h3>
                        <MenuItem primaryText="Регистрация" />
                        <MenuItem primaryText="Вход" />
                        <MenuItem onClick={this.handleClose}>Назад</MenuItem>
                    </Drawer>
                </div>
            </MuiThemeProvider>

        );
    }
}

