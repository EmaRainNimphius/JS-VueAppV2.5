<script setup>
import JournalTable from "@/components/accountComponents/JournalTable.vue";
import MeepleTable from "@/components/accountComponents/MeepleTable.vue";
import MeepleTableContent from "@/components/accountComponents/MeepleTableContent.vue";
</script>

<template>
  <!-- tabs and their info -->
  <div class="container mb-5">
    <div class="row">

      <div class="col-12">

        <div class="row" id="break"></div>
          <!-- tabs : meeples / journal -->
          <ul class="nav nav-tabs mt-5">
            <div class="col-6">
              <li class="nav-item"><a class="nav-link fs-2 active" href="#meeple" data-bs-toggle="tab">Meeples</a></li>
            </div>
            <div class="col-6">
              <li class="nav-item"><a class="nav-link fs-2" href="#journal" data-bs-toggle="tab">Journal</a></li>
            </div>
          </ul>

          <!-- meeples tab content-->
          <div class="tab-content">
            <div id="meeple" class="active tab-pane fade in show">
              <!-- meeple table info -->

<!--              <MeepleTableContent/>-->


              <MeepleTable/>
            </div>
          </div>
        </div>

        <!-- journal tab content -->
        <div class="tab-content">
          <div id="journal" class="tab-pane fade">
            <!-- journal table info -->
            <JournalTable/>
          </div>
        </div>

      </div>
    </div>

</template>

<style lang="sass" scoped>

.nav-link
  color: black
.nav-tabs .nav-link.active
  background-color: #023859
  color: #d2edfe

.nav-tabs .nav-link
  border-color: #02446c

</style>