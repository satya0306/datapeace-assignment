import React, { Component } from 'react';
import EditableCell from './EditableCell';

class TableRow extends Component {

    render() {
        return (
            <tr className="eachRow">
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                  type: "first_name",
                  value: this.props.candidate.first_name,
                  id: this.props.candidate.id
                }}/>
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                  type: "price",
                  value: this.props.product.price,
                  id: this.props.product.id
                }}/>
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                  type: "qty",
                  value: this.props.product.qty,
                  id: this.props.product.id
                }}/>
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                  type: "category",
                  value: this.props.product.category,
                  id: this.props.product.id
                }}/>
                <td className="del-cell">
                  <input type="button" value="X" className="del-btn"/>
                </td>
            </tr>
      );
    }
}

export default TableRow;