import React, {Component} from 'react';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {selectCategory, pageSelector} from "../../actions/index";
import {bindActionCreators} from 'redux';

import './Navigation/NavBar.css';
import './MainPage.css';
import './CategoryWrapper.css';


const style = {
};

class phoneWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryName: 'undefined',
        };

    }


    render() {


        if (!this.props.selected) {
            return (
                <div style={style}>
                    <RaisedButton
                        className={'actionButton'}
                        label="На главную"
                        labelPosition="before"
                        href={"/"}
                    />
                </div>
            )
        }

        return (

            <div>
                <h2 className="wrapper">{this.props.selected.title}</h2>
                <span>{this.props.selected.description}</span>
                <div> {this.renderThumbnails()} </div>
            </div>

        );
    }

}


function mapStateToProps(state) {
    return {
        categories: state.categories,
        selected: state.activeCategory,
        page: state.activePage,
        posters: state.allPosters
    };
}

function mapDispatchToProps(dispatch) {


    return bindActionCreators({

        selectCategory: selectCategory,
        selectPage: pageSelector,


    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(phoneWrapper);