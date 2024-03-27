<script>
const columns = [
  {
    name: 'name',
    required: true,
    style: 'min-width: 100px; width: 100px',
    label: "Meeple's Name",
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'social', style: 'min-width: 75px; width: 75px', align: 'left', label: 'Social?', field: 'social', sortable: true },
  { name: 'age', style: 'min-width: 75px; width: 75px', align: 'left', label: 'Age', field: 'age', sortable: true },
  { name: 'role', style: 'min-width: 100px; width: 100px', align: 'left', label: 'Role', field: 'role', sortable: true },
  { name: 'strength', style: "min-width: 100px; width: 100px", align: 'left', label: 'Main Strength', field: 'strength', sortable: true},
  { name: 'weakness', style: "min-width: 100px; width: 100px", align: 'left', label: 'Main Weakness', field: 'weakness', sortable: true},
  { name: 'date', style: 'min-width: 75px; width: 75px', align: 'left', label: 'Date Found', field: 'date', sortable: true },
]

const rows = [
  {
    name: "Zero",
    age: 19,
    role: "Education",
    description: "Goes to school, codes, stores school based information. " +
        "Does technical stuff at work. Has high anxiety and OCD. Not social.",
    date: "03/08/2024",
  },
  {
    name: "June",
    age: 6,
    role: "Emotions",
    description: "Social and has ability to have big feelings. Scary!",
    date: "03/10/2024",
  },
]

export default {
  setup () {
    return {
      columns,
      rows
    }
  }
}
</script>

<template>
  <q-table
      flat bordered
      :rows="rows"
      :columns="columns"
      row-key="name"
  >

    <template v-slot:header="props">
      <q-tr :props="props">
        <q-th auto-width />
        <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
        >
          {{ col.label }}
        </q-th>
      </q-tr>
    </template>

    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td auto-width>
          <q-btn size="xs" color="accent" round dense @click="props.expand = !props.expand" :icon="props.expand ? 'remove' : 'add'" />
        </q-td>
        <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
        >
          {{ col.value }}
          <!-- added to edit the row's content -->
          <q-popup-edit v-model="col.value" v-slot="scope">
            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" />
          </q-popup-edit>
        </q-td>
      </q-tr>
      <q-tr v-show="props.expand" :props="props">
        <q-td colspan="100%">
          <div class="text-left">This is expand slot for row above: {{ props.row.name }}.</div>
        </q-td>
      </q-tr>
    </template>

  </q-table>


</template>

<style lang="scss" scoped>
#description{
}
</style>