import React from 'react';
import { observer } from 'mobx-react';


//component to handle option select filter and submit button
const Filter = observer(props => {
  const { roleSelected, stateSelected, dispatchRequest } = props.store;
  const buttonState = !(roleSelected && stateSelected);

  return (
    <div className="search_filter">
      {roleSelect(props, roles)}
      {stateSelect(props, states)}
      <button onClick={() => dispatchRequest(roleSelected, stateSelected)}
              disabled={buttonState}>
        Submit!
      </button>
    </div>
  )
})

export default Filter;




//function to render the state selection dropdown
const stateSelect = (props, abbreviations) => {
  let options = [];
  for (let state in abbreviations) {
    options.push(
      <option key={state} value={abbreviations[state]}> {state} </option>
    )
  }
  return (
    <select name='state' onChange={e => props.store.selectState(e.target.value)}>
      {options}
    </select>
  )
}

//function to render the role selection dropdown
const roleSelect = (props, roles) => {
  let options = [];
  for (let title in roles) {
    options.push(
      <option key={title} value={roles[title]}> {title} </option>
    )
  }
  return (
    <select name='role' onChange={e => props.store.selectRole(e.target.value)}>
      {options}
    </select>
  )
}


//object containing role options
const roles = {
  'Choose a role...': '',
  Representative: 'REP',
  Senator: 'SEN'
};

//object containing state options
const states = {
  'Choose a state...': '',
  'ALABAMA': 'AL',
  'ALASKA': 'AK',
  'ARIZONA': 'AZ',
  'ARKANSAS': 'AR',
  'CALIFORNIA': 'CA',
  'COLORADO': 'CO',
  'CONNECTICUT': 'CT',
  'DELAWARE': 'DE',
  'FLORIDA': 'FL',
  'GEORGIA': 'GA',
  'HAWAII': 'HI',
  'IDAHO': 'ID',
  'ILLINOIS': 'IL',
  'INDIANA': 'IN',
  'IOWA': 'IA',
  'KANSAS': 'KS',
  'KENTUCKY': 'KY',
  'LOUISIANA': 'LA',
  'MAINE': 'ME',
  'MARYLAND': 'MD',
  'MASSACHUSETTS': 'MA',
  'MICHIGAN': 'MI',
  'MINNESOTA': 'MN',
  'MISSISSIPPI': 'MS',
  'MISSOURI': 'MO',
  'MONTANA': 'MT',
  'NEBRASKA': 'NE',
  'NEVADA': 'NV',
  'NEW HAMPSHIRE': 'NH',
  'NEW JERSEY': 'NJ',
  'NEW MEXICO': 'NM',
  'NEW YORK': 'NY',
  'NORTH CAROLINA': 'NC',
  'NORTH DAKOTA': 'ND',
  'OHIO': 'OH',
  'OKLAHOMA': 'OK',
  'OREGON': 'OR',
  'PENNSYLVANIA': 'PA',
  'RHODE ISLAND': 'RI',
  'SOUTH CAROLINA': 'SC',
  'SOUTH DAKOTA': 'SD',
  'TENNESSEE': 'TN',
  'TEXAS': 'TX',
  'UTAH': 'UT',
  'VERMONT': 'VT',
  'VIRGINIA': 'VA',
  'WASHINGTON': 'WA',
  'WEST VIRGINIA': 'WV',
  'WISCONSIN': 'WI',
  'WYOMING': 'WY'
}
