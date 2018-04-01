import React, {Component} from 'react';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {selectCategory, pageSelector} from "../actions/index";
import {bindActionCreators} from 'redux';
import FlatButton from 'material-ui/FlatButton';


import './UploadPoster.css';
import './SingleCategory/CategoryWrapper.css';

const style = {
    width: 250,
};

export class Uploader extends Component {


    constructor(props) {
        super(props);
        this.state = {


        };
    }

    render() {

        return(

            <div>
                <h2 className="singleTile">Постер со своим изображением</h2>
                <div className={'wrapperUpload'}>
                    <div className={'singleBlock'}>
                        <h4>Если вы хотите распечатать свой материал на качественной постерной бумаге, или пленке, мы будем рады вам помочь!</h4>
                        <p>Вы можете либо написать нам на почту, приложив ваши изображения и пожелания по размерам, качеству печати и материалам,
                            либо воспользоваться инструкцией ниже: </p>
                        <ul>
                            <li>Выберите изображение. Лучше, если оно будет большим (ориентируйтесь на размер 2000 х 3000 пикселей и больше).</li>
                            <li>Когда изображение загрузится, появится возможность указать размер и материал.</li>
                            <li>Если готового изображения у Вас нет, сообщите тематику, имя персонажа или иную информацию. Мы подберём изображения, из которых Вы сможете выбрать нужное.</li>
                            <li>Обратите внимание: к стоимости постера со своим изображением прибавляется 10%.</li>
                        </ul>
                    </div>
                    <div className={'uploadBlock'}>
                        <RaisedButton label="Напишите нам!" style={style} href="mailto:boomposters.sales@gmail.com" data-rel="external"  />
                        <div className={"uploadZone"}>
                            <FlatButton>Загрузить свои изображения</FlatButton>
                        </div>
                    </div>
                </div>
            </div>


        );

    }

}

function mapStateToProps(state) {
    return {
        selected: state.activeCategory,
        page: state.activePage
    };
}

function mapDispatchToProps(dispatch) {


    return bindActionCreators({

        selectCategory: selectCategory,
        selectPage: pageSelector

    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Uploader);
