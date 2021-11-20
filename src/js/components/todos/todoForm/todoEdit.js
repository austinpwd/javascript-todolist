import makeElement from "../../../utils/makeElement";

const todoEdit = function ({id, category, title, isComplete, startDate, startTime, endDate, endTime}) {
    return makeElement(`
    <form  id="editForm" class="form">
        <div class="flex-container uneven">
            <div>
                <label for="todoID">ID</label>
                <input type="text" id="todoID" name="todoID" readonly value=${id} required>
            </div>
            <div>
                <label for="Category">Category</label>
                <select name="Category" id="category" required>
                    <option value="">Select Category</option>
                    <option value="work">Work</option>
                    <option value="school">School</option>
                    <option value="friends">Friends</option>
                    <option value="family">Family</option>
                    <option value="health">Health</option>
                </select>
            </div>
            <div>
                <label for="Status">Complete</label>
                <input type="checkbox" id="Status" name="Status" value="${isComplete}">
            </div>
        </div>
        
        <div class="flex-container large">
            <div>
                <label for="Description">Task Description</label>
                <input type="text" id="Description" name="Description" value="${title}" required>
            </div>
            
        </div>

        <div class="flex-container">
            <div>
                <label for="StartDate">Start Date</label>
                <input type="date" id="StartDate" name="StartDate" value=${startDate} required>
            </div>
            <div>
                <label for="StartTime">Start Time</label>
                <input type="time" id="StartTime" name="StartTime" value=${startTime} required>
            </div>
        </div>

        <div class="flex-container">
            <div>
                <label for="EndDate">End Date</label>
                <input type="date" id="EndDate" name="EndDate" value=${endDate} required>
            </div>
            <div>
                <label for="EndTime">End Time</label>
                <input type="time" id="EndTime" name="EndTime" value=${endTime} required>
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