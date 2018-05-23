import React, {Component} from 'react';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {selectCategory, pageSelector} from "../../actions/index";
import {bindActionCreators} from 'redux';

import './description.css';

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
                    <div className={'descriptionWrapper'}>
                        <div><p><strong>Комиксы </strong>за последние несколько лет, кажется, окончательно превратились
                            из развлечения
                            для подростков и гиков в чтение для вполне респектабельной публики.</p>
                            <p>На русском языке выходят не только супергеройские бестселлеры и манга, но и толстые
                                французские графические романы,
                                подарочные издания американской классики, собственно российские комиксы, и много чего
                                еще.</p>
                            <p>Проще всего вводить комиксы в интерьер в формате постера.</p>
                            <p>Принтами не обязательно украшать стены, можно разместить их, например, на фасадах
                                шкафов.</p>
                        </div>
                        <div>
                            <img src={'../src/img/comixDes1.jpg'}/>
                        </div>
                    </div>
                );
            case 'ill':
                return (
                    <div className={'descriptionWrapper'}>
                        <div><p>
                            <strong>Иллюстрация</strong> — изображение, созданное для пояснения текста, визуализации
                            героев или объектов.
                            Иллюстрации активно используются в книгах – начиная с книжек для самых маленьких,
                            где она преобладает над текстом, заканчивая элементами художественного оформления книг для
                            взрослых.</p>
                            <p>В некоторых изданиях под иллюстрацией помещают отрывок из книги, чтобы показать,
                                какая именно сцена изображена на картинке.</p>
                            <p>У нас вы можете заказать <strong>печать Иллюстрации</strong> на качественной постерной
                                бумаге</p>
                        </div>
                        <div>
                            <img src={'../src/img/illDes.jpg'}/>
                        </div>
                    </div>
                );
            case 'phones':
                return (
                    <div className={"descriptionWrapper"}>
                        <div>
                            <p><strong>Фотофон</strong> - это целое инстаграм-направление.
                                Аккаунты, выдержанные в едином стиле, смотрятся красиво и на них охотно подписываются.</p>
                            <p><strong>Фотофон</strong> позволяет легко выдерживать единую стилистику – просто используйте
                                один и тот же фон и вот
                                у всех ваших снимков уже есть что-то общее. В нашем ассортименте представлены разные
                                фотофоны: текстурные, имитирующие кирпич, кору, доски, холст.</p>
                            <p>Качественный и правильно подобранный под определенные условия съемки фотофон не оставит
                                преград для творчества.</p>
                        </div>
                        <div>
                            <div>
                                <img width="300px" src={'../src/img/hqdefault.jpeg'}/>
                            </div>
                        </div>
                    </div>

                );
            case 'photo':
                return (
                    <div><p>Сегодня <strong> фото постеры </strong> в стиле фотографии бывают черно-белыми,
                        и цветными, и с применением каких-либо фильтров и компьютерных технологий.
                        <strong> Купить фотопостеры </strong> вы можете в интернет-магазине Бумпостерс
                        и шикарно обогатить ваш интерьер известным или не очень снимком. В нашем каталоге несколько
                        тысяч изображеий.</p>
                    </div>
                );
            case 'series':
                return (
                    <div className={'descriptionWrapper'}>
                        <div>
                            <p>Мы <strong>печатаем постеры к фильмам, мультфильмам, сериалам, аниме.</strong>
                                Специализируемся на репринтах оригинальных киноафиш:
                                тех самых, которые висели в кинотеатрах, начиная с 20-х годов прошлого столетия. </p>
                                Кинопостеры уже давно стали отдельным видом художественного искусства — убедитесь
                                сами!
                        </div>
                        <div>
                            <img src={'../src/img/serialsDes.jpeg'}/>
                        </div>
                    </div>
                );
            case 'monoch':
                return (
                    <div><p>Ахроматические цвета обладают ни с чем не сравнимой магией.
                        А их сочетание неизменно вызывает резонанс аудитории.</p>
                        <p>Создать неповторимую, чарующую и уникальную атмосферу интерьеру любого помещения помогут
                            чернобелые ретро постеры автомобилей,
                            актеров и актрис, ретро карты мира, ретро рекламы и т. д.</p>
                    </div>
                );
            case 'anime':
                return (
                    <div></div>
                );
            case 'vinatge':
                return (
                    <div></div>
                );
            case 'music':
                return (
                    <div></div>
                );
            case 'psy':
                return (
                    <div></div>
                );
            case 'lowart':
                return (
                    <div></div>
                );
            default:
                return (
                    <div></div>
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