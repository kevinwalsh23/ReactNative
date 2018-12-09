import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES } from '../shared/dishes';

//Each component is storing its own state, later implementing redux support and connecting all to redux store
function RenderDish(props) {

    const dish = props.dish;
    
        if (dish != null) {
            return(
                <Card
                featuredTitle={dish.name}
                image={require('./images/uthappizza.png')}>
                    <Text style={{margin: 10}}>
                        {dish.description}
                    </Text>
                </Card>
            );
        }
        else {
            return(<View></View>);
        }
}

class Dishdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }

    static navigationOptions = {
        title: 'Dish Details'
    };

    render(){
        //getParam allows you get the passed in parameters, followed by fallback option
        const dishId = this.props.navigation.getParam('dishId', '');
        //plus means turn string into number
        return(
        <RenderDish dish={this.state.dishes[+dishId]} />
        );
    }
}

export default Dishdetail;