import { API_URL } from "../config";

//selectors
export const getTables = state => state.tables;
export const getTablesById = ({ tables }, id) => tables.find(table => table.id === id);

// action names
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES')
const EDIT_TABLES = createActionName('EDIT_TABLES')

// action creators
export const updateTables = payload => ({ type: UPDATE_TABLES, payload })
export const editTables = payload => ({ type: EDIT_TABLES, payload })

export const fetchTables = () => {
  return (dispatch) => {
  fetch(`${API_URL}/tables`)
    .then(res => res.json())
    .then(tables => dispatch(updateTables(tables)))
  }
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload]
    case EDIT_TABLES:
      return statePart.map(table => (table.id === action.payload.id ? { ...table, ...action.payload } : table));
    default:
      return statePart;
  };
};
export default tablesReducer;