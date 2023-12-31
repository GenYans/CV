import React, {Component} from "react";

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'htmlcss',
                    name: 'HTML/CSS'
                },
                {
                    key: 'javaScript',
                    name: 'JavaScript'
                },
                {
                    key: 'react',
                    name: 'React'
                }
                ,
                {
                    key: 'tilda',
                    name: 'Tilda'
                },
                {
                    key: 'shopify',
                    name: 'Shopify'
                }
            ]
        }
    }
    render() {
        return (
            <div className="categories">
                {this.state.categories.map(el => (
                    <div onClick={() => this.props.chooseCategory(el.key)} key={el.key}>{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Categories;