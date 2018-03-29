import React, {Component} from 'react';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {selectCategory, pageSelector} from "../../actions/index";
import {bindActionCreators} from 'redux';


const style = {};

export class Description extends Component {

    constructor(props) {
        super(props);
        this.state = {};

    }

    selector(category) {
        switch (category) {
            case 'comics':
                return (
                    <div><p>описание недоступно</p></div>
                );
            case 'ill':
                return (
                    <div><p>описание недоступно</p></div>
                );
            case 'phones':
                return (
                    <div><p><strong>Фотофон</strong> - это целое инстаграм-направление.
                        Аккаунты, выдержанные в едином стиле, смотрятся красиво и на них охотно подписываются.</p>
                        <p><strong>Фотофон</strong> позволяет легко выдерживать единую стилистику – просто используйте
                            один и тот же фон и вот
                            у всех ваших снимков уже есть что-то общее. В нашем ассортименте представлены разные
                            фотофоны для тортов —
                            текстурные, имитирующие кирпич, кору, доски, холст.
                            Качественный и правильно подобранный под определенные условия съемки фотофон не оставит
                            преград для творчества.</p>
                    </div>
                );
            case 'photo':
                return (
                    <div><p>Сегодня фото постеры в стиле фотографии бывают черно-белыми,
                        и цветными, и с применением каких-либо фильтров и компьютерных технологий.
                        <strong>Купить фотопостеры</strong> вы можете в интернет-магазине Бумпостерс
                        и шикарно обогатить ваш интерьер известным или не очень снимком. В нашем каталоге несколько тысяч изображеий.</p>
                    </div>
                );
            case 'serials':
                return (
                    <div><p>описание недоступно</p></div>
                );
            case 'monoch':
                return (
                    <div><p>Ахроматические цвета обладают ни с чем не сравнимой магией.
                        А их сочетание неизменно вызывает резонанс аудитории.</p>
                        <p>Создать неповторимую, чарующую и уникальную атмосферу интерьеру любого помещения помогут чернобелые ретро постеры автомобилей,
                            актеров и актрис, ретро карты мира, ретро рекламы и т. д.</p>
                    </div>
                );
            case 'anime':
                return (
                    <div><p>описание недоступно</p></div>
                );
            case 'vinatge':
                return (
                    <div><p>описание недоступно</p></div>
                );
            case 'music':
                return (
                    <div><p>описание недоступно</p></div>
                );
            case 'psy':
                return (
                    <div><p>описание недоступно</p></div>
                );
            case 'lowart':
                return (
                    <div><p>описание недоступно</p></div>
                );
            default:
                return (
                    <div><p>описание недоступно</p></div>
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

        return (

            <div>
                {this.selector(this.props.selected.name)}
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


export default connect(mapStateToProps, mapDispatchToProps)(Description);