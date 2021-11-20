import makeElement from "../../../utils/makeElement";

const todoEdit = function ({id, title, isComplete, startDate, startTime, endDate, endTime}) {
    return makeElement(`
    <form  id="editForm" class="form">
        <div class="flex-container uneven">
            <div>
                <label for="id">ID</label>
                <input type="text" id="id" name="id" readonly value=${id} required>
            </div>
            <div>
                <label for="Category">Category</label>
                <select name="category" id="category" required>
                    <option value="">Select A Category</option>
                    <option value="Social">Social</option>
                    <option value="Work">Work</option>
                    <option value="School">School</option>
                    <option value="Health">Health</option>
                    <option value="Philosophy">Philosophy</option>
                </select>
            </div>
            <div>
                <label for="Complete">Complete</label>
                <input type="checkbox" id="complete" name="complete" value="${isComplete}">
            </div>
        </div>
        
        <div class="flex-container large">
            <div>
                <label for="Title">To Do Title</label>
                <input type="text" id="title" name="title" value="${title}" required>
            </div>
            
        </div>

        <div class="flex-container">
            <div>
                <label for="StartDate">Start Date</label>
                <input type="date" id="startdate" name="startdate" value=${startDate} required>
            </div>
            <div>
                <label for="StartTime">Start Time</label>
                <input type="time" id="starttime" name="starttime" value=${startTime} required>
            </div>
        </div>

        <div class="flex-container">
            <div>
                <label for="EndDate">End Date</label>
                <input type="date" id="enddate" name="enddate" value=${endDate} required>
            </div>
            <div>
                <label for="EndTime">End Time</label>
                <input type="time" id="endtime" name="endtime" value=${endTime} required>
            </div>
        </div>

        <div>
            <p class="error"></p>
        </div>
    </form>
    `
    )
}

export default todoEdit;