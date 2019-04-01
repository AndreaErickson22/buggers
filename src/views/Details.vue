<template>
  <div class="Bug Comment">
    <div class="col-12 d-flex justify-content-center">
      <div class="home container-fluid">
        <div class="row my-2">
          <div class="col d-flex justify-content-center">
            <table class="table">
              <thead class="bg-secondary text-white font-weight-bold">
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Bug Title</th>
                  <th scope="col">Bug Description</th>
                  <th scope="col">Creator</th>
                  <th scope="col">Closed</th>
                </tr>
              </thead>
              <tbody class="bg-warning">
                <tr>
                  <th scope="row"></th>
                  <td>{{bug.title}}</td>
                  <td>{{bug.description}}</td>
                  <td>{{bug.creator}}</td>
                  <td>{{bug.createdAt | formatTime}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col justify-content-center">
        <Notes></Notes>
      </div>
    </div>
  </div>
</template>

<script>
import Bugs from "@/components/Bugs.vue";
import Notes from "@/components/Notes.vue";
import Moment from "moment";
export default {
  name: "details",
  props: [],
  mounted() {
    this.$store.dispatch("getActiveBug", this.$route.params.id);
    // this.$store.dispatch("getNotes", this.$route.params.id);
  },
  data() {
    return {
      activeBug: {
        creator: "",
        description: "",
        title: "",
        notes: ""
      }
    };
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    },
    notes() {
      return this.$store.state.notes;
    }
  },
  methods: {
    addNote() {
      this.$store.dispatch("addNote", this.newNote);
    }
  },
  components: {
    Bugs,
    Notes
  },
  filters: {
    formatTime(date) {
      return Moment(String(date)).format("MM/DD/YYYY, LT");
    }
  }
};
</script>

