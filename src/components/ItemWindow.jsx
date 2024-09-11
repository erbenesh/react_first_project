import React, {Component} from 'react';

export class ItemWindow extends Component {
    render() {
        return (
            <div className="item-window">
                <div className="item-window-header">
                    <img onClick={() => this.props.onShowItemWindow(this.props.item)}
                         src={'./images/' + this.props.item.img} alt=''/>
                    <h2>{this.props.item.title}</h2>
                    <p>{this.props.item.desc}</p>
                    <b>{this.props.item.price}RUB</b>
                    <div
                        className='add-to-card'
                        onClick={() => this.props.onAdd(this.props.item)}>+
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemWindow;