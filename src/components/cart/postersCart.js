import React, {Component} from 'react';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {bindActionCreators} from 'redux';
import {removeFromCart} from '../../actions/index';
import {selectCategory, pageSelector, addToCart} from "../../actions/index";
import IconButton from 'material-ui/IconButton';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
import './postersCart.css';
import '../MainPage.css';
import '../SingleCategory/CategoryWrapper.css';


class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {

            selectedCategory: 'undefined',


        };

    }

    componentWillMount() {

        this.setState({selectedCategory: this.props.selected});
        console.log(this.state.selectedCategory);

    }

    render() {

        const THUMB_URL = 'https://drive.google.com/thumbnail?id=';
        const condition = this.props.selected.name;

        const hasProducts = this.props.cart.length > 0 && this.props.cartShow === true;

        const cartList = this.props.cart.map((item, index) => {

            return <div key={index} className="itemDescription fade-in-element">
                <div className='thumbWrapper'>
                    <img className={''} src={`${THUMB_URL}${item.id}`}/>
                </div>
                <div className={'descrWrapper'}>
                    <p>{item.name}</p>
                </div>
                <div className={'descrWrapper'}>
                    <p>Размер: {item.size}</p>
                </div>
                <div className={'descrWrapper'}>
                    <p>{item.price} ₽</p>
                </div>
                <div className={'descrWrapper'}>
                    <IconButton
                                tooltip="Удалить из корзины"
                                onClick={() => {
                                    this.props.removeFromCart(item);
                                }}>
                        <Cancel/>
                    </IconButton>
                </div>
            </div>
        });

        if (hasProducts) {
            return (

                <div className={'fade-in-element'}>
                    <h2 className="singleTile">Корзина</h2>
                    <div className="cart fade-in-element">
                        <div className={'cartContainer'}>
                            {cartList}
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                </div>
            )
        }


    }
}


function mapStateToProps(state, props) {
    return {
        categories: state.categories,
        selected: state.activeCategory,
        page: state.activePage,
        posters: state.allPosters,
        cart: state.cart,
        cartShow: state.showCart
    };
}

function mapDispatchToProps(dispatch) {


    return bindActionCreators({


        removeFromCart: removeFromCart

    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);









