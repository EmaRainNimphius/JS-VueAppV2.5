<script>
import { ref } from 'vue'

const columns = [
  { name: 'name', style: 'min-width: 100px; width: 100px', align: 'left', label: 'Name', field: 'name', sortable: true },
  { name: 'age', style: 'min-width: 75px; width: 75px', align: 'left', label: 'Age', field: 'age', sortable: true },
  { name: 'role', style: 'min-width: 100px; width: 100px', align: 'left', label: 'Role', field: 'role', sortable: true },
  { name: 'description', align: 'left', label: 'Description', field: 'description' },
  { name: 'date', style: 'min-width: 100px; width: 100px', align: 'center', label: 'Date Found', field: 'date', sortable: true },
  { name: 'deleteRow', style: 'min-width: 25px; width: 25px', align: 'center', label: '', field: 'deleteRow'},
]

const rows = [
  {
    position: 1,
    name: "Zero",
    age: 19,
    role: "Education",
    description: "Goes to school, codes, stores school based information. " +
        "Does technical stuff at work. Has high anxiety and OCD. Not social.",
    date: "03/08/2024",
  },
  {
    position: 2,
    name: "June",
    age: 6,
    role: "Emotions",
    description: "Social and has ability to have big feelings. Scary!",
    date: "03/10/2024",
  },
  {
    position: 3,
    name: "Jenny",
    age: 20,
    role: "Social",
    description: "Loves being social and doing things outside of her comfort zone. Takes things personally. Pretty cool.",
    date: "03/10/2024",
  },
  {
    position: 4,
    name: "Jon",
    age: 8,
    role: "Holder",
    description: "Loves the zoo. Can hold onto big events. Light hearted, spontaneous, and fun!",
    date: "03/11/2024",
  },
  {
    position: 5,
    name: "Abby",
    age: 23,
    role: "Caretaker",
    description: "Loves to clean and stay organized mentally/physically. Enjoys journaling, reflecting, and taking care of her home.",
    date: "03/11/2024",
  },
]

export default {

  data () {
    return {

      rows: ref(rows),
      columns,
      position: null,
      name: "",
      age: null,
      role: "",
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

      //let change = this.rows.splice(index, 1);


      //KEEP
      //let change = this.rows.splice(position - 1, 1);
      // console.log(position - 1)
      // console.log(change)
      // console.log(this.rows);
    },
    add(e){
      e.preventDefault();

      let UserInput = {
        position: this.rows.length + 1,
        name: this.name,
        age: this.age,
        role: this.role,
        description: this.description,
        date: this.date
      }

      this.rows.push(UserInput);
    },
  }

}
</script>

<template>


    <!-- table -->
    <q-table
        :rows="rows"
        :columns="columns"
        :rows-per-page-options="[0-10]"
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
          <!-- name -->
          <q-td key="name" :props="props">
            {{ props.row.name }}
            <q-popup-edit v-model="props.row.name" v-slot="scope">
              <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <!-- age -->
          <q-td key="age" :props="props">
            <div v-html="props.row.age"></div>
            <!-- number pop up edit -->
            <q-popup-edit v-model.number="props.row.age" v-slot="scope">
              <q-input type="number" v-model.number="scope.value" dense autofocus @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <!-- role -->
          <q-td key="role" :props="props">
            {{ props.row.role }}
            <q-popup-edit v-model="props.row.role" v-slot="scope">
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

  <!-- add new entry btn -->
  <div class="mt-4">
    <div class="col-sm-12 col-md-3 ms-auto">
      <div class="button" align="right">
        <button class="btn px-4 text-white"
                id="addBtn"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#addMeeple"
                style="background-color: #027353">
          &nbsp;&nbsp;
          Add New Meeple
          &nbsp;&nbsp;
        </button>
      </div>
    </div>
  </div>



  <!-- add meeple modal -->
  <div class="modal fade" id="addMeeple" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- header -->
        <div class="modal-header">
          <h1 class="modal-title fs-3" id="addModalLabel">Add New Meeple</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <!-- body -->
        <div class="modal-body">

          <form class="row g-3">
            <!-- row : name & age -->
            <div class="row mt-3">
              <!-- name -->
              <div class="col">
                <div class="input-group mb-3">
                  <input v-model="name" type="text" class="form-control" aria-label="meeple name" placeholder="Name or Nickname" required>
                </div>
              </div>
              <!-- age -->
              <div class="col-4">
                <div class="input-group mb-3">
                  <input v-model="age" type="number" class="form-control" aria-label="meeple age" placeholder="Age">
                </div>
              </div>
            </div>
            <!-- row : role -->
            <div class="row">
              <div class="input-group mb-3">
                <input v-model="role" id="role" type="text" class="form-control" aria-label="meeple role" placeholder="Meeple's Role" required>
              </div>
            </div>
            <!-- row : date found -->
            <div class="row">
              <div class="input-group mb-3">
                <span class="input-group-text" id="date" style="background-color: #f1f1f1">Date Found</span>
                <input v-model="date" type="date" class="form-control" aria-label="date found" required>
              </div>
            </div>
            <!-- row : description -->
            <div class="row">
              <div class="input-group mb-3">
                <label for="description" class="form-label"></label>
                <textarea v-model="description" type="text" class="form-control"  id="description" placeholder="What does meeple do?" required></textarea>
              </div>
            </div>
            <!-- modal footer -->
            <div class="modal-footer">
              <!-- cancel creation btn -->
              <div class="col mx-2">
                <a class="btn btn-secondary" data-bs-dismiss="modal">
                  &nbsp;&nbsp;Cancel Adding Meeple&nbsp;&nbsp;
                </a>
              </div>
              <!-- add meeple btn -->
              <div class="col mx-2">
                <button @click="add" class="btn text-white" type="submit"
                        style="background-color: #027353">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Add Meeple
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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