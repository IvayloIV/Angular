const furnitureData = {
  '1': {
    id: '1',
    make: 'Trithi Furniture 1',
    model: 'Oak Dining Chair 1',
    year: 2012,
    description: 'High end, solid oak chair with upholstered seat',
    price: 102,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81YYozG%2B0GL._SL1500_.jpg',
    material: 'wood',
    createdOn: new Date(),
    createdBy: 'mock@data.com',
    likes: [],
    reviews: []
  },
  '2': {
    id: '2',
    make: 'Trithi Furniture 2',
    model: 'Oak Dining Chair 2',
    year: 2012,
    description: 'High end, solid oak chair with upholstered seat',
    price: 102,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81YYozG%2B0GL._SL1500_.jpg',
    material: 'wood',
    createdOn: new Date(),
    createdBy: 'mock@data.com',
    likes: [],
    reviews: []
  },
  '3': {
    id: '3',
    make: 'Trithi Furniture 3',
    model: 'Oak Dining Chair 3',
    year: 2012,
    description: 'High end, solid oak chair with upholstered seat',
    price: 102,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81YYozG%2B0GL._SL1500_.jpg',
    material: 'wood',
    createdOn: new Date(),
    createdBy: 'mock@data.com',
    likes: [],
    reviews: []
  },
  '4': {
    id: '4',
    make: 'Trithi Furniture 4',
    model: 'Oak Dining Chair 4',
    year: 2012,
    description: 'High end, solid oak chair with upholstered seat',
    price: 102,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81YYozG%2B0GL._SL1500_.jpg',
    material: 'wood',
    createdOn: new Date(),
    createdBy: 'mock@data.com',
    likes: [],
    reviews: []
  }
}
let currentId = 5

module.exports = {
  total: () => Object.keys(furnitureData).length,
  save: (furniture) => {
    const id = ++currentId
    furniture.id = id

    let newFurniture = {
      id,
      make: furniture.make,
      model: furniture.model,
      year: furniture.year,
      description: furniture.description,
      price: furniture.price,
      image: furniture.image,
      createdOn: new Date(),
      createdBy: furniture.createdBy,
      likes: [],
      reviews: []
    }

    if (furniture.material) {
      newFurniture.material = furniture.material
    }

    furnitureData[id] = newFurniture
  },
  all: (page, search) => {
    const pageSize = 10

    let startIndex = (page - 1) * pageSize
    let endIndex = startIndex + pageSize

    return Object
      .keys(furnitureData)
      .map(key => furnitureData[key])
      .filter(furniture => {
        if (!search) {
          return true
        }

        const furnitureMake = furniture.make.toLowerCase()
        const furnitureModel = furniture.model.toLowerCase()
        const searchTerm = search.toLowerCase()

        return furnitureModel.indexOf(searchTerm) >= 0 ||
          furnitureMake.indexOf(searchTerm) >= 0
      })
      .sort((a, b) => b.id - a.id)
      .slice(startIndex, endIndex)
  },
  findById: (id) => {
    return furnitureData[id]
  },
  addReview: (id, rating, comment, user) => {
    const review = {
      rating,
      comment,
      user,
      createdOn: new Date()
    }

    furnitureData[id].reviews.push(review)
  },
  allReviews: (id) => {
    return furnitureData[id]
      .reviews
      .sort((a, b) => b.createdOn - a.createdOn)
      .slice(0)
  },
  like: (id, user) => {
    const likes = furnitureData[id].likes

    if (likes.indexOf(user) >= 0) {
      return false
    }

    likes.push(user)

    return true
  },
  byUser: (user) => {
    return Object
      .keys(furnitureData)
      .map(key => furnitureData[key])
      .filter(furniture => furniture.createdBy === user)
      .sort((a, b) => b.id - a.id)
  },
  delete: (id) => {
    delete furnitureData[id]
  },
  edit: (id, newItem) => {
    newItem['id'] = id;
    newItem['createdBy'] = furnitureData[id]['createdBy'];
    furnitureData[id] = newItem;
  }
}
