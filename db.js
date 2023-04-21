var casual = require('casual');

const pets = [
  {
    "id": 1,
    "name": "Tiger",
    "breed": "Orange Tabby",
    "gender": "Male",
    "image": "/assets/images/cats/cat5.png",
    "age_months": 18,
    "taken": false,
    "type": "cat"
  },
  {
    "id": 2,
    "name": "Buddy",
    "breed": "Golden Retriever",
    "gender": "Male",
    "image": "/assets/images/dogs/dog1.png",
    "age_months": 24,
    "taken": true,
    "type": "dog"
  },
  {
    "id": 3,
    "name": "Luna",
    "breed": "Russian Blue",
    "gender": "Female",
    "image": "/assets/images/cats/cat5.png",
    "age_months": 6,
    "taken": false,
    "type": "cat"
  },
  {
    "id": 4,
    "name": "Charlie",
    "breed": "German Shepherd",
    "gender": "Male",
    "image": "/assets/images/dogs/dog3.png",
    "age_months": 12,
    "taken": true,
    "type": "dog"
  },
  {
    "id": 5,
    "name": "Molly",
    "breed": "Poodle",
    "gender": "Female",
    "image": "/assets/images/dogs/dog4.png",
    "age_months": 48,
    "taken": false,
    "type": "dog"
  },
  {
    "id": 6,
    "name": "Tiger",
    "breed": "Orange Tabby",
    "gender": "Male",
    "image": "/assets/images/cats/cat5.png",
    "age_months": 18,
    "taken": false,
    "type": "cat"
  },
  {
    "id": 7,
    "name": "Rocky",
    "breed": "Bulldog",
    "gender": "Male",
    "image": "/assets/images/dogs/dog5.png",
    "age_months": 60,
    "taken": false,
    "type": "dog"
  },
  {
    "id": 8,
    "name": "Daisy",
    "breed": "Beagle",
    "gender": "Female",
    "image": "/assets/images/dogs/dog1.png",
    "age_months": 18,
    "taken": true,
    "type": "dog"
  },
  {
    "id": 9,
    "name": "Zeus",
    "breed": "Rottweiler",
    "gender": "Male",
    "image": "/assets/images/dogs/dog2.png",
    "age_months": 72,
    "taken": true,
    "type": "dog"
  },
  {
    "id": 10,
    "name": "Luna",
    "breed": "Husky",
    "gender": "Female",
    "image": "/assets/images/dogs/dog3.png",
    "age_months": 24,
    "taken": false,
    "type": "dog"
  },
  {
    "id": 11,
    "name": "Mittens",
    "breed": "Sphynx",
    "gender": "Female",
    "image": "/assets/images/cats/cat2.png",
    "age_months": 24,
    "taken": true,
    "type": "cat"
  },
  {
    "id": 12,
    "name": "Max",
    "breed": "Boxer",
    "gender": "Male",
    "image": "/assets/images/dogs/dog4.png",
    "age_months": 6,
    "taken": true,
    "type": "dog"
  },
  {
    "id": 13,
    "name": "Bella",
    "breed": "Shih Tzu",
    "gender": "Female",
    "image": "/assets/images/dogs/dog5.png",
    "age_months": 84,
    "taken": false,
    "type": "dog"
  },
  {
    "id": 14,
    "name": "Whiskers",
    "breed": "Siamese",
    "gender": "Male",
    "image": "/assets/images/cats/cat1.png",
    "age_months": 18,
    "taken": false,
    "type": "cat"
  },
  {
    "id": 15,
    "name": "Mittens",
    "breed": "Maine Coon",
    "gender": "Female",
    "image": "/assets/images/cats/cat2.png",
    "age_months": 24,
    "taken": true,
    "type": "cat"
  },
  {
    "id": 16,
    "name": "Socks",
    "breed": "Tabby",
    "gender": "Male",
    "image": "/assets/images/cats/cat3.png",
    "age_months": 12,
    "taken": true,
    "type": "cat"
  },
  {
    "id": 17,
    "name": "Oscar",
    "breed": "Persian",
    "gender": "Male",
    "image": "/assets/images/cats/cat4.png",
    "age_months": 36,
    "taken": false,
    "type": "cat"
  },
  {
    "id": 18,
    "name": "Fluffy",
    "breed": "Ragdoll",
    "gender": "Male",
    "image": "/assets/images/cats/cat1.png",
    "age_months": 60,
    "taken": false,
    "type": "cat"
  },
  {
    "id": 19,
    "name": "Simba",
    "breed": "Bengal",
    "gender": "Male",
    "image": "/assets/images/cats/cat3.png",
    "age_months": 12,
    "taken": false,
    "type": "cat"
  },
  {
    "id": 20,
    "name": "Lucy",
    "breed": "Labrador Retriever",
    "gender": "Female",
    "image": "/assets/images/dogs/dog2.png",
    "age_months": 36,
    "taken": false,
    "type": "dog"
  },
  {
    "id": 21,
    "name": "Cleo",
    "breed": "Calico",
    "gender": "Female",
    "image": "/assets/images/cats/cat4.png",
    "age_months": 36,
    "taken": true,
    "type": "cat"
  }
]

module.exports = () => {
  const data = { pets }

  data.petDetails = pets.map(el => ({
    ...el,
    description: casual.description,
    medical_notes: casual.description
  }))

  return data
}