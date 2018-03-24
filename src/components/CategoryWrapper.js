import React, {Component} from 'react';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {selectCategory, pageSelector} from "../actions/index";
import {bindActionCreators} from 'redux';
import _ from 'lodash';
import ArrowBack from 'material-ui/svg-icons/navigation/chevron-left';
import ArrowForward from 'material-ui/svg-icons/navigation/chevron-right';


import './Navigation/NavBar.css';
import './MainPage.css';
import './CategoryWrapper.css';


const style = {
};

class CategoryWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryName: 'undefined',
            AllPosters: {}
        };

    }

    showMenu() {
        return (
            <div className={'showMenu'}>
                <div>
                </div>
                <div>
                    <RaisedButton
                        className={'pageButton'}
                        icon={<ArrowBack />}
                        value={1}
                        labelPosition="before"
                        onClick={console.log(this.props.selected)}
                    />
                    <RaisedButton
                        className={'pageButton'}
                        icon={<ArrowForward />}
                        value={2}
                        labelPosition="before"
                    />
                </div>
            </div>

        )
    }


    renderThumbnails() {

        const THUMB_URL = 'https://drive.google.com/thumbnail?id=';
        const condition = this.props.selected.name;
        let posters = this.props.posters;
        //let newArray = this.state.arr.slice();
        //this.setState({ AllPosters: [...this.state.AllPosters, posters] });




        console.log(posters);
        console.log(condition);

        return (
            <div className="grid">

                { _.map(posters, poster => {
                    if (poster.title === condition) {
                        return (
                            <div className='' key={poster.number}>
                                <img className={'hover01'} src={`${THUMB_URL}${poster.id}`}/>
                            </div>
                        )
                    }
                })}
            </div>
        )
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


export default connect(mapStateToProps, mapDispatchToProps)(CategoryWrapper);

/*

<div className="grid">
                { _.map(this.props.vintage, poster => {

                return (
                <div className='' key={poster.number}>
                <img className={'hover01'} src={`${THUMB_URL}${poster.id}`}/>
                </div>
                )

            })}
            </div>




 */