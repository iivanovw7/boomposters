import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { CategoryWrapper } from './CategoryWrapper.js';
import RaisedButton from 'material-ui/RaisedButton';
import { bindActionCreators } from 'redux';
import { selectCategory } from "../actions/index"


import './NavBar.css';
import './MainPage.css';

const CAT_URL = '../src/img/categories/';

const style = {
    marginTop: 20,
};



export class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showList: true
        };

    }


    handleHideList = () => this.setState({showList: false});

    handleShowList = () => this.setState({showList: true});




    renderCategories() {

        let images = [];

        function getRandomArray(min,max){
            let A= [];
            while(max>= min) A.push(max--);
            A.sort(function(){return .5- Math.random()});
            return A;
        }

        function getRandomArbitrary(min, max) {
            return Math.round(Math.random() * (max - min) + min);
        }



        images = getRandomArray(1,4);

        return _.map(this.props.categories, category => {
            return (
                <div className='' key={category.id}>
                    <div key={category.id} className="wrapper">
                        <a onClick={this.handleHideList}><img className={'hover01'}
                                src={`${CAT_URL}${category.image_pref}${getRandomArbitrary(1,4)}${category.image_post}`}
                                onClick={() => this.props.selectCategory(category.name)}
                        /></a>
                        {category.title}
                    </div>
                </div>
            );

        });
    }

    showMenu() {
        return (
            <div style={style}>
                <RaisedButton
                    className={'actionButton'}
                    label="Категории"
                    labelPosition="before"
                    onClick={this.handleShowList}
                />
            </div>
        )
    }

    render() {

        return (
            <div>
            {
                this.state.showList ?
                <div className='categories'>
                    {this.renderCategories()}
                </div>
                :
                <div>
                    {this.showMenu()}
                    <CategoryWrapper />
                </div>
            }
            </div>
        );

    }

}







function mapStateToProps(state) {
    return {
        categories: state.categories
    };
}

function mapDispatchToProps(dispatch) {

    //whenever selectBook is called,
    // the result should be passed to all of our reducers
    return bindActionCreators({

        selectCategory: selectCategory

    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Categories);

