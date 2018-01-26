import React from 'react';
import { observer } from 'mobx-react';


//component to display the search results list component and rep detail component
const Results = observer(props => {
  const { results, activeRep, roleSelected } = props.store;
  //set list header
  const listHeaderLabel = roleSelected
                            ? roleSelected === 'REP'
                                ? 'Representatives'
                                : 'Senators'
                            : null;
  //render list (or null)
  const resultsList = results.length
                        ? results.map((c, i) => <ResultRow key={i} name={c.name} party={c.party[0]} store={props.store} />)
                        : null;


  return (
    <section className="results_main">
      <div className="results_list results_flex">
        <header className="results_header">
          <p>List /</p> <p style={{"color": "#4286f4"}}>{listHeaderLabel}</p>
        </header>
        <div className="results_list_table">
          <table>
            <tbody>
              <tr>
                <th style={{"width":"75%"}}>Name</th>
                <th>Party</th>
              </tr>
              {resultsList}
            </tbody>
          </table>
        </div>
      </div>
      <div className="results_detail results_flex">
        <header className="results_header">
          <p>Info</p>
        </header>
        <RepDetails rep={activeRep} />
      </div>
    </section>
  )
})

export default Results;



//component to render a table row for passed in rep
const ResultRow = props => {
  return (
    <tr className="result_row" onClick={() => props.store.setActiveRep(props.name)}>
      <td style={{"width":"75%"}}>{props.name}</td>
      <td>{props.party}</td>
    </tr>
  )
}

//component to render either a rep's detailed info or default values
const RepDetails = ({ rep }) => {
  let defaultVals = { a: 'First Name', b: 'Last Name', c: 'District', d: 'Phone', e: 'Office', f: 'Website' };
  let dataObj = rep.name
                  ? { a: rep.name.split(' ')[0],
                      b: rep.name.split(' ')[1],
                      c: `District ${rep.district}`,
                      d: rep.phone,
                      e: rep.office,
                      f: rep.link }
                  : defaultVals;

  //don't render a District field for senators
  if (rep.name && !rep.district) delete dataObj.c;

  let fields = [];
  //loop through the data object and generate JSX for each field.
  for (let key in dataObj) {
    key === 'f' && rep.name
      ? fields.push(
                     <a href={dataObj[key]} target="_blank">
                       <div key={key} className="results_detail_field">{dataObj[key]}</div>
                     </a>
                   )
      : fields.push(
                     <div key={key} className="results_detail_field">{dataObj[key]}</div>
                   )
  }
  return fields;
}
