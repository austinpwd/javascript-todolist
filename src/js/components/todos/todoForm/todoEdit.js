import makeElement from "../../../utils/makeElement";

const todoEdit = function ({
  id,
  title,
  isComplete,
  startDate,
  startTime,
  endDate,
  endTime,
}) {
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
                  <option value="Social">Social</option>
                  <option value="Work">Work</option>
                  <option value="School">School</option>
                  <option value="Health">Health</option>
                  <option value="Philosophy">Philosophy</option>
              </select>
              </div>
              <div>
              <label class="container__title" for="Complete">Completed:</label>
              <input type="checkbox" id="complete" name="complete" value="${isComplete}">
              </div>
            </div>

            <div class="form-container">
              <div>
              <label class="container__title" for="Title">Title:</label>
              <input type="text" id="title" name="title" value="${title}" required>
          </div>
            </div>

            <div class="form-container-two">
            <div>
            <label class="container__title" for="StartDate">Start Date:</label>
            <input type="date" id="startdate" name="startdate" value=${startDate} required>
        </div>
        <div>
            <label class="container__title" for="StartTime">Start Time:</label>
            <input type="time" id="starttime" name="starttime" value=${startTime} required>
        </div>
        </div>
        <div class="form-container-three">
        <div>
            <label class="container__title" for="EndDate">End Date:</label>
            <input type="date" id="enddate" name="enddate" value=${endDate} required>
        </div>
        <div>
            <label class="container__title" for="EndTime">End Time:</label>
            <input type="time" id="endtime" name="endtime" value=${endTime} required>
        </div>
            </div>
        </form>
    `);
};

export default todoEdit;
