const firebaseApp = require('./firebaseApp');
const users = require('./data').users;
const cars = require('./data').cars;

const db = firebaseApp.firestore();

(async () => {
  let userDocsPromises = [];
  users.forEach(user => {
    userDocsPromises = [...userDocsPromises, db.collection('users').add(user)];
  });
  const userDocs = await Promise.all(userDocsPromises);
  console.log('Users docs ids:');
  console.log(userDocs.map(userDoc => userDoc.id));

  let carsDocsPromises = [];
  cars.forEach(car => {
    carsDocsPromises = [...carsDocsPromises, db.collection('cars').add(car)];
  });
  const carsDocs = await Promise.all(carsDocsPromises);
  const carsDocsIds = carsDocs.map(carDoc => carDoc.id);
  console.log('Cars docs ids:');
  console.log(carsDocsIds);

  userDocs[0].set({
    cars: {
      [carsDocsIds[0]]: true,
      [carsDocsIds[1]]: true,
    },
  }, { merge: true });

  userDocs[1].set({
    cars: {
      [carsDocsIds[1]]: true,
      [carsDocsIds[2]]: true,
    },
  }, { merge: true });

  userDocs[2].set({
    cars: {
      [carsDocsIds[3]]: true,
    },
  }, { merge: true });

  userDocs[3].set({
    cars: {
      [carsDocsIds[0]]: true,
      [carsDocsIds[2]]: true,
    },
  }, { merge: true });
})();