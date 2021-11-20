import makeElement from "../../../utils/makeElement";
import {v4} from "uuid";


const newId = v4().substr(0,8);


const todoAdd = function() {
        return makeElement(`
        <form class="form" id="add-form>
            <div class="flex-container uneven">
                <div>
                    <label for="id">ID</label>
                    <input id="id" name="id" value=${newId} type="text" readonly required>
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
                    <label for="complete">Completed</label>
                    <input type="checkbox" id="complete" name="complete">
                </div>
            </div>
            
            <div class="flex-container large">
                <div>
                    <label for="Title">To Do Title</label>
                    <input type="text" id="title" name="title" placeholder="Enter a Title for your To Do"  required>
                </div>
                
            </div>
    
            <div class="flex-container">
                <div>
                    <label for="StartDate">Start Date</label>
                    <input type="date" id="startdate" name="startdate" placeholder="Start Date" required>
                </div>
                <div>
                    <label for="StartTime">Start Time</label>
                    <input type="time" id="starttime" name="starttime" placeholder="Start Time" required>
                </div>
            </div>
    
            <div class="flex-container">
                <div>
                    <label for="EndDate">End Date</label>
                    <input type="date" id="enddate" name="enddate" placeholder="End Date" required>
                </div>
                <div>
                    <label for="EndTime">End Time</label>
                    <input type="time" id="endtime" name="endtime" placeholder="End Time" required>
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