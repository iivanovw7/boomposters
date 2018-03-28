import React, {Component} from 'react';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {selectCategory, pageSelector} from "../../actions/index";
import {bindActionCreators} from 'redux';
import _ from 'lodash';
import ArrowBack from 'material-ui/svg-icons/navigation/chevron-left';
import ArrowForward from 'material-ui/svg-icons/navigation/chevron-right';
import Description from './description';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';



import '../Navigation/NavBar.css';
import '../MainPage.css';
import './CategoryWrapper.css';


const style = {
    backgroundImage: 'https://drive.google.com/thumbnail?id=1qNhOoqEeQw31aogz6fisTvJxTcAXQG0l&sz=w400-h400'
};

const texture = {
    backgroundColor: '#645f5b',
    width: 300,
};


class CategoryWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {

            width: props.width,

            categoryName: 'undefined',
            posterID: null,
            filename: null,
            PosterName: null,
            tags: [],
            PosterNumber: null,
            phoneSelected: false,

            //Current Item specs
            type: 1,
            size: 'А3',
            price: 0,


        };

    }


    handleType = (event, index, type) => this.setState({type});
    handleSize = (event, index, size) => this.setState({size});

    componentWillMount(){
        this.setState({width: window.innerWidth});
    }




    SelectedPoster = (id, category, name, tags, filename, number) =>
        this.setState({
            posterID: id,
            categoryName: category,
            filename: filename,
            PosterName: name,
            tags: tags,
            PosterNumber: number,
        });

    phoneCheck(category) {
        if (category === 'phones') {
            return (
                this.setState ({phoneSelected: true})
            )
        }
        else (
            this.setState ({phoneSelected: false})
        )
    }


    showMenu() {
        return (
            <div className={'showMenu'}>
                <div>
                </div>
                <div>
                    <RaisedButton
                        className={'pageButton'}
                        icon={<ArrowBack/>}
                        value={1}
                        labelPosition="before"
                        onClick={console.log(this.props.selected)}
                    />
                    <RaisedButton
                        className={'pageButton'}
                        icon={<ArrowForward/>}
                        value={2}
                        labelPosition="before"
                    />
                </div>
            </div>

        )
    }

    mapTags() {

        return (
            <div><strong>Тэги: </strong>
                {_.map(this.state.tags, tag => {
                return (
                    <span key={tag} className={'tags'}>{tag+" "}</span>
                )})
                }
            </div>
        )

    }


    renderThumbnails() {

        const THUMB_URL = 'https://drive.google.com/thumbnail?id=';
        const condition = this.props.selected.name;
        let posters = this.props.posters;

        return (

            <div className="grid">

                {_.map(posters, poster => {
                    if (poster.title === condition) {
                        return (
                            <div className='hover02' key={poster.number}>
                                <img className={''} src={`${THUMB_URL}${poster.id}`}
                                     onClick={() => {
                                         window.scrollTo(0, 0);
                                         this.phoneCheck(condition);
                                         this.SelectedPoster(poster.id,
                                             condition,
                                             poster.name,
                                             poster.tags,
                                             poster.filename,
                                             poster.number);
                                     }}
                                />
                            </div>
                        )
                    }
                })}
            </div>
        )
    }

    renderSingle() {

        const THUMB_URL_PREF = 'https://drive.google.com/thumbnail?id=';
        const THUMB_URL_POST_LARGE = '&sz=w450-h450';


        if (this.state.width >= 1000) {
            return (
                <div className={'hover03'}>
                    <img src={`${THUMB_URL_PREF}${this.state.posterID}${THUMB_URL_POST_LARGE}`}/>
                </div>
            )
        }
        else {
            return (
                <div className={'hover03'}>
                    <img src={`${THUMB_URL_PREF}${this.state.posterID}`}/>
                </div>
            )
        }
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

        if (this.state.posterID !== null &&
            this.state.categoryName === this.props.selected.name) {

            return (
                <div>
                    <h2 className="singleTile">Купить { this.state.phoneSelected  ? 'фотофон' : 'постер'}</h2>
                    <p>Заказать плакат или картинку: <strong>{this.state.PosterName}</strong></p>
                    <div>{this.mapTags()}</div>
                    <br/>
                    <div className={'singlePoster'}>
                        <div className={'singlePosterContent'}>
                            {this.renderSingle()}
                        </div>
                        <div className={'singlePosterContent'}>
                            <h2>Выберете товар:</h2>
                            <div className="typeWrapper">
                                <SelectField
                                    autoWidth={true}
                                    value={this.state.type}
                                    onChange={this.handleType}
                                    className={'classTypeSelector'}
                                    style={texture}
                                    floatingLabelStyle={{color: 'black'}}
                                >
                                    <MenuItem value={1} primaryText="Плакат на постерной бумаге" />
                                </SelectField>
                            </div>
                            <div className="typeWrapper">
                                <SelectField
                                    autoWidth={true}
                                    value={this.state.size}
                                    onChange={this.handleSize}
                                    className={'classTypeSelector'}
                                    style={texture}
                                    floatingLabelStyle={{color: 'black'}}
                                >
                                    <MenuItem value={'А2'} primaryText="Печать на формате А2" />
                                    <MenuItem value={'А3'} primaryText="Печать на формате А3" />
                                </SelectField>
                            </div>
                            <p><strong>Размеры плакатов (мм):</strong> А2 420x594 / A3 297x420</p>
                        </div>
                    </div>
                    {this.renderThumbnails()}
                </div>
            )

        }

        return (

            <div>
                <h2 className="wrapper">{this.props.selected.title}</h2>
                <div className={'textBlock'}><Description/></div>
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
