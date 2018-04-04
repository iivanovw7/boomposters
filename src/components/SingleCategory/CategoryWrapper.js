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
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';



import '../Navigation/NavBar.css';
import '../MainPage.css';
import './CategoryWrapper.css';


const style = {
    backgroundImage: 'https://drive.google.com/thumbnail?id=1qNhOoqEeQw31aogz6fisTvJxTcAXQG0l&sz=w400-h400'
};

const texture = {
    backgroundColor: '#303030',
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

            //Last viewed posters
            viewedPosters: {},
            similarPosters: {},
            similarTags: {}
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

    //Page Navigation Menu
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
            <div className={'tags'}><strong>Тэги:</strong>
                {_.map(this.state.tags, tag => {
                return (
                    <div className={'singleTag'} key={tag}><Chip>{tag+" "}</Chip></div>
                )})
                }
            </div>
        )

    }

    //Thumbnails wrapper
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
                                         {this.addViewed(poster)}
                                     }}
                                />
                            </div>
                        )
                    }
                })}
            </div>
        )
    }

    //Single poster wrapper
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

    //Last viewed posters

    addViewed(poster) {

        if (_.includes(this.state.viewedPosters, poster) === true) {
        }

        else if (this.state.viewedPosters.length >= 4) {
            {this.state.viewedPosters.shift()}
            this.setState({
                viewedPosters: [...this.state.viewedPosters, poster]
            });
        }

        else {
            this.setState({
                viewedPosters: [...this.state.viewedPosters, poster]
            });
        }

    }

    renderLastPosters() {

        const THUMB_URL = 'https://drive.google.com/thumbnail?id=';
        const condition = this.props.selected.name;

        if (this.state.viewedPosters.length >= 4) {

            return(
                <div className={'viewedPosters'}>
                    <h2 className="singleTile">Недавно просмотренные</h2>
                    <div className={'grid'}>
                        {_.map(this.state.viewedPosters, viewedPoster => {
                            return (
                                <div className='hover02' key={viewedPoster.filename}>
                                    <img className={''} src={`${THUMB_URL}${viewedPoster.id}`}
                                         onClick={() => {
                                             window.scrollTo(0, 0);
                                             this.phoneCheck(condition);
                                             this.SelectedPoster(viewedPoster.id,
                                                 condition,
                                                 viewedPoster.name,
                                                 viewedPoster.tags,
                                                 viewedPoster.filename,
                                                 viewedPoster.number);
                                         }}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            )

        }
    }

    //Render similar Posters

    renderSimilar() {

        const THUMB_URL = 'https://drive.google.com/thumbnail?id=';
        const condition = this.props.selected.name;
        let posters = this.props.posters;


        return (
            <div>
                <h2 className="singleTile">Похожие постеры</h2>
                <div className={'grid'}>

                </div>
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
                                    underlineStyle={{display: 'none'}}
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
                                    underlineStyle={{display: 'none'}}
                                >
                                    <MenuItem value={'А2'} primaryText="Печать на формате А2" />
                                    <MenuItem value={'А3'} primaryText="Печать на формате А3" />
                                </SelectField>
                            </div>
                            <div className={'tags'}>
                                <strong>Размеры плакатов: </strong>
                                <div className={'singleTag'}><Chip><Avatar size={24}>А2</Avatar>420x594 мм</Chip></div>
                                <div className={'singleTag'}><Chip><Avatar size={24}>А3</Avatar>297x420 мм</Chip></div>
                            </div>
                        </div>
                    </div>
                    {this.renderThumbnails()}
                    {this.renderSimilar()}
                    {this.renderLastPosters()}
                </div>
            )

        }

        return (

            <div>
                <h2 className="singleTile">{this.props.selected.title}</h2>
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
        selectPage: pageSelector


    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoryWrapper);

