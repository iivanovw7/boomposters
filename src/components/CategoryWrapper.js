import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';



import './NavBar.css';
import './MainPage.css';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto',
    },
};

const tilesData = [
    {
        img: 'images/grid-list/00-52-29-429_640.jpg',
        title: 'Breakfast',
        author: 'jill111',
    },
    {
        img: 'images/grid-list/burger-827309_640.jpg',
        title: 'Tasty burger',
        author: 'pashminu',
    }
];

export class CategoryWrapper extends Component {


    render() {
        return (

            <div>
                <h3>Details for:</h3>
                <h3>Title: {this.props.selectCategory.name}</h3>
            </div>

        );
    }

}


function mapStateToProps(state) {
    return {
        selectCategory: state.activeCategory,
        categories: state.categories,
        vintage: state.vintage
    };
}


export default connect(mapStateToProps)(CategoryWrapper);


/*

 <div>
               <div style={styles.root}>
                   <GridList
                       cellHeight={180}
                       style={styles.gridList}
                   >
                       <Subheader>December</Subheader>
                       {tilesData.map((tile) => (
                           <GridTile
                               key={tile.img}
                               title={tile.title}
                               subtitle={<span>by <b>{tile.author}</b></span>}
                               actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                           >
                               <img src={tile.img} />
                           </GridTile>
                       ))}
                   </GridList>
               </div>
           </div>


 */