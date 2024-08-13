// NOTE: The "old school" way of working with IndexedDB is to use the `indexedDB` global object.
// let db;
// const request = indexedDB.open(name);

// request.onerror = (event) => {
//   //
// };

// request.onsuccess = (event) => {
//   db = event.target.result;
// };

// NOTE: The `idb` library is a wrapper around the IndexedDB API that makes it easier to work with
// Open a DB
// const db = await idb.openDB(name, version);

// Open a DB and handle upgrade
// const db = await idb.openDB(name, version, {
//   upgrade(db, oldVersion, newVersion, tx, event) {},
//   // more event-based functions such as `blocked`
// });
