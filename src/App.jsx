import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ItemWindow from "./components/ItemWindow";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            currentItems: [],
            items: [
                {
                    id: 1,
                    title: 'Стул',
                    img: 'stul.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consetetur adipiscing.',
                    category: 'chairs',
                    price: '49.99'
                },
                {
                    id: 2,
                    title: 'Стол',
                    img: 'stol.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consetetur adipiscing.',
                    category: 'tables',
                    price: '49.99'
                },
                {
                    id: 3,
                    title: 'Шкаф',
                    img: 'shkaf.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consetetur adipiscing.',
                    category: 'wardrobes',
                    price: '49.99'
                },
                {
                    id: 4,
                    title: 'Диван',
                    img: 'divan.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consetetur adipiscing.',
                    category: 'sofas',
                    price: '49.99'
                },
                {
                    id: 5,
                    title: 'Кровать',
                    img: 'krovat.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consetetur adipiscing.',
                    category: 'beds',
                    price: '49.99'
                },
            ],
            showItemWindow: false,
            fullItem: {}
        }
        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this);
        this.deleteFromOrder = this.deleteFromOrder.bind(this);
        this.chooseCategory = this.chooseCategory.bind(this);
        this.onShowItemWindow = this.onShowItemWindow.bind(this);
    }

    render() {
        return (
            <div className='wrapper'>
                <Header orders={this.state.orders} onDelete={this.deleteFromOrder}/>
                <Categories chooseCategory={this.chooseCategory}/>
                <Items onShowItemWindow={this.onShowItemWindow} items={this.state.currentItems} onAdd={this.addToOrder} />

                {this.state.showItemWindow && <ItemWindow item={this.state.fullItem} onAdd={this.addToOrder} onShowItemWindow={this.onShowItemWindow}/>}
                <Footer/>
            </div>
        );
    }

    onShowItemWindow(item){
        this.setState({fullItem: item});
        this.setState({showItemWindow: !this.state.showItemWindow});
    }

    chooseCategory(category) {
        if(category === 'all') {
            this.setState({currentItems: this.state.items});
            return
        }

        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
    }

    addToOrder(item){
        let isInArray = false
        this.state.orders.forEach(el => {
            if(el.id === item.id){
                isInArray = true
            }
        });

        if(!isInArray)
            this.setState({orders: [...this.state.orders, item]});
    }

    deleteFromOrder(id){
        this.setState({orders: this.state.orders.filter(el => el.id !== id)});
    }
}

export default App;