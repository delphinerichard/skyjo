import { useTable } from 'react-table'
import '../styles/ScoreTable.css'

// function renderRows() {

//     const state = {
//         message: "",
//         items: []
//       }

//     return  state.items.map(function(o, i) {
//               return (
//                 <tr key={"item-" + i}>
//                   <td>
//                     <input
//                       type="text"
//                       value={o}
//                     />
//                   </td>
//                   <td>
//                     <button
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               );
//             });
//   }

export default function ScoreTable({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      footerGroups,
      rows,
      prepareRow,
    } = useTable({
      columns,
      data,
    })

    
    // Render the UI for your table
    return (
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(group => (
              <tr {...group.getHeaderGroupProps()}>
                {group.headers.map(column => (
                  <th {...column.getHeaderProps()} className='skyjo-player-name-table'>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          {/* <tbody>
            {renderRows()}
          </tbody> */}
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            {footerGroups.map(group => (
              <tr {...group.getFooterGroupProps()}>
                {group.headers.map(column => (
                  <td {...column.getFooterProps()} className='skyjo-total'>{column.render('Footer')}</td>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
      )
    
  }