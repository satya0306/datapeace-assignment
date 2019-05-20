import React from 'react';
import TableContent from '../../componets/TableContent/TableContent';
import './Pagination.css';

const Pagination =(props)=> {
  const currentPage = props.currentPage;
  const pagPerPage = props.pagPerPage;
      // Logic for displaying todos
  const indexOfLastTodo = currentPage * pagPerPage;
  const indexOfFirstTodo = indexOfLastTodo - pagPerPage;
  const paginationArray = props.candidates.slice(indexOfFirstTodo, indexOfLastTodo);
  console.log(paginationArray)
  var result = Object.keys(paginationArray).map(function(key) {
    return [paginationArray[key]];
  })
  .map(res=>{
    return <TableContent key={res.id} candidates={res}/>
  });
  console.log(result)
      // Logic for displaying page numbers
  const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(props.candidates.length / pagPerPage); i++) {
    pageNumbers.push(i);
  }
  
  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <li style={{textDecoration:'none', 
                display:'inline-block',
                padding:'10px'}}
          key={number}
          id={number}
          onClick={props.handleClick}>
        {number}
      </li>
    );
  });
  return(
    <div>
         {result}
       <ul id="page-numbers">
         {renderPageNumbers}
       </ul>
    </div>
  );
}
//     state = {
//         todos: this.props.candidates,
//         currentPage: 1,
//         todosPerPage: 3
//       };
  
//     handleClick=(event)=> {
//       this.setState({
//         currentPage: Number(event.target.id)
//       });
//     }
  
//     render() {
//       console.log(this.state.todos);
//       const { todos, currentPage, todosPerPage } = this.state;
  
//       // Logic for displaying todos
//       const indexOfLastTodo = currentPage * todosPerPage;
//       const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
//       const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
  
//       const renderTodos = currentTodos.map((todo, index) => {
//         return <li key={index}>{todo}</li>;
//       });
  
//       // Logic for displaying page numbers
//       const pageNumbers = [];
//       for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
//         pageNumbers.push(i);
//       }
  
//       const renderPageNumbers = pageNumbers.map(number => {
//         return (
//           <li
//             key={number}
//             id={number}
//             onClick={this.handleClick}
//           >
//             {number}
//           </li>
//         );
//       });
  
//       return (
//         <div>
//           <ul>
//             {renderTodos}
//           </ul>
//           <ul id="page-numbers">
//             {renderPageNumbers}
//           </ul>
//         </div>
//       );
//     }
// }

export default Pagination;