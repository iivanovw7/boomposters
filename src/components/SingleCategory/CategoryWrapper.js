import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { selectCategory, pageSelector, addToCart, displayCart} from "../../actions/index";
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import DropDownMenu from 'material-ui/DropDownMenu';
import ArrowBack from 'material-ui/svg-icons/navigation/chevron-left';
import ArrowForward from 'material-ui/svg-icons/navigation/chevron-right';
import Description from './description';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import axios from 'axios'




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

const addToCartButton = {
    backgroundColor: '#303030',
    width: 300,
    height: 45,
    marginTop: 10,
};

const SlTexture = {
    backgroundColor: '#303030',
    width: 200,
    maxHeight: 36,
    fontSize: '1.0em',
    marginLeft: 10,
    marginRight: 20
};

const MenuStyle = {
    marginBottom: 10,
};


class CategoryWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {

            selectedCategory: 'undefined',

            //screen width
            width: props.width,
            //------------------

            //current poster(Item) properties
            categoryName: 'undefined',
            posterID: null,
            filename: null,
            PosterName: null,
            tags: [],
            PosterNumber: null,
            phoneSelected: false,
            posted_at: null,
            //-----------------

            //Current Item specs
            type: 'Плакат на постерной бумаге',
            size: 'A3',
            price: 0,
            //-----------------

            //-----------------
            priceA3: 500,
            priceA2: 800,

            //Last viewed posters
            viewedPosters: {},
            similarPosters: {},
            similarTags: [],

            //PagesSplitter
            postersPerPage: 24,
            //overall quantity of pages to show
            pagesQuantity: null,
            //PageNumber
            postersPageNumber: 0,
            //posters splitted for multiple pages
            postersForPages: [],
            //-----------------


