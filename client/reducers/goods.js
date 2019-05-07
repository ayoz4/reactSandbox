import { ADD_GOOD, REMOVE_GOOD, EDIT_GOOD } from "../actions/types";

const GOODS = [
  {
    id: 1,
    name: "Товар 1",
    description: "Описание первого товара"
  },
  {
    id: 2,
    name: "Товар 2",
    description: "Описание второго товара"
  },
  {
    id: 3,
    name: "Товар 3",
    description: "Описание третьего товара"
  },
  {
    id: 4,
    name: "Товар 4",
    description: "Описание четвертого товара"
  }
];

const goods = (state = GOODS, action) => {
  switch (action.type) {
    case ADD_GOOD:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          description: action.description
        }
      ];
    case REMOVE_GOOD:
      return [...state].filter(task => task.id !== action.id);
    case EDIT_GOOD:
      const index = state.findIndex(task => task.id === action.id);
      state[index].name = action.name;
      state[index].description = action.description;
      return state;
    default:
      return state;
  }
};

export default goods;
