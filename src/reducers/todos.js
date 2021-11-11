const initialState = [
  {
    id: 1,
    desc: "todo 1",
    completed: false,
  },{
    id: 2,
    desc: "todo 2",
    completed: false,
  },
];

export default (state = initialState, action) => {
  console.log(action);
  return state;
};
