/* eslint no-param-reassign: ["error", { "props": false }] */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    noteGroups: [
      {
        name: '2017',
        notes: [
          {
            title: 'iPhone 8 / 8 Plus',
            description: 'September 22, 2017',
          },
        ],
      },
    ],
  },
  mutations: {
    addNote(state, note) {
      if (note.title === '' && note.description === '') { return; }

      const matcher = note.description.match(/(20\d{2})/);
      const name = (matcher && matcher[1]) || 'Unknown';
      let targetNoteGroup = state.noteGroups.find(v => v.name === name);
      if (!targetNoteGroup) {
        const newNoteGroup = {
          name,
          notes: [],
        };
        state.noteGroups.unshift(newNoteGroup);
        targetNoteGroup = newNoteGroup;
      }
      targetNoteGroup.notes.unshift(note);
    },
  },
});
