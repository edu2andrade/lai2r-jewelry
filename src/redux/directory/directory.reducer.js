const INITIAL_STATE = {
  categories: [
    {
      title: "Necklaces",
      imageSrc: "https://source.unsplash.com/random/300x300/?necklaces",
      id: 1,
    },
    {
      title: "Rings",
      imageSrc: "https://source.unsplash.com/random/300x300/?rings",
      id: 2,
    },
    {
      title: "Earrings",
      imageSrc: "https://source.unsplash.com/random/300x300/?earrings",
      id: 3,
    },
    {
      title: "Bracelets",
      imageSrc: "https://source.unsplash.com/random/300x300/?bracelets",
      id: 4,
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
