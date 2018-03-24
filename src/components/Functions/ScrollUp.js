import ScrollToTop from 'react-scroll-up';
import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import UpArrow from 'material-ui/svg-icons/file/file-upload';

const scroll = {

    icon: {
        width: 48,
        height: 48
    },

    button: {
        width: 60,
        height: 60,
    }

};


export default class ScrollUp extends Component {

    render() {
     return (

         <ScrollToTop showUnder={160}>
             <IconButton
                 iconStyle={scroll.icon}
                 style={scroll.button}>
                 <UpArrow/>
             </IconButton>

         </ScrollToTop>


     )
    }
}