            //fetchedPosters from database
            boomPosters: []

        };

    }



    isSelected() {

        const condition = this.props.selected.name;
        let posters = this.state.boomPosters;
        let result = posters.filter(poster => poster.title === condition);
        let postersForPages = [];



        while(result.length) {
            postersForPages.push(result.splice(0, this.state.postersPerPage))
        }


        return (
            {
                postersForPages
            }
        )


    }

    pageSelected() {
        let currentPage = this.state.postersPageNumber;



        return (
            currentPage
        )
    }



    handleType = (event, index, type) => this.setState({type});
    handleSize = (event, index, size) => this.setState({size})&&this.renderPrice();

    handlePostersPerPage = (event, index, postersPerPage) => {
        this.setState({postersPerPage: postersPerPage, postersPageNumber: 0});

    };

    handlepostersPageNumber = (event, index, postersPageNumber) => this.setState({postersPageNumber: postersPageNumber});


    componentWillMount(){
        this.setState({width: window.innerWidth});
        this.setState({selectedCategory: this.props.selected});

    }


    trimDate(value) {
        let  sDate = value.toString();
        let formattedDate = sDate.substr(0, sDate.length-14);

        return formattedDate;
    }



    SelectedPoster = (id, category, name, tags, filename, number, posted_at) =>
        this.setState({
            posterID: id,
            categoryName: category,
            filename: filename,
            PosterName: name,
            tags: tags,
            PosterNumber: number,
            posted_at: posted_at,
        });

    posterForCart() {

        let item =
            {
                id: this.state.posterID,
                name: this.state.PosterName,
                type: this.state.type,
                size: this.state.size,
                price: this.renderPrice(),
            };

        return item;

    }


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

    componentDidMount() {

        this.setState({ postersPageNumber: 0});

        let self = this;
        axios.get(`http://172.104.91.160:8181/posters`)
            .then(function (response) {
                console.log(response);
                self.setState({boomPosters : response.data})
            })
            .catch(function (error) {
                console.log(error)
            });



    }



    //Page Navigation Menu

    renderNavigation() {

        let postersForPages = this.isSelected();
        let currentPage = this.pageSelected();
        let pagesQuantity = postersForPages.postersForPages.length;
        let MenuItems = [];

        if (currentPage > postersForPages.postersForPages.length) {
            currentPage = 0;
        }


        for (let i=0; i < pagesQuantity; i++) {
            let str = "Cтраница"+" "+(i+1);
            MenuItems.push({value: i,  primaryText: str})
        }


        return (
            <SelectField
                autoWidth={true}
                value={currentPage}
                onChange={this.handlepostersPageNumber}
                floatingLabelStyle={{color: 'black'}}
                underlineStyle={{display: 'none'}}
                className={'classTypeSelector'}
                style={texture}
            >
                {MenuItems.map(x => <MenuItem value={x.value} primaryText={x.primaryText} key={x.value}/>)}
            </SelectField>
        )
    }


    showMenu() {
        return (
            <div className={'showMenu'}>
                <div className={'selectorWrapper'}>
                    <div className="typeWrapper">
                        <SelectField
                            autoWidth={true}
                            value={this.state.postersPerPage}
                            onChange={this.handlePostersPerPage}
                            floatingLabelStyle={{color: 'black'}}
                            underlineStyle={{display: 'none'}}
                            className={'classTypeSelector'}
                            style={texture}
                        >
                            <MenuItem  value={12} primaryText="12 постеров на странице" />
                            <MenuItem  value={24} primaryText="24 постера на странице" />
                            <MenuItem  value={48} primaryText="48 постеров на странице" />
                        </SelectField>
                        {this.renderNavigation()}
                    </div>
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

        let rendered = 0;

        let postersForPages = this.isSelected();
        let currentPage = this.pageSelected();


        if (currentPage > postersForPages.postersForPages.length) {
            currentPage = 0;
        }

        function counter() {
            return rendered++;
        }


        return (

            <div className="grid fade-in-element">

                {_.map(postersForPages.postersForPages[currentPage], poster => {
                    if (poster.title === condition) {
                        return (
                            <div className='hover02' key={poster.number}>
                                <img className={''} src={`${THUMB_URL}${poster.id}`}
                                     onshow={counter()}
                                     onClick={() => {
                                         window.scrollTo(0, 0);
                                         this.phoneCheck(condition);
                                         this.SelectedPoster(poster.id,
                                             condition,
                                             poster.name,
                                             poster.tags,
                                             poster.filename,
                                             poster.number,
                                             poster.posted_at);
                                         {this.addViewed(poster)}
                                         this.props.displayCart(false);

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
                    <div className={'grid fade-in-element'}>
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
                                                 viewedPoster.number,
                                                 viewedPoster.posted_at);
                                             this.props.displayCart(false);
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
        let posters = this.state.boomPosters;
        let rendered = 0;

        function counter() {
            return rendered++;
        }


        return (
            <div>
                <h2 className="singleTile">Похожие постеры</h2>
                <div className={'grid'}>
                    {_.map(posters, poster => {
                        if (_.intersection(this.state.tags, poster.tags).length > 1 && rendered <= 3 )
                        {

                            return (
                                <div className='hover02' key={poster.filename}>
                                    <img className={''}
                                         src={`${THUMB_URL}${poster.id}`}
                                         onshow={counter()}
                                         onClick={() => {
                                             window.scrollTo(0, 0);
                                             this.phoneCheck(condition);
                                             this.SelectedPoster(poster.id,
                                                 condition,
                                                 poster.name,
                                                 poster.tags,
                                                 poster.filename,
                                                 poster.number,
                                                 poster.posted_at);
                                             this.props.displayCart(false);
                                         }}
                                    />

                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        )


    }

    renderPrice() {

        if (this.state.size === 'A3') {
            return (
                this.state.priceA3
            )
        } else if (this.state.size === 'A2') {
            return (
                this.state.priceA2
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
                            <div>
                                <h2>Цена: {this.renderPrice()} ₽</h2>
                            </div>
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
                                    <MenuItem value={'Плакат на постерной бумаге'} primaryText='Плакат на постерной бумаге' />
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
                                    <MenuItem value={'A2'} primaryText="Печать на формате А2" />
                                    <MenuItem value={'A3'} primaryText="Печать на формате А3" />
                                </SelectField>
                            </div>
                            <div className={'tags'}>
                                <strong>Размеры плакатов: </strong>
                                <div className={'singleTag'}><Chip><Avatar size={24}>А2</Avatar>420x594 мм</Chip></div>
                                <div className={'singleTag'}><Chip><Avatar size={24}>А3</Avatar>297x420 мм</Chip></div>
                            </div>
                            <div className={"singleInfoWrapper"}>
                                <div><strong>Добавлен на сайт: </strong>{this.trimDate(this.state.posted_at)}</div>
                            </div>
                            <div className={"singleInfoWrapper"}>
                                <div><strong>Номер постера: </strong> {this.state.PosterNumber}</div>
                            </div>
                            <div className="typeWrapper">
                                <RaisedButton
                                    autoWidth={true}
                                    style={addToCartButton}
                                    floatingLabelStyle={{color: 'black'}}
                                    underlineStyle={{display: 'none'}}
                                    className={'classTypeSelector'}
                                    label="В корзину"
                                    labelPosition="before"
                                    onClick={ () => {
                                        this.props.addToCart(this.posterForCart());
                                        window.scrollTo(0, 0);
                                        this.props.displayCart(true);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    {this.showMenu()}
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
                <div>
                    {this.showMenu()}
                    {this.renderThumbnails()}
                </div>
            </div>

        );
    }

}


function mapStateToProps(state) {
    return {

        categories: state.categories,
        selected: state.activeCategory,
        page: state.activePage,
        posters: state.allPosters,
        cart: state.cart,
        cartShow: state.showCart,

    };
}

function mapDispatchToProps(dispatch) {


    return bindActionCreators({

        selectCategory: selectCategory,
        selectPage: pageSelector,
        addToCart: addToCart,
        displayCart: displayCart

    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoryWrapper);

