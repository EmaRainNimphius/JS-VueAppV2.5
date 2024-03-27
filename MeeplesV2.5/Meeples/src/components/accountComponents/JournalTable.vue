<script>
import { ref } from 'vue'

const columns = [
  { name: 'category', style: "min-width: 150px; width: 150px", align: 'left', label: 'Category', field: 'category', sortable: true},
  { name: 'title', style: 'min-width: 200px; width: 200px', align: 'left', label: 'Title', field: 'title', sortable: true},
  { name: 'description', align: 'left', label: 'Description', field: 'description'},
  { name: 'date', style: 'min-width: 100px; width: 100px', align: 'center', label: 'Date Found', field: 'date', sortable: true},
  { name: 'deleteRow', style: 'min-width: 25px; width: 25px', align: 'center', label: '', field: 'deleteRow'},

]

const rows = [
  {
    position: 1,
    category: "Daily Journal",
    title: "Today Was Awesome!",
    description: "I had a super fun and productive day. yay.",
    date: "03/12/2024",
  },
  {
    position: 2,
    category: "Overview",
    title: "Tuesday",
    description: "Today was pretty rad. Got ahead in a few of my classes so that's pretty cool. Big yay for me. I finished all but my JS2 homework.",
    date: "03/11/2024",
  },
  {
    position: 3,
    category: "Rant",
    title: "This is a LOT",
    description: "Wowza this is a lot of content.. Poopy doopy if you ask me.",
    date: "03/10/2024",
  },
]

export default {

  data () {
    return {

      rows: ref(rows),
      columns,
      position: null,
      category: "",
      title: "",
      description: "",
      date: null,
    }
  },
  methods: {
    deleteRow(position){
      let index = rows[position - 1];
      console.log(rows[position - 1])
      console.log(index.position);
      console.log("Position: " + position);

      if(position !== rows[position - 1]){
        this.rows.splice(position - 1, 1);
      }

    },
    add(e){
      e.preventDefault();

      let UserInput = {
        position: this.rows.length + 1,
        category: this.category,
        title: this.title,
        description: this.description,
        date: this.date,
      }

      this.rows.push(UserInput);
    },
  }

}
</script>

<template>

  <!-- table -->
  <div class="mt-4">
    <q-table
        :rows="rows"
        :columns="columns"
        :rows-per-page-options="[0-5]"
        row-key="position"
        wrap-cells

    >
      <!-- table body -->
      <template v-slot:body="props">
        <q-tr :props="props" :key="rows">
          <!-- position -->
          <q-td key="position" :props="props">
            {{ props.row.position }}
          </q-td>
          <!-- category -->
          <q-td key="category" :props="props">
            {{ props.row.category }}
            <q-popup-edit v-model="props.row.category" v-slot="scope">
              <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <!-- title -->
          <q-td key="title" :props="props">
            {{ props.row.title }}
            <q-popup-edit v-model="props.row.title" v-slot="scope">
              <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <!-- description -->
          <q-td key="description" :props="props">
            <div class="text-pre-wrap">{{ props.row.description }}</div>
            <!-- text box popup edit -->
            <q-popup-edit
                buttons
                v-model="props.row.description"
                v-slot="scope"
            >
              <q-editor
                  v-model="scope.value"
                  min-height="5rem"
                  autofocus
                  @keyup.enter.stop
              />
            </q-popup-edit>
          </q-td>
          <!-- date found -->
          <q-td key="date" :props="props">
            <div>{{ props.row.date }}</div>
            <q-popup-edit v-model="props.row.date" v-slot="scope">
              <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <!-- delete row -->
          <q-td key="deleteRow" :props="props">
            <button @click="deleteRow(props.row.position)" class="btn btn-outline-none fw-bold" style="color: #A61103">X</button>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>

  <!-- add new entry btn -->
  <div class="mt-4">
    <div class="col-sm-12 col-md-3 ms-auto">
      <div class="button" align="right">
        <button class="btn px-4 text-white"
                id="addBtn"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#addEntry"
                style="background-color: #027353">
          &nbsp;&nbsp;
          Add Journal Entry
          &nbsp;&nbsp;
        </button>
      </div>
    </div>
  </div>

  <!-- add journal entry modal -->
  <div class="modal fade" id="addEntry" tabindex="-1" aria-labelledby="addEntryLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- header -->
        <div class="modal-header">
          <h1 class="modal-title fs-3" id="addModalLabel">Add Journal Entry</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <!-- body -->
        <div class="modal-body">

          <form class="row g-3">
            <!-- row : category -->
            <div class="row mt-3">
              <div class="input-group mb-3">
                <select v-model="category" class="form-select bg-body-secondary" id="filter">
                  <option selected disabled value="">Select Entry Category</option>
                  <option class="option-item" value="Daily Journal">Daily Journal</option>
                  <option class="option-item" value="Overview of Day">Overview of Day</option>
                  <option class="option-item" value="Rant">Rant</option>
                  <option class="option-item" value="Reflection">Reflection</option>
                  <option class="option-item" value="School Based">School Based</option>
                  <option class="option-item" value="Home Based">Home Based</option>
                  <option class="option-item" value="Family Based">Family Based</option>
                  <option class="option-item" value="Social Based">Social Based</option>
                </select>
              </div>
            </div>
            <!-- row : title -->
            <div class="row">
              <div class="col">
                <div class="input-group mb-3">
                  <input v-model="title" type="text" class="form-control" aria-label="entry title" placeholder="Entry Title" required>
                </div>
              </div>
            </div>
            <!-- row : date added -->
            <div class="row">
              <div class="input-group mb-3">
                <span class="input-group-text" id="date" style="background-color: #f1f1f1">Entry Date</span>
                <input v-model="date" type="date" class="form-control" aria-label="date found" required>
              </div>
            </div>
            <!-- row : description -->
            <div class="row">
              <div class="input-group mb-3">
                <label for="description" class="form-label"></label>
                <textarea v-model="description" type="text" class="form-control"  id="description" placeholder="How was your day?" required></textarea>
              </div>
            </div>
            <!-- modal footer -->
            <div class="modal-footer">
              <!-- cancel creation btn -->
              <div class="col mx-2">
                <a class="btn btn-secondary" data-bs-dismiss="modal">
                  &nbsp;&nbsp;Cancel Entry Creation&nbsp;&nbsp;
                </a>
              </div>
              <!-- add meeple btn -->
              <div class="col mx-2">
                <button @click="add" class="btn text-white" type="submit"
                        style="background-color: #027353">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Add Journal Entry
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>

</style>