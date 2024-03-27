<script setup>

import ViewMeeples from "@/components/accountComponents/ViewMeeples.vue";
import {defineEmits, reactive} from "vue";

//add
const emit = defineEmits([ "create-meeple"])
const meepleState = reactive({
  name: "",
  location: ""
})
const createMeeple = () => {
  emit("create-todo", meepleState.name, meepleState.location)
}

</script>

<template>
  <div class="row">
    <div class="col-12">
      <!-- tabs : add / view meeples -->
      <ul class="nav">
        <div class="col-6">
          <li class="nav-item"><a class="nav-link fs-2 active" href="#add" data-bs-toggle="tab">Add Meeple</a></li>
        </div>
        <div id="viewmeeps" class="col-6">
          <li class="nav-item"><a class="nav-link fs-2" href="#view" data-bs-toggle="tab">View Meeples</a></li>
        </div>
      </ul>

      <p>Select 'Add Meeple' or 'View Meeples'</p>
      <!-- add meeple -->
      <div class="tab-content mx-2">
        <div id="add" class="active tab-pane fade in show mt-4">
          <!-- row 1 : name & location found -->
          <div class="row">
            <!-- name / nickname -->
            <div class="col-sm-12 col-md-6">
              <label for="name"
                     class="form-label">Name or Nickname</label>
              <input type="text" v-model="meepleState.name"
                     class="form-control bg-body-secondary" id="name"
                     placeholder="Enter Name/Nickname"
                     required autofocus>
            </div>

            <!-- location found -->
            <div class="col-sm-12 col-md-6">
              <label for="locationFound"
                     class="form-label">Location Found</label>
              <input type="text" v-model="meepleState.location"
                     class="form-control bg-body-secondary" id="locationFound"
                     placeholder="Enter Location"
                     required autofocus>
            </div>
          </div>
          <!-- row 2 : role & age-->
          <div class="row">
            <!-- role -->
            <div class="col-6 mt-3">
              <label for="role"
                     class="form-label">Role</label>
              <select class="form-control bg-body-secondary"
                      id="name">
                <option value="Choose">Choose...</option>
                <option value="Choose">Chores</option>
                <option value="Communication">Communication</option>
                <option value="Education">Education</option>
                <option value="Emotions">Emotions</option>
                <option value="Home Life">Home Life</option>
                <option value="Socialization">Socialization</option>
                <option value="Work">Work</option>
              </select>
            </div>

            <!-- age -->
            <div class="col-6 mt-3">
              <label for="age"
                     class="form-label">Enter Age</label>
              <input type="number"
                     class="form-control bg-body-secondary" id="age"
                     placeholder="Enter Age"
                     required autofocus>
            </div>

          </div>
          <!-- row 3 : cards of strength/weaknesses-->
          <div class="row mt-4 mx-1">
            <div class="card bg-light">
              <div class="card-header bg-light px-1">
                <!-- tabs : strengths & weaknesses -->
                <ul class="nav nav-tabs card-header-tabs" style="background-color: white">
                  <div class="col-6">
                    <li class="nav-item px-1"><a class="nav-link fs-4 active" style="color: black" href="#strengths" data-bs-toggle="tab">Strengths</a></li>
                  </div>
                  <div class="col-6">
                    <li class="nav-item px-1"><a class="nav-link fs-4" style="color: black" href="#weaknesses" data-bs-toggle="tab">Weaknesses</a></li>
                  </div>
                </ul>
              </div>
              <div class="card-body bg-white">
                <!-- strengths info -->
                <div class="tab-content mx-1">
                  <div id="strengths" class="active tab-pane fade in show mt-1">
                    <div class="row">
                      <div class="col-sm-12 col-md-3">
                        <ul>
                          <input type="checkbox" value="communication" id="communication">
                          <label for="communication" class="form-check-label ps-2">Communication</label>
                        </ul>
                        <ul>
                          <input type="checkbox" value="socialization" id="socialization">
                          <label for="socialization" class="form-check-label ps-2">Socialization</label>
                        </ul>
                        <ul>
                          <input type="checkbox" value="creativity" id="creativity">
                          <label for="creativity" class="form-check-label ps-2">Creativity</label>
                        </ul>
                        <ul>
                          <input type="checkbox" value="organization" id="organization">
                          <label for="organization" class="form-check-label ps-2">Organization</label>
                        </ul>
                        <ul>
                          <input type="checkbox" value="difficultConvo" id="difficultConvo">
                          <label for="difficultConvo" class="form-check-label ps-2">Difficult Conversations</label>
                        </ul>
                      </div>

                      <div class="col-sm-12 col-md-3">
                        <ul>
                          <input type="checkbox" value="cleaning" id="cleaning">
                          <label for="cleaning" class="form-check-label ps-2">Cleaning</label>
                        </ul>
                        <ul>
                          <input type="checkbox" value="journaling" id="journaling">
                          <label for="journaling" class="form-check-label ps-2">Journaling</label>
                        </ul>
                        <ul>
                          <input type="checkbox" value="painting" id="painting">
                          <label for="painting" class="form-check-label ps-2">Painting</label>
                        </ul>
                        <ul>
                          <input type="checkbox" value="school" id="school">
                          <label for="school" class="form-check-label ps-2">School</label>
                        </ul>
                        <ul>
                          <input type="checkbox" value="coding" id="coding">
                          <label for="coding" class="form-check-label ps-2">Coding</label>
                        </ul>
                      </div>

                      <div class="col-sm-12 col-md-3">
                        <ul>
                          <input type="checkbox" value="feelings" id="feelings">
                          <label for="feelings" class="form-check-label ps-2">Big Feelings</label>
                        </ul>
                        <ul>
                          <input type="checkbox" value="speaking" id="speaking">
                          <label for="speaking" class="form-check-label ps-2">Public Speaking</label>
                        </ul>
                        <ul>
                          <input type="checkbox" value="stubborn" id="stubborn">
                          <label for="stubborn" class="form-check-label ps-2">Being Stubborn</label>
                        </ul>
                        <ul>
                          <input type="checkbox" value="cooking" id="cooking">
                          <label for="cooking" class="form-check-label ps-2">Cooking</label>
                        </ul>
                        <ul>
                          <input type="checkbox" value="reflection" id="reflection">
                          <label for="reflection" class="form-check-label ps-2">Self Reflection</label>
                        </ul>
                      </div>

                      <div class="col-sm-12 col-md-3">
                        <ul>
                          <input type="checkbox" value="grounding" id="grounding">
                          <label for="grounding" class="form-check-label ps-2">Grounding</label>
                        </ul>
                        <ul>
                          <input type="checkbox" value="sympathy" id="sympathy">
                          <label for="sympathy" class="form-check-label ps-2">Sympathy</label>
                        </ul>
                        <ul>
                          <input type="checkbox" value="humor" id="humor">
                          <label for="humor" class="form-check-label ps-2">Humor</label>
                        </ul>
                        <ul>
                          <input type="checkbox" value="finances" id="finances">
                          <label for="finances" class="form-check-label ps-2">Finances</label>
                        </ul>
                        <ul>
                          <input type="checkbox" value="recall" id="recall">
                          <label for="recall" class="form-check-label ps-2">Information Recall</label>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- weaknesses info -->
                <div class="tab-content mx-1">
                  <div id="weaknesses" class="tab-pane fade mt-1">
                    <div class="row">
                      <div class="col-sm-12 col-md-3">
                        <ul>
                          <input type="checkbox" value="communication" id="communication">
                          <label for="communication" class="form-check-label ps-2">Communication</label>
                        </ul>
                        <ul>
                          <input type="checkbox" value="socialization" id="socialization">
                          <label for="socialization" class="form-check-label ps-2">Socialization</label>
                        </ul>
                        <ul>
                          <input type="checkbox" value="creativity" id="creativity">
                          <label for="creativity" class="form-check-label ps-2">Creativity</label>
                        </ul>
                        <ul>
                          <input type="checkbox" value="organization" id="organization">
                          <label for="organization" class="form-check-label ps-2">Organization</label>
                        </ul>
                        <ul>
                          <input type="checkbox" value="difficultConvo" id="difficultConvo">
                          <label for="difficultConvo" class="form-check-label ps-2">Difficult Conversations</label>
                        </ul>
                      </div>

                      <div class="col-sm-12 col-md-3">
                        <ul>
                          <input type="checkbox" value="cleaning" id="cleaning">
                          <label for="cleaning" class="form-check-label ps-2">Cleaning</label>
                        </ul>
                        <ul>
                          <input type="checkbox" value="journaling" id="journaling">
                          <label for="journaling" class="form-check-label ps-2">Journaling</label>
                        </ul>
                        <ul>
                          <input type="checkbox" value="painting" id="painting">
                          <label for="painting" class="form-check-label ps-2">Painting</label>
                        </ul>
                        <ul>
                          <input type="checkbox" value="school" id="school">
                          <label for="school" class="form-check-label ps-2">School</label>
                        </ul>
                        <ul>
                          <input type="checkbox" value="coding" id="coding">
                          <label for="coding" class="form-check-label ps-2">Coding</label>
                        </ul>
                      </div>

                      <div class="col-sm-12 col-md-3">
                        <ul>
                          <input type="checkbox" value="feelings" id="feelings">
                          <label for="feelings" class="form-check-label ps-2">Big Feelings</label>
                        </ul>
                        <ul>
                          <input type="checkbox" value="speaking" id="speaking">
                          <label for="speaking" class="form-check-label ps-2">Public Speaking</label>
                        </ul>
                        <ul>
                          <input type="checkbox" value="stubborn" id="stubborn">
                          <label for="stubborn" class="form-check-label ps-2">Being Stubborn</label>
                        </ul>
                        <ul>
                          <input type="checkbox" value="cooking" id="cooking">
                          <label for="cooking" class="form-check-label ps-2">Cooking</label>
                        </ul>
                        <ul>
                          <input type="checkbox" value="reflection" id="reflection">
                          <label for="reflection" class="form-check-label ps-2">Self Reflection</label>
                        </ul>
                      </div>

                      <div class="col-sm-12 col-md-3">
                        <ul>
                          <input type="checkbox" value="grounding" id="grounding">
                          <label for="grounding" class="form-check-label ps-2">Grounding</label>
                        </ul>
                        <ul>
                          <input type="checkbox" value="sympathy" id="sympathy">
                          <label for="sympathy" class="form-check-label ps-2">Sympathy</label>
                        </ul>
                        <ul>
                          <input type="checkbox" value="humor" id="humor">
                          <label for="humor" class="form-check-label ps-2">Humor</label>
                        </ul>
                        <ul>
                          <input type="checkbox" value="finances" id="finances">
                          <label for="finances" class="form-check-label ps-2">Finances</label>
                        </ul>
                        <ul>
                          <input type="checkbox" value="recall" id="recall">
                          <label for="recall" class="form-check-label ps-2">Information Recall</label>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
          <!-- row 4 : description -->
          <div class="row">
            <div class="form my-4">
              <label for="description"
                     class="form-label">Descriptoin of Help</label>
              <textarea class="form-control" placeholder="Enter description of help here..." id="description"></textarea>
            </div>
          </div>
          <!-- row 5 : cancel/add btn -->
          <div class="row mt-3">
            <!-- cancel meeple -->
            <div class="col-6">
              <a href="/account" class="btn btn-secondary w-100" type="button">
                Cancel Meeple Creation
              </a>
            </div>
            <!-- add meeple -->
            <div class="col-6">
              <a href="#" class="btn btn-success w-100" type="button" @click="createMeeple()">
                Add Meeple
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- view meeples -->
    <div class="tab-content mx-2">
      <div id="view" class="tab-pane fade mt-2">


        <div class="row">
          <!-- filter search -->
          <div class="col-sm-12 col-md-3">
            <div class="dropdown">
              <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Filtered Search
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Name</a></li>
                <li><a class="dropdown-item" href="#">Role</a></li>
                <li><a class="dropdown-item" href="#">Location Found</a></li>
                <li><a class="dropdown-item" href="#">Date Added</a></li>
                <li><a class="dropdown-item" href="#">Helpfulness</a></li>
              </ul>
            </div>
          </div>
          <div class="col-sm-0 col-md-6"></div>
          <!-- search -->
          <div class="col-sm-12 col-md-3">
            <input type="text"
                   class="form-control bg-body-secondary" id="searchMeeples"
                   placeholder="Search Meeples">
          </div>
          <hr class="my-2">
        </div>

        <!-- example entries -->
        <table class="table ms-2">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Meeple Name</th>
            <th scope="col">Role</th>
            <th scope="col">Location Found</th>
            <th scope="col">Date Added</th>
            <th scope="col">Helpfulness</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Zero</td>
            <td>Education</td>
            <td>School</td>
            <td>02/18/2024</td>
            <td>5/5 stars</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>June</td>
            <td>Emotion</td>
            <td>Home</td>
            <td>03/12/2021</td>
            <td>2.5/5 stars</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Jenny</td>
            <td>Social</td>
            <td>Work</td>
            <td>02/09/2023</td>
            <td>4/5 stars</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>{{ meepleState.name }}</td>
            <td>Home Life</td>
            <td>{{ meepleState.location }}</td>
            <td>03/04/2024</td>
            <td>no ratings</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>


</template>

<style lang="scss" scoped>
.nav{
  background-color: #02446c;
  text-decoration: none;
  .nav-link{
    color: white;
  }
}


</style>