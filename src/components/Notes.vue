<template>
  <div class="Notes">
    <div class="container-fluid">
      <div class="row">
        <div id="noteForm" class="col d-flex justify-content-center">
          <div class="input-group">
            <div class="input-group-prepend">
              <span
                class="input-group-text font-weight-bold"
              >Tell us about you plan to resolve the bug.</span>
            </div>
            <form @submit.prevent="makeNote">
              <input
                v-model="newNote.content"
                type="text"
                aria-label="new note"
                placeholder="enter note details here"
                class="form-control mb-1 mt-1"
              >
              
              <input
                v-model="newNote.creator"
                type="text"
                aria-label="name who made note"
                placeholder="enter your name here"
                class="form-control mb-1"
              >
              <button id="SUBMITnOte" type="submit-note">Submit the note</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="home container-fluid">
      <div class="row justify-content-center">
        <div class="col flex-align-center">
          <div id="BugNotes" class="card" v-for="note in notes" :key>
            <thread class="justify-content-center">
              <tr>
                <p>{{note.createdAt | formatTime}}</p>
                <p>What is up with this Bug? {{note.content}}</p>
                <p>Name of person whom posted this comment: {{note.creator}}</p>
              </tr>
            </thread>
          </div>
          <!-- <activeNotes></activeNotes> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Moment from "moment";
export default {
  name: "notes",
  // props: ["noteData"],
  data() {
    return {
      activeBugs: [],
      activeBug: {},
      activeNotes: {},
      newNote: {
        content: "",
        creator: ""
      }
    };
  },
  mounted() {
    this.$store.dispatch("initializeNote", this.$route.params.id);
  },
  computed: {
    notes() {
      return this.$store.state.notes;
    }
  },
  methods: {
    setActiveBug(bugs) {
      this.activeBug = bugs;
    },
    setActiveNote(notes) {
      this.activeNote = notes;
    },
    makeNote() {
      this.newNote.bug = this.$route.params.id;
      this.$store.dispatch("addNote", this.newNote);
    }
  },
  filters: {
    formatTime(date) {
      return Moment(String(date)).format("MM/DD/YYYY, LT");
    }
  },
  components: {}
};
</script>
<style>
#noteForm {
  justify-content: center;
  margin-top: 10px;
}
.input-group-text {
  background: rgb(249, 99, 7);
  color: white;
  width: 400px;
  text-align: center;
  justify-content: center;
  font: bold;
  padding-top: 10px;
  padding-bottom: 10px;
}
span {
  text-align: center;
}
.input-group-prepend {
  justify-content: center;
}
.input-group {
  justify-content: center;
  width: 50%;
}
.form-control {
  width: 400px;
  text-align: center;
}
#SUBMITnOte {
  background-color: rgb(249, 99, 7);

  color: white;
  width: 400px;
  padding-bottom: 10px;
  padding-top: 10px;
  font-weight: 500px;
}
#BugNotes {
  color: black;
  /* width: 800px;
  height: 100px; */
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding-bottom: 10px;
  padding-top: 15px;
}
#BugNotes.card {
  width: auto;
  height: auto;
  border: 2px solid rgba(249, 100, 7, 0.769);
  background-color: rgb(247, 244, 244);
  justify-content: center;
  align-items: center;
}
</style>
