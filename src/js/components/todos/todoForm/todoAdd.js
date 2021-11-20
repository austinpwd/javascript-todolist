import makeElement from "../../../utils/makeElement";
import {v4} from "uuid";


const newId = v4().substr(0,8);


const todoAdd = function() {
        return makeElement(`
        <form class="form" id="add-form>
            <div class="flex-container uneven">
                <div>
                    <label for="todoId">ID</label>
                    <input id="todoId" name="todoId" value=${newId} type="text" readonly required>
                </div>
                <div>
                    <label for="category">Category</label>
                    <select name="category" id="category" required>
                        <option value="">Select Category</option>
                        <option value="work">Work</option>
                        <option value="school">School</option>
                        <option value="friends">Friends</option>
                        <option value="family">Family</option>
                        <option value="health">Health</option>
                    </select>
                </div>
                <div>
                    <label for="Status">Completed</label>
                    <input type="checkbox" id="Status" name="Status">
                </div>
            </div>
            
            <div class="flex-container large">
                <div>
                    <label for="Title">To Do Title</label>
                    <input type="text" id="Title" name="Title" placeholder="Enter a Title for your To Do"  required>
                </div>
                
            </div>
    
            <div class="flex-container">
                <div>
                    <label for="StartDate">Start Date</label>
                    <input type="date" id="StartDate" name="StartDate" placeholder="Start Date" required>
                </div>
                <div>
                    <label for="StartTime">Start Time</label>
                    <input type="time" id="StartTime" name="StartTime" placeholder="Start Time" required>
                </div>
            </div>
    
            <div class="flex-container">
                <div>
                    <label for="EndDate">End Date</label>
                    <input type="date" id="EndDate" name="EndDate" placeholder="End Date" required>
                </div>
                <div>
                    <label for="EndTime">End Time</label>
                    <input type="time" id="EndTime" name="EndTime" placeholder="End Time" required>
                </div>
            </div>

            <div>
                <p class="error"></p>
            </div>
        </form>
        `
        )

}

export default todoAdd;