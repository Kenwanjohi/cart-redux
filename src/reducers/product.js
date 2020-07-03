const initialState = [
    {
      id: 1,
      product: 'Water Chestnut - Canned',
      price: 8.31
    },
    {
      id: 2,
      product: 'Kellogs Raisan Bran Bars',
      price: 6.32
    },
    {
      id: 3,
      product: 'Beets - Pickled',
      price: 2.42
    },
    {
      id: 4,
      product: 'Eggplant Italian',
      price: 8.54
    },
    {
      id: 5,
      product: 'Marzipan 50/50',
      price: 3.80
    },
    {
      id: 6,
      product: 'Mushroom - Crimini',
      price: 3.51
    },
    {
      id: 7,
      product: 'Beans - Black Bean, Canned',
      price: 7.08
    },
    {
      id: 8,
      product: 'Cheese Cloth No 100',
      price: 5.98
    },
    {
      id: 9,
      product: 'Stock - Chicken, White',
      price: 6.09
    },
    {
      id: 10,
      product: 'Muffin Puck Ww Carrot',
      price: 6.65
    }
  ]

  function productReducer(state = initialState, action) {
      switch(action.type) {
          default: return state
      }
  }
  
  export default productReducer