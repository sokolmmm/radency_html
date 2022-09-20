import Notes from './notes';
import dataBase from './helpers/dataBase';

function initApp() {
  const notes = new Notes(dataBase);
  notes.initNotes();
  notes.onTabClick();
}

export default initApp;
