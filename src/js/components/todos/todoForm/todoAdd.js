import makeElement from "../../../utils/makeElement";
import {v4} from "uuid";


const id = v4().substr(0,8);


const todoAdd = function() {
        return makeElement(`
        <form action="submit" method="GET">
    <div class="container__todo">
              <div>
              <label class="container__title">ID: <span id="id">${id}</span></label>
              </div>
              <div class="form-container">
              <div>
              <label class="container__title" for="Category">Category:</label>
              <select name="category" id="category" required>
                  <option value="">Select...</option>
                  <option value="Social">Social</option>
                  <option value="Work">Work</option>
                  <option value="School">School</option>
                  <option value="Health">Health</option>
                  <option value="Philosophy">Philosophy</option>
              </select>
              </div>
              <div>
              <label class="container__title" for="Complete">Completed:</label>
              <input type="checkbox" id="complete" name="complete">
              </div>
            </div>

            <div class="form-container">
              <div>
              <label class="container__title" for="Title">Title:</label>
              <input type="text" id="title" name="title" required>
          </div>
            </div>

            <div class="form-container-two">
            <div>
            <label class="container__title" for="StartDate">Start Date:</label>
            <input type="date" id="startdate" name="startdate"  required>
        </div>
        <div>
            <label class="container__title" for="StartTime">Start Time:</label>
            <input type="time" id="starttime" name="starttime" required>
        </div>
        </div>
        <div class="form-container-three">
        <div>
            <label class="container__title" for="EndDate">End Date:</label>
            <input type="date" id="enddate" name="enddate" required>
        </div>
        <div>
            <label class="container__title" for="EndTime">End Time:</label>
            <input type="time" id="endtime" name="endtime" required>
        </div>
            </div>
        </form>
        `
        )

}

export default todoAdd;